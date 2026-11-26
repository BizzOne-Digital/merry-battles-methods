import { Footprints, GraduationCap, HeartHandshake, Sprout } from "lucide-react";
import { founder } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { LeafBranch } from "@/components/ui/BotanicalDecoration";

const pillars = [
  {
    icon: GraduationCap,
    title: "Professional Experience",
    text: "More than two decades as a clinical social worker and Certified Advanced Alcohol and Drug Counselor, supporting people through difficult circumstances and major transitions.",
  },
  {
    icon: HeartHandshake,
    title: "Lived Experience",
    text: "A personal journey of recovery and growth means real understanding of how much encouragement, perseverance, and belief matter.",
  },
  {
    icon: Footprints,
    title: "One Step at a Time",
    text: "Change happens through self-awareness, honest conversations, practical tools, and accountability — not overnight.",
  },
  {
    icon: Sprout,
    title: "Progress, Not Perfection",
    text: "You don't need to have everything figured out. You only need to be willing to begin — and you'll have support along the way.",
  },
];

export default function MethodDifference() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 sm:py-32">
      <LeafBranch className="absolute -left-8 top-10 -z-10 hidden h-80 w-56 origin-bottom-left animate-sway opacity-70 lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our philosophy"
            title="What Makes The Merry Battles Method"
            highlight="Different"
            description="Professional expertise and personal insight, brought together to help you navigate life's everyday battles."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 100}
              className="group relative rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-plum/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float"
            >
              <span className="font-serif text-5xl font-semibold text-lavender">0{i + 1}</span>
              <span className="mt-4 grid size-14 place-items-center rounded-full bg-sage/20 text-olive ring-1 ring-sage/25">
                <Icon aria-hidden className="size-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-plum">{title}</h3>
              <p className="mt-3 text-[15px] text-charcoal/75">{text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-serif text-3xl font-medium italic leading-snug text-plum sm:text-4xl">
            &ldquo;{founder.philosophy}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
