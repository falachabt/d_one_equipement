import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  Shovel,
  UserCheck,
  Wrench,
  Phone,
  MessageCircle,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { HeroAnimated } from "@/components/hero-animated";
import { company, fleet, references } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Location d'engins lourds au Cameroun",
  description:
    "Chargeuses et pelles pour chantiers BTP, industrie et logistique. Devis rapide via WhatsApp. Douala, Yaoundé, Kribi.",
  path: "/",
});


const services = [
  {
    icon: Truck,
    title: "Location de chargeuses",
    summary: "Chargement, manutention et terrassement. Machines récentes, prêtes à l'emploi.",
  },
  {
    icon: Shovel,
    title: "Location de pelles",
    summary: "Excavation, VRD et préparation de plateforme. Adaptées à tous types de chantiers.",
  },
  {
    icon: UserCheck,
    title: "Avec chauffeur qualifié",
    summary: "Opérateurs expérimentés inclus. Démarrage immédiat, sans formation requise.",
  },
  {
    icon: Wrench,
    title: "Support technique",
    summary: "Suivi mécanique pendant toute la durée de location. Intervention rapide garantie.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Contactez-nous",
    text: "WhatsApp ou formulaire — réponse en moins de 24h.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Décrivez votre chantier",
    text: "Nature du travail, durée, localisation. On s'adapte à votre besoin.",
  },
  {
    icon: Phone,
    num: "03",
    title: "Devis sur mesure",
    text: "Proposition claire, sans surprise. Réponse sous 24h.",
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "Engin sur site",
    text: "Livraison partout au Cameroun. Chantier lancé.",
  },
];

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <HeroAnimated
        slogan={company.slogan}
        subtitle="Location d'engins lourds · Partout au Cameroun"
        primaryCta={{ label: "Demander un devis", href: "/contact#devis" }}
        secondaryCta={{ label: "Voir nos engins", href: "/flotte" }}
        whatsappUrl={company.whatsappUrl ?? null}
      />

      {/* ========== SERVICES — 4 panneaux sombres ========== */}
      <section className="section-dark">
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <Link
                  href="/services"
                  className="group flex flex-col gap-5 p-8 min-h-[280px] border-r border-b border-[var(--line-on-dark)] hover:bg-white/[0.05] transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-[var(--gold)]/30 text-[var(--gold)]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-on-dark)] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--gold)] group-hover:gap-3 transition-all">
                    En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </section>

      {/* ========== QUI SOMMES-NOUS ========== */}
      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimateIn>
              <p className="eyebrow">Qui sommes-nous ?</p>
              <h2 className="mt-4 section-title">
                D-ONE EQUIPMENT SARL.<br />
                <span className="text-[var(--gold)]">Basés à Douala.</span>
              </h2>
              <p className="mt-5 lead-copy">
                Société spécialisée dans la location d&apos;engins lourds, implantée à la station Bocom Yassa, Douala. Nous mettons à disposition des chargeuses et pelles adaptées aux chantiers BTP, aux sites industriels et aux plateformes logistiques.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Machines neuves, entretenues et prêtes à l'emploi",
                  "Avec ou sans chauffeur qualifié",
                  "Intervention partout au Cameroun",
                  "Réponse devis sous 24h — WhatsApp disponible",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/a-propos" className="btn-secondary">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact#devis" className="btn-primary">
                  Nous contacter
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.12} direction="left">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/media/shantui-l55-c5.png"
                    alt="Chargeuse Shantui L55 D-ONE EQUIPMENT"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/media/shantui-case-1.jpg"
                      alt="Chantier D-ONE EQUIPMENT Cameroun"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/media/services/service-chauffeur.png"
                      alt="Opérateur qualifié D-ONE EQUIPMENT"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ========== MARQUES — CAT, SEM, SHANTUI, SANY ========== */}
      <section className="border-y border-[var(--line)] bg-[var(--surface)] py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--muted)] mb-8">
            Marques que nous proposons
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--line)]">
            {[
              { name: "Caterpillar", abbr: "CAT", origin: "États-Unis" },
              { name: "SEM", abbr: "SEM", origin: "Chine / CAT" },
              { name: "Shantui", abbr: "SHANTUI", origin: "Chine" },
              { name: "SANY", abbr: "SANY", origin: "Chine" },
            ].map((brand) => (
              <div
                key={brand.abbr}
                className="bg-[var(--surface)] py-8 px-6 flex flex-col items-center justify-center gap-2 hover:bg-[var(--background)] transition"
              >
                <span className="font-display text-2xl font-bold uppercase tracking-[0.1em] text-[var(--foreground)]">
                  {brand.abbr}
                </span>
                <span className="text-xs text-[var(--muted)] uppercase tracking-[0.1em]">
                  {brand.origin}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COMMENT ÇA MARCHE ========== */}
      <section className="section-light section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow">Processus simple</p>
            <h2 className="mt-4 section-title max-w-lg">
              Votre engin sur site en 4 étapes.
            </h2>
          </AnimateIn>

          <StaggerChildren className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.num}>
                  <div className="relative">
                    <span className="font-display text-[5rem] font-bold leading-none text-[var(--line)] select-none">
                      {step.num}
                    </span>
                    <div className="mt-2 flex h-11 w-11 items-center justify-center bg-[var(--gold)] text-[var(--surface-ink)]">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-[0.06em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {step.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <AnimateIn delay={0.3} className="mt-12">
            <Link href="/contact#devis" className="btn-primary">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ========== NOS ENGINS — cartes visuelles, pas de specs ========== */}
      <section className="section-alt section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow">Notre flotte</p>
              <h2 className="mt-4 section-title">Nos engins disponibles.</h2>
            </div>
            <Link href="/flotte" className="btn-secondary shrink-0">
              Voir toute la flotte <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateIn>

          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
            {fleet.map((machine) => (
              <StaggerItem key={machine.slug}>
                <Link
                  href={`/flotte/${machine.slug}`}
                  className="group block overflow-hidden border border-[var(--line)] bg-[var(--background)] hover:border-[var(--gold)] transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 tag text-[10px]">
                      {machine.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold uppercase tracking-[0.04em]">
                      {machine.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{machine.capacity} · {machine.brand}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--gold)] group-hover:gap-3 transition-all">
                      Voir la fiche <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ========== ZONES D'INTERVENTION ========== */}
      <section className="section-dark section-spacing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow text-[var(--gold)]">Présence terrain</p>
              <h2 className="mt-4 section-title text-white">Là où vous construisez.</h2>
            </div>
            <Link href="/references" className="text-sm font-bold uppercase tracking-[0.1em] text-white/40 hover:text-[var(--gold)] transition flex items-center gap-2">
              Voir nos références <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </AnimateIn>

          <StaggerChildren className="mt-12 grid gap-4 md:grid-cols-3" staggerDelay={0.08}>
            {references.map((ref) => (
              <StaggerItem key={ref.title}>
                <Link href="/references" className="group relative overflow-hidden aspect-[4/3] block">
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,11,0.85)] via-[rgba(10,15,11,0.2)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                      {ref.location}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold uppercase tracking-[0.04em] text-white">
                      {ref.title}
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <AnimateIn className="mt-10 grid grid-cols-3 gap-px bg-[var(--line-on-dark)]" delay={0.2}>
            {[
              { value: "100%", label: "Flotte neuve" },
              { value: "24h", label: "Réponse devis" },
              { value: "3+", label: "Secteurs" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--surface-ink)] text-center py-8 px-4">
                <p className="font-display text-[2.8rem] font-bold leading-none text-[var(--gold)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="relative overflow-hidden min-h-[480px] flex items-center">
        <Image
          src="/media/aerial-construction-site.png"
          alt="Vue aérienne chantier camerounais"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,15,11,0.95)] via-[rgba(10,15,11,0.8)] to-[rgba(10,15,11,0.3)]" />

        <AnimateIn className="relative z-10 mx-auto max-w-7xl w-full px-6 py-24 lg:px-8">
          <div className="max-w-xl">
            <p className="eyebrow">Parlez-nous de votre chantier</p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] uppercase tracking-[0.02em] text-white">
              Devis gratuit. Réponse rapide.
            </h2>
            <p className="mt-4 text-base text-white/50">
              Décrivez votre besoin — durée, zone, type d&apos;engin. On revient vers vous en moins de 24h.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis
              </Link>
              {company.whatsappUrl && (
                <Link href={company.whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp direct
                </Link>
              )}
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
