import { ThemeToggle } from "@/components/theme-toggle";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { FeaturesSection } from "@/components/landing/sections/features-section";
import { WhatsIncludedSection } from "@/components/landing/sections/whats-included-section";
import { HowItWorksSection } from "@/components/landing/sections/how-it-works-section";
import { SecuritySection } from "@/components/landing/sections/security-section";
import { IntegrationsSection } from "@/components/landing/sections/integrations-section";
import { UseCasesSection } from "@/components/landing/sections/use-cases-section";
import { FAQSection } from "@/components/landing/sections/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <ThemeToggle />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <HeroSection />
        <FeaturesSection />
        <WhatsIncludedSection />
        <HowItWorksSection />
        <SecuritySection />
        <IntegrationsSection />
        <UseCasesSection />
        <FAQSection />
      </div>
    </div>
  );
}
