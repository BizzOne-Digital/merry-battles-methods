import Image from "next/image";
import { images } from "@/data/site";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Butterfly } from "@/components/ui/BotanicalDecoration";

export default function AboutPreview() {
  return (
    <section id="about-method" className="relative bg-lavender/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-xl">
          <div className="group relative aspect-[1/1] overflow-hidden rounded-[3rem] rounded-br-[7rem] shadow-float sm:aspect-[6/5] lg:aspect-[1/1]">
            <Image
              src={images.coachingSession.src}
              alt={images.coachingSession.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[60%_center] transition-transform duration-[1.2s] group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -left-2 aspect-square w-28 overflow-hidden rounded-full border-[6px] border-cream shadow-float sm:-left-8 sm:w-36">
            <Image src={images.accentFlower.src} alt="" fill sizes="144px" className="object-cover" />
          </div>
          <Butterfly className="absolute -right-3 -top-6 size-16 animate-flutter" />
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading
            align="left"
            eyebrow="Get to know the method"
            title="Real Support for"
            highlight="Real-Life Growth"
          />
          <p className="mt-6 max-w-xl text-lg text-charcoal/75">
            Meaningful change begins with understanding, encouragement, and practical steps forward. The Merry Battles
            Method focuses on supporting individuals and families as they navigate parenting challenges, relationship
            growth, and sobriety journeys.
          </p>
          <Button href="/about" className="mt-9">Discover Our Approach</Button>
        </Reveal>
      </div>
    </section>
  );
}
