"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { FleetItem } from "@/data/site";

type FleetShowcaseProps = {
  items: FleetItem[];
};

export function FleetShowcase({ items }: FleetShowcaseProps) {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
      <div className="border border-[var(--line)] bg-white">
        {items.map((item) => {
          const isActive = item.slug === activeItem.slug;

          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActiveItem(item)}
              className={`block w-full border-b border-[var(--line)] px-5 py-5 text-left last:border-b-0 ${
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
            </button>
          );
        })}
      </div>

      <div className="border border-[var(--line)] bg-white">
        <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="border-b border-[var(--line)] lg:border-b-0 lg:border-r">
            <div className="relative aspect-[16/10] bg-[#e7dfd0]">
              <Image
                src={activeItem.image}
                alt={activeItem.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="p-6">
            <p className="data-label">Machine selectionnee</p>
            <h3 className="mt-3 font-display text-4xl font-semibold text-[var(--foreground)]">
              {activeItem.name}
            </h3>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              {activeItem.summary}
            </p>

            <div className="mt-6">
              <table className="technical-table">
                <tbody>
                  {activeItem.specs.slice(0, 6).map((spec) => (
                    <tr key={spec.label}>
                      <th>{spec.label}</th>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={`/flotte/${activeItem.slug}`} className="btn-primary">
                Voir la fiche
              </Link>
              {activeItem.download ? (
                <Link href={activeItem.download} className="btn-secondary">
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
      </div>
    </div>
  );
}
