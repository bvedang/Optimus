import { SectionHeader } from "../section-header";
import { StepCard } from "../cards";
import { steps } from "@/lib/landing-content";

export function HowItWorksSection() {
  return (
    <div className="mx-auto mt-20 max-w-5xl lg:mt-28">
      <SectionHeader>How this starter fits in</SectionHeader>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <StepCard
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}
