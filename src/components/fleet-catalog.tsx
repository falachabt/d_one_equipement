"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

import type { FleetItem } from "@/data/site";

type FleetCatalogProps = {
  items: FleetItem[];
};

const filterOptions = ["Tous", "Chargeuse", "Pelle"];

export function FleetCatalog({ items }: FleetCatalogProps) {
  const [filter, setFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const filteredItems = useMemo(() => {
    const searchTerm = deferredSearch.trim().toLowerCase();

    return items.filter((item) => {
      const matchesType = filter === "Tous" || item.type === filter;
      const matchesSearch =
        searchTerm.length === 0 ||
        [item.name, item.shortName, item.capacity, item.brand, item.summary]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm);

      return matchesType && matchesSearch;
    });
  }, [deferredSearch, filter, items]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="border border-[var(--line)] bg-white p-5">
          <p className="data-label">Type d&apos;engin</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={`border px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] ${
                  filter === option
                    ? "border-[var(--surface-ink)] bg-[var(--surface-ink)] text-white"
                    : "border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[#f7f3ea]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <label className="border border-[var(--line)] bg-white p-5">
          <span className="data-label">Recherche</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Shantui, chargeuse, pelle, 5 tonnes..."
            className="form-input mt-4"
          />
        </label>
      </div>

      <div className="overflow-hidden border border-[var(--line)] bg-white">
        <div className="hidden grid-cols-[130px_1.2fr_0.7fr_0.7fr_0.7fr_170px] gap-4 border-b border-[var(--line)] bg-[var(--surface-strong)] px-5 py-4 lg:grid">
          <div className="data-label">Image</div>
          <div className="data-label">Machine</div>
          <div className="data-label">Type</div>
          <div className="data-label">Capacite</div>
          <div className="data-label">Disponibilite</div>
          <div className="data-label">Action</div>
        </div>

        {filteredItems.map((item) => (
          <article
            key={item.slug}
            className="border-b border-[var(--line)] last:border-b-0"
          >
            <div className="grid gap-5 px-5 py-5 lg:grid-cols-[130px_1.2fr_0.7fr_0.7fr_0.7fr_170px] lg:items-center">
              <div className="relative h-28 overflow-hidden border border-[var(--line)] bg-[#e8e0cf]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="130px"
                />
              </div>

              <div>
                <p className="data-label">{item.badge}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-[var(--foreground)]">
                  {item.shortName}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.name}</p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
                  {item.summary}
                </p>
              </div>

              <div>
                <p className="data-label lg:hidden">Type</p>
                <p className="mt-1 text-base font-semibold text-[var(--foreground)]">{item.type}</p>
              </div>

              <div>
                <p className="data-label lg:hidden">Capacite</p>
                <p className="mt-1 text-base font-semibold text-[var(--foreground)]">{item.capacity}</p>
              </div>

              <div>
                <p className="data-label lg:hidden">Disponibilite</p>
                <p className="mt-1 text-base font-semibold text-[var(--foreground)]">{item.availability}</p>
              </div>

              <div>
                <Link href={`/flotte/${item.slug}`} className="btn-secondary w-full justify-center">
                  Ouvrir
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
