import Image from "next/image";
import Link from "next/link";
import { Truck, MapPin, Clock } from "lucide-react";

import { FleetShowcase } from "@/components/fleet-showcase";
import { SectionHeading } from "@/components/section-heading";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/animate-in";
import { company, fleet, references } from "@/data/site";

const heroStats = [
  {
    icon: Truck,
    label: "Chargeuse phare",
    value: "Shantui 5T",
    sub: "162 kW · 3 m³",
    href: "/flotte/shantui-l55-c5",
  },
  {
    icon: MapPin,
    label: "Zones d'intervention",
    value: "Douala · Kribi",
    sub: "Yaoundé & tout le Cameroun",
    href: "/references",
  },
  {
    icon: Clock,
    label: "Réponse rapide",
    value: "Devis sous 24 h",
    sub: "WhatsApp ou formulaire",
    href: "/contact#devis",
  },
];

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
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative border-b border-[#233028] bg-[#152018] text-white">
        <div className="absolute inset-0">
          <Image
            src="/media/shantui-gallery-1.jpg"
            alt="Chargeuse D-ONE EQUIPMENT sur chantier"
            fill
            priority
            className="object-cover opacity-28"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,22,17,0.92),rgba(14,22,17,0.78),rgba(14,22,17,0.64))]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_340px] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <AnimateIn delay={0}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f0cd60]">
                D-ONE EQUIPMENT
              </p>
              <h1 className="mt-5 font-display text-[clamp(3rem,6vw,6rem)] leading-[0.88] font-semibold">
                Location d&apos;engins pour chantiers BTP, industrie et logistique.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Chargeuses, pelles, service avec chauffeur et demande de devis
                rapide pour Douala, Yaounde, Kribi et les zones d&apos;intervention
                partout au Cameroun.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact#devis" className="btn-primary">
                  Demander un devis
                </Link>
                <Link href="/flotte" className="btn-secondary border-white/20 text-white hover:bg-white/8">
                  Acceder a la flotte
                </Link>
              </div>
            </AnimateIn>

            {/* ─── HERO STATS ─── */}
            <StaggerChildren className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3" staggerDelay={0.12}>
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <StaggerItem key={stat.label}>
                    <Link
                      href={stat.href}
                      className="group block border border-white/12 bg-white/6 px-5 py-5 backdrop-blur-sm transition hover:border-white/22 hover:bg-white/10"
                    >
                      <Icon className="h-5 w-5 text-[#f0cd60] transition group-hover:scale-110" strokeWidth={1.75} />
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/56">
                        {stat.label}
                      </p>
                      <p className="mt-2 font-display text-2xl font-semibold leading-tight">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[11px] text-white/50">{stat.sub}</p>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </div>

          {/* ─── QUICK CONTACT SIDEBAR ─── */}
          <AnimateIn delay={0.2} direction="left">
            <aside className="self-end border border-white/12 bg-[rgba(249,246,238,0.94)] p-6 text-[var(--foreground)]">
              <p className="data-label">Contact rapide</p>
              <div className="mt-5 space-y-4">
                {[
                  {
                    title: "Voir les machines",
                    copy: "Consultez la flotte et les principales caracteristiques.",
                    href: "/flotte",
                  },
                  {
                    title: "Demande de devis",
                    copy: "Indiquez l'engin souhaite, la duree et la localisation du chantier.",
                    href: "/contact#devis",
                  },
                  {
                    title: "Parler a l'equipe",
                    copy: "Contactez-nous directement par WhatsApp ou par telephone.",
                    href: company.whatsappUrl,
                  },
                ].map((item) => (
                  <Link key={item.title} href={item.href} className="block border border-[var(--line)] bg-white p-4 hover:bg-[var(--surface-strong)]">
                    <h2 className="font-display text-2xl font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
                  </Link>
                ))}
              </div>
            </aside>
          </AnimateIn>
        </div>
      </section>

      {/* ─── NAV SHORTCUTS ────────────────────────────────────────── */}
      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <StaggerChildren className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-4 lg:px-8" staggerDelay={0.08}>
          {[
            {
              title: "Notre flotte",
              copy: "Chargeuses, pelles et futurs segments adaptes aux besoins chantier.",
              href: "/flotte",
            },
            {
              title: "Nos services",
              copy: "Location simple, avec chauffeur et accompagnement technique.",
              href: "/services",
            },
            {
              title: "References",
              copy: "Douala, Kribi, Yaounde et environnements d'intervention.",
              href: "/references",
            },
            {
              title: "Contact",
              copy: "Demande de devis, coordonnees et zones d'intervention.",
              href: "/contact",
            },
          ].map((item, index) => (
            <StaggerItem key={item.title}>
              <Link
                href={item.href}
                className={`block border-[var(--line)] px-6 py-7 hover:bg-[var(--surface-strong)] ${
                  index < 3 ? "lg:border-r" : ""
                }`}
              >
                <p className="data-label">Navigation</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ─── FLEET SHOWCASE ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Flotte disponible"
            title="Consultez les machines actuellement proposees."
            copy="Selectionnez un engin pour voir son visuel, ses donnees utiles et acceder a sa fiche detaillee."
          />
        </AnimateIn>

        <AnimateIn delay={0.12} className="mt-10">
          <FleetShowcase items={fleet} />
        </AnimateIn>
      </section>

      {/* ─── SECTORS ──────────────────────────────────────────────── */}
      <section className="border-y border-[var(--line)] bg-[var(--surface-strong)]">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Besoins couverts"
              title="Des machines prevues pour les operations les plus courantes."
              copy="Chargement, manutention, terrassement et preparation de plateforme pour les chantiers BTP, industriels et logistiques."
            />
          </AnimateIn>

          <StaggerChildren className="mt-10 grid gap-6 lg:grid-cols-3" staggerDelay={0.1}>
            {[
              {
                title: "BTP et terrassement",
                copy: "Preparation de plateformes, chargement de camions, manutention de materiaux et travaux de soutien sur chantier.",
              },
              {
                title: "Industrie et vrac",
                copy: "Circulation de granulats, ciment, minerais et autres flux de matieres dans des environnements de production.",
              },
              {
                title: "Port et logistique",
                copy: "Interventions liees aux plateformes logistiques, zones portuaires et circuits de manutention lourde.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="border border-[var(--line)] bg-white p-6">
                  <p className="data-label">Secteur</p>
                  <h3 className="mt-3 font-display text-4xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{item.copy}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── REFERENCES ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="References terrain"
            title="Des points d'ancrage a Douala, Kribi et Yaounde."
            copy="Retrouvez les zones prioritaires, les environnements vises et la collaboration terrain deja mise en avant."
          />
        </AnimateIn>

        <div className="mt-10 space-y-6">
          {references.map((reference, i) => (
            <AnimateIn key={reference.title} delay={i * 0.08}>
              <article className="overflow-hidden border border-[var(--line)] bg-white">
                <div className="grid gap-0 lg:grid-cols-[320px_1fr]">
                  <div className="relative min-h-[240px] border-b border-[var(--line)] lg:border-b-0 lg:border-r">
                    <Image
                      src={reference.image}
                      alt={reference.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                  <div className="grid gap-5 p-6 lg:grid-cols-[1fr_220px] lg:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="tag">{reference.location}</span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6d756e]">
                          {reference.status}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-4xl font-semibold text-[var(--foreground)]">
                        {reference.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-sm leading-8 text-[var(--muted)]">
                        {reference.description}
                      </p>
                    </div>
                    <div className="border border-[var(--line)] bg-[var(--surface)] p-4">
                      <p className="data-label">Intervention</p>
                      <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                        {reference.location === "Douala"
                          ? "Logistique, manutention et activites terrain."
                          : reference.location === "Kribi"
                            ? "Port, industrie et preparation de plateforme."
                            : "Chantiers urbains, VRD et travaux publics."}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ─── CTA FOOTER BAND ──────────────────────────────────────── */}
      <section className="border-t border-[var(--line)] bg-[#18201b] text-white">
        <AnimateIn className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_320px] lg:px-8">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f0cd60]">
              D-ONE EQUIPMENT
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.94]">
              Parlez-nous de votre chantier.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/76">
              Indiquez le type d&apos;engin recherche, la duree souhaitee et la
              localisation du chantier. L&apos;equipe revient vers vous avec une
              reponse rapide.
            </p>
          </div>
          <div className="space-y-4 border border-white/12 bg-white/6 p-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/56">
                Telephone
              </p>
              <p className="mt-2 text-base font-semibold">{company.phone}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/56">
                Email
              </p>
              <p className="mt-2 text-base font-semibold">{company.email}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis
              </Link>
              <Link
                href={company.whatsappUrl}
                className="inline-flex items-center gap-2 border border-white/22 px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-white/8"
              >
                <WhatsAppIconInline />
                WhatsApp
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
