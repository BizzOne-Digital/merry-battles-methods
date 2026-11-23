import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const featured = [
  "Who can benefit from your coaching?",
  "Is coaching the same as therapy?",
  "How do I get started?",
  "How much do your services cost?",
];

export default function FAQPreview() {
  const items = faqs.filter((f) => featured.includes(f.question));

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:px-8">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Common questions"
            title="Answers Before"
            highlight="You Reach Out"
            description="A few things people often ask before taking the first step."
          />
          <ul className="mt-8 space-y-3 text-[15px]">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 text-charcoal/80 hover:text-plum">
                <span className="grid size-10 place-items-center rounded-full bg-lavender text-plum">
                  <Phone aria-hidden className="size-4" />
                </span>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-charcoal/80 hover:text-plum">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lavender text-plum">
                  <Mail aria-hidden className="size-4" />
                </span>
                {site.email}
              </a>
            </li>
          </ul>
          <Link
            href="/faq"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-olive transition-colors hover:text-plum"
          >
            View all FAQs <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <FAQAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
