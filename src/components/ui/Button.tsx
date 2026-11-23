import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-olive text-white shadow-[0_10px_30px_-10px_rgb(88_106_54/0.6)] hover:bg-olive-dark hover:shadow-[0_14px_34px_-10px_rgb(88_106_54/0.7)]",
  outline: "border border-olive/50 bg-white/60 text-olive backdrop-blur hover:border-olive hover:bg-white",
  light: "bg-white text-plum shadow-soft hover:bg-lavender",
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-[15px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum",
    styles[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
  return isExternal ? (
    <a href={href} className={classes}>{content}</a>
  ) : (
    <Link href={href} className={classes}>{content}</Link>
  );
}
