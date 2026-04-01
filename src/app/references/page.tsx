import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Références terrain",
  description:
    "D-ONE EQUIPMENT intervient à Douala, Kribi et Yaoundé sur des chantiers BTP, portuaires et industriels. Découvrez nos zones d'ancrage au Cameroun.",
  openGraph: {
    title: "Références terrain | D-ONE EQUIPMENT",
    description:
      "Interventions à Douala, Kribi et Yaoundé — chantiers BTP, portuaires et industriels au Cameroun.",
    images: [{ url: "/media/shantui-case-1.jpg", width: 1200, height: 630 }],
  },
};

import { SectionHeading } from "@/components/section-heading";
import { references } from "@/data/site";

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="References"
        title="Kribi, Douala, Yaounde: des environnements d'intervention identifies."
        description="Retrouvez les zones prioritaires, les besoins vises et les premiers appuis terrain de D-ONE EQUIPMENT."
        image="/media/shantui-case-1.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <SectionHeading
          eyebrow="Implantation"
          title="Des references pour situer la presence terrain."
          copy="Chaque reference indique une ville, un environnement d'intervention et un type de besoin auquel l'equipe peut repondre."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {references.map((reference) => (
            <article key={reference.title} className="line-card overflow-hidden p-0">
              <div className="relative aspect-[16/10] border-b border-[var(--line)]">
                <Image
                  src={reference.image}
                  alt={reference.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="tag">{reference.location}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6c756c]">
                    {reference.status}
                  </span>
                </div>
                <h2 className="font-display text-3xl font-semibold text-[var(--foreground)]">
                  {reference.title}
                </h2>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  {reference.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
