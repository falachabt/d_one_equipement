import type { MetadataRoute } from "next";

import { fleet } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/flotte",
    "/references",
    "/a-propos",
    "/contact",
    "/actualites",
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
  ];
}
