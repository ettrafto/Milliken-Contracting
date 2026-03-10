import { HeroSimple } from '../components/sections/HeroSimple';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/sections/ProjectCard';
import { Button } from '../components/ui/Button';
import { getProjects, getFeaturedProjects } from '../content/projects';
import { siteContent } from '../content/siteContent';
import { getProjectsHeroImage } from '../content/homeContent';

export function ProjectsPage() {
  const heroImage = getProjectsHeroImage();
  const projects = getProjects();
  const featuredProjects = getFeaturedProjects();

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

        <div className="mt-16 text-center">
          <Button href="/contact" variant="secondary">
            Discuss Your Project
          </Button>
        </div>
      </Section>
    </>
  );
}
