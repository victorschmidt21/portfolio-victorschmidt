import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import { SkillsGrid } from "@/components/SkillsGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Victor Schmidt — Desenvolvedor Full Stack com ~2 anos de experiência em sistemas escaláveis, CI/CD e automação inteligente com IA.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-[840px] px-6 pt-20 lg:px-8">
        <Reveal>
          <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-accent">
            <span className="h-px w-8 bg-accent-line" aria-hidden />
            {"// SOBRE"}
          </div>
          <h1 className="text-[clamp(32px,5vw,52px)] font-semibold leading-tight tracking-tight">
            Sobre Victor Schmidt
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-text-2">
            Desenvolvedor Full Stack com cerca de 2 anos de experiência
            construindo sistemas escaláveis. Especialista em orquestração de
            infraestrutura, CI/CD e automação inteligente com IA. Obcecado por
            qualidade de código, observabilidade e por entregar valor real —
            gosto de resolver problemas reais com tecnologia moderna.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href={SITE.resume} download>
              Baixar CV →
            </Button>
            <Button href={SITE.linkedin} variant="secondary" external>
              LinkedIn
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Experiência — banda elevada com linha do tempo */}
      <section className="mt-20 border-y border-border bg-elev">
        <div className="mx-auto max-w-[840px] px-6 py-24 lg:px-8">
          <SectionHeader
            number="01"
            kicker="EXPERIÊNCIA"
            title="Linha do tempo"
          />
          <div className="relative grid gap-14 border-l border-border pl-8">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full border border-accent-line bg-accent shadow-[0_0_8px_var(--accent)]"
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <span className="font-mono text-xs text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-text-2">
                    {exp.title}
                  </div>
                  <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-text-2">
                    {exp.description}
                  </p>
                  <ul className="mt-4 grid gap-2.5">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-relaxed text-text-2"
                      >
                        <span aria-hidden className="mt-0.5 text-accent">
                          →
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-xs text-text-3">
                    {exp.technologies.join(" · ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formação */}
      <section>
        <div className="mx-auto max-w-[840px] px-6 py-24 lg:px-8">
          <SectionHeader number="02" kicker="FORMAÇÃO" title="Formação" />
          <Reveal>
            <div className="border-t-2 border-accent-line pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  BIOPARK — Engenharia de Software
                </h3>
                <span className="font-mono text-xs text-accent">
                  2024 — 2027
                </span>
              </div>
              <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-text-2">
                Bacharelado focado em desenvolvimento de sistemas, engenharia
                de requisitos, qualidade de software e metodologias ágeis.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills — banda elevada */}
      <section className="border-t border-border bg-elev">
        <div className="mx-auto max-w-[840px] px-6 py-24 lg:px-8">
          <SectionHeader
            number="03"
            kicker="STACK"
            title="Stack & competências"
          />
          <SkillsGrid />
        </div>
      </section>
    </>
  );
}
