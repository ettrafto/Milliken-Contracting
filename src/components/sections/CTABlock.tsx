import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ContactForm } from './ContactForm';

interface CTABlockProps {
  title: string;
  subtitle?: string;
  showForm?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function CTABlock({
  title,
  subtitle,
  showForm = false,
  ctaText = 'Request a Quote',
  ctaHref = '/contact',
}: CTABlockProps) {
  return (
    <Section background="charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {showForm ? (
          <div className="max-w-xl mx-auto">
            <ContactForm variant="dark" />
          </div>
        ) : (
          <div className="text-center">
            <Button
              href={ctaHref}
              variant="primary"
              className="!bg-white !text-[var(--color-charcoal)] hover:!bg-white/90"
            >
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
