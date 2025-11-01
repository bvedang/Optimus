import { SectionHeader } from "../section-header";
import { CheckListItem } from "../check-list-item";
import { securityFeatures } from "@/lib/landing-content";

export function SecuritySection() {
  return (
    <div className="mx-auto mt-20 max-w-6xl lg:mt-24">
      <SectionHeader>Security, by default</SectionHeader>
      <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:grid-cols-2 lg:grid-cols-3">
        {securityFeatures.map((feature) => (
          <CheckListItem key={feature}>{feature}</CheckListItem>
        ))}
      </ul>
    </div>
  );
}
