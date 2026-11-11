import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Location de chargeuse à Douala",
  description:
    "Location de chargeuse 5 tonnes à Douala : chargement de camions, cimenteries, granulats et plateformes logistiques. Shantui L55-C5 récente, avec ou sans chauffeur, devis sous 24 h.",
  path: "/location-chargeuse-douala",
  keywords: [
    "location chargeuse Douala",
    "location chargeuse Cameroun",
    "chargeuse 5 tonnes Douala",
    "location engins Douala",
    "chargement camions Douala",
  ],
});

const usages = [
  {
    title: "Chargement de camions",
    description:
      "Godet de 3 m³ et hauteur de déversement de 3,05 m : la chargeuse remplit les bennes rapidement, en cycles courts, sur vos plateformes de Douala.",
  },
  {
    title: "Cimenteries et matériaux",
    description:
      "Alimentation de trémies, reprise de stocks de sable, gravier et clinker : un usage intensif pour lequel la machine est dimensionnée.",
  },
  {
    title: "Granulats et carrières urbaines",
    description:
      "Dépôts de granulats, centrales à béton et plateformes de matériaux autour de Douala : chargement continu, manutention et mise en stock.",
  },
  {
    title: "Logistique et dépôts",
    description:
      "Manutention vrac sur les plateformes portuaires et les dépôts de Bassa, Yassa et Bonabéri, en appui de vos flux d'import-export.",
  },
];

const inclus = [
  "Chargeuse Shantui L55-C5 de 5 t, modèle 2025",
  "Godet de 3 m³, puissance de 162 kW",
  "Avec chauffeur qualifié ou en location sèche",
  "Basée à Douala : mobilisation rapide sur la métropole",
  "Suivi technique et maintenance pendant la location",
];

export default function LocationChargeuseDoualaPage() {
  return (
    <>
      <PageHero
        eyebrow="Douala"
        title="Location de chargeuse à Douala."
        description="Une chargeuse de 5 tonnes récente pour charger, manutentionner et faire tourner vos plateformes à Douala."
        image="/media/shantui-case-1.jpg"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimateIn>
              <p className="eyebrow">Pourquoi une chargeuse à Douala</p>
              <h2 className="mt-4 section-title">
                Le chargement ne doit jamais attendre.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                À Douala, la chargeuse est la machine qui fait tourner les dépôts, les
                centrales à béton, les cimenteries et les plateformes logistiques. Quand
                elle s'arrête, ce sont les camions, puis tout le chantier, qui attendent.
                Notre Shantui L55-C5, basée à Bocom Yassa, est proposée en location avec
                un suivi technique qui limite les temps d'arrêt au strict minimum.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Charge nominale de 5 tonnes, godet de 3 m³ : c'est le format adapté au
                chargement des bennes de 20 à 30 tonnes qui alimentent les chantiers de
                la capitale économique et de sa région.
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
                  src="/media/shantui-l55-c5.png"
                  alt="Chargeuse Shantui L55-C5 5 tonnes en location à Douala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="left">
              <p className="eyebrow">La machine</p>
              <h2 className="mt-4 section-title">Shantui L55-C5 : notre modèle phare.</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Chargeuse de 2025, 17,1 tonnes en ordre de marche, moteur de 162 kW et
                châssis renforcé pour les environnements sévères. Sa hauteur de
                déversement de 3,05 m est pensée pour le chargement de camions, et sa
                cabine tient les longues journées d'exploitation.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Charge nominale : 5 tonnes",
                  "Capacité du godet : 3 m³",
                  "Puissance totale : 162 kW",
                  "Vitesse maximale : 38 km/h, cycles rapides sur plateforme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[var(--forest)]" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/flotte/shantui-l55-c5"
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
            <p className="eyebrow text-[var(--gold)]">Un besoin de chargement à Douala ?</p>
            <h2 className="mt-4 section-title text-white">
              Une chargeuse récente, un devis sous 24 h.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Indiquez le matériau, les volumes et la durée : nous vous proposons la
              formule adaptée, avec ou sans chauffeur.
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
