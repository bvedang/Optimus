import { SectionHeader } from "../section-header";
import { IntegrationBadge } from "../badge";
import { integrations } from "@/lib/landing-content";

export function IntegrationsSection() {
  return (
    <div className="mx-auto mt-20 max-w-6xl lg:mt-24">
      <SectionHeader>Integrations you can add</SectionHeader>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {integrations.map((integration) => (
          <IntegrationBadge key={integration}>{integration}</IntegrationBadge>
        ))}
      </div>
    </div>
  );
}
