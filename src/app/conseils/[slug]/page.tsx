import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { AnimateIn } from "@/components/animate-in";
import { company } from "@/data/site";
import { articlesContent, getArticleBySlug } from "@/data/articles";
import { buildPageMetadata } from "@/lib/metadata";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articlesContent.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return buildPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/conseils/${article.slug}`,
    keywords: article.keywords,
    type: "article",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const autres = articlesContent.filter((item) => item.slug !== article.slug);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        image="/media/loader-closeup-dramatic.png"
      />

      <section className="section-spacing">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimateIn>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/conseils"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--gold)] transition-all hover:gap-3"
              >
                <ArrowLeft className="h-4 w-4" /> Tous les conseils
              </Link>
              <span className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)]">
                <Clock className="h-4 w-4" strokeWidth={2} /> Lecture : {article.readTime}
              </span>
            </div>
          </AnimateIn>

          <article className="mt-10">
            {article.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                {paragraph}
              </p>
            ))}

            {article.sections.map((section) => (
              <div key={section.heading} className="mt-12">
                <h2 className="font-display text-2xl font-bold uppercase tracking-[0.03em]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[var(--forest)]" strokeWidth={2} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {article.conclusion.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-10 border-l-2 border-[var(--gold)] pl-5 text-base leading-relaxed text-[var(--muted)]">
                {paragraph}
              </p>
            ))}
          </article>

          <AnimateIn delay={0.1} className="mt-16 border border-[var(--line)] p-7">
            <p className="eyebrow">Passer à l'action</p>
            <h2 className="mt-3 section-title max-w-lg">
              Un chantier qui correspond à ce cas ?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              Décrivez-nous votre besoin : nous vous répondons sous 24 h avec une
              proposition adaptée à votre site et à vos dates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              {company.whatsappUrl && (
                <Link href={company.whatsappUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                  WhatsApp direct
                </Link>
              )}
            </div>
          </AnimateIn>

          {autres.length > 0 && (
            <div className="mt-14">
              <p className="eyebrow">Continuer la lecture</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {autres.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/conseils/${item.slug}`}
                    className="group border border-[var(--line)] p-6 transition-colors hover:border-[var(--gold)]"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug">
                      {item.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--gold)] transition-all group-hover:gap-3">
                      Lire <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
