import Image from "next/image";
import Link from "next/link";

import { company, navItems } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[#2a342d] bg-[#1b241f] text-[#e9e2d4]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2.5 text-[11px] uppercase tracking-[0.14em] lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-[#d8cfbd]">
            <span>{company.areas.join(" · ")}</span>
            <span>{company.phone}</span>
            <span>{company.email}</span>
          </div>
          <Link href={company.whatsappUrl} className="text-[#f0cd60] hover:text-white">
            WhatsApp direct
          </Link>
        </div>
      </div>

      <div className="border-b border-[var(--line)] bg-[rgba(244,238,223,0.94)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-d-one.svg"
              alt={`${company.name} logo`}
              width={42}
              height={42}
              priority
            />
            <div>
              <div className="font-display text-lg font-semibold tracking-[0.18em] text-[var(--foreground)]">
                D-ONE
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#6a736b]">
                Equipment
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#38423b] transition hover:text-[var(--forest)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
            <Link href="/contact#devis" className="btn-primary">
              Demander un devis
            </Link>
          </div>

          <details className="group lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-3 border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--foreground)]">
              Menu
            </summary>
            <div className="absolute left-0 top-full w-full border-b border-[var(--line)] bg-[var(--surface)] px-6 py-5 shadow-xl">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-semibold text-[#394239] transition hover:text-[var(--forest)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact#devis" className="btn-primary mt-3 text-center">
                  Demander un devis
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
