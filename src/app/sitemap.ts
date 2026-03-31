import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/portfolio`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/pricing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: "yearly" as const },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
