import { Link } from 'react-router-dom';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  showLink?: boolean;
}

export function ServiceCard({ service, showLink = true }: ServiceCardProps) {
  const image = service.images[0] || 'https://via.placeholder.com/600x400?text=Project';
  const description = service.shortDescription || service.description;

  return (
    <article className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
      <Link to={showLink ? `/services#${service.slug}` : '#'} className="block">
        <div className="aspect-[5/4] overflow-hidden">
          <img
            src={image}
            alt={service.imageAlt ?? service.title}
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-6 md:p-8">
          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-terracotta)] transition-colors tracking-[var(--tracking-tight)]">
            {service.title}
          </h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
}
