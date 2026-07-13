import Link from "next/link";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

const categoryLabels: Record<Project["category"], string> = {
  fullstack: "FULL STACK",
  backend: "BACKEND",
  devops: "DEVOPS",
  ai: "IA & AUTOMAÇÃO",
};

/* Visual exclusivo por projeto — estilo oxc.rs: terminal, benchmark, diagrama */
const visuals: Record<string, React.ReactNode> = {
  "agente-rag-editais": <AgentTerminal />,
  "pipeline-cicd-observabilidade": <DeployBenchmark />,
  "microsservicos-integracoes": <IntegrationDiagram />,
};

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-24 lg:gap-32">
      {projects.map((project, i) => (
        <Reveal key={project.slug}>
          <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <div className="font-mono text-xs tracking-[0.14em] text-accent">
                {`// ${categoryLabels[project.category]}`}
              </div>
              <h3 className="mt-4 text-[clamp(24px,3.5vw,34px)] font-semibold leading-tight tracking-tight">
                <Link
                  href={`/projects/${project.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-text-2">
                {project.longDescription}
              </p>
              <div className="mt-6 bg-gradient-to-r from-accent to-accent-2 bg-clip-text font-mono text-2xl font-semibold text-transparent">
                {project.impact}
              </div>
              <div className="mt-5 font-mono text-[13px] text-text-3">
                {project.technologies.join(" · ")}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-7 inline-block border-b border-accent-line pb-px font-medium text-accent transition-colors hover:border-accent"
              >
                Ver estudo de caso →
              </Link>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
              {visuals[project.slug]}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-elev shadow-[0_24px_70px_-36px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-text-3">{title}</span>
      </div>
      {children}
    </div>
  );
}

function AgentTerminal() {
  const lines: [string, string][] = [
    ["cmd", "$ agente analisar edital-2026-014.pdf"],
    ["dim", "→ scraping do documento... ok (12s)"],
    ["dim", "→ extraindo dados via LLM... ok"],
    ["warn", '→ campo "garantia contratual" indefinido'],
    ["dim", "→ busca semântica pgvector... match 0.92"],
    ["ok", "✓ planilha gerada: analise-014.xlsx"],
    ["accent", "⏱ concluído em 9min 42s (antes: ~2h)"],
  ];
  const colors: Record<string, string> = {
    cmd: "text-text",
    dim: "text-text-3",
    warn: "text-warn",
    ok: "text-accent",
    accent: "text-accent-2",
  };
  return (
    <Panel title="agente-editais — bash">
      <div className="p-5 font-mono text-[12.5px] leading-[2]">
        {lines.map(([tone, text], i) => (
          <p
            key={text}
            className={`stagger-line ${colors[tone]}`}
            style={{ "--i": i } as React.CSSProperties}
          >
            {text}
          </p>
        ))}
      </div>
    </Panel>
  );
}

function DeployBenchmark() {
  return (
    <Panel title="benchmark — tempo de deploy">
      <div className="grid gap-6 p-6">
        <div>
          <div className="mb-2 flex items-baseline justify-between font-mono text-xs">
            <span className="text-text-3">antes — manual</span>
            <span className="text-text-2">30min</span>
          </div>
          <div className="h-3 rounded bg-surface-2">
            <div className="grow-bar h-full w-full rounded bg-border-2" />
          </div>
        </div>
        <div>
          <div className="mb-2 flex items-baseline justify-between font-mono text-xs">
            <span className="text-accent">depois — CI/CD</span>
            <span className="text-accent">5min</span>
          </div>
          <div className="h-3 rounded bg-surface-2">
            <div
              className="grow-bar h-full w-[17%] rounded bg-gradient-to-r from-accent to-accent-2"
              style={{ transitionDelay: "0.55s" }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-5 font-mono text-[11px] text-text-3">
          <span className="text-accent">✓ build</span>
          <span aria-hidden>→</span>
          <span className="text-accent">✓ test</span>
          <span aria-hidden>→</span>
          <span className="text-accent">✓ deploy</span>
          <span aria-hidden>→</span>
          <span>prometheus · grafana · cadvisor</span>
        </div>
      </div>
    </Panel>
  );
}

function IntegrationDiagram() {
  return (
    <Panel title="arquitetura — integrações">
      <svg
        viewBox="0 0 440 240"
        role="img"
        aria-label="Diagrama: CRM, WhatsApp e ERP conectados a uma API central que alimenta dashboards"
        className="block w-full"
      >
        {/* conectores com fluxo */}
        <g stroke="var(--accent-line)" strokeWidth="1.5" fill="none">
          <path className="flow-line" d="M118 60 C 160 60, 160 108, 196 112" />
          <path className="flow-line" d="M118 120 L 196 120" />
          <path className="flow-line" d="M118 180 C 160 180, 160 132, 196 128" />
          <path className="flow-line" d="M296 120 L 344 120" />
        </g>
        {/* nós de origem */}
        {(
          [
            ["CRM", 40],
            ["WhatsApp", 100],
            ["ERP", 160],
          ] as const
        ).map(([label, y]) => (
          <g key={label}>
            <rect
              x="28"
              y={y}
              width="90"
              height="40"
              rx="8"
              fill="var(--surface)"
              stroke="var(--border-2)"
            />
            <text
              x="73"
              y={y + 25}
              textAnchor="middle"
              fill="var(--text-2)"
              fontSize="12"
              fontFamily="var(--font-geist-mono)"
            >
              {label}
            </text>
          </g>
        ))}
        {/* hub central */}
        <rect
          x="196"
          y="92"
          width="100"
          height="56"
          rx="10"
          fill="var(--accent-dim)"
          stroke="var(--accent-line)"
        />
        <text
          x="246"
          y="116"
          textAnchor="middle"
          fill="var(--accent)"
          fontSize="12"
          fontWeight="600"
          fontFamily="var(--font-geist-mono)"
        >
          API REST
        </text>
        <text
          x="246"
          y="132"
          textAnchor="middle"
          fill="var(--text-3)"
          fontSize="10"
          fontFamily="var(--font-geist-mono)"
        >
          Node · NestJS
        </text>
        {/* destino */}
        <rect
          x="344"
          y="100"
          width="72"
          height="40"
          rx="8"
          fill="var(--surface)"
          stroke="var(--border-2)"
        />
        <text
          x="380"
          y="124"
          textAnchor="middle"
          fill="var(--text-2)"
          fontSize="11"
          fontFamily="var(--font-geist-mono)"
        >
          Dashboards
        </text>
        {/* legenda */}
        <text
          x="220"
          y="216"
          textAnchor="middle"
          fill="var(--text-3)"
          fontSize="10"
          fontFamily="var(--font-geist-mono)"
        >
          20+ rotinas manuais automatizadas
        </text>
      </svg>
    </Panel>
  );
}
