import type { ProjectEntry } from '../../content/projects';
import {
  projectAssetUrl,
  altForProjectImage,
  getCategoryLabel,
  getManifestEntryByFilename,
} from '../../content/projects';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

interface ProjectDetailProps {
  project: ProjectEntry;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const coverPath = project.coverFilename
    ? projectAssetUrl(project.folder, project.coverFilename)
    : '';

  return (
    <article className="space-y-16 md:space-y-24">
      {/* Header */}
      <div>
        <span className="text-sm uppercase tracking-[var(--tracking-wide)] text-[var(--color-terracotta)] font-medium">
          {getCategoryLabel(project.category)}
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text)] mt-2 mb-4 tracking-[var(--tracking-tight)]">
          {project.title}
        </h1>
        {project.location && (
          <p className="text-[var(--color-text-muted)]">{project.location}</p>
        )}
        <p className="mt-6 text-lg text-[var(--color-text)] leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* Cover image */}
      {coverPath && (
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm bg-[var(--color-border)]">
          <img
            src={coverPath}
            alt={altForProjectImage(project.coverFilename)}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      )}

      {/* Before/After sliders */}
      {project.beforeAfterPairs.length > 0 && (
        <div className="space-y-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
            Before & After
          </h2>
          <div className="space-y-12">
            {project.beforeAfterPairs.map((pair, i) => (
              <BeforeAfterSlider
                key={i}
                beforeImage={projectAssetUrl(project.folder, pair.beforeFilename)}
                afterImage={projectAssetUrl(project.folder, pair.afterFilename)}
                beforeAlt={altForProjectImage(pair.beforeFilename)}
                afterAlt={altForProjectImage(pair.afterFilename)}
                label={pair.label}
              />
            ))}
          </div>
        </div>
      )}

      {/* Gallery images */}
      {project.galleryFilenames.length > 0 && (
        <div className="space-y-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.galleryFilenames.map((filename) => {
              const entry = getManifestEntryByFilename(filename);
              const orientation = entry?.orientation ?? 'portrait';
              const aspectClass =
                orientation === 'landscape' ? 'aspect-[16/9]' : 'aspect-[4/5]';
              return (
                <div
                  key={filename}
                  className={`overflow-hidden rounded-sm ${aspectClass}`}
                >
                  <img
                    src={projectAssetUrl(project.folder, filename)}
                    alt={altForProjectImage(filename)}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}
