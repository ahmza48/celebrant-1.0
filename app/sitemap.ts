import type { MetadataRoute } from "next";
import { seoServicePages } from "@/lib/seo-pages";
import { site } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/gallery",
  "/testimonials",
  "/faq",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...seoServicePages.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
