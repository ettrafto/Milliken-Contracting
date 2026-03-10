import { HeroSimple } from '../components/sections/HeroSimple';
import { Section } from '../components/ui/Section';
import { ContactForm } from '../components/sections/ContactForm';
import { ContactInfo } from '../components/sections/ContactInfo';
import { MapEmbed } from '../components/sections/MapEmbed';
import { companyInfo, contactInfo } from '../data';

export function ContactPage() {
  return (
    <>
      <HeroSimple
        title="Get in Touch"
        subtitle="Request a quote or reach out with questions. We typically respond within 24 hours."
      />
      <Section background="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)] mb-6">
              Request a Quote
            </h2>
            <ContactForm />
          </div>
          <div className="space-y-10">
            <ContactInfo contact={contactInfo} />
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)] mb-4">
                Service Areas
              </h3>
              <p className="text-[var(--color-text-muted)]">
                {companyInfo.serviceAreas.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section background="warm-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)] mb-6">
            Find Us
          </h2>
          <MapEmbed embedUrl={contactInfo.mapEmbedUrl} />
        </div>
      </Section>
    </>
  );
}
