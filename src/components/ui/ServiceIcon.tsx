import { HeartHandshake, Sprout, Users } from "lucide-react";
import type { ServiceIcon as IconName } from "@/data/services";
import { cn } from "@/lib/utils";

const map = { parenting: Users, relationship: HeartHandshake, sobriety: Sprout } as const;

export default function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = map[name];
  return (
    <span
      className={cn(
        "grid size-16 shrink-0 place-items-center rounded-full bg-sage/20 text-olive ring-1 ring-sage/25",
        className,
      )}
    >
      <Icon aria-hidden className="size-7" strokeWidth={1.6} />
    </span>
  );
}
