import { Compass, MessageCircleHeart, Footprints } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { icon: MessageCircleHeart, title: "Reach Out", text: "Begin with a conversation about your needs and goals." },
  { icon: Compass, title: "Find Your Direction", text: "Explore practical tools, encouragement, and personalized support." },
  { icon: Footprints, title: "Move Forward", text: "Take meaningful steps toward healthier habits and lasting progress." },
];

export default function GrowthJourney() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-blush py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="Your Journey Toward Growth" />
        </Reveal>

        <div className="relative mt-16">
          {/* Curved dotted connector (desktop) */}
          <svg
            aria-hidden
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            className="absolute inset-x-[16%] top-6 hidden h-24 w-[68%] text-purple/50 md:block"
          >
            <path d="M0 40 C 250 130, 250 -50, 500 40 S 750 130, 1000 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>

          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 150} className="relative flex gap-6 md:flex-col md:items-center md:text-center">
                {/* Vertical line (mobile) */}
                {i < steps.length - 1 && (
                  <span aria-hidden className="absolute left-10 top-24 h-[calc(100%-2rem)] w-px border-l-2 border-dotted border-purple/40 md:hidden" />
                )}
                <div className="relative shrink-0">
                  <span className="grid size-20 place-items-center rounded-full bg-white text-olive shadow-float ring-8 ring-lavender/60">
                    <Icon aria-hidden className="size-8" strokeWidth={1.5} />
                  </span>
                  <span className="absolute -right-1 -top-1 grid size-8 place-items-center rounded-full bg-plum font-serif text-lg font-semibold text-white">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-2 md:pt-6">
                  <h3 className="font-serif text-2xl font-semibold text-plum">{title}</h3>
                  <p className="mt-2 max-w-xs text-charcoal/75">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
