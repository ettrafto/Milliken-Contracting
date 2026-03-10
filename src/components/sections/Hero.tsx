import { Button } from '../ui/Button';

interface HeroProps {
  image: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
}

export function Hero({ image, tagline, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] md:h-[80vh] overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-4xl">
          {tagline}
        </h1>
        <Button
          href={ctaHref}
          variant="primary"
          className="!bg-white !text-[var(--color-charcoal)] hover:!bg-white/90"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
