import { projects, labProjects, getProject } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { SITE } from "@/lib/constants";

function heading(title: string): string {
  return `# ${title}\n`;
}

function renderHome(): string {
  const lines = [
    heading(`${SITE.name} — ${SITE.title}`),
    "Full stack dev construindo a web moderna. Aplicações escaláveis com React e Node.js, infraestrutura em produção com observabilidade e automação de processos com IA e RAG.",
    "",
    "## Projetos em destaque",
    "",
  ];
  for (const p of projects.filter((p) => p.featured)) {
    lines.push(`### ${p.title} (${p.company}, ${p.year})`);
    lines.push(p.description);
    lines.push(`- Impacto: ${p.impact}`);
    lines.push(`- Tecnologias: ${p.technologies.join(", ")}`);
    lines.push("");
  }
  lines.push("## Stack & competências", "");
  for (const c of skillCategories) {
    lines.push(`- **${c.name}**: ${c.skills.join(", ")}`);
  }
  lines.push("");
  lines.push("## Contato", "");
  lines.push(`- Email: ${SITE.email}`);
  lines.push(`- GitHub: ${SITE.github}`);
  lines.push(`- LinkedIn: ${SITE.linkedin}`);
  lines.push("");
  lines.push(`Mais projetos: ${SITE.url}/projects`);
  lines.push(`Sobre: ${SITE.url}/about`);
  return lines.join("\n");
}

function renderAbout(): string {
  const lines = [
    heading(`Sobre ${SITE.name}`),
    "Desenvolvedor Full Stack com cerca de 2 anos de experiência construindo sistemas escaláveis. Especialista em orquestração de infraestrutura, CI/CD e automação inteligente com IA.",
    "",
    "## Experiência",
    "",
  ];
  for (const exp of experiences) {
    lines.push(`### ${exp.company} — ${exp.title} (${exp.period})`);
    lines.push(exp.description);
    for (const achievement of exp.achievements) {
      lines.push(`- ${achievement}`);
    }
    lines.push(`Tecnologias: ${exp.technologies.join(", ")}`);
    lines.push("");
  }
  lines.push("## Formação", "");
  lines.push("### BIOPARK — Engenharia de Software (2024 — 2027)");
  lines.push(
    "Bacharelado focado em desenvolvimento de sistemas, engenharia de requisitos, qualidade de software e metodologias ágeis.",
  );
  lines.push("");
  lines.push("## Stack & competências", "");
  for (const c of skillCategories) {
    lines.push(`- **${c.name}**: ${c.skills.join(", ")}`);
  }
  return lines.join("\n");
}

function renderProjectsIndex(): string {
  const lines = [
    heading("Índice de projetos"),
    "Projetos profissionais em produção (com métricas reais) e projetos de lab com código aberto — Full Stack, DevOps e IA.",
    "",
    "## Profissionais (em produção)",
    "",
  ];
  for (const p of projects) {
    lines.push(
      `- [${p.title}](${SITE.url}/projects/${p.slug}) — ${p.company}, ${p.year}: ${p.description}`,
    );
  }
  lines.push("", "## Lab (código aberto)", "");
  for (const p of labProjects) {
    lines.push(
      `- [${p.name}](${p.repository}) (${p.year}): ${p.description} — ${p.technologies.join(", ")}`,
    );
  }
  return lines.join("\n");
}

function renderProject(slug: string): string | null {
  const project = getProject(slug);
  if (!project) return null;

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const lines = [
    heading(project.title),
    `Em produção · ${project.company} · ${project.year}`,
    "",
    project.longDescription,
    "",
    `Impacto: ${project.impact}`,
    `Tecnologias: ${project.technologies.join(", ")}`,
    "",
    "## Problema",
    project.problem,
    "",
    "## Solução",
    project.solution,
    "",
    "## Resultado",
    project.result,
  ];

  if (related.length > 0) {
    lines.push("", "## Projetos relacionados", "");
    for (const p of related) {
      lines.push(`- [${p.title}](${SITE.url}/projects/${p.slug})`);
    }
  }

  return lines.join("\n");
}

/** Retorna o markdown correspondente a uma rota conhecida, ou null se a rota não tiver versão markdown. */
export function renderMarkdownForPath(pathname: string): string | null {
  if (pathname === "/") return renderHome();
  if (pathname === "/about") return renderAbout();
  if (pathname === "/projects") return renderProjectsIndex();

  const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) return renderProject(projectMatch[1]);

  return null;
}

/** Estimativa aproximada de tokens (~4 caracteres por token), só para o header informativo x-markdown-tokens. */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}
