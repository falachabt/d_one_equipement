import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Play } from "lucide-react";

import { EquipmentGallery } from "@/components/equipment-gallery";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { getFleetBySlug, fleet } from "@/data/site";

type FleetDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return fleet.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: FleetDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getFleetBySlug(slug);

  if (!item) return {};

  return {
    title: item.name,
    description: item.summary,
    openGraph: {
      title: `${item.name} | D-ONE EQUIPMENT`,
      description: item.summary,
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: `${item.name} — D-ONE EQUIPMENT`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.name} | D-ONE EQUIPMENT`,
      description: item.summary,
      images: [item.image],
    },
  };
}

export default async function FleetDetailPage({ params }: FleetDetailPageProps) {
  const { slug } = await params;
  const item = getFleetBySlug(slug);

  if (!item) notFound();

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--line)] bg-[var(--surface-strong)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <AnimateIn>
            <span className="tag">{item.badge}</span>
            <h1 className="mt-5 font-display text-5xl font-semibold text-[var(--foreground)]">
              {item.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {item.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis
              </Link>
              {item.download ? (
                <Link href={item.download} className="btn-secondary" target="_blank">
                  Télécharger la fiche PDF
                </Link>
              ) : null}
            </div>

            <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2" staggerDelay={0.08}>
              {item.specs.slice(0, 4).map((spec) => (
                <StaggerItem key={spec.label}>
                  <div className="technical-card p-4">
                    <p className="data-label">{spec.label}</p>
                    <p className="mt-2 font-display text-3xl font-semibold text-[var(--foreground)]">
                      {spec.value}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </AnimateIn>

          <AnimateIn delay={0.12} direction="left">
            <EquipmentGallery images={item.gallery} alt={item.name} />
          </AnimateIn>
        </div>
      </section>

      {/* ─── VIDEO ────────────────────────────────────────────────── */}
      {item.videos?.length ? (
        <section className="border-b border-[var(--line)] bg-[var(--surface)]">
          <AnimateIn className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-[var(--surface-ink)]">
                <Play className="h-4 w-4 text-white" fill="white" strokeWidth={0} />
              </div>
              <div>
                <p className="data-label">Videos machine</p>
                <p className="text-sm text-[var(--muted)]">
                  {item.name} en presentation et en demonstration
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {item.videos.map((video) => (
                <article key={video.file} className="overflow-hidden border border-[var(--line)] bg-white">
                  <div className="border-b border-[var(--line)] bg-black">
                    <video
                      controls
                      preload="metadata"
                      className="aspect-video w-full"
                      src={video.file}
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <h2 className="font-display text-2xl font-semibold text-[var(--foreground)]">
                      {video.title}
                    </h2>
                    <p className="text-sm leading-7 text-[var(--muted)]">
                      Source: {video.sourceLabel}
                    </p>
                    <Link
                      href={video.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--forest)] transition hover:text-[var(--forest-deep)]"
                    >
                      Voir la source video →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </AnimateIn>
        </section>
      ) : item.videoYoutubeId ? (
        <section className="border-b border-[var(--line)] bg-[var(--surface)]">
          <AnimateIn className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-[var(--surface-ink)]">
                <Play className="h-4 w-4 text-white" fill="white" strokeWidth={0} />
              </div>
              <div>
                <p className="data-label">Vidéo machine</p>
                <p className="text-sm text-[var(--muted)]">{item.name} — démonstration terrain</p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden border border-[var(--line)] bg-[#0a0a0a]">
              <iframe
                src={`https://www.youtube.com/embed/${item.videoYoutubeId}?rel=0&modestbranding=1`}
                title={`Vidéo de présentation ${item.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </AnimateIn>
        </section>
      ) : null}

      {/* ─── DETAILS ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <AnimateIn>
              <div className="line-card">
                <p className="eyebrow">Points forts</p>
                <StaggerChildren className="mt-6 grid gap-3" staggerDelay={0.07}>
                  {item.highlights.map((highlight) => (
                    <StaggerItem key={highlight}>
                      <div className="technical-card p-4">
                        <p className="text-sm leading-7 text-[var(--foreground)]">{highlight}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <div className="line-card">
                <p className="eyebrow">Applications</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.sectors.map((sector) => (
                    <span key={sector} className="tag">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.1} direction="left">
            <div className="line-card">
              <p className="eyebrow">Caractéristiques</p>
              <div className="mt-6">
                <table className="technical-table">
                  <tbody>
                    {item.specs.map((spec) => (
                      <tr key={spec.label}>
                        <th>{spec.label}</th>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
