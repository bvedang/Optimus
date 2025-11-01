import { SectionHeader } from "../section-header";
import { UseCaseCard } from "../cards";
import { useCases } from "@/lib/landing-content";

export function UseCasesSection() {
  return (
    <div className="mx-auto mt-20 max-w-6xl lg:mt-24">
      <SectionHeader>Use cases</SectionHeader>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {useCases.map((useCase) => (
          <UseCaseCard
            key={useCase.title}
            title={useCase.title}
            description={useCase.description}
          />
        ))}
      </div>
    </div>
  );
}
