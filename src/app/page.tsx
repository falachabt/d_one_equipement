import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company, fleet, services, references } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Location d'engins lourds au Cameroun",
  description:
    "Chargeuses et pelles pour chantiers BTP, industrie et logistique. Devis rapide via WhatsApp. Douala, Yaoundé, Kribi.",
  path: "/",
});

const featuredMachine = fleet[0];

function WhatsAppIconInline() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ========== HERO FULLSCREEN ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/media/hero-loader-action.png"
          alt="Chargeuse en action sur un chantier au Cameroun"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,15,11,0.3)] via-[rgba(10,15,11,0.45)] to-[rgba(10,15,11,0.88)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow !text-[var(--gold)]">
              D-ONE EQUIPMENT
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,7.5vw,7rem)] font-bold leading-[0.92] tracking-[0.03em] text-white uppercase">
              {company.slogan}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 uppercase tracking-[0.06em]">
              Location d&apos;engins lourds · Douala · Yaoundé · Kribi
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis
              </Link>
              {company.whatsappUrl && (
                <Link
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsAppIconInline />
                  WhatsApp
                </Link>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ========== SERVICES — dark panels like Tractafric ========== */}
      <section className="section-dark">
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href="/contact#devis"
                className="group relative flex flex-col justify-end min-h-[320px] p-8 border-r border-b border-[var(--line-on-dark)] hover:bg-white/[0.04] transition"
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted-on-dark)] leading-relaxed">
                  {service.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--gold)] group-hover:gap-3 transition-all">
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ========== MACHINE EN VEDETTE — full-width split ========== */}
      <section className="section-light">
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <AnimateIn className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[550px]">
            <Image
              src={featuredMachine.image}
              alt={featuredMachine.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimateIn>

          {/* Info */}
          <AnimateIn delay={0.1} direction="left" className="flex items-center">
            <div className="p-10 lg:p-16 space-y-6 w-full">
              <span className="tag">
                {featuredMachine.badge}
              </span>
              <h2 className="font-display text-[clamp(2.5rem,4.5vw,5rem)] font-bold leading-[0.95] uppercase tracking-[0.03em] text-[var(--foreground)]">
                {featuredMachine.name}
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {featuredMachine.specs.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="border border-[var(--line)] p-4">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] font-bold">
                      {spec.label}
                    </p>
                    <p className="mt-1 text-xl font-bold font-display">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href={`/flotte/${featuredMachine.slug}`} className="btn-primary">
                  Voir la fiche
                </Link>
                <Link href="/flotte" className="btn-secondary">
                  Toute la flotte <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ========== ZONES D'INTERVENTION — dark section with stats ========== */}
      <section className="section-dark section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <h2 className="section-title-centered text-white">
              Zones d&apos;intervention
            </h2>
          </AnimateIn>

          <StaggerChildren className="mt-14 grid gap-5 md:grid-cols-3" staggerDelay={0.1}>
            {references.map((ref) => (
              <StaggerItem key={ref.title}>
                <div className="group overflow-hidden border border-[var(--line-on-dark)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={ref.image}
                      alt={ref.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 border-t border-[var(--line-on-dark)]">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                      {ref.location}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-[0.04em] text-white">
                      {ref.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-on-dark)] leading-relaxed">
                      {ref.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Stats row */}
          <AnimateIn className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4" delay={0.2}>
            <div className="stat-item">
              <p className="stat-value text-[var(--gold)]">3</p>
              <p className="stat-label text-[var(--muted-on-dark)]">Zones</p>
            </div>
            <div className="stat-item">
              <p className="stat-value text-white">5T</p>
              <p className="stat-label text-[var(--muted-on-dark)]">Capacité max</p>
            </div>
            <div className="stat-item">
              <p className="stat-value text-white">2024</p>
              <p className="stat-label text-[var(--muted-on-dark)]">Machines neuves</p>
            </div>
            <div className="stat-item">
              <p className="stat-value text-[var(--gold)]">24h</p>
              <p className="stat-label text-[var(--muted-on-dark)]">Réponse devis</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="relative overflow-hidden">
        <Image
          src="/media/aerial-construction-site.png"
          alt="Vue aérienne chantier camerounais"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,15,11,0.92)] to-[rgba(10,15,11,0.7)]" />

        <AnimateIn className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow">
              Contact
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1] uppercase tracking-[0.03em] text-white">
              Parlez-nous de votre chantier.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              Décrivez votre besoin, la durée et la localisation. Réponse rapide garantie.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis
              </Link>
              {company.whatsappUrl && (
                <Link
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsAppIconInline />
                  WhatsApp
                </Link>
              )}
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
