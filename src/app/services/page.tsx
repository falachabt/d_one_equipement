import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Nos services",
  description:
    "Location de chargeuses, pelles, avec chauffeur qualifié et support technique. Partout au Cameroun.",
  path: "/services",
});

const services = [
  {
    image: "/media/shantui-gallery-1.jpg",
    title: "Location de chargeuses",
    summary:
      "Nos chargeuses sont adaptées au chargement, à la manutention de matériaux et aux travaux de terrassement sur tout type de chantier.",
    bullets: [
      "Disponibilité selon votre planning et votre zone",
      "Machines récentes pour une exploitation fiable",
      "Aide au choix de la capacité selon votre chantier",
      "Intervention sur l'ensemble du territoire camerounais",
    ],
    cta: { label: "Voir nos chargeuses", href: "/flotte" },
  },
  {
    image: "/media/sany-sy215c-main.jpg",
    title: "Location de pelles excavatrices",
    summary:
      "Une solution complète pour vos besoins d'excavation, de chargement et de préparation de plateforme sur chantier.",
    bullets: [
      "Configuration adaptée au terrain et au volume de travail",
      "Suivi technique pendant toute la période de location",
      "Interventions ponctuelles ou missions longue durée",
      "Adapté aux chantiers BTP, VRD et travaux publics",
    ],
    cta: { label: "Voir nos pelles", href: "/flotte" },
  },
  {
    image: "/media/shantui-case-1.jpg",
    title: "Avec chauffeur qualifié",
    summary:
      "Nos engins sont proposés avec des opérateurs qualifiés pour démarrer votre chantier immédiatement, sans formation requise.",
    bullets: [
      "Conducteurs habitués aux environnements exigeants",
      "Démarrage chantier plus rapide",
      "Moins d'imprévus à la prise en main",
      "Exploitation mieux maîtrisée dès le premier jour",
    ],
    cta: { label: "Demander un devis", href: "/contact#devis" },
  },
  {
    image: "/media/shantui-case-2.jpg",
    title: "Maintenance et support technique",
    summary:
      "Un suivi technique continu pour maintenir la disponibilité de vos machines pendant toute la durée de la location.",
    bullets: [
      "Contrôle mécanique et suivi terrain",
      "Support opérationnel pendant l'exploitation",
      "Intervention rapide en cas de besoin technique",
      "Machines entretenues pour limiter les temps d'arrêt",
    ],
    cta: { label: "Parler à un expert", href: "/contact#devis" },
  },
];

const sectors = [
  { title: "BTP & Travaux publics", description: "Terrassement, VRD, fondations, voiries." },
  { title: "Industrie & Logistique", description: "Manutention, dépôts, plateformes industrielles." },
  { title: "Port & Zones franches", description: "Kribi, Douala — flux de marchandises lourdes." },
  { title: "Mines & Carrières", description: "Extraction, chargement, exploitation de granulats." },
  { title: "Projets agricoles", description: "Défrichage, préparation de terrain agricole." },
  { title: "Projets institutionnels", description: "Travaux pour collectivités et organismes publics." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ce que nous offrons."
        description="Location d'engins lourds clé en main — avec ou sans chauffeur, partout au Cameroun."
        image="/media/loader-closeup-dramatic.png"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow">Nos prestations</p>
            <h2 className="mt-4 section-title max-w-xl">
              Une offre complète pour vos chantiers.
            </h2>
          </AnimateIn>

          <StaggerChildren className="mt-16 grid gap-10 md:grid-cols-2" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="border border-[var(--line)] bg-[var(--background)] h-full flex flex-col overflow-hidden hover:border-[var(--gold)] transition-colors">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,11,0.5)] to-transparent" />
                  </div>

                  <div className="flex flex-col gap-5 p-7 flex-1">
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-[0.05em]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                        {service.summary}
                      </p>
                    </div>

                    <ul className="space-y-2.5">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[var(--forest)]" strokeWidth={2} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-2">
                      <Link
                        href={service.cta.href}
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--gold)] hover:gap-3 transition-all"
                      >
                        {service.cta.label} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-alt section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow">Secteurs d'intervention</p>
            <h2 className="mt-4 section-title max-w-xl">
              Adaptés à votre secteur d'activité.
            </h2>
          </AnimateIn>

          <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.07}>
            {sectors.map((sector) => (
              <StaggerItem key={sector.title}>
                <div className="border border-[var(--line)] p-6 bg-[var(--background)] hover:border-[var(--gold)] transition-colors">
                  <h3 className="font-display text-base font-bold uppercase tracking-[0.06em]">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-dark section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <p className="eyebrow text-[var(--gold)]">Prêt à démarrer ?</p>
            <h2 className="mt-4 section-title text-white">
              Décrivez votre chantier. On s'occupe du reste.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Durée, zone, type d'engin — envoyez-nous les détails via WhatsApp ou le formulaire. Réponse sous 24h.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/flotte" className="btn-secondary border-t-[#ffffff] border-r-[#ffffff] border-b-[#ffffff] border-l-[#ffffff] text-[#ffffff]">
                Voir nos engins <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
