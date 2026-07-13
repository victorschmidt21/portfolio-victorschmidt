import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, priority: 1 },
    { url: `${SITE.url}/projects`, priority: 0.8 },
    { url: `${SITE.url}/about`, priority: 0.8 },
    ...projects.map((project) => ({
      url: `${SITE.url}/projects/${project.slug}`,
      priority: 0.6,
    })),
  ];
}
