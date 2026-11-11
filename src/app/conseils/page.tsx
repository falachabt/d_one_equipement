import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { articles } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Conseils location d'engins au Cameroun",
  description:
    "Guides pratiques pour louer et exploiter des engins lourds au Cameroun : choisir une chargeuse, louer avec chauffeur, zones de chantiers prioritaires à Douala, Yaoundé et Kribi.",
  path: "/conseils",
  keywords: [
    "conseils location engins",
    "guide chargeuse Cameroun",
    "location engins Cameroun",
    "louer un engin avec chauffeur",
  ],
});

export default function ConseilsPage() {
  return (
    <>
      <PageHero
        eyebrow="Conseils"
        title="Bien louer, bien exploiter."
        description="Nos guides pratiques pour tirer le meilleur de vos engins de location au Cameroun."
        image="/media/loader-closeup-dramatic.png"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow">Nos articles</p>
            <h2 className="mt-4 section-title max-w-xl">
              Le terrain, en toute franchise.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Des retours d'expérience concrets, écrits pour les conducteurs de travaux,
              les carriers et les logisticiens qui font tourner les chantiers du Cameroun.
            </p>
          </AnimateIn>

          <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
            {articles.map((article) => (
              <StaggerItem key={article.slug}>
                <Link
                  href={`/conseils/${article.slug}`}
                  className="group flex h-full flex-col border border-[var(--line)] bg-[var(--background)] p-7 transition-colors hover:border-[var(--gold)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                      {article.category}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)]">
                      <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-[0.02em]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold uppercase tracking-[0.1em] text-[var(--gold)] transition-all group-hover:gap-3">
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-dark section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <p className="eyebrow text-[var(--gold)]">Une question précise ?</p>
            <h2 className="mt-4 section-title text-white">
              Posez-la directement à notre équipe.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Capacité, tarif, disponibilité : si votre chantier ne ressemble à aucun de
              nos cas, décrivez-le nous. Réponse sous 24 h.
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
