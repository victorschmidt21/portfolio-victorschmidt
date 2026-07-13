/** Projeto profissional: desenvolvido em empresa, rodando em produção.
 *  Código proprietário — sem repositório público; métricas reais. */
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
  company: string;
  featured: boolean;
  category: "fullstack" | "backend" | "devops" | "ai";
  year: string;
}

/** Projeto de lab: estudo/experimento pessoal, código aberto no GitHub. */
export interface LabProject {
  name: string;
  description: string;
  technologies: string[];
  repository: string;
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
    company: "Terceirizemais",
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
    company: "Terceirizemais",
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
    company: "Vorium Company",
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
    company: "AltForce",
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
    company: "AltForce",
    featured: false,
    category: "fullstack",
    year: "2025",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const labProjects: LabProject[] = [
  {
    name: "Scriber",
    description:
      "Ferramenta web que transcreve reuniões, entrevistas e aulas a partir de áudio ou vídeo, identificando os diferentes participantes da conversa.",
    technologies: ["TypeScript", "IA", "Transcrição"],
    repository: "https://github.com/victorschmidt21/scriber",
    year: "2026",
  },
  {
    name: "Iron Banker",
    description:
      "Plataforma de gestão de despesas com IA: agentes para categorização automática e análise de gastos, com entrada de mensagens via WhatsApp (Evolution API).",
    technologies: ["NestJS", "Mastra", "Evolution API", "Agentes IA"],
    repository: "https://github.com/victorschmidt21/iron-banker-backend",
    year: "2025",
  },
  {
    name: "Fraud Detection — Rinha 2026",
    description:
      "Participação na Rinha de Backend: sistema de detecção de fraude com foco em performance e throughput sob carga.",
    technologies: ["TypeScript", "Performance", "Backend"],
    repository: "https://github.com/victorschmidt21/fraud-detection-rinha-2026",
    year: "2026",
  },
  {
    name: "RabbitMQ + NestJS",
    description:
      "Estudo de mensageria assíncrona: implementação de filas e eventos com RabbitMQ dentro do NestJS.",
    technologies: ["NestJS", "RabbitMQ", "Mensageria"],
    repository: "https://github.com/victorschmidt21/rabbitmq-nestjs",
    year: "2025",
  },
  {
    name: "Pizzaria API",
    description:
      "API de gerenciamento de pizzaria com autenticação JWT para controle de usuários, produtos e pedidos.",
    technologies: ["Node.js", "Express", "Prisma", "JWT"],
    repository: "https://github.com/victorschmidt21/pizzaria-backend",
    year: "2025",
  },
  {
    name: "Cripto em Tempo Real",
    description:
      "Dashboard de visualização de criptomoedas em tempo real consumindo a CoinAPI.",
    technologies: ["TypeScript", "React", "CoinAPI"],
    repository: "https://github.com/victorschmidt21/projetoCripto",
    year: "2025",
  },
];
