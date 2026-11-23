import { HeartHandshake, Sprout, User, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const audiences = [
  {
    icon: User,
    title: "Individuals",
    text: "For anyone ready to grow, set healthier boundaries, and build a more peaceful, fulfilling life.",
  },
  {
    icon: Users,
    title: "Parents",
    text: "For moms and dads who want calmer homes, clearer communication, and closer connections with their children.",
  },
  {
    icon: HeartHandshake,
    title: "Couples",
    text: "For partners who want to communicate better, understand each other, and strengthen their relationship.",
  },
  {
    icon: Sprout,
    title: "People Pursuing Sobriety",
    text: "For those pursuing or maintaining sobriety who want steady encouragement and accountability.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="border-t border-plum/5 bg-white/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who we help"
            title="Support for Every Season of Life"
            description="Whatever you're working through, you don't have to figure it out alone. The Merry Battles Method walks alongside:"
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 100}
              className="group relative overflow-hidden rounded-[2rem] border border-plum/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-float"
            >
              <span
                aria-hidden
                className="absolute -right-10 -top-10 size-32 rounded-full bg-lavender/50 transition-transform duration-700 group-hover:scale-150"
              />
              <span className="relative grid size-14 place-items-center rounded-2xl bg-plum text-white shadow-soft">
                <Icon aria-hidden className="size-6" strokeWidth={1.6} />
              </span>
              <h3 className="relative mt-6 font-serif text-2xl font-semibold text-plum">{title}</h3>
              <p className="relative mt-3 text-[15px] text-charcoal/75">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
