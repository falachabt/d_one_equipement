import type { MetadataRoute } from "next";

import { articles, fleet } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://donequipment.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/flotte",
    "/services",
    "/references",
    "/a-propos",
    "/contact",
    "/location-pelle-douala",
    "/location-pelle-yaounde",
    "/location-chargeuse-douala",
    "/location-engins-mines",
    "/location-engins-kribi",
    "/conseils",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...fleet.map((item) => ({
      url: `${baseUrl}/flotte/${item.slug}`,
      lastModified: new Date(),
    })),
    ...articles.map((item) => ({
      url: `${baseUrl}/conseils/${item.slug}`,
      lastModified: new Date(),
    })),
  ];
}
