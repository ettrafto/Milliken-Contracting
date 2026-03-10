import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import type { CompanyInfo } from '../../types';

interface AboutPreviewProps {
  company: CompanyInfo;
  image?: string;
}

export function AboutPreview({ company, image }: AboutPreviewProps) {
  const placeholderImage =
    image || 'https://via.placeholder.com/800x600?text=Our+Team';

  return (
    <Section background="cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <SectionHeader
            title={`About ${company.name}`}
            subtitle={company.description}
            align="left"
          />
          <div className="flex items-center gap-8 mb-6">
            <div>
              <span className="block text-4xl md:text-5xl font-[family-name:var(--font-display)] font-semibold text-[var(--color-terracotta)]">
                {company.yearsInBusiness}+
              </span>
              <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                Years in Business
              </span>
            </div>
          </div>
          <Button href="/about" variant="secondary">
            Learn More About Us
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <img
              src={placeholderImage}
              alt={`${company.name} team`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
