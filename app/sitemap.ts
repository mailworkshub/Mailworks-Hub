import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pages = ["", "/about", "/locations", "/faq", "/privacy", "/terms", "/customer", "/operator", "/success", "/cancel"];
  const now = new Date();
  return pages.map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
