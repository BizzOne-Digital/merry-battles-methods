import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { images } from "@/data/site";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Butterfly } from "@/components/ui/BotanicalDecoration";

const signs = [
  "Evenings at home feel more stressful than peaceful.",
  "The same arguments keep coming up with the people you love.",
  "You want to set healthier boundaries but aren't sure where to start.",
  "You're committed to sobriety and want steady encouragement along the way.",
  "You know change is possible — you just want practical steps and someone in your corner.",
];

export default function SoundFamiliar() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush/60 to-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[3rem] rounded-tl-[7rem] shadow-float">
            <Image
              src={images.parentChildHome.src}
              alt={images.parentChildHome.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 right-6 max-w-[15rem] rounded-3xl bg-white/95 p-5 shadow-float backdrop-blur sm:-right-6">
            <Butterfly className="size-9" />
            <p className="mt-2 font-serif text-lg font-semibold leading-snug text-plum">
              Small, steady steps lead to meaningful change.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <SectionHeading align="left" eyebrow="Does this sound familiar?" title="You Don't Have to Face" highlight="It Alone" />
          <ul className="mt-8 space-y-4">
            {signs.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[17px] text-charcoal/85">
                <CircleCheck aria-hidden className="mt-1 size-5 shrink-0 text-olive" strokeWidth={1.8} />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-lg text-charcoal/75">
            If any of these feel close to home, The Merry Battles Method can help you find a calmer, clearer way forward.
          </p>
          <Button href="/contact" className="mt-8">Start the Conversation</Button>
        </Reveal>
      </div>
    </section>
  );
}
