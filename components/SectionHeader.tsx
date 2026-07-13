import { Reveal } from "@/components/Reveal";

interface SectionHeaderProps {
  number: string;
  kicker: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  number,
  kicker,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Reveal className="mb-12">
      <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-accent">
        <span>{number}</span>
        <span className="h-px w-8 bg-accent-line" aria-hidden />
        <span>{`// ${kicker}`}</span>
      </div>
      <h2 className="text-[clamp(26px,4vw,36px)] font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-[56ch] text-base text-text-2">{description}</p>
      )}
    </Reveal>
  );
}
