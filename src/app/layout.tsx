import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Rajdhani, Source_Sans_3 } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company } from "@/data/site";
import { siteUrl } from "@/lib/metadata";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Location d'engins lourds au Cameroun : chargeuses et pelles | D-ONE EQUIPMENT",
    template: "%s | D-ONE EQUIPMENT",
  },
  description: company.description,
  keywords: company.keywords,
  openGraph: {
    title: "D-ONE EQUIPMENT",
    description: company.description,
    siteName: "D-ONE EQUIPMENT",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D-ONE EQUIPMENT",
    description: company.description,
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
  priceRange: "Sur devis",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Station Bocom Yassa",
    addressLocality: "Douala",
    addressCountry: "CM",
  },
  geo: { "@type": "GeoCoordinates", latitude: 4.0511, longitude: 9.7679 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  areaServed: company.areas,
  url: siteUrl,
  sameAs: [
    company.socialLinks.facebook,
    company.socialLinks.instagram,
    company.socialLinks.linkedin,
  ],
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
        <Analytics />
      </body>
    </html>
  );
}
