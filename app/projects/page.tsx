import type { Metadata } from "next";
import { ProjectsTabs } from "@/components/ProjectsTabs";
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

      <div className="mt-12">
        <ProjectsTabs />
      </div>
    </div>
  );
}
