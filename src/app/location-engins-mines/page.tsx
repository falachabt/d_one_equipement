import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Location de matériel minier et d'engins de carrières au Cameroun",
  description:
    "Location d'engins pour mines et carrières au Cameroun : chargeuses 5 t et pelles 21,9 t pour l'extraction, le chargement de minerai et les granulats. Zones minières de l'Est, du Sud et de l'Adamaoua.",
  path: "/location-engins-mines",
  keywords: [
    "location matériel minier Cameroun",
    "location engins mines Cameroun",
    "location engins carrières Cameroun",
    "chargeuse carrière Cameroun",
    "pelle extraction minière Cameroun",
  ],
});

const usages = [
  {
    title: "Carrières de granulats",
    description:
      "Chargement de camions au front de taille, reprise de stocks, alimentation des concasseurs : la chargeuse de 5 t tient les cadences des carrières de latérite, de pouzzolane et de roche massive.",
  },
  {
    title: "Extraction et terrassement minier",
    description:
      "Découverture, ouverture de bancs, terrassement de plateformes et de pistes d'accès : la pelle de 21,9 t prépare et exploite les sites, des travaux préparatoires à l'extraction.",
  },
  {
    title: "Chargement de minerai",
    description:
      "Bauxite, fer, or, rutile : chargement des bennes et manutention des stocks sur les plateformes de stockage et les bases vie des sites miniers.",
  },
  {
    title: "Plateformes et bases logistiques",
    description:
      "Aménagement et entretien des plateformes, des aires de stockage et des voies internes des sites, en appui des exploitants et de leurs sous-traitants.",
  },
];

const zones = [
  {
    title: "Est : or et diamant",
    description:
      "Batouri, Yokadouma, Garoua Boulai : l'orpaillage industriel et semi-mécanisé fait de la région un bassin durable de demande en engins d'extraction et de chargement.",
  },
  {
    title: "Sud : fer et corridor de Kribi",
    description:
      "Les projets de fer du Sud et leur corridor logistique vers le port de Kribi génèrent des besoins en terrassement, en pistes et en plateformes.",
  },
  {
    title: "Adamaoua : bauxite",
    description:
      "Le gisement de Minim-Martap et les projets associés mobilisent des engins lourds pour les travaux préparatoires et l'exploitation.",
  },
  {
    title: "Axes carrières du Littoral et du Centre",
    description:
      "Les carrières qui alimentent Douala et Yaoundé en granulats fonctionnent en continu : c'est le marché le plus régulier pour la location longue durée.",
  },
];

const inclus = [
  "Chargeuse Shantui L55-C5 5 t et pelle SANY SY215C 21,9 t",
  "Chauffeurs qualifiés, habitués aux environnements exigeants",
  "Mobilisation sur sites éloignés, planifiée avec votre équipe",
  "Suivi technique et maintenance pendant toute la mission",
  "Formules longue durée adaptées aux campagnes d'exploitation",
];

export default function LocationEnginsMinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mines & Carrières"
        title="Location d'engins pour mines et carrières."
        description="Chargeuses et pelles pour l'extraction, le chargement de minerai et les granulats, partout au Cameroun."
        image="/media/shantui-gallery-1.jpg"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimateIn>
              <p className="eyebrow">L'offre mines & carrières</p>
              <h2 className="mt-4 section-title">
                Des engins qui tiennent le rythme de l'exploitation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                Sur un site minier ou une carrière, un engin arrêté coûte plus cher que
                sa location : ce sont des tonnes non chargées et des camions qui
                attendent. D-ONE EQUIPMENT propose aux exploitants, carriers et
                sous-traitants des machines entretenues, conduites par des opérateurs
                habitués aux environnements sévères, avec un suivi technique pendant
                toute la durée de la mission.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Notre flotte actuelle couvre le cœur des besoins d'un site : une
                chargeuse de 5 tonnes pour le chargement et la manutention, une pelle de
                21,9 tonnes pour l'extraction et le terrassement. Les missions sont
                étudiées au cas par cas, y compris sur les zones minières éloignées.
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

          <AnimateIn className="mt-16">
            <p className="eyebrow">Applications</p>
            <h2 className="mt-4 section-title max-w-xl">
              Extraction, chargement, plateformes.
            </h2>
          </AnimateIn>

          <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.07}>
            {usages.map((usage) => (
              <StaggerItem key={usage.title}>
                <div className="border border-[var(--line)] p-6 bg-[var(--background)] h-full hover:border-[var(--gold)] transition-colors">
                  <h3 className="font-display text-base font-bold uppercase tracking-[0.06em]">
                    {usage.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    {usage.description}
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
                  src="/media/shantui-gallery-1.jpg"
                  alt="Chargeuse en exploitation sur une carrière au Cameroun"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="left">
              <p className="eyebrow">Zones minières desservies</p>
              <h2 className="mt-4 section-title">Là où le Cameroun extrait.</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Nous étudions les mobilisations sur l'ensemble des bassins miniers du
                pays, en coordination avec vos équipes terrain et vos contraintes
                d'accès saisonnières.
              </p>
            </AnimateIn>
          </div>

          <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-2" staggerDelay={0.07}>
            {zones.map((zone) => (
              <StaggerItem key={zone.title}>
                <div className="border border-[var(--line)] p-6 bg-[var(--background)] h-full hover:border-[var(--gold)] transition-colors">
                  <h3 className="font-display text-base font-bold uppercase tracking-[0.06em]">
                    {zone.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    {zone.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <AnimateIn delay={0.15} className="mt-12 flex flex-wrap gap-4">
            <Link href="/flotte/shantui-l55-c5" className="btn-secondary">
              La chargeuse 5 t <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/flotte/sany-sy215c" className="btn-secondary">
              La pelle 21,9 t <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      <section className="section-dark section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <p className="eyebrow text-[var(--gold)]">Un site à équiper ?</p>
            <h2 className="mt-4 section-title text-white">
              Parlons volumes, durée et accès au site.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Chaque mission minière est différente : décrivez-nous le site, les
              matériaux et la campagne visée. Nous répondons sous 24 h avec une
              proposition chiffrée.
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
