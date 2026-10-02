import type { MetadataRoute } from "next";
import { siteMeta } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteMeta.siteUrl}/sitemap.xml`,
    host: siteMeta.siteUrl,
  };
}
