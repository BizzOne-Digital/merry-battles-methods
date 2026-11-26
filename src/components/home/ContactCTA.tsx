import Image from "next/image";
import { images } from "@/data/site";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Butterfly, Sprig } from "@/components/ui/BotanicalDecoration";

export default function ContactCTA({
  title = "Your Next Chapter Can Begin Today",
  description = "You don't have to navigate life's challenges without encouragement. Take the first step toward greater peace, healthier relationships, and personal growth.",
  buttonLabel = "Schedule an Introductory Call",
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      <Image src={images.cta.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-plum/85 via-purple/75 to-plum/80" />
      <Butterfly className="absolute left-[8%] top-12 size-16 animate-flutter text-lavender" />
      <Butterfly className="absolute bottom-14 right-[10%] size-12 animate-flutter text-lavender [animation-delay:2s]" />

      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Sprig className="mx-auto h-5 w-14 text-lavender" />
        <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">{description}</p>
        <Button href="/contact" variant="light" className="mt-10">{buttonLabel}</Button>
      </Reveal>
    </section>
  );
}
