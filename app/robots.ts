import type { MetadataRoute } from "next";

const SITE_URL = "https://www.rcjnext.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/client/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
