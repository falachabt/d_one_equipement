import type { Metadata } from "next";
import { Rajdhani, Source_Sans_3 } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company } from "@/data/site";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "D-ONE EQUIPMENT | Location d'engins lourds au Cameroun",
    template: "%s | D-ONE EQUIPMENT",
  },
  description: company.description,
  keywords: company.keywords,
  openGraph: {
    title: "D-ONE EQUIPMENT",
    description: company.description,
    url: siteUrl,
    siteName: "D-ONE EQUIPMENT",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/media/shantui-gallery-1.jpg",
        width: 1241,
        height: 756,
        alt: "Chargeuse D-ONE EQUIPMENT sur chantier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D-ONE EQUIPMENT",
    description: company.description,
    images: ["/media/shantui-gallery-1.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: company.description,
  slogan: company.slogan,
  telephone: company.phone,
  email: company.email,
  areaServed: company.areas,
  url: siteUrl,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${rajdhani.variable} ${sourceSans.variable}`}
    >
      <body>
        <Script
          id="d-one-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="site-shell">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
