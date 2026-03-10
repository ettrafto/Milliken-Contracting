import { useParams, Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ProjectDetail } from '../components/sections/ProjectDetail';
import { getProjectBySlug } from '../content/projects';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <Section background="cream">
        <div className="max-w-2xl mx-auto text-center py-16">
          <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)] mb-4">
            Project not found
          </h1>
          <p className="text-[var(--color-text-muted)] mb-8">
            The project you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section background="cream">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/projects"
          className="inline-block text-sm text-[var(--color-terracotta)] hover:underline mb-8"
        >
          ← Back to Projects
        </Link>
        <ProjectDetail project={project} />
        <div className="mt-16 pt-16 border-t border-[var(--color-border)]">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </Section>
  );
}
