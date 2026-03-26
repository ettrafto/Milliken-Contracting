import { Hero } from '../components/sections/Hero';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { AboutPreview } from '../components/sections/AboutPreview';
import { TestimonialCard } from '../components/sections/TestimonialCard';
import { CTABlock } from '../components/sections/CTABlock';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import {
  companyInfo,
  services,
  testimonials,
} from '../data';
import { getHeroImage, getAboutPreviewImage } from '../content/homeContent';
import { siteContent } from '../content/siteContent';

export function HomePage() {
  const hero = getHeroImage();
  const aboutImage = getAboutPreviewImage();

  return (
    <>
      <Hero
        image={hero.src}
        alt={hero.alt}
        imageObjectPosition={hero.imageObjectPosition}
        tagline={siteContent.copy.heroHeadline}
        subtitle={siteContent.copy.heroSubtitle}
        ctaText="Request a Quote"
        ctaHref="/contact"
      />
      <ServicesOverview services={services} />
      <AboutPreview
        company={companyInfo}
        image={aboutImage.src}
        imageAlt={aboutImage.alt}
      />
      <Section background="cream">
        <SectionHeader
          title="What Our Clients Say"
          subtitle={siteContent.copy.testimonialsSubtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>
      <CTABlock
        title={siteContent.copy.ctaTitle}
        subtitle={siteContent.copy.ctaSubtitle}
        showForm={true}
      />
    </>
  );
}
