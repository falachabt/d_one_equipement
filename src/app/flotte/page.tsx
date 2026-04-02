import type { Metadata } from "next";

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
        </div>
      </section>
    </>
  );
}
