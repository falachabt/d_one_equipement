import Link from "next/link";

import { company, navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#2b342d] bg-[#18201b] text-[#e8e1d3]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <p className="eyebrow !text-[#f0cd60] before:bg-[#f0cd60]">
            D-ONE EQUIPMENT
          </p>
          <h2 className="font-display text-3xl font-semibold text-white">
            {company.slogan}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[#c7c1b3]">
            Site vitrine pour la location d&apos;engins lourds, la demande de devis
            rapide et la presentation d&apos;une flotte adaptee aux besoins BTP,
            industriels et portuaires au Cameroun.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f0cd60]">
            Navigation
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#d7d0c4] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f0cd60]">
            Contact
          </h3>
          <div className="mt-5 space-y-3 text-sm text-[#d7d0c4]">
            <p>{company.phone}</p>
            <p>{company.email}</p>
            <p>{company.areas.join(" · ")}</p>
            <Link href={company.whatsappUrl} className="inline-flex text-[#f0cd60] hover:text-white">
              Ouvrir WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2b342d] px-6 py-5 text-center text-xs uppercase tracking-[0.18em] text-[#998f7d] lg:px-8">
        © 2026 D-ONE EQUIPMENT · Cameroun · Next.js
      </div>
    </footer>
  );
}
