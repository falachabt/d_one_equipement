import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  const body = (await request.json()) as QuotePayload;

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

  const lead = {
    ...body,
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "La demande a ete validee mais le connecteur CRM ou email n'a pas repondu correctement.",
        },
        { status: 502 }
      );
    }
  } else {
    console.info("D-ONE EQUIPMENT lead received", lead);
  }

  return NextResponse.json({
    message:
      "Votre demande a bien ete transmise. L'equipe D-ONE EQUIPMENT vous recontacte rapidement.",
  });
}
