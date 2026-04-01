import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="eyebrow">Page introuvable</p>
      <h1 className="mt-4 font-display text-5xl font-semibold uppercase tracking-[0.05em] text-white">
        Cette route n&apos;existe pas.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
        Revenez vers l&apos;accueil, la flotte ou la page contact pour poursuivre la
        navigation.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Retour accueil
        </Link>
        <Link href="/flotte" className="btn-secondary">
          Voir la flotte
        </Link>
      </div>
    </section>
  );
}
