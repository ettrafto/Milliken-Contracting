import { useState } from 'react';
import { HeroSimple } from '../components/sections/HeroSimple';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/sections/ProjectCard';
import { Button } from '../components/ui/Button';
import { ImageGalleryModal } from '../components/ui/ImageGalleryModal';
import { getProjects, getLooseProjectGalleryImages } from '../content/projects';
import { siteContent } from '../content/siteContent';
import { getProjectsHeroImage } from '../content/homeContent';
import { PageMeta } from '../components/seo/PageMeta';
import { SEO } from '../seo/metaCopy';

export function ProjectsPage() {
  const heroImage = getProjectsHeroImage();
  const projects = getProjects();
  const looseGallery = getLooseProjectGalleryImages();
  const [galleryModalIndex, setGalleryModalIndex] = useState<number | null>(null);

  return (
    <>
      <PageMeta title={SEO.projects.title} description={SEO.projects.description} path="/projects" />
      <HeroSimple
        title="Our Projects"
        subtitle={siteContent.copy.projectsHeroSubtitle}
        image={heroImage.src || undefined}
        imageAlt={heroImage.alt || undefined}
        imagePosition={heroImage.imageObjectPosition}
      />
      <Section background="cream">
        <div className="max-w-3xl mx-auto mb-16 md:mb-24">
          <SectionHeader
            title={siteContent.copy.projectsIntroHeadline}
            subtitle={siteContent.copy.projectsIntroDescription}
            align="center"
          />
        </div>

        {/* Projects grid */}
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)] mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Loose images: files directly under /images/projects (not in a project subfolder) */}
        {looseGallery.length > 0 && (
            <div className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-[var(--color-border)]">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)] mb-2">
                {siteContent.copy.projectsGalleryTitle}
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
                {siteContent.copy.projectsGallerySubtitle}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {looseGallery.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setGalleryModalIndex(index)}
                    className="block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg bg-[var(--color-border)] text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)]"
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
        )}

        {galleryModalIndex !== null && looseGallery.length > 0 && (
          <ImageGalleryModal
            images={looseGallery}
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
