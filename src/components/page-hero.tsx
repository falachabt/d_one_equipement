import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  ctaHref = "/contact#devis",
  ctaLabel = "Demander un devis",
}: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface-strong)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-18">
        <div className="grid gap-0 overflow-hidden border border-[var(--line)] bg-white lg:grid-cols-[1fr_360px]">
          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_320px] lg:p-10">
            <div className="max-w-3xl">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92] font-semibold text-[var(--foreground)]">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] lg:text-lg">
                {description}
              </p>
            </div>

            <div className="border border-[var(--line)] bg-[var(--surface)] p-5">
              <p className="data-label">Acces</p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href={ctaHref} className="btn-primary w-full justify-center">
                  {ctaLabel}
                </Link>
                <Link href="/flotte" className="btn-secondary w-full justify-center">
                  Voir la flotte
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] border-t border-[var(--line)] lg:border-t-0 lg:border-l">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
