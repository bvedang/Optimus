interface SectionHeaderProps {
  children: React.ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-center">
      {children}
    </h2>
  );
}
