import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "outline" | "solid";
}

export function Badge({ children, variant = "outline" }: BadgeProps) {
  const baseClasses = "rounded-full px-3 py-1 text-zinc-700 dark:text-zinc-300";
  const variantClasses =
    variant === "outline"
      ? "border border-zinc-300 dark:border-zinc-700"
      : "bg-white/50 dark:bg-zinc-900/40";

  return <span className={`${baseClasses} ${variantClasses}`}>{children}</span>;
}

export function IntegrationBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/40">
      {children}
    </span>
  );
}
