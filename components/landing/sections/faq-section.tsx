import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "../section-header";
import { faqItems } from "@/lib/landing-content";

export function FAQSection() {
  return (
    <div className="mx-auto mt-20 max-w-4xl lg:mt-24">
      <SectionHeader>FAQ</SectionHeader>
      <Accordion
        type="single"
        collapsible
        className="mt-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40"
      >
        {faqItems.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index + 1}`}>
            <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
            <AccordionContent className="px-4">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
