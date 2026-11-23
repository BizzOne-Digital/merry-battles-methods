/**
 * Central site configuration.
 * Edit business details here — they flow through the whole website.
 */
export const site = {
  name: "The Merry Battles Method",
  shortName: "Merry Battles Method",
  tagline: "Find Your Peace. Strengthen Your Relationships. Reclaim Your Life.",
  description:
    "Practical guidance, accountability, and encouragement for individuals, parents, and couples seeking meaningful, lasting change.",
  email: "merry_battles@yahoo.com",
  phoneDisplay: "(269) 491-4935",
  phoneHref: "tel:+12694914935",
  pricing: "Contact for pricing",
  /**
   * Set NEXT_PUBLIC_SITE_URL once the real domain is live.
   * Canonical URLs and the sitemap use this value.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  hasRealDomain: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
} as const;

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
