import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../types';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <Section background="warm-gray">
      <SectionHeader
        title="Featured Projects"
        subtitle="A glimpse of our recent work. See how we transform spaces into homes you love."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
