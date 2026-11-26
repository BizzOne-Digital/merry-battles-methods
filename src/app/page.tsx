import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import MeetMerry from "@/components/home/MeetMerry";
import MethodDifference from "@/components/home/MethodDifference";
import Pricing from "@/components/ui/Pricing";
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
      "Parenting, relationship, and sobriety coaching with Merry Battles — a clinical social worker and Certified Advanced Alcohol and Drug Counselor with 20+ years of experience.",
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
      <MeetMerry />
      <MethodDifference />
      <ServicesOverview />
      <WhoWeHelp />
      <SoundFamiliar />
      <GrowthJourney />
      <Pricing />
      <FAQPreview />
      <ContactCTA />
    </>
  );
}
