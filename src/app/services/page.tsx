import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Location d&apos;engins et solutions d&apos;exploitation chantier."
        description="Retrouvez les principales options de location, l'intervention avec chauffeur et le support technique."
        image="/media/shantui-gallery-1.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <SectionHeading
          eyebrow="Offre"
          title="Des services clairs pour vos besoins chantier."
          copy="Chargeuses, pelles, intervention avec chauffeur et suivi technique selon la nature de votre exploitation."
        />

        <div className="mt-10 overflow-hidden border border-[var(--line)] bg-white">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-6 border-b border-[var(--line)] px-6 py-6 last:border-b-0 lg:grid-cols-[0.42fr_0.58fr]"
            >
              <div>
                <p className="data-label">Service</p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--foreground)]">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
                  {service.summary}
                </p>
              </div>

              <div className="grid gap-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="border border-[var(--line)] bg-[var(--surface)] px-4 py-4">
                    <p className="text-sm leading-7 text-[var(--foreground)]">{bullet}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
