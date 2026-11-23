import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedServices() {
  return (
    <section aria-labelledby="featured-heading" className="relative z-10 -mt-28 sm:-mt-36 lg:-mt-40">
      <h2 id="featured-heading" className="sr-only">Our three areas of support</h2>
      <ul className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:gap-7 lg:px-8">
        {services.map((service, i) => (
          <Reveal as="li" key={service.slug} delay={i * 120}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
