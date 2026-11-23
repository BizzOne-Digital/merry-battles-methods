import { cn } from "@/lib/utils";

/** Small horizontal leaf sprig — used beside eyebrows. */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 18" fill="none" aria-hidden className={className}>
      <path d="M2 14c12-1 26-5 44-12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14 12c1-5 5-8 9-8-1 4-4 7-9 8Z" fill="currentColor" opacity=".7" />
      <path d="M26 9c2-4 6-6 10-6-2 4-5 6-10 6Z" fill="currentColor" opacity=".55" />
      <path d="M20 11c-4-1-6-4-7-7 4 0 7 3 7 7Z" fill="currentColor" opacity=".45" />
    </svg>
  );
}

/** Tall leafy branch, drawn as soft watercolor-style shapes. */
export function LeafBranch({ className }: { className?: string }) {
  const leaves = [
    [60, 250, -40], [92, 222, 35], [70, 196, -45], [104, 168, 30], [82, 140, -40],
    [114, 112, 28], [94, 86, -38], [122, 60, 22], [108, 36, -20],
  ];
  return (
    <svg viewBox="0 0 200 300" fill="none" aria-hidden className={cn("text-sage", className)}>
      <path d="M40 295C70 220 95 130 120 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      {leaves.map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="24"
          ry="10"
          transform={`rotate(${r} ${x} ${y})`}
          fill="currentColor"
          opacity={0.28 + (i % 3) * 0.12}
        />
      ))}
    </svg>
  );
}

/** Simple line-art butterfly echoing the logo. */
export function Butterfly({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" fill="none" aria-hidden className={cn("text-purple", className)}>
      <path d="M32 24C26 8 10 2 5 8s4 18 15 18C10 28 8 40 15 43s14-8 17-19Z" fill="currentColor" opacity=".35" />
      <path d="M32 24C38 8 54 2 59 8s-4 18-15 18c10 2 12 14 5 17s-14-8-17-19Z" fill="currentColor" opacity=".5" />
      <path d="M32 14v24M32 14c-1-4-3-7-6-9M32 14c1-4 3-7 6-9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/** Organic wave used as a section divider. */
export function Wave({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("block h-12 w-full sm:h-20", flip && "rotate-180", className)}
    >
      <path d="M0 64c180-48 360-60 560-28s420 70 620 36c110-18 190-44 260-60v108H0Z" fill="currentColor" />
    </svg>
  );
}
