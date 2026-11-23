"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-plum/10 overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-plum/5">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-cream/70 focus-visible:bg-cream focus-visible:outline-none sm:px-8"
              >
                <span className={cn("font-serif text-xl font-semibold leading-snug sm:text-2xl", isOpen ? "text-plum" : "text-charcoal")}>
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid size-10 shrink-0 place-items-center rounded-full transition-all duration-300",
                    isOpen ? "rotate-45 bg-plum text-white" : "bg-lavender text-plum",
                  )}
                >
                  <Plus aria-hidden className="size-5" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="px-6 pb-7 text-charcoal/75 sm:px-8 sm:pr-24">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
