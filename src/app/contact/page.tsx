import { Mail, Phone, Tag } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { Butterfly, LeafBranch } from "@/components/ui/BotanicalDecoration";
import { images, site } from "@/data/site";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Schedule an introductory call with Merry Battles by phone, email, or message to start parenting, relationship, or sobriety coaching.",
  path: "/contact",
  image: images.contactHero.src,
});

const details = [
  { icon: Phone, label: "Call", value: site.phoneDisplay, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Tag, label: "Pricing", value: site.pricing, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule Your"
        highlight="Introductory Call"
        description="Getting started is simple. Call, email, or send a message below to set up a first conversation with Merry about what you're facing and where you'd like to go."
        image={images.contactHero}
      />

      {/* How to get started */}
      <section aria-labelledby="steps-heading" className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="steps-heading" className="sr-only">How to get started</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {[
              { n: "1", t: "Reach out", d: `Call ${site.phoneDisplay}, email, or send the form below.` },
              { n: "2", t: "Have your introductory call", d: "Talk about what you're facing, your goals, and any questions." },
              { n: "3", t: "Begin coaching", d: "Start taking practical, supported steps toward meaningful change." },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-plum/5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-plum font-serif text-xl font-semibold text-white">
                  {s.n}
                </span>
                <span>
                  <span className="block font-serif text-xl font-semibold text-plum">{s.t}</span>
                  <span className="mt-1 block text-[15px] text-charcoal/75">{s.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden pb-24 sm:pb-32">
        <LeafBranch className="absolute -right-10 bottom-10 -z-10 h-96 w-64 -scale-x-100 animate-sway opacity-60" />

        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.4fr] lg:gap-12 lg:px-8">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-plum to-purple p-8 text-white shadow-float sm:p-10">
              <Butterfly className="absolute -bottom-4 -right-4 size-32 text-lavender opacity-25" />
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Reach Out Directly</h2>
              <p className="mt-3 text-white/80">
                The fastest way to schedule your introductory call is to call or email directly.
              </p>
              <ul className="mt-8 space-y-4">
                {details.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/15">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.2em] text-white/60">{label}</span>
                        <span className="block break-all font-semibold">{value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-white/10">
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-2">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-plum/5 sm:p-10">
              <h2 className="font-serif text-3xl font-semibold text-plum sm:text-4xl">Send a Message</h2>
              <p className="mt-2 text-charcoal/70">Fields marked * are required.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
