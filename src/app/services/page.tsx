import Image from "next/image";
import { Check, Info } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ServiceIcon from "@/components/ui/ServiceIcon";
import ContactCTA from "@/components/home/ContactCTA";
import { images, site } from "@/data/site";
import { services } from "@/data/services";
import { cn, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Parenting to Peace, Relationship Growth, and Substance Use & Sobriety Coaching — practical guidance and encouragement from The Merry Battles Method.",
  path: "/services",
  image: images.servicesHero.src,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Practical Support for"
        highlight="Real-Life Growth"
        description="Three focused areas of coaching, each built on practical tools, steady accountability, and genuine encouragement."
        image={images.servicesHero}
      />

      {/* Quick jump links */}
      <nav aria-label="Services on this page" className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <ul className="flex flex-wrap justify-center gap-3">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="inline-flex items-center rounded-full border border-plum/15 bg-white px-5 py-2.5 text-sm font-semibold text-plum shadow-soft transition hover:-translate-y-0.5 hover:bg-lavender"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="py-12 sm:py-20">
        {services.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              aria-labelledby={`${s.slug}-title`}
              className={cn("py-14 sm:py-20", reversed && "bg-lavender/45")}
            >
              <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                <Reveal className={cn(reversed && "lg:order-2")}>
                  <div
                    className={cn(
                      "group relative aspect-[4/3.4] overflow-hidden rounded-[3rem] shadow-float",
                      reversed ? "rounded-tl-[7rem]" : "rounded-br-[7rem]",
                    )}
                  >
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div className="flex items-center gap-4">
                    <ServiceIcon name={s.icon} />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">
                      Service 0{i + 1}
                    </span>
                  </div>
                  <h2 id={`${s.slug}-title`} className="mt-5 font-serif text-4xl font-semibold leading-tight text-plum sm:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-lg text-charcoal/75">{s.intro}</p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[15px] text-charcoal/85">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sage/25 text-olive">
                          <Check aria-hidden className="size-3.5" strokeWidth={2.5} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {s.note && (
                    <p className="mt-7 flex gap-3 rounded-2xl border border-purple/20 bg-white/80 p-5 text-sm text-charcoal/80">
                      <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-purple" />
                      <span>{s.note}</span>
                    </p>
                  )}

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Button href="/contact">Get in Touch</Button>
                    <span className="text-sm text-charcoal/60">{site.pricing}</span>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <ContactCTA
        title="Let's Take the Next Step Together"
        description="Have questions about which support is right for you? Reach out — it's a simple conversation to start."
      />
    </>
  );
}
