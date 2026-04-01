"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { FleetItem } from "@/data/site";

type FleetShowcaseProps = {
  items: FleetItem[];
};

function FleetPreviewContent({ item, compact = false }: { item: FleetItem; compact?: boolean }) {
  return (
    <div className={`grid gap-0 ${compact ? "" : "lg:grid-cols-[1.02fr_0.98fr]"}`}>
      <div className={`bg-[#e7dfd0] ${compact ? "border-b border-[var(--line)]" : "border-b border-[var(--line)] lg:border-b-0 lg:border-r"}`}>
        <div className="relative aspect-[16/10]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>

      <div className="p-6">
        <p className="data-label">{compact ? "Machine ouverte" : "Machine selectionnee"}</p>
        <h3 className="mt-3 font-display text-4xl font-semibold text-[var(--foreground)]">
          {item.name}
        </h3>
        <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{item.summary}</p>

        <div className="mt-6">
          <table className="technical-table">
            <tbody>
              {item.specs.slice(0, compact ? 4 : 6).map((spec) => (
                <tr key={spec.label}>
                  <th>{spec.label}</th>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href={`/flotte/${item.slug}`} className="btn-primary">
            Voir la fiche
          </Link>
          {item.download ? (
            <Link href={item.download} className="btn-secondary">
              PDF
            </Link>
          ) : (
            <Link href="/contact#devis" className="btn-secondary">
              Demander un devis
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function FleetShowcase({ items }: FleetShowcaseProps) {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <>
      <div className="space-y-4 lg:hidden">
        {items.map((item) => {
          const isActive = item.slug === activeItem.slug;
          const panelId = `fleet-showcase-${item.slug}`;

          return (
            <div key={item.slug} className="overflow-hidden border border-[var(--line)] bg-white">
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                aria-expanded={isActive}
                aria-controls={panelId}
                className={`block w-full px-5 py-5 text-left transition ${
                  isActive ? "bg-[var(--surface-strong)]" : "bg-white hover:bg-[#f7f3ea]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="data-label">{item.type}</p>
                    <h3 className="mt-2 font-display text-3xl font-semibold text-[var(--foreground)]">
                      {item.shortName}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {item.capacity} · {item.year}
                    </p>
                  </div>
                  {isActive ? <span className="tag">Ouvert</span> : null}
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--forest)]">
                  <span>{isActive ? "Details affiches" : "Appuyer pour afficher la machine"}</span>
                  <span aria-hidden="true">{isActive ? "−" : "→"}</span>
                </div>
              </button>

              {isActive ? (
                <div id={panelId} className="border-t border-[var(--line)]">
                  <FleetPreviewContent item={item} compact />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="hidden gap-8 lg:grid lg:grid-cols-[0.36fr_0.64fr]">
        <div className="border border-[var(--line)] bg-white">
          {items.map((item) => {
            const isActive = item.slug === activeItem.slug;

            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActiveItem(item)}
                className={`block w-full border-b border-[var(--line)] px-5 py-5 text-left transition last:border-b-0 ${
                  isActive ? "bg-[var(--surface-strong)]" : "bg-white hover:bg-[#f7f3ea]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="data-label">{item.type}</p>
                    <h3 className="mt-2 font-display text-3xl font-semibold text-[var(--foreground)]">
                      {item.shortName}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {item.capacity} · {item.year}
                    </p>
                  </div>
                  {isActive ? <span className="tag">Actif</span> : null}
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--forest)]">
                  <span>{isActive ? "Machine affichee" : "Cliquer pour afficher"}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="border border-[var(--line)] bg-white">
          <FleetPreviewContent item={activeItem} />
        </div>
      </div>
    </>
  );
}
