"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/90 py-2 shadow-[0_8px_30px_-18px_rgb(67_36_94/0.35)] backdrop-blur-md"
          : "bg-gradient-to-b from-cream/80 to-transparent py-3 sm:py-4",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum">
          <Image
            src="/images/logo.png"
            alt=""
            width={512}
            height={512}
            priority
            className={cn(
              "h-auto rounded-full shadow-soft transition-all duration-500 group-hover:rotate-6",
              scrolled ? "w-12" : "w-14 sm:w-16",
            )}
          />
          <span className="font-serif text-xl font-semibold leading-tight text-plum sm:text-2xl">
            {site.shortName}
            <span className="sr-only"> — Home</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "link-underline pb-1 text-[15px] font-medium transition-colors hover:text-plum",
                      active ? "text-olive" : "text-charcoal/80",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-olive px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgb(88_106_54/0.6)] transition-all hover:-translate-y-0.5 hover:bg-olive-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum sm:inline-flex"
          >
            Schedule a Call
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <MobileNavigation pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
