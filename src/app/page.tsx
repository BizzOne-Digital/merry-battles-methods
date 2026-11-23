import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import SupportivePath from "@/components/home/SupportivePath";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import GrowthJourney from "@/components/home/GrowthJourney";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import SoundFamiliar from "@/components/home/SoundFamiliar";
import FAQPreview from "@/components/home/FAQPreview";
import ContactCTA from "@/components/home/ContactCTA";
import { pageMetadata } from "@/lib/utils";
import { images, site } from "@/data/site";

export const metadata = {
  ...pageMetadata({
    title: "Parenting, Relationship & Sobriety Coaching",
    description:
      "Find your peace, strengthen your relationships, and reclaim your life with practical guidance, accountability, and encouragement from The Merry Battles Method.",
    path: "/",
    image: images.hero.src,
  }),
  title: { absolute: `${site.name} | Parenting, Relationship & Sobriety Coaching` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <SupportivePath />
      <AboutPreview />
      <ServicesOverview />
      <WhoWeHelp />
      <SoundFamiliar />
      <GrowthJourney />
      <FAQPreview />
      <ContactCTA />
    </>
  );
}
