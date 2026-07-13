import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
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
          Índice de projetos
        </h1>
        <p className="mt-4 max-w-[56ch] text-lg text-text-2">
          Problemas reais, soluções medidas. Full Stack, DevOps e automação com
          IA.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-border">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <Link
              href={`/projects/${project.slug}`}
              className="group -mx-4 grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-border px-4 py-8 transition-colors duration-200 hover:bg-surface sm:grid-cols-[auto_1fr_auto]"
            >
              <span className="font-mono text-sm text-text-3 transition-colors group-hover:text-accent">
                0{i + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="text-xl font-semibold transition-colors group-hover:text-accent sm:text-2xl">
                    {project.title}
                  </h2>
                  <span className="font-mono text-xs text-text-3">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-text-2">
                  {project.description}
                </p>
                <p className="mt-3 font-mono text-xs text-text-3">
                  {project.technologies.join(" · ")}
                </p>
              </div>
              <div className="col-start-2 flex items-center gap-4 sm:col-start-3 sm:flex-col sm:items-end sm:gap-2">
                <span className="font-mono text-xs text-accent">
                  {project.impact}
                </span>
                <span
                  aria-hidden
                  className="text-text-3 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
