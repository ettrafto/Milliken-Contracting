import type { Service } from '../../types';

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const image = service.images[0] || 'https://via.placeholder.com/800x500?text=Project';

  return (
    <article id={service.slug} className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-text)] mb-4">
            {service.title}
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
            {service.description}
          </p>
          {service.scopeOfWork.length > 0 && (
            <div>
              <h3 className="font-semibold text-[var(--color-text)] mb-4">
                Typical Scope of Work
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[var(--color-text-muted)]">
                {service.scopeOfWork.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <img
              src={image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
