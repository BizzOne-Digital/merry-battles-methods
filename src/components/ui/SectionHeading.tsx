import { cn } from "@/lib/utils";
import { Sprig } from "./BotanicalDecoration";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  /** Optional second part of the title, rendered in olive on its own line. */
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-2xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-olive sm:text-sm",
            align === "center" && "justify-center",
          )}
        >
          {eyebrow}
          <Sprig className="h-4 w-10 text-sage" />
        </p>
      )}
      <Tag className="font-serif text-4xl font-semibold leading-[1.08] text-plum sm:text-5xl">
        {title}
        {highlight && <span className="block text-olive">{highlight}</span>}
      </Tag>
      {description && <p className="mt-5 text-lg text-charcoal/75">{description}</p>}
    </div>
  );
}
