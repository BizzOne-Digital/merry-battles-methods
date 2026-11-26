/**
 * Central site configuration.
 * Edit business details here — they flow through the whole website.
 */
export const site = {
  name: "The Merry Battles Method",
  shortName: "Merry Battles Method",
  tagline: "Find Your Peace. Strengthen Your Relationships. Reclaim Your Life.",
  heroTagline: "Real-Life Challenges. Practical Guidance. Meaningful Change.",
  description:
    "The Merry Battles Method helps individuals and parents navigate life's challenges, develop healthier habits, and move forward with greater confidence, clarity, and peace.",
  email: "merry_battles@yahoo.com",
  phoneDisplay: "(269) 491-4935",
  phoneHref: "tel:+12694914935",
  pricing: "$75 per session",
  /**
   * Set NEXT_PUBLIC_SITE_URL once the real domain is live.
   * Canonical URLs and the sitemap use this value.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  hasRealDomain: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
} as const;

/** Founder details — written by Merry Battles. */
export const founder = {
  name: "Merry Battles",
  /** Add a headshot path (e.g. "/images/merry.webp") to show a photo instead of the logo card. */
  photo: null as string | null,
  credentials: [
    "Clinical Social Worker",
    "Certified Advanced Alcohol & Drug Counselor",
    "20+ years helping individuals & families",
    "Personal journey in recovery",
  ],
  headline: "Experience, Compassion, and a Commitment to Helping People Grow",
  philosophy: "You don't have to be perfect to make progress. You just have to be willing to begin.",
  bio: [
    "For more than two decades, I have dedicated my professional life to helping individuals and families navigate life's challenges, overcome obstacles, and discover their capacity for meaningful change.",
    "As a clinical social worker and Certified Advanced Alcohol and Drug Counselor, I have worked with people facing difficult life circumstances, relationship challenges, substance use concerns, and significant personal transitions.",
    "My work has taught me that change doesn't happen overnight. It happens through self-awareness, honest conversations, practical tools, accountability, and the willingness to take one step at a time.",
    "My commitment to this work is also personal. Having experienced my own journey of recovery and personal growth, I understand the importance of encouragement, perseverance, and having someone who believes in your ability to move forward.",
    "I created The Merry Battles Method to bring together my professional experience, personal insight, and passion for helping people navigate life's everyday battles.",
  ],
  closing: "Let's work together to make your next chapter a meaningful one.",
};

/**
 * Pricing — change `price` here and every pricing block updates.
 * If set to null, the site shows "Contact for pricing" instead.
 */
export const pricing = {
  session: {
    price: "$75" as string | null,
    unit: "per session",
    title: "Coaching Session",
    description: "One-on-one coaching for parenting, relationship growth, or sobriety support.",
    features: [
      "Practical tools you can use right away",
      "Encouragement and accountability",
      "Guidance tailored to your goals",
    ],
  },
  intro: {
    title: "Introductory Call",
    description:
      "Start with a conversation about what you're facing and your goals, and see if The Merry Battles Method is the right fit for you.",
    features: ["Share what you're working through", "Ask any questions", "Talk through next steps"],
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Images (sourced from Unsplash, stored locally in /public/images for speed).
 * Swap a file or path here to change an image site-wide.
 */

export const images = {
  hero: { src: "/images/hero.webp", alt: "Woman sitting peacefully among lavender wildflowers at sunrise, eyes closed" },
  aboutPreview: { src: "/images/about-preview.webp", alt: "Woman resting in a lavender meadow, looking up at the sunset sky" },
  accentFlower: { src: "/images/accent-flower.webp", alt: "Watercolor sprig of lavender" },
  cta: { src: "/images/nature-cta.webp", alt: "Soft rolling hills and wildflowers at sunset" },
  aboutHero: { src: "/images/about.webp", alt: "Woman standing on a hillside path with her hand on her heart, smiling at the sunrise" },
  aboutSupport: { src: "/images/about-support.webp", alt: "Mother and daughter smiling at each other at home" },
  servicesHero: { src: "/images/services.webp", alt: "Woman relaxing in a bright, calm room with tea and lavender" },
  faqHero: { src: "/images/faq.webp", alt: "Woman writing in a journal while sitting in a flower meadow" },
  contactHero: { src: "/images/contact.webp", alt: "Two people having a warm conversation in a lavender meadow" },
  // Extra images available for future use:
  coachingSession: { src: "/images/coaching-session.webp", alt: "Supportive conversation in a bright, comfortable living room" },
  parentChildHome: { src: "/images/parent-child-home.webp", alt: "Mother and daughter sharing a happy moment on the sofa" },
  reflectiveWalk: { src: "/images/reflective-walk.webp", alt: "Man walking along a hillside trail toward the sunset" },
  woodlandPath: { src: "/images/woodland-path.webp", alt: "Sunlit woodland path lined with lavender" },
} as const;
