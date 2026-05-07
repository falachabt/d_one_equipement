import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getPostHogClient } from "@/lib/posthog-server";

type QuotePayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  email?: string;
  equipmentType?: string;
  rentalDuration?: string;
  siteLocation?: string;
  message?: string;
};

function isEmpty(value?: string) {
  return !value || value.trim().length === 0;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatField(label: string, value?: string): string {
  const safe = value ? escapeHtml(value) : "—";
  return `<tr><td style="padding:6px 12px;font-weight:600;background:#f5f5f5;border:1px solid #ddd;white-space:nowrap">${label}</td><td style="padding:6px 12px;border:1px solid #ddd">${safe}</td></tr>`;
}

export async function POST(request: Request) {
  const body = (await request.json()) as QuotePayload;
  const distinctId =
    request.headers.get("X-POSTHOG-DISTINCT-ID") ?? body.email ?? "anonymous";
  const sessionId = request.headers.get("X-POSTHOG-SESSION-ID") ?? undefined;

  if (
    isEmpty(body.firstName) ||
    isEmpty(body.lastName) ||
    isEmpty(body.phone) ||
    isEmpty(body.email) ||
    isEmpty(body.equipmentType) ||
    isEmpty(body.siteLocation)
  ) {
    return NextResponse.json(
      {
        message:
          "Merci de renseigner au minimum votre nom, prenom, telephone, email, type d'engin et localisation du chantier.",
      },
      { status: 400 }
    );
  }

  const posthog = getPostHogClient();
  posthog.capture({
    distinctId,
    event: "quote_received",
    properties: {
      equipment_type: body.equipmentType,
      rental_duration: body.rentalDuration,
      site_location: body.siteLocation,
      has_company: !isEmpty(body.company),
      has_message: !isEmpty(body.message),
      ...(sessionId ? { $session_id: sessionId } : {}),
    },
  });

  const receivedAt = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!resendApiKey) {
    console.error(
      "[D-ONE EQUIPMENT] RESEND_API_KEY is not configured. " +
        "Create a free account at https://resend.com, generate an API key, " +
        "and add it as RESEND_API_KEY in the Replit Secrets tab."
    );
    console.info("[D-ONE EQUIPMENT] Lead received (email not sent):", {
      ...body,
      receivedAt,
    });
    return NextResponse.json({
      message:
        "Votre demande a bien ete transmise. L'equipe D-ONE EQUIPMENT vous recontacte rapidement.",
    });
  }

  if (!notificationEmail) {
    console.error(
      "[D-ONE EQUIPMENT] NOTIFICATION_EMAIL is not configured. " +
        "Set the destination email address as NOTIFICATION_EMAIL in the Replit Secrets tab."
    );
    console.info("[D-ONE EQUIPMENT] Lead received (email not sent):", {
      ...body,
      receivedAt,
    });
    return NextResponse.json({
      message:
        "Votre demande a bien ete transmise. L'equipe D-ONE EQUIPMENT vous recontacte rapidement.",
    });
  }

  const resend = new Resend(resendApiKey);

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#222">
      <h2 style="background:#1a1a1a;color:#fff;padding:16px 20px;margin:0">
        Nouvelle demande de devis — D-ONE EQUIPMENT
      </h2>
      <p style="padding:12px 20px 0;margin:0;color:#555;font-size:13px">Reçue le ${receivedAt}</p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">
        ${formatField("Prénom", body.firstName)}
        ${formatField("Nom", body.lastName)}
        ${formatField("Société", body.company)}
        ${formatField("Téléphone", body.phone)}
        ${formatField("Email", body.email)}
        ${formatField("Type d'engin", body.equipmentType)}
        ${formatField("Durée de location", body.rentalDuration)}
        ${formatField("Localisation du chantier", body.siteLocation)}
        ${formatField("Message", body.message)}
      </table>
      <p style="padding:0 0 16px;color:#888;font-size:12px;text-align:center">
        Demande soumise via le formulaire de contact D-ONE EQUIPMENT
      </p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: "D-ONE EQUIPMENT <devis@donequipment.com>",
    to: notificationEmail,
    replyTo: body.email,
    subject: `Nouvelle demande de devis — ${body.firstName} ${body.lastName}`,
    html: htmlBody,
  });

  if (error) {
    console.error("[D-ONE EQUIPMENT] Resend error:", error);
    return NextResponse.json(
      {
        message:
          "La demande a ete validee mais la notification email n'a pas pu etre envoyee. Veuillez reessayer ou contacter directement l'equipe.",
      },
      { status: 502 }
    );
  }

  posthog.capture({
    distinctId,
    event: "quote_email_sent",
    properties: {
      equipment_type: body.equipmentType,
      site_location: body.siteLocation,
      ...(sessionId ? { $session_id: sessionId } : {}),
    },
  });

  console.info("[D-ONE EQUIPMENT] Quote email sent successfully for:", {
    name: `${body.firstName} ${body.lastName}`,
    email: body.email,
    receivedAt,
  });

  return NextResponse.json({
    message:
      "Votre demande a bien ete transmise. L'equipe D-ONE EQUIPMENT vous recontacte rapidement.",
  });
}
