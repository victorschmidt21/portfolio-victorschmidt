import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de Full Stack, DevOps e IA — agentes RAG, pipelines CI/CD com observabilidade e microsserviços.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-20 lg:px-8">
      <div className="mb-4 font-mono text-xs tracking-[0.14em] text-accent">
        {"// PROJETOS"}
      </div>
      <h1 className="text-[clamp(32px,5vw,52px)] font-semibold leading-tight tracking-tight">
        Projetos
      </h1>
      <p className="mt-4 max-w-[56ch] text-lg text-text-2">
        Problemas reais, soluções medidas. Full Stack, DevOps e automação com
        IA.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
