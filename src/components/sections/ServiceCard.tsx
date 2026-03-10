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
    <article className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link to={showLink ? `/services#${service.slug}` : '#'} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-terracotta)] transition-colors">
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
