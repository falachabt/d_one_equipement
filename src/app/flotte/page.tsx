import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FleetCatalog } from "@/components/fleet-catalog";
import { PageHero } from "@/components/page-hero";
import { AnimateIn } from "@/components/animate-in";
import { fleet } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Flotte d'engins",
  description:
    "Chargeuses et pelles disponibles. Fiches techniques, visuels et demande de devis rapide.",
  path: "/flotte",
});

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Flotte"
        title="Nos machines."
        description="Chargeuses et pelles présentées par modèle."
        image="/media/shantui-case-1.jpg"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-2xl">
              <p className="eyebrow">Catalogue</p>
              <h2 className="mt-4 section-title">
                Comparez les engins disponibles.
              </h2>
            </div>
          </AnimateIn>

          <div className="mt-12">
            <FleetCatalog items={fleet} />
          </div>

          <AnimateIn delay={0.2} className="mt-16 border-t border-[var(--line)] pt-14">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow">Vous avez un chantier ?</p>
                <h2 className="mt-3 section-title max-w-md">
                  Demandez un devis pour l'engin qu'il vous faut.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:shrink-0">
                <Link href="/contact#devis" className="btn-primary">
                  Demander un devis <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  Voir nos services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
