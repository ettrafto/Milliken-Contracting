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
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center' : ''
      } ${className}`}
    >
      <h2 className="font-[family-name:var(--font-display)] text-[var(--text-section)] font-semibold text-[var(--color-text)] mb-4 tracking-[var(--tracking-tight)]">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
