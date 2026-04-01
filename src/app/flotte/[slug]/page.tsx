import Link from "next/link";
import { notFound } from "next/navigation";

import { EquipmentGallery } from "@/components/equipment-gallery";
import { getFleetBySlug, fleet } from "@/data/site";

type FleetDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return fleet.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: FleetDetailPageProps) {
  const { slug } = await params;
  const item = getFleetBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.name} | Flotte`,
    description: item.summary,
  };
}

export default async function FleetDetailPage({
  params,
}: FleetDetailPageProps) {
  const { slug } = await params;
  const item = getFleetBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-[var(--line)] bg-[var(--surface-strong)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div>
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
                  Telecharger la fiche PDF
                </Link>
              ) : null}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {item.specs.slice(0, 4).map((spec) => (
                <div key={spec.label} className="technical-card p-4">
                  <p className="data-label">{spec.label}</p>
                  <p className="mt-2 font-display text-3xl font-semibold text-[var(--foreground)]">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <EquipmentGallery images={item.gallery} alt={item.name} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div className="line-card">
              <p className="eyebrow">Points forts</p>
              <div className="mt-6 grid gap-3">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="technical-card p-4">
                    <p className="text-sm leading-7 text-[var(--foreground)]">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

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
          </div>

          <div className="line-card">
            <p className="eyebrow">Caracteristiques</p>
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
        </div>
      </section>
    </>
  );
}
