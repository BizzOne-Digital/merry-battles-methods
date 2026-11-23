export type ServiceIcon = "parenting" | "relationship" | "sobriety";

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIcon;
  short: string;
  overview: string;
  intro: string;
  highlights: string[];
  note?: string;
  image: { src: string; alt: string };
};

export const services: Service[] = [
  {
    slug: "parenting-to-peace",
    title: "Parenting to Peace",
    icon: "parenting",
    short: "Helping parents create calmer homes and stronger connections with their children.",
    overview:
      "Practical, encouraging support for parents who want less stress at home and more meaningful moments with their children.",
    intro:
      "Parenting is one of life's most rewarding — and most demanding — roles. Parenting to Peace offers practical guidance and encouragement to help you respond with more calm, communicate with more clarity, and build a home where everyone feels connected.",
    highlights: [
      "Creating calmer home environments",
      "Strengthening parent-child relationships",
      "Building communication skills",
      "Encouraging positive parenting approaches",
      "Practical everyday guidance",
    ],
    image: { src: "/images/parenting.webp", alt: "Mother hugging her daughter in a lavender meadow at sunset" },
  },
  {
    slug: "relationship-growth",
    title: "Relationship Growth",
    icon: "relationship",
    short: "Helping individuals develop healthier communication, boundaries, and relationships.",
    overview:
      "Guidance for building healthier communication, clearer boundaries, and stronger, more fulfilling connections.",
    intro:
      "Healthy relationships begin with understanding — of ourselves and of the people we care about. Relationship Growth helps individuals and couples strengthen communication, set healthy boundaries, and navigate challenges with more confidence.",
    highlights: [
      "Healthier communication",
      "Understanding personal boundaries",
      "Building stronger connections",
      "Navigating relationship challenges",
      "Personal and interpersonal growth",
    ],
    image: { src: "/images/relationships.webp", alt: "Woman and man talking calmly together in a garden" },
  },
  {
    slug: "sobriety-coaching",
    title: "Substance Use & Sobriety Coaching",
    icon: "sobriety",
    short: "Encouragement, accountability, and support for people pursuing or maintaining sobriety.",
    overview:
      "Steady encouragement and accountability for people pursuing sobriety or working to maintain it.",
    intro:
      "Every sobriety journey is personal. This coaching offers consistent encouragement, accountability, and a supportive voice as you build positive habits, strengthen resilience, and keep moving forward.",
    highlights: [
      "Encouragement and accountability",
      "Support in pursuing sobriety",
      "Maintaining positive habits",
      "Personal growth",
      "Building resilience and consistency",
    ],
    note:
      "This is coaching and encouragement — not medical treatment, therapy, or a substitute for professional addiction care. If you are in crisis or need medical support, please contact a licensed provider or emergency services.",
    image: { src: "/images/sobriety.webp", alt: "Woman relaxing with a book and tea in a calm, sunlit room" },
  },
];
