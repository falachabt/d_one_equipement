import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Play } from "lucide-react";

import { EquipmentGallery } from "@/components/equipment-gallery";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { getFleetBySlug, fleet } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

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

  return buildPageMetadata({
    title: item.name,
    description: item.summary,
    path: `/flotte/${item.slug}`,
    keywords: [
      item.name,
      item.brand,
      item.type,
      `location ${item.type.toLowerCase()} Cameroun`,
    ],
  });
}

export default async function FleetDetailPage({ params }: FleetDetailPageProps) {
  const { slug } = await params;
  const item = getFleetBySlug(slug);

  if (!item) notFound();

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--line)] bg-[var(--background)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <AnimateIn>
            <span className="tag">{item.badge}</span>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase tracking-[0.02em] text-[var(--foreground)]">
              {item.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
              {item.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis
              </Link>
              {item.download ? (
                <Link href={item.download} className="btn-secondary text-[var(--foreground)]" target="_blank">
                  Télécharger la fiche PDF
                </Link>
              ) : null}
            </div>

            <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2" staggerDelay={0.08}>
              {item.specs.slice(0, 4).map((spec) => (
                <StaggerItem key={spec.label}>
                  <div className="border border-[var(--line)] bg-[var(--surface)] p-5">
                    <p className="data-label">{spec.label}</p>
                    <p className="mt-2 font-display text-3xl font-bold text-[var(--foreground)]">
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
      {(item.videos?.length || item.videoYoutubeId) ? (
        <section className="border-b border-[var(--line)] bg-[var(--surface)]">
          <AnimateIn className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-[var(--surface-ink)]">
                <Play className="h-4 w-4 text-white" fill="white" strokeWidth={0} />
              </div>
              <div>
                <p className="data-label">Vidéos machine</p>
                <p className="text-sm text-[var(--muted)]">
                  {item.name} — présentation et démonstration terrain
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {item.videos?.map((video) => (
                <article key={video.file} className="overflow-hidden border border-[var(--line)] bg-[var(--background)]">
                  <div className="relative border-b border-[var(--line)] bg-black group">
                    <video
                      controls
                      preload="metadata"
                      className="aspect-video w-full"
                      poster={video.poster}
                      playsInline
                    >
                      <source src={video.file} type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Play className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 p-5">
                    <h2 className="font-display text-xl font-bold uppercase tracking-[0.04em] text-[var(--foreground)]">
                      {video.title}
                    </h2>
                    <p className="text-sm text-[var(--muted)]">
                      Présentation officielle de la machine.
                    </p>
                  </div>
                </article>
              ))}

              {item.videoYoutubeId && (
                <article className="overflow-hidden border border-[var(--line)] bg-[var(--background)]">
                  <div className="relative aspect-video border-b border-[var(--line)] bg-[#0a0a0a]">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoYoutubeId}?rel=0&modestbranding=1`}
                      title={`Vidéo de présentation ${item.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2 p-5">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-red-500" fill="currentColor" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <h2 className="font-display text-xl font-bold uppercase tracking-[0.04em] text-[var(--foreground)]">
                        Démonstration officielle
                      </h2>
                    </div>
                    <p className="text-sm text-[var(--muted)]">
                      Vidéo terrain — {item.name} en conditions réelles.
                    </p>
                  </div>
                </article>
              )}
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
