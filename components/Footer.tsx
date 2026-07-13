import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex flex-col gap-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--accent)]" />
            Aberto a oportunidades
          </span>
          <span className="font-mono text-xs text-text-3">
            © {new Date().getFullYear()} {SITE.name} · feito com Next.js
          </span>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-text-2">
          <Link href="/projects" className="hover:text-text">
            Projetos
          </Link>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text"
          >
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text"
          >
            LinkedIn
          </a>
          <a href={SITE.resume} download className="hover:text-text">
            Currículo
          </a>
        </nav>
      </div>
    </footer>
  );
}
