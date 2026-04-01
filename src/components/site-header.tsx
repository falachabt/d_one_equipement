"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { company, navItems } from "@/data/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function isActivePath(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-[#2a342d] bg-[#1b241f] text-[#e9e2d4]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2.5 text-[11px] uppercase tracking-[0.14em] lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-[#d8cfbd]">
            <span>{company.areas.slice(0, 3).join(" · ")}</span>
            <span className="hidden sm:inline">{company.phone}</span>
          </div>
          {company.whatsappUrl ? (
            <Link
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[#4ade80] transition hover:text-white"
              aria-label="Contacter via WhatsApp"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </Link>
          ) : null}
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-[var(--line)] bg-[rgba(244,238,223,0.97)] backdrop-blur-xl">
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const isActive = isActivePath(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative pb-1 text-sm font-semibold transition ${
                    isActive
                      ? "text-[var(--forest)]"
                      : "text-[#38423b] hover:text-[var(--forest)]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-[17px] h-[2px] bg-[var(--gold)] transition ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
            <Link href="/contact#devis" className="btn-primary">
              Demander un devis
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            title={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center border border-[var(--line)] bg-white p-2.5 text-[var(--foreground)] transition hover:bg-[var(--surface-strong)] lg:hidden"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[var(--line)] bg-[var(--surface)] px-6 py-5 shadow-xl lg:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = isActivePath(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-l-2 pl-3 text-base font-semibold transition ${
                      isActive
                        ? "border-[var(--gold)] text-[var(--forest)]"
                        : "border-transparent text-[#394239] hover:text-[var(--forest)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact#devis"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-3 text-center"
              >
                Demander un devis
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
