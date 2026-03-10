import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import type { CompanyInfo } from '../../types';

interface AboutPreviewProps {
  company: CompanyInfo;
  image?: string;
  imageAlt?: string;
}

export function AboutPreview({ company, image, imageAlt }: AboutPreviewProps) {
  const placeholderImage =
    image || 'https://via.placeholder.com/800x600?text=Our+Team';
  const alt = imageAlt ?? `${company.name} craftsmanship`;

  return (
    <Section background="cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 text-center">
          <SectionHeader
            title={`About ${company.name}`}
            subtitle={company.description}
            align="center"
          />
          <div className="flex justify-center items-center gap-8 mb-6">
            <div>
              <span className="block text-4xl md:text-5xl font-[family-name:var(--font-display)] font-semibold text-[var(--color-terracotta)]">
                {company.yearsInBusiness}+
              </span>
              <span className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-text-muted)]">
                Years in Business
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button href="/about" variant="secondary">
              Learn More About Us
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[5/4] rounded-sm overflow-hidden shadow-lg">
            <img
              src={placeholderImage}
              alt={alt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
