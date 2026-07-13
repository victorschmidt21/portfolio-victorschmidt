import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
      {/* Hero */}
      <section className="relative py-24 text-center sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 h-[420px] w-full max-w-[640px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent-dim), transparent 70%)",
          }}
        />
        <div className="animate-fadeup relative">
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
          Victor Schmidt — construo aplicações escaláveis com React e Node.js,
          orquestro infraestrutura em produção com observabilidade e automatizo
          processos complexos com IA e RAG.
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
        <div
          className="animate-fadeup relative mt-14 flex items-center justify-center gap-6 font-mono text-xs text-text-3"
          style={{ animationDelay: "0.32s" }}
        >
          <span>
            <span className="text-lg font-semibold text-text">12x</span>{" "}
            &nbsp;análise mais rápida
          </span>
          <span className="h-5 w-px bg-border" aria-hidden />
          <span>
            <span className="text-lg font-semibold text-text">6x</span>{" "}
            &nbsp;deploy mais rápido
          </span>
          <span className="hidden h-5 w-px bg-border sm:block" aria-hidden />
          <span className="hidden sm:block">
            <span className="text-lg font-semibold text-text">20+</span>{" "}
            &nbsp;processos automatizados
          </span>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-border py-20">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-accent">01</span>
          <h2 className="text-[28px] font-semibold tracking-tight">
            Projetos em destaque
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="border-b border-accent-line pb-px font-medium text-accent transition-colors hover:border-accent"
          >
            Ver todos os projetos →
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border py-20">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-accent">02</span>
          <h2 className="text-[28px] font-semibold tracking-tight">
            Stack & competências
          </h2>
        </div>
        <SkillsGrid />
      </section>

      {/* Contact */}
      <section id="contato" className="border-t border-border py-20">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-accent">03</span>
          <h2 className="text-[28px] font-semibold tracking-tight">Contato</h2>
        </div>
        <div className="rounded-[20px] border border-border bg-surface p-8 sm:p-12">
          <p className="max-w-[56ch] text-lg text-text-2">
            Aberto a oportunidades como Desenvolvedor Full Stack, especialmente
            em ambientes AI-first. Vamos conversar?
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href={`mailto:${SITE.email}`} external>
              {SITE.email}
            </Button>
            <Button href={SITE.whatsapp} variant="secondary" external>
              WhatsApp
            </Button>
            <Button href={SITE.linkedin} variant="secondary" external>
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
