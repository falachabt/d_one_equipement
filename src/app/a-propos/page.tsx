import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Zap, Globe, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "À propos",
  description:
    "D-ONE EQUIPMENT : location d'engins lourds au Cameroun. Pilotage depuis l'Allemagne, exécution terrain locale.",
  path: "/a-propos",
});

const pillars = [
  {
    icon: Shield,
    title: "Fiabilité",
    text: "Des machines neuves présentées clairement avec suivi technique.",
  },
  {
    icon: Zap,
    title: "Réactivité",
    text: "Devis sous 24h. WhatsApp ou formulaire.",
  },
  {
    icon: Globe,
    title: "Ancrage local",
    text: "Présence terrain partout au Cameroun, coordination depuis l'Allemagne.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Propulsez vos projets."
        description="D-ONE EQUIPMENT SARL — location d'engins lourds pour chantiers BTP, sites industriels et portuaires partout au Cameroun."
        image="/media/shantui-gallery-1.jpg"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimateIn>
              <div className="space-y-6">
                <p className="eyebrow">Notre modèle</p>
                <h2 className="section-title">
                  Pilotage depuis l&apos;Allemagne, exécution au Cameroun.
                </h2>
                <p className="lead-copy">
                  Le pilotage commercial est organisé depuis l&apos;Allemagne, tandis que la coordination chantier et le suivi technique restent ancrés au Cameroun.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1} direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/media/shantui-case-1.jpg"
                  alt="Chargeuse Shantui sur le terrain au Cameroun"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>
          </div>

          <StaggerChildren className="mt-20 grid gap-8 md:grid-cols-3" staggerDelay={0.1}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title}>
                  <div className="line-card text-center space-y-4 h-full">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--forest-light)]">
                      <Icon className="h-6 w-6 text-[var(--forest)]" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-xl font-bold">{pillar.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed text-sm">{pillar.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-alt section-spacing border-t border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="eyebrow">Votre prochain chantier</p>
              <h2 className="mt-4 section-title">
                Un engin disponible. Un devis rapide.
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                Décrivez votre besoin — nature du travail, durée, localisation. On s'adapte à votre chantier.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/flotte" className="btn-secondary">
                Voir nos engins <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
