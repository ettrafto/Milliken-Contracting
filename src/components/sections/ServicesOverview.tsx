import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { ServiceCard } from './ServiceCard';
import type { Service } from '../../types';

interface ServicesOverviewProps {
  services: Service[];
}

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <Section background="cream">
      <SectionHeader
        title="Our Services"
        subtitle="From kitchen remodels to full renovations, we bring expertise and craftsmanship to every project."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/services" variant="secondary">
          View All Services
        </Button>
      </div>
    </Section>
  );
}
