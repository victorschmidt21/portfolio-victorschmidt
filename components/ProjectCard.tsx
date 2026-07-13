import Link from "next/link";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

const categoryLabels: Record<Project["category"], string> = {
  fullstack: "FULL STACK",
  backend: "BACKEND",
  devops: "DEVOPS",
  ai: "IA & AUTOMAÇÃO",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-[14px] border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent-line"
    >
      {/* ponytail: capa em CSS (padrão do style guide) — trocar por screenshot real quando existir */}
      <div className="relative flex h-32 items-center justify-center border-b border-border bg-gradient-to-br from-surface-2 to-elev">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--bg-grid) 1px,transparent 1px),linear-gradient(90deg,var(--bg-grid) 1px,transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <span className="relative font-mono text-[11px] tracking-widest text-text-3">
          {categoryLabels[project.category]}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-text group-hover:text-accent">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[11px] text-accent">
            {project.year}
          </span>
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-text-2">
          {project.description}
        </p>
        <p className="mt-3 font-mono text-xs text-accent">{project.impact}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="tag">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
