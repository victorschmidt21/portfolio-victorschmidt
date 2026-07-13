import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de Full Stack, DevOps e IA — agentes RAG, pipelines CI/CD com observabilidade e microsserviços.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-20 lg:px-8">
      <Reveal>
        <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-accent">
          <span className="h-px w-8 bg-accent-line" aria-hidden />
          {"// PROJETOS"}
        </div>
        <h1 className="text-[clamp(32px,5vw,52px)] font-semibold leading-tight tracking-tight">
          Projetos
        </h1>
        <p className="mt-4 max-w-[56ch] text-lg text-text-2">
          Problemas reais, soluções medidas. Full Stack, DevOps e automação com
          IA.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
