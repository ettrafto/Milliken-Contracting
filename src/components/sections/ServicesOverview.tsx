import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { ServiceCard } from './ServiceCard';
import type { Service } from '../../types';
import { siteContent } from '../../content/siteContent';

interface ServicesOverviewProps {
  services: Service[];
}

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <Section background="cream">
      <SectionHeader
        title={siteContent.copy.servicesOverviewTitle}
        subtitle={siteContent.copy.servicesOverviewSubtitle}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <p className="mt-8 text-center text-[var(--color-text-muted)] text-sm">
        {siteContent.copy.servicesOverviewSupporting}
      </p>
      <div className="mt-16 text-center">
        <Button href="/services" variant="secondary">
          View All Services
        </Button>
      </div>
    </Section>
  );
}
