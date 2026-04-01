import type { Metadata } from "next";

import { FleetCatalog } from "@/components/fleet-catalog";

export const metadata: Metadata = {
  title: "Flotte d'engins",
  description:
    "Consultez la flotte de D-ONE EQUIPMENT : Shantui L55-C5, SANY SY215C et SANY SW305K. Fiches techniques, videos et demande de devis.",
  openGraph: {
    title: "Flotte d'engins lourds | D-ONE EQUIPMENT",
    description:
      "Chargeuses et pelles presentees par modele pour vos chantiers au Cameroun.",
    images: [{ url: "/media/shantui-l55-c5.png", width: 1200, height: 630 }],
  },
};

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
