import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { references } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Références et partenaires",
  description:
    "Les projets et collaborations de D-ONE EQUIPMENT au Cameroun. Logistique, BTP, industrie portuaire.",
  path: "/references",
});

const partners = [
  {
    name: "Saptrans",
    type: "Partenaire logistique",
    description:
      "Collaboration sur des besoins de manutention et de logistique lourde. Un ancrage local concret dans l'environnement camerounais.",
    location: "Douala",
    website: "https://www.saptrans.net",
  },
];

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Références"
        title="Nos projets au Cameroun."
        description="Des collaborations concrètes, des chantiers réels. D-ONE EQUIPMENT construit sa réputation sur le terrain."
        image="/media/aerial-construction-site.png"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow">Interventions & projets</p>
            <h2 className="mt-4 section-title max-w-2xl">
              Sur le terrain, partout au Cameroun.
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)] leading-relaxed">
              Nos engins interviennent sur des chantiers BTP, des sites industriels, des plateformes logistiques et des zones portuaires à travers tout le pays.
            </p>
          </AnimateIn>

          <StaggerChildren className="mt-14 grid gap-8 md:grid-cols-3" staggerDelay={0.1}>
            {references.map((ref) => (
              <StaggerItem key={ref.title}>
                <div className="group overflow-hidden border border-[var(--line)] bg-[var(--background)] hover:border-[var(--gold)] transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={ref.image}
                      alt={ref.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,11,0.6)] to-transparent" />
                    <span className="absolute top-4 left-4 tag text-[10px]">
                      {ref.status}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[var(--muted)]">
                      <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                      <span className="text-xs font-bold uppercase tracking-[0.12em]">{ref.location}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-[0.04em]">
                      {ref.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                      {ref.description}
                    </p>
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
            <p className="eyebrow">Partenaires</p>
            <h2 className="mt-4 section-title max-w-xl">
              Des collaborations de confiance.
            </h2>
          </AnimateIn>

          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {partners.map((partner) => (
              <StaggerItem key={partner.name}>
                <div className="line-card flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                      {partner.type}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-[0.06em]">
                      {partner.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {partner.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-2 gap-4">
                    <div className="flex items-center gap-2 text-[var(--muted)]">
                      <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                      <span className="text-xs font-bold uppercase tracking-[0.1em]">{partner.location}</span>
                    </div>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--gold)] hover:underline flex items-center gap-1"
                      >
                        Site web <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-dark section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <p className="eyebrow text-[var(--gold)]">Vous aussi, faites partie de nos références</p>
            <h2 className="mt-4 section-title text-white">
              Votre projet mérite les bons engins.
            </h2>
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
