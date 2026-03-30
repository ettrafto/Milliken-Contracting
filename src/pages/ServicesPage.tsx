import { HeroSimple } from '../components/sections/HeroSimple';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ServiceDetail } from '../components/sections/ServiceDetail';
import { servicesPageServices } from '../data';
import { siteContent } from '../content/siteContent';
import { getServicesHeroImage } from '../content/homeContent';
import { PageMeta } from '../components/seo/PageMeta';
import { SEO } from '../seo/metaCopy';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const heroImage = getServicesHeroImage();
  return (
    <>
      <PageMeta title={SEO.services.title} description={SEO.services.description} path="/services" />
      <HeroSimple
        title={siteContent.copy.servicesPageHeroTitle}
        subtitle={siteContent.copy.servicesPageHeroSubtitle}
        image={heroImage.src || undefined}
        imageAlt={heroImage.alt || undefined}
        imagePosition="center 90%"
      />
      <Section background="cream">
        <p className="text-[var(--color-text-muted)] max-w-3xl mb-12">
          Browse our{' '}
          <Link to="/projects" className="text-[var(--color-terracotta)] hover:underline">
            completed projects
          </Link>{' '}
          for examples of this work across Newport and Aquidneck Island.
        </p>
        <div className="space-y-32">
          {servicesPageServices.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-24 pt-16 border-t border-[var(--color-border)]">
          <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-4 text-center">
            {siteContent.copy.additionalCraftsmanshipTitle}
          </h2>
          <p className="text-[var(--color-text-muted)] text-center max-w-2xl mx-auto leading-relaxed">
            {siteContent.copy.additionalCraftsmanshipBody}
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {siteContent.supportingSpecialties.map((item) => (
              <li
                key={item}
                className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm text-[var(--color-text)]"
              >
                {item}
              </li>
            ))}
          </ul>
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
