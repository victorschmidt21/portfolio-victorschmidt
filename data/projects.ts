export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  result: string;
  impact: string;
  technologies: string[];
  repository: string;
  liveUrl?: string;
  featured: boolean;
  category: "fullstack" | "backend" | "devops" | "ai";
  year: string;
}

export const projects: Project[] = [
  {
    slug: "agente-rag-editais",
    title: "Agente RAG para Análise de Editais",
    description:
      "Agente autônomo que faz scraping de editais, extrai dados via LLM e recorre a busca semântica quando necessário, gerando planilha estruturada para análise.",
    longDescription:
      "Agente construído para o time Comercial da Terceirizemais que automatiza a Análise Técnica de editais de licitação — um processo que consumia 2 horas de trabalho manual por documento.",
    problem:
      "A Análise Técnica de editais era feita manualmente pelo time Comercial: ler o documento inteiro, localizar requisitos, prazos e valores, e montar uma planilha. Cerca de 2 horas por edital, com risco de erro humano.",
    solution:
      "Um agente autônomo em pipeline: faz scraping do documento, extrai dados estruturados via LLM e, apenas quando o scraping não traz dado definitivo, recorre a busca semântica (RAG com pgvector no PostgreSQL, orquestrado via Mastra). O resultado é uma planilha estruturada gerada automaticamente.",
    result:
      "Tempo de análise reduzido de 2 horas para 10 minutos — 12x mais rápido — com dados padronizados e rastreáveis.",
    impact: "2h → 10min (12x mais rápido)",
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "pgvector",
      "Mastra",
      "Claude",
      "Gemini",
    ],
    repository: "https://github.com/victorschmidt21",
    featured: true,
    category: "ai",
    year: "2026",
  },
  {
    slug: "pipeline-cicd-observabilidade",
    title: "Pipeline CI/CD com Observabilidade",
    description:
      "Infraestrutura de deploy automático com monitoramento em produção via Prometheus, Grafana e cAdvisor.",
    longDescription:
      "Stack completa de entrega contínua e observabilidade em produção, padronizando deploys entre ambientes e dando visibilidade em tempo real de containers e aplicações.",
    problem:
      "Deploys manuais levavam 30 minutos, com etapas propensas a erro e sem padronização entre ambientes. Incidentes em produção eram diagnosticados sem métricas.",
    solution:
      "Pipelines de CI/CD com deploy automático e stack de monitoramento com Prometheus, cAdvisor e Grafana, expondo métricas de containers e aplicações em dashboards em tempo real.",
    result:
      "Deploy reduzido de 30 para 5 minutos (6x mais rápido), processo padronizado entre ambientes e tempo de diagnóstico de incidentes drasticamente menor.",
    impact: "Deploy 30min → 5min (6x mais rápido)",
    technologies: [
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "cAdvisor",
    ],
    repository: "https://github.com/victorschmidt21",
    featured: true,
    category: "devops",
    year: "2026",
  },
  {
    slug: "microsservicos-integracoes",
    title: "Microsserviços com Integrações",
    description:
      "APIs REST e microsserviços conectando CRM, WhatsApp e dashboards em uma arquitetura unificada orientada a serviços.",
    longDescription:
      "Arquitetura de integração construída na Vorium Company para conectar sistemas externos — CRM, WhatsApp e dashboards — eliminando rotinas manuais das equipes de operação.",
    problem:
      "Sistemas isolados (CRM, WhatsApp, dashboards) exigiam mais de 20 rotinas manuais das equipes de operação, gerando retrabalho e inconsistência de dados.",
    solution:
      "APIs REST e microsserviços em Node.js + TypeScript conectando os sistemas em uma arquitetura unificada orientada a serviços, com aplicações containerizadas via Docker e Docker Compose.",
    result:
      "Mais de 20 processos manuais automatizados, ambientes de dev e produção padronizados e redução significativa de retrabalho operacional.",
    impact: "20+ processos manuais automatizados",
    technologies: ["Node.js", "TypeScript", "NestJS", "Docker"],
    repository: "https://github.com/victorschmidt21",
    featured: true,
    category: "backend",
    year: "2025",
  },
  {
    slug: "modulo-pos-vendas-agro",
    title: "Módulo de Pós-Vendas Agrícola",
    description:
      "Digitalização do processo de pós-vendas para indústrias do setor agrícola, substituindo controle manual.",
    longDescription:
      "Módulo personalizado desenvolvido na AltForce para indústrias do setor agrícola, digitalizando de ponta a ponta um processo de pós-vendas que era feito manualmente.",
    problem:
      "O pós-vendas das indústrias agrícolas era controlado manualmente, sem histórico centralizado nem visibilidade do processo.",
    solution:
      "Módulo sob medida na plataforma AltForce, com atuação também na stack principal (Flutter, Node.js + TypeScript), traduzindo as necessidades de cada cliente em fluxo digital.",
    result:
      "Processo 100% digitalizado, com histórico centralizado e acompanhamento em tempo real.",
    impact: "Processo manual → 100% digital",
    technologies: ["Flutter", "Node.js", "TypeScript"],
    repository: "https://github.com/victorschmidt21",
    featured: false,
    category: "fullstack",
    year: "2024",
  },
  {
    slug: "modulo-pedidos-internacionais",
    title: "Orçamentos e Pedidos Internacionais",
    description:
      "Módulo de orçamentos e pedidos para vendas internacionais (Paraguai e Argentina), eliminando planilhas manuais.",
    longDescription:
      "Módulo de orçamentos e pedidos para vendas internacionais desenvolvido na AltForce, permitindo que a equipe de vendas fechasse pedidos diretamente pelo aplicativo.",
    problem:
      "Vendas internacionais (Paraguai e Argentina) dependiam de listas e planilhas manuais, tornando o fechamento de pedidos lento e sujeito a erros.",
    solution:
      "Módulo de orçamentos e pedidos integrado ao aplicativo, com fluxo completo de criação, aprovação e fechamento de pedidos.",
    result:
      "Planilhas eliminadas; equipe de vendas passou a fechar pedidos diretamente pelo aplicativo.",
    impact: "Planilhas manuais eliminadas",
    technologies: ["Flutter", "Node.js", "TypeScript"],
    repository: "https://github.com/victorschmidt21",
    featured: false,
    category: "fullstack",
    year: "2025",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
