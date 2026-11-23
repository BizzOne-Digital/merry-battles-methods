import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { Wave } from "@/components/ui/BotanicalDecoration";

export default function ServicesOverview() {
  return (
    <section className="relative bg-cream pb-24 sm:pb-32">
      <Wave className="text-lavender/60" flip />
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How we can help"
            title="Guidance for Every Part of Life"
            description="Three focused areas of support, each designed around practical steps and steady encouragement."
          />
        </Reveal>

        <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 120} className={i === 2 ? "md:col-span-2 lg:col-span-1" : undefined}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-plum/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum/50 via-plum/5 to-transparent" />
                  <ServiceIcon name={s.icon} className="absolute bottom-4 left-5 size-14 bg-white/90 ring-0 backdrop-blur" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-[1.7rem] font-semibold leading-tight text-plum">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] text-charcoal/75">{s.overview}</p>
                  <Link
                    href={`/services#${s.slug}`}
                    className="mt-6 inline-flex items-center gap-2 self-start font-semibold text-olive transition-colors hover:text-plum"
                  >
                    Learn More<span className="sr-only"> about {s.title}</span>
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
