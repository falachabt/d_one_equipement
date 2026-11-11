import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Location d'engins lourds à Kribi",
  description:
    "Location d'engins à Kribi : chargeuse 5 t et pelle 21,9 t pour le port en eau profonde, les plateformes industrielles et la logistique. Devis rapide via WhatsApp.",
  path: "/location-engins-kribi",
  keywords: [
    "location engins Kribi",
    "location chargeuse Kribi",
    "location pelle Kribi",
    "engins port Kribi",
    "location matériel BTP Kribi",
  ],
});

const besoins = [
  {
    title: "Port en eau profonde",
    description:
      "Manutention vrac, aménagement des aires de stockage et appui aux opérateurs du terminal : des engins disponibles à proximité immédiate du complexe portuaire.",
  },
  {
    title: "Plateformes industrielles",
    description:
      "Terrassement, nivellement et préparation des parcelles de la zone industrielle : la pelle et la chargeuse ouvrent et entretiennent vos plateformes.",
  },
  {
    title: "Logistique et dépôts",
    description:
      "Chargement et déchargement de camions, gestion des stocks de matériaux et de marchandises sur les dépôts qui se multiplient le long des axes de Kribi.",
  },
  {
    title: "Chantiers et infrastructures",
    description:
      "Voirie, réseaux, bâtiments : la croissance de Kribi entretient une demande continue en engins de terrassement, en location courte comme longue durée.",
  },
];

const inclus = [
  "Chargeuse Shantui L55-C5 5 t et pelle SANY SY215C 21,9 t",
  "Avec chauffeur qualifié ou en location sèche",
  "Mobilisation sur Kribi et le département de l'Océan",
  "Suivi technique pendant toute la période de location",
  "Devis détaillé sous 24 h, transport inclus",
];

export default function LocationEnginsKribiPage() {
  return (
    <>
      <PageHero
        eyebrow="Kribi"
        title="Location d'engins lourds à Kribi."
        description="Chargeuse et pelle pour le port en eau profonde, les plateformes industrielles et la logistique de Kribi."
        image="/media/shantui-case-2.jpg"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimateIn>
              <p className="eyebrow">Vos besoins à Kribi</p>
              <h2 className="mt-4 section-title">
                Kribi grandit. Vos engins doivent suivre.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                Avec son port en eau profonde et ses extensions industrielles, Kribi est
                devenue l'un des pôles de croissance du Cameroun. Plateformes
                logistiques, dépôts, chantiers d'infrastructure : les besoins en engins
                de chargement et de terrassement y sont permanents, mais l'offre locale
                reste limitée. D-ONE EQUIPMENT mobilise sa flotte sur Kribi depuis
                Douala, avec le transport intégré au devis.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Notre formule associe la chargeuse de 5 tonnes pour la manutention et le
                chargement, et la pelle de 21,9 tonnes pour le terrassement et la
                préparation des plateformes : le duo qui couvre l'essentiel des travaux
                d'un site portuaire ou industriel.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1} direction="left">
              <div className="border border-[var(--line)] bg-[var(--background)] p-7">
                <p className="eyebrow">Ce qui est inclus</p>
                <ul className="mt-5 space-y-3">
                  {inclus.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[var(--forest)]" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact#devis" className="btn-primary">
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Link>
                  {company.whatsappUrl && (
                    <Link href={company.whatsappUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                      WhatsApp direct
                    </Link>
                  )}
                </div>
              </div>
            </AnimateIn>
          </div>

          <StaggerChildren className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.07}>
            {besoins.map((besoin) => (
              <StaggerItem key={besoin.title}>
                <div className="border border-[var(--line)] p-6 bg-[var(--background)] h-full hover:border-[var(--gold)] transition-colors">
                  <h3 className="font-display text-base font-bold uppercase tracking-[0.06em]">
                    {besoin.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    {besoin.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-alt section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <AnimateIn delay={0.1}>
              <p className="eyebrow">Les machines</p>
              <h2 className="mt-4 section-title">Le duo chargeuse + pelle, mobilisé à Kribi.</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                La Shantui L55-C5 charge les camions et entretient les stocks avec son
                godet de 3 m³ ; la SANY SY215C ouvre les plateformes, creuse les
                tranchées et prépare les terrains. Louées ensemble ou séparément, avec
                ou sans chauffeur, selon la phase de votre projet.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/flotte/shantui-l55-c5" className="btn-secondary">
                  La chargeuse 5 t <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/flotte/sany-sy215c" className="btn-secondary">
                  La pelle 21,9 t <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/media/shantui-case-2.jpg"
                  alt="Chargeuse en location pour les plateformes industrielles de Kribi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section-dark section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <p className="eyebrow text-[var(--gold)]">Un projet à Kribi ?</p>
            <h2 className="mt-4 section-title text-white">
              Réservez vos engins avant le démarrage du site.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              La mobilisation vers Kribi se planifie : contactez-nous dès la préparation
              de votre chantier pour garantir la disponibilité des machines à vos dates.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              {company.whatsappUrl && (
                <Link
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary border-t-[#ffffff] border-r-[#ffffff] border-b-[#ffffff] border-l-[#ffffff] text-[#ffffff]"
                >
                  Discuter sur WhatsApp
                </Link>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
