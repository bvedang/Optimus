import { FeatureCard } from "../feature-card";
import { ShieldCheckIcon, ServerIcon, BoltIcon } from "../icons";
import { features } from "@/lib/landing-content";

const iconMap = {
  shield: <ShieldCheckIcon />,
  server: <ServerIcon />,
  bolt: <BoltIcon />,
};

export function FeaturesSection() {
  return (
    <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={iconMap[feature.icon as keyof typeof iconMap]}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </dl>
    </div>
  );
}
