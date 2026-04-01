import { FleetCatalog } from "@/components/fleet-catalog";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { fleet } from "@/data/site";

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Flotte"
        title="Chargeuses, pelles et segments en cours de deploiement."
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
