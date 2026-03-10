interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 md:mb-12 ${
        align === 'center' ? 'text-center' : ''
      } ${className}`}
    >
      <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
