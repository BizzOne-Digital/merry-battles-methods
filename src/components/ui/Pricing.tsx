import { Check, Phone } from "lucide-react";
import { pricing, site } from "@/data/site";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

export default function Pricing({ className }: { className?: string }) {
  const { intro, session } = pricing;

  return (
    <section id="pricing" className={cn("bg-gradient-to-b from-cream to-lavender/50 py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, Clear Pricing"
            description="Start with an introductory call, then continue with one-on-one coaching sessions."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-plum/10 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">Step 1</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold text-plum">{intro.title}</h3>
            <p className="mt-3 text-charcoal/75">{intro.description}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {intro.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[15px]">
                  <Check aria-hidden className="size-4 text-olive" strokeWidth={2.5} /> {f}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="outline" className="mt-8">Schedule a Call</Button>
          </Reveal>

          <Reveal delay={120} className="relative flex flex-col overflow-hidden rounded-[2rem] bg-plum p-8 text-white shadow-float sm:p-10">
            <span aria-hidden className="absolute -right-12 -top-12 size-40 rounded-full bg-purple/50" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-lavender">Step 2</p>
            <h3 className="relative mt-3 font-serif text-3xl font-semibold">{session.title}</h3>
            {session.price ? (
              <p className="relative mt-4 flex items-baseline gap-2">
                <span className="font-serif text-6xl font-semibold">{session.price}</span>
                <span className="text-white/70">{session.unit}</span>
              </p>
            ) : (
              <p className="relative mt-4 font-serif text-3xl font-semibold text-lavender">Contact for pricing</p>
            )}
            <p className="relative mt-3 text-white/80">{session.description}</p>
            <ul className="relative mt-6 flex-1 space-y-3">
              {session.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[15px]">
                  <Check aria-hidden className="size-4 text-sage" strokeWidth={2.5} /> {f}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="light" className="relative mt-8">Get Started</Button>
          </Reveal>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-[15px] text-charcoal/70">
          <Phone aria-hidden className="size-4 text-olive" />
          Questions about pricing? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-plum underline-offset-4 hover:underline">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
