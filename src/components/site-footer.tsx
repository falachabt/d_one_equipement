import Link from "next/link";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

import { company, navItems } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#070b08] border-t border-[var(--line-on-dark)]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-bold text-white tracking-[0.1em] uppercase">
              D-ONE <span className="text-[var(--gold)]">Equipment</span>
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]/70">
              SARL · Douala, Cameroun
            </p>
            <p className="mt-3 text-sm text-white/40 italic">
              &ldquo;{company.altSlogan}&rdquo;
            </p>
            <SocialLinks variant="dark" className="mt-5" />
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/55 hover:text-white transition uppercase tracking-[0.06em]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[var(--gold)]" strokeWidth={1.8} />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[var(--gold)]" strokeWidth={1.8} />
                {company.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--gold)] mt-0.5" strokeWidth={1.8} />
                <span>{company.address}</span>
              </div>
            </div>
            {company.whatsappUrl && (
              <Link
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-[#25D366] px-4 py-2 text-white transition hover:bg-[#20bd5a]"
                aria-label="Contacter via WhatsApp"
              >
                <WhatsAppIcon />
                <span className="text-xs font-bold uppercase tracking-[0.1em]">
                  WhatsApp
                </span>
              </Link>
            )}
          </div>

          {/* Horaires */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-4">
              Horaires
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2.5">
                <Clock className="h-3.5 w-3.5 shrink-0 text-[var(--gold)] mt-0.5" strokeWidth={1.8} />
                <div className="text-sm text-white/55 space-y-1">
                  <p>Lun – Ven : 7h30 – 18h00</p>
                  <p>Samedi : 8h00 – 13h00</p>
                  <p className="text-white/30 text-xs">Dimanche : Fermé</p>
                </div>
              </div>
            </div>
            <div className="mt-6 border border-[var(--gold)]/20 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]/70 mb-1">
                Urgence chantier
              </p>
              <p className="text-xs text-white/40">
                Disponible via WhatsApp en dehors des heures d&apos;ouverture.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[var(--line-on-dark)] pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/25 tracking-[0.1em] uppercase">
            © 2026 D-ONE EQUIPMENT SARL · Bocom Yassa, Douala · Cameroun
          </p>
          <p className="text-xs text-white/20 tracking-[0.08em] uppercase">
            Partout au Cameroun
          </p>
        </div>
      </div>
    </footer>
  );
}
