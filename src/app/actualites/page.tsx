import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Actualites",
  description:
    "Conseils chantier, informations flotte et sujets de marche utiles autour de la location d'engins au Cameroun.",
  path: "/actualites",
  image: "/media/shantui-gallery-1.jpg",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Actualites"
        title="Conseils chantier, informations flotte et sujets de marche."
        description="Cette rubrique sert de base pour un futur espace editorial. Elle est formulee pour soutenir le referencement local sans tomber dans le contenu artificiel."
        image="/media/shantui-gallery-1.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <SectionHeading
          eyebrow="Sujets"
          title="Des themes utiles pour le referencement et pour la relation commerciale."
          copy="La logique editoriale reste simple: aider le prospect a mieux comprendre le choix de l'engin, le contexte de location et les specificites du marche local."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="line-card">
              <span className="tag">{article.category}</span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-[var(--foreground)]">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {article.excerpt}
              </p>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6c756c]">
                {article.readTime}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
