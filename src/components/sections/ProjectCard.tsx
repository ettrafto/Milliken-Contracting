import { Link } from 'react-router-dom';
import type { ProjectEntry } from '../../content/projects';
import {
  projectAssetUrl,
  altForProjectImage,
  getCategoryLabel,
  getManifestEntryByFilename,
} from '../../content/projects';

interface ProjectCardProps {
  project: ProjectEntry;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const coverPath = project.coverFilename
    ? projectAssetUrl(project.folder, project.coverFilename)
    : '';
  const coverEntry = project.coverFilename
    ? getManifestEntryByFilename(project.coverFilename)
    : undefined;
  const orientation = coverEntry?.orientation ?? 'portrait';
  const aspectClass = orientation === 'landscape' ? 'aspect-[5/4]' : 'aspect-[5/4]';

  return (
    <article className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
      <Link to={`/projects/${project.slug}`} className="block">
        <div className={`overflow-hidden ${aspectClass} bg-[var(--color-border)]`}>
          {coverPath ? (
            <img
              src={coverPath}
              alt={altForProjectImage(project.coverFilename)}
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-full min-h-[200px] w-full items-center justify-center px-4 text-center text-sm text-[var(--color-text-muted)]">
              Add a cover image to this project folder
            </div>
          )}
        </div>
        <div className="p-6 md:p-8">
          <span className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-terracotta)] font-medium">
            {getCategoryLabel(project.category)}
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[var(--color-text)] mt-2 mb-2 group-hover:text-[var(--color-terracotta)] transition-colors tracking-[var(--tracking-tight)]">
            {project.title}
          </h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
