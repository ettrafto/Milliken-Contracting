import { Button } from '../ui/Button';

interface HeroProps {
  image: string;
  alt: string;
  /**
   * CSS `object-position` for the cover image (vertical framing).
   * Edit `HERO_IMAGE_OBJECT_POSITION` in `homeContent.ts`. Tailwind equivalents below.
   */
  imageObjectPosition?: string;
  tagline: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
}

export function Hero({
  image,
  alt,
  imageObjectPosition = 'center center',
  tagline,
  subtitle,
  ctaText,
  ctaHref,
}: HeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: imageObjectPosition }}
        fetchPriority="high"
      />
      {/* Even scrim + gradient: improves headline contrast without flattening the photo */}
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/20"
        aria-hidden
      />
      <div className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] flex flex-col items-center justify-center text-center text-white px-6 md:px-8 lg:px-12">
        <h1 className="font-[family-name:var(--font-display)] text-[var(--text-hero)] font-medium tracking-[var(--tracking-tight)] max-w-4xl">
          {tagline}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <Button
          href={ctaHref}
          variant="primary"
          className="mt-8 md:mt-10 !bg-white !text-[var(--color-metallic-blue)] hover:!bg-white/90 !rounded-sm uppercase tracking-widest text-sm"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
