"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { company, navItems } from "@/data/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActivePath(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--surface-ink)] border-b border-[var(--line-on-dark)] shadow-lg"
          : "bg-[rgba(10,15,11,0.7)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-d-one.svg"
            alt={`${company.name} logo`}
            width={36}
            height={36}
            priority
          />
          <div>
            <div className="font-display text-lg font-bold tracking-[0.14em] text-white uppercase">
              D-ONE
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">
              Equipment
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = isActivePath(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-5 py-2 text-[13px] font-bold uppercase tracking-[0.12em] transition ${
                  isActive
                    ? "text-[var(--gold)] border-b-2 border-[var(--gold)]"
                    : "text-white/75 hover:text-white border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA button — Tractafric yellow style */}
        <div className="hidden lg:block">
          <Link href="/contact#devis" className="btn-primary text-[12px]">
            Demander un devis
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          title={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center justify-center p-2.5 text-white hover:text-[var(--gold)] transition lg:hidden"
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
        <div className="bg-[var(--surface-ink)] border-t border-[var(--line-on-dark)] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = isActivePath(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] transition ${
                    isActive
                      ? "text-[var(--gold)] bg-white/[0.04]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact#devis"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 text-center"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
