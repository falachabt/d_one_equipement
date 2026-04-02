import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 lg:px-8">
        <p className="eyebrow">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1] tracking-[0.04em] text-white uppercase">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 uppercase tracking-[0.04em]">
          {description}
        </p>
      </div>
    </section>
  );
}
