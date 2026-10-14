import type { MetadataRoute } from "next";
import routes from "@/data/routes.json";

const BASE_URL = "https://moorishtour.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-14T00:00:00Z");
  return [
    { url: BASE_URL + "/", lastModified, changeFrequency: "weekly", priority: 1 },
    ...routes.map((item) => ({
      url: BASE_URL + item.path + "/",
      lastModified,
      changeFrequency: "monthly" as const,
      priority: item.kind === "tour" ? 0.8 : item.kind === "blog" ? 0.7 : 0.5,
    })),
  ];
}
