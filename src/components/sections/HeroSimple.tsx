interface HeroSimpleProps {
  title: string;
  subtitle?: string;
  image?: string;
  /** Short alt for hero photo when present (SEO); decorative if omitted */
  imageAlt?: string;
  /** CSS object-position (e.g. "center 30%" to show more of top). Default: center */
  imagePosition?: string;
}

export function HeroSimple({
  title,
  subtitle,
  image,
  imageAlt,
  imagePosition = 'center',
}: HeroSimpleProps) {
  return (
    <section className={`relative overflow-hidden ${image ? 'min-h-[40vh] py-24 md:py-32' : 'py-24 md:py-32'}`}>
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ''}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      <div
        className={`relative max-w-7xl mx-auto px-6 md:px-8 text-center ${
          image ? 'text-white' : ''
        }`}
      >
        <h1 className="font-[family-name:var(--font-display)] text-[var(--text-hero)] font-medium tracking-[var(--tracking-tight)] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
