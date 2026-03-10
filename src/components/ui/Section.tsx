interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'cream' | 'warm-gray' | 'charcoal' | 'white';
}

export function Section({
  children,
  className = '',
  background = 'cream',
}: SectionProps) {
  const bgMap = {
    cream: 'bg-[var(--color-cream)]',
    'warm-gray': 'bg-[var(--color-warm-gray)]',
    charcoal: 'bg-[var(--color-charcoal)] text-white',
    white: 'bg-white',
  };

  return (
    <section
      className={`py-12 md:py-16 lg:py-24 ${bgMap[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}
