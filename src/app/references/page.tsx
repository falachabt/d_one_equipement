import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ExternalLink } from "lucide-react";

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

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Références"
        title="Nos projets au Cameroun."
        description="Des collaborations concrètes, des chantiers réels. D-ONE EQUIPMENT construit sa réputation sur le terrain."
        image="/media/aerial-construction-site.png"
      />

      {/* ── Partenaire mis en avant : SAPTRANS ─────────────────── */}
      <section className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <AnimateIn>
            <p className="eyebrow mb-8">Partenaire de confiance</p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="grid lg:grid-cols-2 gap-0 overflow-hidden border border-[var(--line)] hover:border-[var(--gold)] transition-colors">
              {/* Image contextuelle */}
              <div className="relative aspect-[4/3] lg:aspect-auto bg-[var(--surface)] overflow-hidden">
                <Image
                  src="/media/shantui-case-1.jpg"
                  alt="Chantier logistique Saptrans D-ONE EQUIPMENT"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,11,0.5)] to-transparent" />
              </div>

              {/* Info partenaire */}
              <div className="flex flex-col justify-center p-8 lg:p-12 bg-white">
                {/* Logo Saptrans */}
                <div className="relative h-12 w-48 mb-6">
                  <Image
                    src="/media/brands/saptrans-logo.png"
                    alt="Logo Saptrans"
                    fill
                    className="object-contain object-left"
                    sizes="192px"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-3">
                  Partenaire logistique · Douala
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-[0.04em] text-[var(--foreground)]">
                  Saptrans
                </h3>
                <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed max-w-sm">
                  Collaboration sur des besoins de manutention et de logistique lourde. Saptrans — <em>Votre Partenaire de Route</em> — opère au Cameroun et s&apos;appuie sur nos engins pour ses chantiers terrain.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://saptrans.net"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--gold)] hover:underline"
                  >
                    Visiter saptrans.net <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Projets & interventions ─────────────────────────────── */}
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
