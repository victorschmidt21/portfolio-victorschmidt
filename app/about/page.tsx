import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Victor Schmidt — Desenvolvedor Full Stack com ~2 anos de experiência em sistemas escaláveis, CI/CD e automação inteligente com IA.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[840px] px-6 py-20 lg:px-8">
      <div className="mb-4 font-mono text-xs tracking-[0.14em] text-accent">
        {"// SOBRE"}
      </div>
      <h1 className="text-[clamp(32px,5vw,52px)] font-semibold leading-tight tracking-tight">
        Sobre Victor Schmidt
      </h1>
      <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-text-2">
        Desenvolvedor Full Stack com cerca de 2 anos de experiência construindo
        sistemas escaláveis. Especialista em orquestração de infraestrutura,
        CI/CD e automação inteligente com IA. Obcecado por qualidade de código,
        observabilidade e por entregar valor real — gosto de resolver problemas
        reais com tecnologia moderna.
      </p>
      <div className="mt-8 flex flex-wrap gap-3.5">
        <Button href={SITE.resume} download>
          Baixar CV →
        </Button>
        <Button href={SITE.linkedin} variant="secondary" external>
          LinkedIn
        </Button>
      </div>

      {/* Experience timeline */}
      <section className="mt-20">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-accent">01</span>
          <h2 className="text-[28px] font-semibold tracking-tight">
            Experiência
          </h2>
        </div>
        <div className="grid gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-[14px] border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <span className="font-mono text-xs text-accent">
                  {exp.period}
                </span>
              </div>
              <div className="mt-1 text-sm font-medium text-text-2">
                {exp.title}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-text-2">
                {exp.description}
              </p>
              <ul className="mt-4 grid gap-2">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-[13px] leading-relaxed text-text-2"
                  >
                    <span aria-hidden className="mt-0.5 text-accent">
                      →
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="tag">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-20">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-accent">02</span>
          <h2 className="text-[28px] font-semibold tracking-tight">Formação</h2>
        </div>
        <div className="rounded-[14px] border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">
              BIOPARK — Engenharia de Software
            </h3>
            <span className="font-mono text-xs text-accent">2024 — 2027</span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-text-2">
            Bacharelado focado em desenvolvimento de sistemas, engenharia de
            requisitos, qualidade de software e metodologias ágeis.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-accent">03</span>
          <h2 className="text-[28px] font-semibold tracking-tight">
            Stack & competências
          </h2>
        </div>
        <SkillsGrid />
      </section>
    </div>
  );
}
