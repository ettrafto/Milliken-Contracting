import { HeroSimple } from '../components/sections/HeroSimple';
import { Section } from '../components/ui/Section';
import { ContactForm } from '../components/sections/ContactForm';
import { ContactInfo } from '../components/sections/ContactInfo';
import { companyInfo, contactInfo } from '../data';
import { siteContent } from '../content/siteContent';
import { getContactHeroImage } from '../content/homeContent';

export function ContactPage() {
  const heroImage = getContactHeroImage();
  return (
    <>
      <HeroSimple
        title="Get in Touch"
        subtitle={siteContent.copy.contactHeroSubtitle}
        image={heroImage.src || undefined}
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
              <p className="text-[var(--color-text-muted)] mb-4">
                {companyInfo.serviceAreas.join(', ')}
              </p>
              <img
                src="/images/aquidneck%20island.png"
                alt="Aquidneck Island"
                className="w-3/8 max-w-md rounded-sm "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
