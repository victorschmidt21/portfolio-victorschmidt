import type { Metadata } from "next";
import Link from "next/link";
import { projects, labProjects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos profissionais em produção (com métricas reais) e projetos de lab com código aberto — Full Stack, DevOps e IA.",
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
        <p className="mt-4 max-w-[58ch] text-lg text-text-2">
          Dois tipos de trabalho: sistemas{" "}
          <strong className="font-medium text-text">em produção</strong>,
          construídos nas empresas onde atuei, e{" "}
          <strong className="font-medium text-text">projetos de lab</strong> —
          estudos e experimentos com código aberto.
        </p>
      </Reveal>

      {/* ===== Profissional — em produção ===== */}
      <section className="mt-16">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Profissional
            </h2>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-dim px-3 py-0.5 font-mono text-[11px] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--accent)]" />
              em produção · métricas reais
            </span>
          </div>
          <p className="mt-2 max-w-[64ch] text-sm text-text-2">
            Desenvolvidos em ambiente corporativo e rodando em produção. O
            código é proprietário — cada estudo de caso descreve o problema, a
            solução e o resultado medido.
          </p>
        </Reveal>
        <div className="mt-8 border-t border-border">
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
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-accent sm:text-2xl">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-text-3">
                      {project.company} · {project.year}
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
      </section>

      {/* ===== Lab — estudos & experimentos ===== */}
      <section className="mt-20">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Lab</h2>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-2 bg-surface-2 px-3 py-0.5 font-mono text-[11px] text-text-2">
              estudos & experimentos · código aberto
            </span>
          </div>
          <p className="mt-2 max-w-[64ch] text-sm text-text-2">
            Projetos pessoais para explorar tecnologias e arquiteturas. Todo o
            código está disponível no GitHub.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-x-8 border-t border-border sm:grid-cols-2 sm:gap-x-12">
          {labProjects.map((lab, i) => (
            <Reveal key={lab.name} delay={(i % 2) * 0.08}>
              <a
                href={lab.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-4 flex h-full flex-col border-b border-border px-4 py-7 transition-colors duration-200 hover:bg-surface"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                    {lab.name}
                  </h3>
                  <span
                    aria-hidden
                    className="font-mono text-sm text-text-3 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-2">
                  {lab.description}
                </p>
                <p className="mt-4 font-mono text-xs text-text-3">
                  {lab.technologies.join(" · ")}
                  <span className="mx-2 text-accent-line">·</span>
                  {lab.year}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
