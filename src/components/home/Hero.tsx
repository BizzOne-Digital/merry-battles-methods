import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { images, site } from "@/data/site";
import Button from "@/components/ui/Button";
import { Butterfly, Sprig } from "@/components/ui/BotanicalDecoration";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-40 pt-[50svh] sm:flex sm:min-h-[92svh] sm:items-center sm:pb-48 sm:pt-32 lg:min-h-[94vh] lg:pb-56">
      {/* Mobile: image sits in the top half so text never covers the subject. Tablet+: full background. */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[62svh] sm:inset-0 sm:h-auto">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_30%] sm:object-[center_30%]"
        />
      </div>
      {/* Readability overlays: fade under the image on mobile, left-side wash on larger screens */}
      <div aria-hidden className="absolute inset-x-0 top-[22svh] -z-10 h-[40svh] bg-gradient-to-b from-transparent via-cream/70 to-cream sm:hidden" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-cream via-cream/80 to-transparent sm:block"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-cream/70 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-cream to-transparent" />

      <Butterfly className="absolute right-[12%] top-[22%] hidden size-16 animate-flutter text-lavender lg:block" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="flex animate-fade-up items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-olive sm:text-sm">
            The Merry Battles Method
            <Sprig className="h-4 w-12 text-sage" />
          </p>
          <h1 className="mt-5 font-serif text-[2.7rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[5.2rem]">
            <span className="block animate-fade-up text-plum [animation-delay:100ms]">Real-Life Challenges.</span>
            <span className="block animate-fade-up text-olive [animation-delay:220ms]">Practical Guidance.</span>
            <span className="block animate-fade-up italic text-purple [animation-delay:340ms]">Meaningful Change.</span>
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg text-charcoal/80 [animation-delay:460ms] sm:text-xl">
            {site.description}{" "}
            <strong className="font-semibold text-plum">You don&apos;t have to figure it all out alone.</strong>
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:580ms] sm:flex-row sm:gap-4">
            <Button href="/contact">Schedule an Introductory Call</Button>
            <Button href="#meet-merry" variant="outline">Meet Merry</Button>
          </div>
          <ul className="mt-8 flex animate-fade-up flex-wrap gap-2 [animation-delay:700ms]">
            {["Clinical Social Worker", "Certified Advanced Alcohol & Drug Counselor", "20+ Years of Experience"].map((c) => (
              <li
                key={c}
                className="flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-plum shadow-soft backdrop-blur sm:text-sm"
              >
                <BadgeCheck aria-hidden className="size-4 text-olive" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
