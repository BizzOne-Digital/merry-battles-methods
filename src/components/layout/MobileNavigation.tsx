"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function MobileNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll, close on Escape, move focus into the panel
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-[60] grid size-12 place-items-center rounded-full bg-white/80 text-plum shadow-soft backdrop-blur transition hover:bg-lavender focus-visible:outline-2 focus-visible:outline-plum"
      >
        {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
      </button>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-plum/30 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(22rem,88vw)] flex-col bg-cream px-7 pb-8 pt-24 shadow-float transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {navigation.map((item, i) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li
                  key={item.href}
                  className={cn("transition-all duration-500", open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0")}
                  style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3 font-serif text-2xl font-semibold transition-colors",
                      active ? "bg-lavender/70 text-plum" : "text-charcoal hover:bg-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-3 border-t border-plum/10 pt-6 text-[15px]">
          <a href={site.phoneHref} className="flex items-center gap-3 text-charcoal/80 hover:text-plum">
            <Phone aria-hidden className="size-4 text-olive" /> {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-charcoal/80 hover:text-plum">
            <Mail aria-hidden className="size-4 shrink-0 text-olive" /> {site.email}
          </a>
          <Link
            href="/contact"
            className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-olive font-semibold text-white"
          >
            Schedule an Introductory Call
          </Link>
        </div>
      </div>
    </div>
  );
}
