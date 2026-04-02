import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import { QuoteForm } from "@/components/quote-form";
import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact et devis",
  description:
    "Contactez D-ONE EQUIPMENT pour un devis rapide. WhatsApp, téléphone ou formulaire. Douala, Yaoundé, Kribi.",
  path: "/contact",
});

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const contactItems = [
  {
    icon: Phone,
    label: "Téléphone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: "Zones d'intervention",
    value: company.areas.join(" · "),
    href: "#carte",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Devis rapide, coordonnées et zones d'intervention."
        image="/media/loader-closeup-dramatic.png"
      />

      <section className="section-spacing" id="devis">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left: contact info */}
            <div className="space-y-8">
              <AnimateIn>
                <div>
                  <p className="eyebrow">Coordonnées</p>
                  <h2 className="mt-4 section-title">Contactez-nous.</h2>
                </div>
              </AnimateIn>

              <StaggerChildren className="space-y-4" staggerDelay={0.08}>
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <StaggerItem key={label}>
                    <Link href={href} className="line-card flex items-center gap-4 hover:border-[var(--forest)] transition group">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--forest-light)] group-hover:bg-[var(--forest)] transition">
                        <Icon className="h-5 w-5 text-[var(--forest)] group-hover:text-white transition" strokeWidth={1.6} />
                      </div>
                      <div>
                        <p className="data-label">{label}</p>
                        <p className="mt-1 text-base font-semibold text-[var(--foreground)]">
                          {value}
                        </p>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              {/* WhatsApp CTA */}
              {company.whatsappUrl && (
                <AnimateIn delay={0.2}>
                  <Link
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#f0fdf4] p-5 transition hover:bg-[#dcfce7] hover:border-[#25D366]/50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#15803d]">
                        Contacter via WhatsApp
                      </p>
                      <p className="mt-0.5 text-xs text-[#166534]">
                        Message pré-rempli · Réponse rapide
                      </p>
                    </div>
                    <span className="ml-auto text-lg text-[#15803d]">→</span>
                  </Link>
                </AnimateIn>
              )}
            </div>

            {/* Right: form */}
            <AnimateIn delay={0.1} direction="left">
              <QuoteForm />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
