import { SITE } from "@/lib/constants";

export function Terminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-elev shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-text-3">
          victor@dev — zsh
        </span>
      </div>
      <div className="p-5 font-mono text-[12.5px] leading-[1.9] text-text-2">
        <p>
          <span className="text-accent">$</span> whoami
        </p>
        <p className="text-text">full stack dev · devops · ia</p>
        <p className="mt-2">
          <span className="text-accent">$</span> cat contato.txt
        </p>
        <p>
          <span className="text-accent-2">email</span> {SITE.email}
        </p>
        <p>
          <span className="text-accent-2">github</span> github.com/victorschmidt21
        </p>
        <p>
          <span className="text-accent-2">status</span>{" "}
          <span className="text-accent">● aberto a oportunidades</span>
        </p>
        <p className="mt-2">
          <span className="text-accent">$</span>{" "}
          <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[3px] bg-accent" />
        </p>
      </div>
    </div>
  );
}
