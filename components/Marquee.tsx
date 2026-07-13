const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "pgvector",
  "Docker",
  "CI/CD",
  "Prometheus",
  "Grafana",
  "Mastra",
  "RAG",
  "Tailwind CSS",
];

export function Marquee() {
  return (
    <div className="marquee relative overflow-hidden border-y border-border bg-elev py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-elev to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-elev to-transparent"
      />
      {/* itens autocontidos (texto + dot com margens fixas) para o loop de
          -50% fechar sem pulo — gap no track quebraria o alinhamento */}
      <div className="marquee-track flex w-max">
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            aria-hidden={i >= techs.length}
            className="flex items-center font-mono text-[13px] text-text-3"
          >
            {tech}
            <span className="mx-10 h-1 w-1 rounded-full bg-accent-line" />
          </span>
        ))}
      </div>
    </div>
  );
}
