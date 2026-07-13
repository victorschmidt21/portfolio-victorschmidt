"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, labProjects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

const tabs = [
  {
    id: "professional",
    label: "Profissional",
    count: projects.length,
    note: "Desenvolvidos em ambiente corporativo e rodando em produção, com métricas reais. O código é proprietário — cada estudo de caso descreve o problema, a solução e o resultado medido.",
  },
  {
    id: "lab",
    label: "Lab",
    count: labProjects.length,
    note: "Projetos pessoais para explorar tecnologias e arquiteturas — estudos e experimentos com código aberto no GitHub.",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ProjectsTabs() {
  const [active, setActive] = useState<TabId>("professional");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Tipo de projeto"
        className="flex w-max gap-1 rounded-[10px] border border-border bg-surface p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
              active === tab.id
                ? "bg-accent-dim text-accent shadow-[inset_0_0_0_1px_var(--accent-line)]"
                : "text-text-2 hover:text-text"
            }`}
          >
            {tab.id === "professional" && (
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  active === tab.id
                    ? "bg-accent shadow-[0_0_6px_var(--accent)]"
                    : "bg-text-3"
                }`}
                aria-hidden
              />
            )}
            {tab.label}
            <span className="font-mono text-[11px] opacity-70">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <p className="mt-5 max-w-[64ch] text-sm text-text-2">{activeTab.note}</p>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="mt-8"
      >
        {active === "professional" ? <ProfessionalList /> : <LabList />}
      </div>
    </div>
  );
}

function ProfessionalList() {
  return (
    <div className="border-t border-border">
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
  );
}

function LabList() {
  return (
    <div className="grid gap-x-8 border-t border-border sm:grid-cols-2 sm:gap-x-12">
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
  );
}
