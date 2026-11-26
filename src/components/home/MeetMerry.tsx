import Image from "next/image";
import { Award, BadgeCheck, HeartHandshake, Sprout } from "lucide-react";
import { founder } from "@/data/site";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Butterfly, LeafBranch } from "@/components/ui/BotanicalDecoration";

const credentialIcons = [BadgeCheck, Award, HeartHandshake, Sprout];

/** Founder portrait card. Shows a headshot when `founder.photo` is set, otherwise a branded logo card. */
export function FounderCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative overflow-hidden rounded-[3rem] rounded-br-[7rem] bg-gradient-to-br from-plum via-purple to-plum p-10 text-center text-white shadow-float sm:p-12">
        <LeafBranch className="absolute -left-10 bottom-0 h-72 w-48 text-lavender opacity-20" />
        <Butterfly className="absolute right-8 top-8 size-12 animate-flutter text-lavender opacity-60" />
        <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border-[6px] border-white/20 bg-cream shadow-float sm:w-56">
          {founder.photo ? (
            <Image src={founder.photo} alt={`Portrait of ${founder.name}`} fill sizes="224px" className="object-cover" />
          ) : (
            <Image src="/images/logo.png" alt="" fill sizes="224px" className="object-contain p-2" />
          )}
        </div>
        <p className="relative mt-8 font-serif text-4xl font-semibold">{founder.name}</p>
        <p className="relative mt-1 text-sm uppercase tracking-[0.2em] text-lavender">Founder</p>
        <ul className="relative mt-8 space-y-3 text-left text-[15px]">
          {founder.credentials.map((c, i) => {
            const Icon = credentialIcons[i % credentialIcons.length];
            return (
              <li key={c} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
                <Icon aria-hidden className="size-5 shrink-0 text-lavender" strokeWidth={1.7} />
                {c}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function MeetMerry() {
  return (
    <section id="meet-merry" className="relative bg-lavender/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <FounderCard />
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading align="left" eyebrow="Meet Merry Battles" title="Experience, Compassion," highlight="and a Commitment to Growth" />
          <div className="mt-6 space-y-4 text-lg text-charcoal/80">
            <p>{founder.bio[0]}</p>
            <p>{founder.bio[3]}</p>
          </div>
          <blockquote className="mt-8 border-l-4 border-purple pl-6">
            <p className="font-serif text-2xl font-medium italic leading-snug text-plum sm:text-3xl">
              &ldquo;{founder.philosophy}&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-olive">— {founder.name}</footer>
          </blockquote>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/about#story">Read Merry&apos;s Story</Button>
            <Button href="/contact" variant="outline">Schedule an Introductory Call</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
