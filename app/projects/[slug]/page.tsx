import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="mx-auto max-w-[840px] px-6 py-20 lg:px-8">
      <Link
        href="/projects"
        className="font-mono text-xs text-text-3 transition-colors hover:text-text"
      >
        ← Todos os projetos
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Badge variant="accent">{project.impact}</Badge>
        <span className="font-mono text-xs text-text-3">{project.year}</span>
      </div>
      <h1 className="mt-5 text-[clamp(32px,5vw,52px)] font-semibold leading-tight tracking-tight">
        {project.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-text-2">
        {project.longDescription}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3.5">
        <Button href={project.repository} external>
          Ver no GitHub →
        </Button>
        {project.liveUrl && (
          <Button href={project.liveUrl} variant="secondary" external>
            Live demo
          </Button>
        )}
      </div>

      <div className="mt-14 grid gap-4">
        {(
          [
            ["Problema", project.problem],
            ["Solução", project.solution],
            ["Resultado", project.result],
          ] as const
        ).map(([label, text], i) => (
          <Reveal key={label} delay={i * 0.1}>
            <div className="rounded-[14px] border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent-line">
              <div className="mb-3 font-mono text-[11px] tracking-[0.12em] text-accent">
                {label.toUpperCase()}
              </div>
              <p className="leading-relaxed text-text-2">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="mb-6 text-xl font-semibold">Projetos relacionados</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
