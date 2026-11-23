import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, HeartHandshake, Link2, Sprout } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServiceIcon from "@/components/ui/ServiceIcon";
import ContactCTA from "@/components/home/ContactCTA";
import { LeafBranch } from "@/components/ui/BotanicalDecoration";
import { images } from "@/data/site";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about The Merry Battles Method — a compassionate, practical approach to parenting, relationship growth, and sobriety coaching.",
  path: "/about",
  image: images.aboutHero.src,
});

const values = [
  { icon: HeartHandshake, title: "Compassion", text: "Meeting every person with patience, kindness, and without judgment." },
  { icon: Sprout, title: "Growth", text: "Believing that real, positive change is possible in every season of life." },
  { icon: Handshake, title: "Accountability", text: "Offering steady encouragement that helps good intentions become habits." },
  { icon: Link2, title: "Connection", text: "Strengthening the relationships that matter most — at home and beyond." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Compassionate Approach"
        highlight="to Meaningful Change"
        description="The Merry Battles Method exists to help people find more peace at home, healthier connections, and the encouragement to keep growing."
        image={images.aboutHero}
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <Reveal>
            <SectionHeading align="left" eyebrow="The Method" title="Everyday Battles," highlight="Met with Encouragement" />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-lg text-charcoal/80">
            <p>
              Life brings its share of battles — a tense moment with a child, a hard conversation with someone we love,
              or the daily commitment to staying sober. The Merry Battles Method is built on the belief that these
              challenges don&apos;t have to be faced alone.
            </p>
            <p>
              Through practical guidance, accountability, and genuine encouragement, the method supports individuals,
              parents, and couples who are ready for meaningful, lasting change — one realistic step at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & philosophy */}
      <section className="relative isolate overflow-hidden bg-lavender/55 py-20 sm:py-28">
        <LeafBranch className="absolute -right-6 top-6 -z-10 h-80 w-56 -scale-x-100 animate-sway opacity-70" />
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            {
              label: "Our Mission",
              text: "To provide practical guidance, accountability, and encouragement that helps people create calmer homes, healthier relationships, and more fulfilling lives.",
            },
            {
              label: "Our Philosophy",
              text: "Growth is built through small, consistent steps. With understanding, real-world tools, and someone in your corner, lasting change becomes possible.",
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 120} className="rounded-[2rem] bg-white/85 p-9 shadow-soft backdrop-blur sm:p-11">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">{item.label}</p>
              <p className="mt-4 font-serif text-2xl font-medium leading-snug text-plum sm:text-[1.75rem]">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Areas of guidance */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Areas of guidance" title="Three Ways We Walk Alongside You" />
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 120}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full flex-col rounded-[2rem] border border-plum/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-float"
                >
                  <ServiceIcon name={s.icon} />
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-plum">{s.title}</h3>
                  <p className="mt-3 flex-1 text-charcoal/75">{s.overview}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-olive">
                    Explore <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-gradient-to-b from-cream to-blush py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="What guides us" title="Our Core Values" />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 100} className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-lavender text-plum">
                  <Icon aria-hidden className="size-7" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-plum">{title}</h3>
                <p className="mt-2 text-[15px] text-charcoal/75">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Supportive image / text */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading align="left" eyebrow="You're not alone" title="Support That Meets You" highlight="Where You Are" />
            <p className="mt-6 text-lg text-charcoal/75">
              Whether you&apos;re hoping for calmer evenings at home, clearer communication with someone you love, or
              steady accountability on your sobriety journey, the goal is the same: to help you take the next healthy
              step with confidence.
            </p>
            <p className="mt-4 text-lg text-charcoal/75">
              Coaching through The Merry Battles Method is practical and encouraging. It is not therapy or medical
              care, and it can work alongside the other support in your life.
            </p>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="group relative aspect-[5/4] overflow-hidden rounded-[3rem] rounded-tr-[7rem] shadow-float">
              <Image
                src={images.aboutSupport.src}
                alt={images.aboutSupport.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title="Ready to Take the First Step?"
        description="Reach out to start a conversation about your goals and how The Merry Battles Method can support you."
      />
    </>
  );
}
