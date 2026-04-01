import Image from "next/image";
import Link from "next/link";

import { FleetShowcase } from "@/components/fleet-showcase";
import { SectionHeading } from "@/components/section-heading";
import { company, fleet, references } from "@/data/site";

export default function Home() {
  return (
    <>
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

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                { label: "Machine phare", value: "Chargeuse 5 t" },
                { label: "Zone prioritaire", value: "Douala · Kribi" },
                { label: "Canal rapide", value: "Devis · WhatsApp" },
              ].map((item) => (
                <div key={item.label} className="border border-white/12 bg-white/6 px-5 py-5 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/56">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-3xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

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
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-4 lg:px-8">
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
            <Link
              key={item.title}
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
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <SectionHeading
          eyebrow="Flotte disponible"
          title="Consultez les machines actuellement proposees."
          copy="Selectionnez un engin pour voir son visuel, ses donnees utiles et acceder a sa fiche detaillee."
        />

        <div className="mt-10">
          <FleetShowcase items={fleet} />
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface-strong)]">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <SectionHeading
          eyebrow="Besoins couverts"
          title="Des machines prevues pour les operations les plus courantes."
          copy="Chargement, manutention, terrassement et preparation de plateforme pour les chantiers BTP, industriels et logistiques."
        />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
              <div key={item.title} className="border border-[var(--line)] bg-white p-6">
                <p className="data-label">Secteur</p>
                <h3 className="mt-3 font-display text-4xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <SectionHeading
          eyebrow="References terrain"
          title="Des points d'ancrage a Douala, Kribi et Yaounde."
          copy="Retrouvez les zones prioritaires, les environnements vises et la collaboration terrain deja mise en avant."
        />

        <div className="mt-10 space-y-6">
          {references.map((reference) => (
            <article key={reference.title} className="overflow-hidden border border-[var(--line)] bg-white">
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
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[#18201b] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_320px] lg:px-8">
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
              <Link href={company.whatsappUrl} className="btn-secondary border-white/22 text-white hover:bg-white/8">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
