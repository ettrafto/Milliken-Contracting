import { useState } from 'react';
import { HeroSimple } from '../components/sections/HeroSimple';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/sections/ProjectCard';
import { Button } from '../components/ui/Button';
import { ImageGalleryModal } from '../components/ui/ImageGalleryModal';
import { getProjects, getFeaturedProjects, getOrphanImages } from '../content/projects';
import { siteContent } from '../content/siteContent';
import { getProjectsHeroImage } from '../content/homeContent';
import { getImagePath } from '../content/imageManifest';

export function ProjectsPage() {
  const heroImage = getProjectsHeroImage();
  const projects = getProjects();
  const featuredProjects = getFeaturedProjects();
  const orphanImages = getOrphanImages();
  const [galleryModalIndex, setGalleryModalIndex] = useState<number | null>(null);

  return (
    <>
      <HeroSimple
        title="Our Projects"
        subtitle={siteContent.copy.projectsHeroSubtitle}
        image={heroImage.src || undefined}
      />
      <Section background="cream">
        <div className="max-w-3xl mx-auto mb-16 md:mb-24">
          <SectionHeader
            title={siteContent.copy.projectsIntroHeadline}
            subtitle={siteContent.copy.projectsIntroDescription}
            align="center"
          />
        </div>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16 md:mb-24">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)] mb-8">
              Featured Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Gallery grid */}
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)] mb-8">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Orphan images gallery */}
        {orphanImages.length > 0 && (
            <div className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-[var(--color-border)]">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)] mb-2">
                {siteContent.copy.projectsGalleryTitle}
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
                {siteContent.copy.projectsGallerySubtitle}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {orphanImages.map((entry, index) => (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => setGalleryModalIndex(index)}
                    className="block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg bg-[var(--color-border)] text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)]"
                  >
                    <img
                      src={getImagePath(entry)}
                      alt={entry.alt}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
        )}

        {galleryModalIndex !== null && orphanImages.length > 0 && (
          <ImageGalleryModal
            images={orphanImages}
            currentIndex={galleryModalIndex}
            onClose={() => setGalleryModalIndex(null)}
            onNavigate={setGalleryModalIndex}
          />
        )}

        <div className="mt-16 text-center">
          <Button href="/contact" variant="secondary">
            Discuss Your Project
          </Button>
        </div>
      </Section>
    </>
  );
}
