import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100">
          {icon}
        </div>
        {title}
      </dt>
      <dd className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {description}
      </dd>
    </div>
  );
}
