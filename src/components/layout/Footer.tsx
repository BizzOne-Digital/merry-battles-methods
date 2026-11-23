import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navigation, site } from "@/data/site";
import { services } from "@/data/services";
import { Butterfly, LeafBranch } from "@/components/ui/BotanicalDecoration";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-plum text-white/80">
      <LeafBranch className="absolute -right-6 -top-6 -z-10 h-80 w-56 rotate-12 text-lavender opacity-15" />
      <Butterfly className="absolute bottom-24 left-[45%] -z-10 size-20 text-lavender opacity-20" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] lg:px-8 lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/images/logo.png" alt="" width={512} height={512} className="h-auto w-16 rounded-full ring-2 ring-white/20" />
            <span className="font-serif text-2xl font-semibold text-white">{site.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
            Practical guidance, accountability, and encouragement for individuals, parents, and couples seeking
            meaningful, lasting change.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-serif text-xl font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-serif text-xl font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="link-underline hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-white">Get in Touch</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone aria-hidden className="size-4 text-sage" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-white">
                <Mail aria-hidden className="size-4 shrink-0 text-sage" /> {site.email}
              </a>
            </li>
            <li className="text-white/60">{site.pricing}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-white/55 sm:px-6 lg:px-8">
          &copy; {year} {site.name}. All rights reserved. Coaching services are not a substitute for therapy or
          medical care.
        </p>
      </div>
    </footer>
  );
}
