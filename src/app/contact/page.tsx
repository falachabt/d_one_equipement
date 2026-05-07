import type { Metadata } from "next";

import { QuoteForm } from "@/components/quote-form";
import { PageHero } from "@/components/page-hero";
import { AnimateIn } from "@/components/animate-in";
import { ContactLinks } from "@/components/contact-links";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact et devis",
  description:
    "Contactez D-ONE EQUIPMENT pour un devis rapide. WhatsApp, téléphone ou formulaire. Partout au Cameroun.",
  path: "/contact",
});


export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Devis rapide, coordonnées et zones d'intervention."
        image="/media/loader-closeup-dramatic.png"
      />

      <section className="section-spacing" id="devis">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left: contact info */}
            <div className="space-y-8">
              <AnimateIn>
                <div>
                  <p className="eyebrow">Coordonnées</p>
                  <h2 className="mt-4 section-title">Contactez-nous.</h2>
                </div>
              </AnimateIn>

              <ContactLinks />
            </div>

            {/* Right: form */}
            <AnimateIn delay={0.1} direction="left">
              <QuoteForm />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
