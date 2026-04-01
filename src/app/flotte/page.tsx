import type { Metadata } from "next";

import { FleetCatalog } from "@/components/fleet-catalog";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Flotte d'engins",
  description:
    "Consultez la flotte de D-ONE EQUIPMENT : Shantui L55-C5, SANY SY215C et SANY SW305K. Fiches techniques, visuels, videos et demande de devis.",
  path: "/flotte",
});

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { fleet } from "@/data/site";

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Flotte"
        title="Chargeuses et pelles presentees par modele."
        description="Consultez les machines disponibles, leurs principales caracteristiques et l'acces aux fiches detaillees."
        image="/media/shantui-case-1.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <SectionHeading
          eyebrow="Catalogue"
          title="Comparez les engins disponibles selon votre besoin."
          copy="Filtrez par type d'engin, utilisez la recherche si besoin et ouvrez la fiche de la machine qui correspond a votre chantier."
        />

        <div className="mt-10">
          <FleetCatalog items={fleet} />
        </div>
      </section>
    </>
  );
}
