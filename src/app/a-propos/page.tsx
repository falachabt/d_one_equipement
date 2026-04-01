import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="A propos"
        title="Une entreprise orientee disponibilite, suivi et execution terrain."
        description="D-ONE EQUIPMENT structure une offre de location d'engins lourds pour les chantiers BTP, industriels et portuaires."
        image="/media/shantui-gallery-1.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <SectionHeading
          eyebrow="Entreprise"
          title="Une organisation construite pour repondre vite et suivre le terrain."
          copy="L'objectif est simple: proposer une offre lisible, une relation commerciale serieuse et un suivi adapte aux besoins chantier."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="line-card">
            <h2 className="font-display text-3xl font-semibold text-[var(--foreground)]">
              D-ONE EQUIPMENT
            </h2>
            <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
              D-ONE EQUIPMENT s&apos;adresse aux entreprises qui recherchent des
              engins adaptes au chargement, a la manutention, au terrassement
              et a la preparation de plateforme.
            </p>
            <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
              Le pilotage commercial est organise depuis l&apos;Allemagne, tandis
              que la coordination chantier, la relation terrain et le suivi
              technique restent ancres au Cameroun.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "Fiabilite",
                copy: "Des machines presentees clairement, avec donnees utiles et suivi technique.",
              },
              {
                title: "Execution",
                copy: "Une reponse rapide sur le devis, la disponibilite et les conditions d'intervention.",
              },
              {
                title: "Ancrage local",
                copy: "Une presence orientee Douala, Kribi, Yaounde et plus largement les besoins au Cameroun.",
              },
            ].map((value) => (
              <div key={value.title} className="line-card">
                <h3 className="font-display text-3xl font-semibold text-[var(--foreground)]">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
