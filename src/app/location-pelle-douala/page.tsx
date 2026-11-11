import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Location de pelle excavatrice à Douala",
  description:
    "Location de pelle excavatrice 21,9 t à Douala : port, zones industrielles de Bassa et Yassa, chantiers urbains, curage et VRD. Avec ou sans chauffeur, devis rapide via WhatsApp.",
  path: "/location-pelle-douala",
  keywords: [
    "location pelle Douala",
    "location pelle excavatrice Douala",
    "louer une pelle Douala",
    "location engins Douala",
    "pelle 20 tonnes Douala",
  ],
});

const besoins = [
  {
    title: "Port et zones industrielles",
    description:
      "Bassa, Yassa, Bonabéri : préparation de plateformes, tranchées de réseaux et manutention lourde pour les sites industriels et logistiques de la capitale économique.",
  },
  {
    title: "Chantiers urbains",
    description:
      "Fondations, sous-sols et terrassement d'immeubles à Akwa, Bonanjo, Deïdo ou Bonamoussadi : une pelle de 21,9 t garde la cadence sans bloquer le chantier.",
  },
  {
    title: "Curage et assainissement",
    description:
      "Curage de drains, reprofilage de caniveaux et entretien des ouvrages d'assainissement, un besoin récurrent à Douala en saison des pluies.",
  },
  {
    title: "VRD et voirie",
    description:
      "Ouverture de voies, pose de buses, terrassement de plateformes de lotissement et travaux de voirie dans toute la métropole et sa périphérie.",
  },
];

const inclus = [
  "Pelle SANY SY215C de 21,9 t, godet de 0,93 m³",
  "Avec chauffeur qualifié ou en location sèche",
  "Transport et mise en place sur votre site à Douala",
  "Suivi technique pendant toute la période de location",
  "Devis détaillé sous 24 h, sans engagement",
];

export default function LocationPelleDoualaPage() {
  return (
    <>
      <PageHero
        eyebrow="Douala"
        title="Location de pelle excavatrice à Douala."
        description="Une pelle de 21,9 t prête à travailler sur vos chantiers de Douala : port, zones industrielles, VRD et terrassement urbain."
        image="/media/sany-sy215c-main.jpg"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimateIn>
              <p className="eyebrow">Vos besoins à Douala</p>
              <h2 className="mt-4 section-title">
                La pelle qu'il faut, là où Douala construit.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                Douala concentre l'essentiel de l'activité portuaire et industrielle du
                Cameroun. Entre l'extension des plateformes logistiques, les chantiers
                d'immeubles et l'entretien permanent des drains, la demande en pelles
                excavatrices y est constante. D-ONE EQUIPMENT, basée à Bocom Yassa,
                met sa pelle à disposition des entreprises de BTP, des industriels et
                des collectivités, avec une réactivité de proximité.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Notre base de Yassa nous permet d'intervenir rapidement sur l'ensemble
                de la ville : zone portuaire, Bassa, Bonabéri, Akwa, Deïdo, PK 8 à
                PK 31 et les chantiers de l'axe Douala–Yaoundé.
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
            <AnimateIn>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/media/sany-sy215c-main.jpg"
                  alt="Pelle excavatrice SANY SY215C en location à Douala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="left">
              <p className="eyebrow">La machine</p>
              <h2 className="mt-4 section-title">SANY SY215C : 21,9 tonnes de productivité.</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Pelle moyenne de 118 kW équipée d'un godet de 0,93 m³, la SY215C est le
                format de référence pour le terrassement, les réseaux et la préparation
                de plateformes. Assez puissante pour les gros volumes, assez maniable
                pour les chantiers urbains de Douala.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Excavation et chargement de déblais",
                  "Tranchées de réseaux et pose de canalisations",
                  "Curage, fosses et travaux d'assainissement",
                  "Démolition légère et préparation de plateforme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[var(--forest)]" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/flotte/sany-sy215c"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--gold)] hover:gap-3 transition-all"
              >
                Voir la fiche technique complète <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section-dark section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <p className="eyebrow text-[var(--gold)]">Un chantier à Douala ?</p>
            <h2 className="mt-4 section-title text-white">
              Dites-nous où et quand. La pelle arrive prête à travailler.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Zone, durée, nature des travaux : envoyez les détails par WhatsApp ou via
              le formulaire. Réponse sous 24 h avec un devis clair.
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
