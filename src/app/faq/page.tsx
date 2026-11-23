import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Butterfly } from "@/components/ui/BotanicalDecoration";
import { faqs } from "@/data/faq";
import { images, site } from "@/data/site";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about The Merry Battles Method, including services, who coaching is for, how to get started, and pricing.",
  path: "/faq",
  image: images.faqHero.src,
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="FAQ"
        title="Questions?"
        highlight="We're Glad You Asked."
        description="Here are answers to some of the most common questions. If you don't see yours, please reach out — we're happy to help."
        image={images.faqHero}
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:px-8">
          <Reveal>
            <aside className="relative overflow-hidden rounded-[2rem] bg-plum p-9 text-white lg:sticky lg:top-28">
              <Butterfly className="absolute -right-3 -top-3 size-24 text-lavender opacity-30" />
              <h2 className="font-serif text-3xl font-semibold">Still have questions?</h2>
              <p className="mt-3 text-white/80">A quick call or email is the easiest way to get the answers you need.</p>
              <ul className="mt-6 space-y-3 text-[15px]">
                <li>
                  <a href={site.phoneHref} className="flex items-center gap-3 hover:text-lavender">
                    <Phone aria-hidden className="size-4 text-sage" /> {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-lavender">
                    <Mail aria-hidden className="size-4 shrink-0 text-sage" /> {site.email}
                  </a>
                </li>
              </ul>
              <Button href="/contact" variant="light" className="mt-8">Contact Us</Button>
            </aside>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="sr-only">Frequently asked questions</h2>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
