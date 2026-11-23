import { Compass, Target, Sprout } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { LeafBranch } from "@/components/ui/BotanicalDecoration";

const features = [
  { icon: Target, title: "Practical Tools", text: "Real-world strategies you can use in everyday moments." },
  { icon: Compass, title: "Personalized Guidance", text: "Support shaped around your goals, family, and season of life." },
  { icon: Sprout, title: "Lasting Results", text: "Steady encouragement that helps healthy changes take root." },
];

export default function SupportivePath() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream to-lavender/60 py-24 sm:py-32">
      <LeafBranch className="absolute -left-8 top-10 -z-10 hidden h-80 w-56 lg:block origin-bottom-left animate-sway opacity-80" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-8">
        <Reveal className="lg:pl-16">
          <h2 className="font-serif text-4xl font-semibold leading-[1.08] text-olive sm:text-5xl">
            A Supportive Path to
            <span className="block text-plum">Lasting Change</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-charcoal/75">
            The Merry Battles Method offers compassionate, real-world support to help you grow, build healthier
            connections, and create a more peaceful and fulfilling life.
          </p>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-plum/10">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="flex flex-col items-center rounded-3xl bg-white/60 p-6 text-center sm:bg-transparent sm:px-6 sm:py-2">
              <span className="grid size-16 place-items-center rounded-full bg-white text-olive shadow-soft">
                <Icon aria-hidden className="size-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-plum">{title}</h3>
              <p className="mt-2 text-[15px] text-charcoal/70">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
