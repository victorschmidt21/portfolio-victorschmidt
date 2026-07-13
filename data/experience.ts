export interface Experience {
  company: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Terceirizemais",
    title: "Desenvolvedor Full Stack",
    period: "Fev 2026 — Atual",
    description:
      "Desenvolvimento e manutenção de sistemas web e automações, melhorando a eficiência operacional através de integração de sistemas e automação de processos.",
    achievements: [
      "Reduzi a Análise Técnica de editais de 2h para 10min com um agente de scraping + LLM + RAG (pgvector via Mastra).",
      "Reduzi o deploy de 30min para 5min com pipelines de CI/CD padronizados entre ambientes.",
      "Implementei monitoramento em produção com Prometheus, cAdvisor e Grafana, reduzindo o tempo de diagnóstico de incidentes.",
      "Desenvolvi aplicações web com Next.js e NestJS, do levantamento de requisitos ao deploy.",
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "pgvector",
      "Mastra",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    company: "Vorium Company",
    title: "Desenvolvedor Full Stack",
    period: "Jul 2025 — Jan 2026",
    description:
      "Desenvolvimento e evolução de sistemas web e automações, com foco em eficiência operacional, escalabilidade e integração entre sistemas.",
    achievements: [
      "Desenvolvi APIs REST e microsserviços conectando CRM, WhatsApp e dashboards em arquitetura unificada.",
      "Containerizei aplicações com Docker e Docker Compose, padronizando dev e produção.",
      "Automatizei 20+ processos de negócio com integrações via API e scripts Node.js.",
    ],
    technologies: ["Node.js", "TypeScript", "NestJS", "Docker"],
  },
  {
    company: "AltForce",
    title: "Desenvolvedor de Módulos Personalizados",
    period: "Jul 2024 — Jul 2025",
    description:
      "Desenvolvimento de módulos personalizados na linguagem proprietária da plataforma e na stack principal (Flutter, Node.js + TypeScript).",
    achievements: [
      "Criei um módulo de pós-vendas para indústrias do setor agrícola, digitalizando um processo manual.",
      "Desenvolvi módulo de orçamentos e pedidos para vendas internacionais (Paraguai e Argentina), eliminando planilhas.",
      "Participei do ciclo completo: requisitos, implementação, testes e deploy com times multidisciplinares.",
    ],
    technologies: ["Flutter", "Node.js", "TypeScript"],
  },
];
