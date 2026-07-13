interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "tag";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  if (variant === "accent") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-dim px-3 py-1 font-mono text-xs text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--accent)]" />
        {children}
      </span>
    );
  }
  if (variant === "tag") {
    return (
      <span className="rounded-[5px] border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10.5px] text-text-3">
        {children}
      </span>
    );
  }
  return (
    <span className="rounded-full border border-border-2 bg-surface-2 px-3 py-1 font-mono text-xs text-text-2">
      {children}
    </span>
  );
}
