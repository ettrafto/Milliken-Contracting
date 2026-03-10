import { HeroSimple } from '../components/sections/HeroSimple';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { companyInfo } from '../data';
import { siteContent } from '../content/siteContent';
import { getAboutHeroImage } from '../content/homeContent';

export function AboutPage() {
  const heroImage = getAboutHeroImage();
  return (
    <>
      <HeroSimple
        title="About Us"
        subtitle={siteContent.copy.aboutHeroSubtitle}
        image={heroImage.src || undefined}
      />
      <Section background="cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-text)] mb-6">
            Our Story
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
            {companyInfo.story}
          </p>
        </div>
      </Section>
      <Section background="warm-gray">
        <SectionHeader
          title="What We Specialize In"
          subtitle={siteContent.copy.aboutSpecializeSubtitle}
        />
        <ul className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          {companyInfo.specializations.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 text-[var(--color-text)] text-xl md:text-2xl font-medium"
            >
              <span className="text-2xl md:text-3xl text-[var(--color-terracotta)]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section background="cream">
        <SectionHeader
          title="Experience & Credentials"
          subtitle=""
        />
        <div className="flex flex-wrap gap-8 justify-center mb-12">
          <div className="text-center">
            <span className="block text-4xl md:text-5xl font-[family-name:var(--font-display)] font-semibold text-[var(--color-terracotta)]">
              {companyInfo.yearsInBusiness}+
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              Years in Business
            </span>
          </div>
          {companyInfo.certifications?.map((cert) => (
            <div
              key={cert}
              className="px-6 py-3 bg-white rounded-lg shadow-md text-[var(--color-text)] font-medium"
            >
              {cert}
            </div>
          ))}
        </div>
      </Section>
      <Section background="warm-gray">
        <SectionHeader
          title="Our Values"
          subtitle={siteContent.copy.aboutValuesSubtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.values?.map((value) => (
            <div
              key={value}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <p className="font-semibold text-[var(--color-text)]">{value}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section background="cream">
        <SectionHeader
          title="Service Areas"
          subtitle={siteContent.copy.aboutServiceAreasSubtitle}
        />
        <div className="mb-8">
          <img
            src="/images/aquidneck%20island.png"
            alt="Aquidneck Island"
            className="w-1/4 max-w-md mx-auto rounded-sm "
            loading="lazy"
          />
        </div>
        <p className="text-center text-[var(--color-text-muted)] mb-8">
          {companyInfo.serviceAreas.join(' • ')}
        </p>
        <div className="text-center">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
