import { CheckListItem } from "../check-list-item";
import { whatsIncludedContent } from "@/lib/landing-content";

export function WhatsIncludedSection() {
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-zinc-200 dark:ring-zinc-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {whatsIncludedContent.title}
        </h3>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {whatsIncludedContent.description}
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
            {whatsIncludedContent.sectionLabel}
          </h4>
          <div className="h-px flex-auto bg-zinc-300 dark:bg-zinc-700"></div>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:grid-cols-2 sm:gap-6">
          {whatsIncludedContent.items.map((item) => (
            <CheckListItem key={item}>{item}</CheckListItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
