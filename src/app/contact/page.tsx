import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import { QuoteForm } from "@/components/quote-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact et devis",
  description:
    "Contactez D-ONE EQUIPMENT pour une demande de devis, un renseignement sur la flotte ou une intervention terrain. Disponible par WhatsApp, telephone ou formulaire.",
  path: "/contact",
  image: "/media/shantui-case-2.jpg",
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
    actionLabel: "Appeler",
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    actionLabel: "Écrire",
  },
  {
    icon: MapPin,
    label: "Zones d'intervention",
    value: company.areas.join(" · "),
    href: "#carte",
    actionLabel: "Voir la carte",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact commercial et demande de devis."
        description="Retrouvez ici les coordonnées de D-ONE EQUIPMENT, le formulaire de devis et les principales zones d'intervention."
        image="/media/shantui-case-2.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8" id="devis">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <AnimateIn>
              <SectionHeading
                eyebrow="Coordonnées"
                title="Coordonnées et zones d'intervention."
                copy="Appelez, écrivez ou envoyez votre besoin via le formulaire de devis."
              />
            </AnimateIn>

            {/* Contact cards */}
            <StaggerChildren className="overflow-hidden border border-[var(--line)] bg-white" staggerDelay={0.08}>
              {contactItems.map(({ icon: Icon, label, value, href, actionLabel }) => (
                <StaggerItem key={label}>
                  <div className="border-b border-[var(--line)] px-5 py-5 last:border-b-0">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--line)] bg-[var(--surface)]">
                        <Icon className="h-4 w-4 text-[var(--forest)]" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="data-label">{label}</p>
                        <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                          {value}
                        </p>
                        <Link
                          href={href}
                          className="mt-2 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--forest)] transition hover:text-[var(--forest-deep)]"
                        >
                          {actionLabel} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* WhatsApp CTA */}
            {company.whatsappUrl ? (
              <AnimateIn delay={0.15}>
                <Link
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-[#25D366]/30 bg-[#f0fdf4] p-5 transition hover:bg-[#dcfce7]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#25D366]">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#15803d]">Contacter via WhatsApp</p>
                    <p className="mt-0.5 text-xs text-[#166534]">
                      Message pré-rempli · Réponse rapide
                    </p>
                  </div>
                  <span className="ml-auto text-[#15803d]">→</span>
                </Link>
              </AnimateIn>
            ) : null}
          </div>

          <AnimateIn delay={0.1} direction="left">
            <QuoteForm />
          </AnimateIn>
        </div>

        {/* Map */}
        <div id="carte">
        <AnimateIn delay={0.1} className="mt-12">
          <SectionHeading
            eyebrow="Carte"
            title="Douala, Yaounde, Kribi et couverture nationale."
            copy="Les zones prioritaires sont Douala, Yaounde et Kribi, avec possibilité d'intervention partout au Cameroun selon le besoin."
          />

          <div className="mt-8 overflow-hidden border border-[var(--line)] bg-white">
            <iframe
              title="Carte des zones d'intervention D-ONE EQUIPMENT"
              src="https://www.google.com/maps?q=Cameroon&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimateIn>
        </div>
      </section>
    </>
  );
}
