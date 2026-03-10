import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<string, string> = {
  kitchen: 'Kitchen',
  bathroom: 'Bathroom',
  addition: 'Addition',
  renovation: 'Renovation',
  outdoor: 'Outdoor',
  other: 'Other',
};

export function ProjectCard({ project }: ProjectCardProps) {
  const image = project.images[0] || 'https://via.placeholder.com/600x400?text=Project';
  const categoryLabel = categoryLabels[project.category] || project.category;

  return (
    <div className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs font-medium uppercase tracking-wider">{categoryLabel}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] group-hover:text-[var(--color-terracotta)] transition-colors">
          {project.name}
        </h3>
        {project.location && (
          <p className="text-sm text-[var(--color-text-muted)]">{project.location}</p>
        )}
      </div>
    </div>
  );
}
