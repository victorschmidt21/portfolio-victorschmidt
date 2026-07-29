import { SITE } from "@/lib/constants";
import { projects, labProjects } from "@/data/projects";

function render(): string {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.title}. Portfólio com projetos profissionais em produção (métricas reais) e projetos de lab open-source.`,
    "",
    "As páginas HTML deste site também respondem em Markdown para clientes que enviarem `Accept: text/markdown` (home, /about, /projects e /projects/:slug).",
    "",
    "## Páginas",
    `- [Home](${SITE.url}/): apresentação, projetos em destaque e stack.`,
    `- [Sobre](${SITE.url}/about): experiência profissional e formação.`,
    `- [Projetos](${SITE.url}/projects): índice completo de projetos profissionais e de lab.`,
    "",
    "## Projetos profissionais",
    ...projects.map(
      (p) => `- [${p.title}](${SITE.url}/projects/${p.slug}): ${p.description}`,
    ),
    "",
    "## Projetos de lab",
    ...labProjects.map(
      (p) => `- [${p.name}](${p.repository}): ${p.description}`,
    ),
    "",
    "## Contato",
    `- Email: ${SITE.email}`,
    `- GitHub: ${SITE.github}`,
    `- LinkedIn: ${SITE.linkedin}`,
  ];
  return lines.join("\n");
}

export function GET() {
  return new Response(render(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
