import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

/** Compact featured card (icon + title + short copy) used under the hero. */
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex h-full gap-5 overflow-hidden rounded-[1.75rem] bg-white/95 p-7 shadow-float ring-1 ring-plum/5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_70px_-24px_rgb(67_36_94/0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
    >
      <ServiceIcon name={service.icon} className="transition-transform duration-500 group-hover:scale-110" />
      <div className="flex flex-col">
        <h3 className="font-serif text-2xl font-semibold leading-tight text-plum">{service.title}</h3>
        <p className="mt-2 text-[15px] text-charcoal/75">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-olive">
          Learn more
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
      <span
        aria-hidden
        className="absolute bottom-0 right-6 h-1 w-1/3 rounded-full bg-gradient-to-r from-purple/40 to-purple transition-all duration-500 group-hover:w-2/3"
      />
    </Link>
  );
}
