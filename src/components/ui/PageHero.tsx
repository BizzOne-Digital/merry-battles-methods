import Image from "next/image";
import { Butterfly, LeafBranch, Sprig } from "./BotanicalDecoration";

/** Shared hero used by the inner pages (About, Services, FAQ, Contact). */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-blush via-cream to-cream pb-20 pt-32 sm:pt-40 lg:pb-28">
      <LeafBranch className="pointer-events-none absolute -left-10 bottom-0 -z-10 hidden h-96 w-64 origin-bottom animate-sway opacity-70 lg:block" />
      <div className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-lavender/70 blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div className="animate-fade-up">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-olive sm:text-sm">
            {eyebrow}
            <Sprig className="h-4 w-10 text-sage" />
          </p>
          <h1 className="font-serif text-[2.6rem] font-semibold leading-[1.05] text-plum sm:text-6xl lg:text-[4.2rem]">
            {title}
            {highlight && <span className="block text-olive">{highlight}</span>}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-charcoal/75">{description}</p>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] rounded-tl-[6rem] shadow-float">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <Butterfly className="absolute -top-8 right-6 size-16 animate-flutter" />
        </div>
      </div>
    </section>
  );
}
