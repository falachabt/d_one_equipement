import type { Metadata } from "next";

import { company } from "@/data/site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
export const defaultOgImage = "/media/shantui-gallery-1.jpg";

type BuildPageMetadataArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  imageAlt = company.name,
  keywords,
  type = "website",
}: BuildPageMetadataArgs): Metadata {
  const socialTitle = `${title} | ${company.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: company.name,
      locale: "fr_FR",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
