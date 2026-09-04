import type { MetadataRoute } from "next";
import { SITE_URL, PROVIDERS } from "@/lib/data";
import { blogPosts } from "@/lib/posts";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "comparativo/",
  "blog/",
  "faq/",
  "sobre/",
  "contato/",
  "anuncie/",
  "politica-de-privacidade/",
  "termos-de-uso/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: new Date(),
  }));

  const providerEntries = PROVIDERS.map((p) => ({
    url: `${SITE_URL}/analises/${p.slug}/`,
    lastModified: new Date(),
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
  }));

  return [...staticEntries, ...providerEntries, ...blogEntries];
}
