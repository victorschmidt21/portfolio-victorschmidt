export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    description: "Interfaces rápidas, acessíveis e bem-feitas.",
    skills: [
      "React",
      "Next.js (SSR/SPA)",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend & Arquitetura",
    description: "APIs REST, microsserviços e arquitetura modular.",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "APIs REST",
      "Microsserviços",
      "Arquitetura modular",
    ],
  },
  {
    name: "DevOps & Infraestrutura",
    description: "Deploy automatizado e observabilidade em produção.",
    skills: [
      "Docker",
      "Docker Compose",
      "CI/CD",
      "Git / GitHub / GitLab",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
    ],
  },
  {
    name: "IA & Automação",
    description: "Agentes autônomos e RAG aplicados a processos reais.",
    skills: [
      "RAG (busca semântica)",
      "pgvector",
      "Mastra",
      "LLMs (Claude, Gemini, OpenAI)",
      "Agentes autônomos",
      "Engenharia de prompt",
    ],
  },
  {
    name: "Bancos de Dados",
    description: "Modelagem, migrations e busca vetorial.",
    skills: ["PostgreSQL", "SQL", "NoSQL", "Migrations", "pgvector"],
  },
];
