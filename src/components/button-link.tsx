import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "secondary-light";
  external?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 shadow-sm",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
  "secondary-light":
    "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400 hover:bg-zinc-50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors ${variants[variant]}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
