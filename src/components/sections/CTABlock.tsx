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
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-[var(--text-section)] font-semibold text-white mb-4 tracking-[var(--tracking-tight)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">{subtitle}</p>
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
              className="!bg-white !text-[var(--color-metallic-blue)] hover:!bg-white/90 !rounded-sm"
            >
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
