import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Location de pelle excavatrice à Yaoundé",
  description:
    "Location de pelle excavatrice 21,9 t à Yaoundé : travaux publics, voirie, lotissements et chantiers institutionnels. Avec ou sans chauffeur, devis rapide via WhatsApp.",
  path: "/location-pelle-yaounde",
  keywords: [
    "location pelle Yaoundé",
    "location pelle excavatrice Yaoundé",
    "louer une pelle Yaoundé",
    "location engins Yaoundé",
    "terrassement Yaoundé",
  ],
});

const besoins = [
  {
    title: "Travaux publics et voirie",
    description:
      "Élargissement de voies, entretien des routes urbaines et rurales, terrassement de déviations : la pelle est l'engin central des chantiers publics de la région du Centre.",
  },
  {
    title: "Lotissements et viabilisation",
    description:
      "Ouverture de pistes, pose de réseaux secs et humides, nivellement de parcelles : les aménagements fonciers autour de Yaoundé exigent une pelle disponible et régulière.",
  },
  {
    title: "Chantiers institutionnels",
    description:
      "Administrations, grands équipements et programmes publics : des chantiers cadrés, avec des exigences de délai et de sécurité que nous savons tenir.",
  },
  {
    title: "Bâtiment et fondations",
    description:
      "Fouilles de fondations, sous-sols et terrassement d'immeubles dans les quartiers en expansion : Nkolbisson, Soa, Mbankomo et tout l'axe nord de la capitale.",
  },
];

const inclus = [
  "Pelle SANY SY215C de 21,9 t, godet de 0,93 m³",
  "Chauffeur qualifié disponible, habitué aux chantiers publics",
  "Mobilisation depuis Douala planifiée avec votre calendrier",
  "Suivi technique et maintenance pendant la location",
  "Formules à la journée, à la semaine ou au mois",
];

export default function LocationPelleYaoundePage() {
  return (
    <>
      <PageHero
        eyebrow="Yaoundé"
        title="Location de pelle excavatrice à Yaoundé."
        description="Travaux publics, voirie, lotissements : une pelle de 21,9 t mobilisable dans la capitale et toute la région du Centre."
        image="/media/sany-sy215c-gallery.jpg"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimateIn>
              <p className="eyebrow">Vos besoins à Yaoundé</p>
              <h2 className="mt-4 section-title">
                Une pelle fiable pour les chantiers de la capitale.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                À Yaoundé, la demande en pelles excavatrices vient d'abord des travaux
                publics et de l'aménagement urbain : voirie, assainissement, viabilisation
                de lotissements et chantiers institutionnels. Ces marchés ne pardonnent
                ni les pannes ni les retards de mobilisation. D-ONE EQUIPMENT y répond
                avec une machine entretenue, un chauffeur expérimenté et une
                mobilisation planifiée à l'avance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Nous intervenons à Yaoundé même, dans la région du Centre et sur les
                axes vers Mbalmayo, Obala et Soa. Le convoyage de la machine est intégré
                au devis : un seul interlocuteur, un seul prix, pas de surprise.
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
              <p className="eyebrow">La machine</p>
              <h2 className="mt-4 section-title">SANY SY215C : le format des travaux publics.</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Avec ses 21,9 tonnes et son moteur de 118 kW, la SY215C couvre la
                quasi-totalité des besoins d'une pelle sur chantier public ou privé :
                fouilles profondes, tranchées de réseaux, chargement de camions-bennes.
                Son godet de 0,93 m³ équilibre cadence et précision, y compris en
                milieu urbain contraint.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Fouilles et terrassement en masse",
                  "Tranchées pour réseaux d'eau, d'assainissement et de fibre",
                  "Chargement de camions sur plateforme",
                  "Aménagement de pistes et de voies d'accès",
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
            <AnimateIn>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/media/sany-sy215c-gallery.jpg"
                  alt="Pelle excavatrice SANY SY215C en location à Yaoundé"
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
            <p className="eyebrow text-[var(--gold)]">Un chantier à Yaoundé ou dans le Centre ?</p>
            <h2 className="mt-4 section-title text-white">
              Réservez la pelle avant de lancer vos travaux.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Les délais de mobilisation comptent dans vos plannings : contactez-nous dès
              la phase de préparation pour caler la machine sur vos dates. Réponse sous 24 h.
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
