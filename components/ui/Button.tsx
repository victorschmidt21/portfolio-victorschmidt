import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
}

const variants = {
  primary:
    "bg-accent text-accent-contrast font-semibold hover:bg-accent-hi hover:-translate-y-0.5 hover:shadow-[0_6px_20px_var(--accent-dim)]",
  secondary:
    "bg-surface text-text border border-border-2 font-medium hover:border-accent-line hover:text-accent",
  ghost: "text-text-2 font-medium hover:text-text",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
}: ButtonProps) {
  const className = `inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-sm transition-all duration-200 ${variants[variant]}`;

  if (external || download) {
    return (
      <a
        href={href}
        className={className}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...(download && { download: true })}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
