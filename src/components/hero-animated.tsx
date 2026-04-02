"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroAnimatedProps = {
  slogan: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  whatsappUrl?: string | null;
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function HeroAnimated({ slogan, subtitle, primaryCta, secondaryCta, whatsappUrl }: HeroAnimatedProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <Image
        src="/media/hero-loader-action.png"
        alt="Chargeuse en action sur un chantier au Cameroun"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover hero-video-bg"
        aria-hidden="true"
      >
        <source src="/media/videos/clean/earthmoving-closeup-clean.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,15,11,0.15)] via-[rgba(10,15,11,0.4)] to-[rgba(10,15,11,0.97)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <p
          className="eyebrow !text-[var(--gold)] hero-item"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          D-ONE EQUIPMENT
        </p>

        <h1
          className="mt-4 max-w-4xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[0.02em] text-white uppercase"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          {slogan}
        </h1>

        <p
          className="mt-5 text-base text-white/55 uppercase tracking-[0.1em]"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
          }}
        >
          {subtitle}
        </p>

        <div
          className="mt-8 flex flex-wrap gap-4"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
          }}
        >
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="btn-secondary border-t-[#ffffff] border-r-[#ffffff] border-b-[#ffffff] border-l-[#ffffff] text-[#ffffff]"
            >
              {secondaryCta.label}
            </Link>
          )}
          {whatsappUrl && (
            <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <WhatsAppIcon />
              WhatsApp
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
