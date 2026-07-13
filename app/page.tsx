import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Marquee } from "@/components/Marquee";
import { Terminal } from "@/components/Terminal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE } from "@/lib/constants";

const stats = [
  { value: 12, suffix: "x", label: "análise de editais mais rápida" },
  { value: 6, suffix: "x", label: "deploy mais rápido" },
  { value: 20, suffix: "+", label: "processos automatizados" },
  { value: 2, suffix: "", label: "anos construindo software" },
];

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[720px] max-w-full -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent-dim), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-[1080px] px-6 pb-28 pt-24 text-center sm:pt-36 lg:px-8">
          <div className="animate-fadeup">
            <Badge variant="accent">Disponível para novos projetos</Badge>
          </div>
          <h1
            className="animate-fadeup relative mx-auto mt-8 max-w-[18ch] text-[clamp(40px,6.5vw,76px)] font-semibold leading-none tracking-[-0.035em]"
            style={{ animationDelay: "0.08s" }}
          >
            Full stack dev,{" "}
            <span className="text-text-2">construindo a </span>
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              web moderna
            </span>
            <span
              aria-hidden
              className="animate-blink ml-1.5 inline-block h-[0.85em] w-1 translate-y-1.5 bg-accent"
            />
          </h1>
          <p
            className="animate-fadeup relative mx-auto mt-7 max-w-[52ch] text-lg leading-relaxed text-text-2"
            style={{ animationDelay: "0.16s" }}
          >
            Victor Schmidt — construo aplicações escaláveis com React e
            Node.js, orquestro infraestrutura em produção com observabilidade e
            automatizo processos complexos com IA e RAG.
          </p>
          <div
            className="animate-fadeup relative mt-9 flex flex-wrap justify-center gap-3.5"
            style={{ animationDelay: "0.24s" }}
          >
            <Button href="/projects">Ver projetos →</Button>
            <Button href={SITE.github} variant="secondary" external>
              GitHub
            </Button>
            <Button href={SITE.resume} variant="secondary" download>
              Baixar CV
            </Button>
          </div>
          <a
            href="#projetos"
            aria-label="Rolar para projetos"
            className="animate-fadeup mx-auto mt-20 flex w-max flex-col items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-text-3 transition-colors hover:text-text"
            style={{ animationDelay: "0.4s" }}
          >
            SCROLL
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="animate-bounce"
              aria-hidden
            >
              <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ===== Marquee de stack ===== */}
      <Marquee />

      {/* ===== Projetos (banda elevada) ===== */}
      <section id="projetos" className="relative bg-elev">
        <div className="mx-auto max-w-[1080px] px-6 py-24 lg:px-8">
          <SectionHeader
            number="01"
            kicker="PROJETOS"
            title="Projetos em destaque"
            description="Problemas reais, soluções medidas — cada projeto com impacto quantificado."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.12}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10">
            <Link
              href="/projects"
              className="border-b border-accent-line pb-px font-medium text-accent transition-colors hover:border-accent"
            >
              Ver todos os projetos →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== Stats (banda com glow) ===== */}
      <section className="relative overflow-hidden border-y border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent-dim), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-x-6 gap-y-12 px-6 py-20 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text font-mono text-[clamp(40px,5vw,56px)] font-semibold leading-none text-transparent">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 font-mono text-xs leading-relaxed text-text-3">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section>
        <div className="mx-auto max-w-[1080px] px-6 py-24 lg:px-8">
          <SectionHeader
            number="02"
            kicker="STACK"
            title="Stack & competências"
            description="Do banco de dados ao pixel — com infraestrutura e IA no meio."
          />
          <SkillsGrid />
        </div>
      </section>

      {/* ===== Contato (banda elevada + terminal) ===== */}
      <section id="contato" className="border-t border-border bg-elev">
        <div className="mx-auto max-w-[1080px] px-6 py-24 lg:px-8">
          <SectionHeader
            number="03"
            kicker="CONTATO"
            title="Vamos conversar?"
            description="Aberto a oportunidades como Desenvolvedor Full Stack, especialmente em ambientes AI-first."
          />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="flex flex-col items-start gap-3.5">
                <Button href={`mailto:${SITE.email}`} external>
                  {SITE.email}
                </Button>
                <div className="flex flex-wrap gap-3.5">
                  <Button href={SITE.whatsapp} variant="secondary" external>
                    WhatsApp
                  </Button>
                  <Button href={SITE.linkedin} variant="secondary" external>
                    LinkedIn
                  </Button>
                  <Button href={SITE.github} variant="secondary" external>
                    GitHub
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Terminal />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
