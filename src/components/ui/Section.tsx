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
    charcoal: 'bg-[var(--color-metallic-blue)] text-white',
    white: 'bg-white',
  };

  return (
    <section
      className={`py-16 md:py-24 lg:py-32 ${bgMap[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}
