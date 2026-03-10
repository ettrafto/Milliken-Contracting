interface HeroSimpleProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function HeroSimple({ title, subtitle, image }: HeroSimpleProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      <div
        className={`relative max-w-7xl mx-auto px-6 md:px-8 text-center ${
          image ? 'text-white' : ''
        }`}
      >
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
