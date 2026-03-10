import { HeroSimple } from '../components/sections/HeroSimple';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ServiceDetail } from '../components/sections/ServiceDetail';
import { services } from '../data';

export function ServicesPage() {
  return (
    <>
      <HeroSimple
        title="Our Services"
        subtitle="From kitchen remodels to full renovations, we bring expertise and craftsmanship to every project."
      />
      <Section background="cream">
        <div className="space-y-24">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="/contact" variant="primary">
            Request a Quote
          </Button>
        </div>
      </Section>
    </>
  );
}
