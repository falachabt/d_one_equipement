import { QuoteForm } from "@/components/quote-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact commercial et demande de devis."
        description="Retrouvez ici les coordonnees de D-ONE EQUIPMENT, le formulaire de devis et les principales zones d'intervention."
        image="/media/shantui-case-2.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8" id="devis">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Coordonnees"
              title="Coordonnees et zones d'intervention."
              copy="Appelez, ecrivez ou envoyez votre besoin via le formulaire de devis."
            />

            <div className="overflow-hidden border border-[var(--line)] bg-white">
              {[
                { label: "Telephone", value: company.phone },
                { label: "Email", value: company.email },
                { label: "Zones d'intervention", value: company.areas.join(" · ") },
                { label: "Canal rapide", value: "WhatsApp disponible sur toutes les pages" },
              ].map((item) => (
                <div key={item.label} className="border-b border-[var(--line)] px-5 py-5 last:border-b-0">
                  <p className="data-label">{item.label}</p>
                  <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <QuoteForm />
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Carte"
            title="Douala, Yaounde, Kribi et couverture nationale."
            copy="Les zones prioritaires sont Douala, Yaounde et Kribi, avec possibilite d'intervention partout au Cameroun selon le besoin."
          />

          <div className="mt-8 overflow-hidden border border-[var(--line)] bg-white">
            <iframe
              title="Carte des zones d'intervention D-ONE EQUIPMENT"
              src="https://www.google.com/maps?q=Cameroon&output=embed"
              className="h-[420px] w-full border-0 "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
