import { Hero } from '../components/sections/Hero';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { AboutPreview } from '../components/sections/AboutPreview';
import { TestimonialCard } from '../components/sections/TestimonialCard';
import { CTABlock } from '../components/sections/CTABlock';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import {
  companyInfo,
  services,
  projects,
  testimonials,
} from '../data';

const heroImage =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80';

export function HomePage() {
  return (
    <>
      <Hero
        image={heroImage}
        tagline={companyInfo.tagline}
        ctaText="Request a Quote"
        ctaHref="/contact"
      />
      <ServicesOverview services={services} />
      <FeaturedProjects projects={projects} />
      <AboutPreview company={companyInfo} />
      <Section background="cream">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what homeowners have to say about working with us."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>
      <CTABlock
        title="Ready to Start Your Project?"
        subtitle="Get a free estimate. We'll respond within 24 hours."
        showForm={true}
      />
    </>
  );
}
