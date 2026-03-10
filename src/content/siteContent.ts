/**
 * Milliken Contracting — Site Content
 * Restoration craftsman specializing in historic homes in Newport, Rhode Island.
 * Focus: Restorations, Renovations, Additions — with Custom Woodwork as supporting specialty.
 */

export const siteContent = {
  company: {
    name: 'Milliken Contracting',
    tagline: 'Restoration craftsmanship for Newport\'s historic homes.',
    yearsInBusiness: 30,
    description:
      'Milliken Contracting brings over 30 years of experience to Newport and Aquidneck Island. We specialize in restoration, renovation, and addition work for historic and older homes—preserving character, improving longevity, and delivering craftsmanship built to last.',
    story:
      'For over three decades, Jorgen Milliken has focused on what older homes need: careful restoration, thoughtful renovation, and additions that respect the original structure. Newport and Aquidneck Island are full of historic homes that deserve work done properly—not rushed, not generic. We take pride in understanding older construction, matching materials, and improving homes for the long term. Our clients care about craftsmanship and longevity. So do we.',
    specializations: ['Restorations', 'Renovations', 'Additions', 'Custom woodwork'],
    values: [
      'Quality craftsmanship',
      'Longevity',
      'Work done properly',
      'Respect for historic character',
      'Integrity',
      'Attention to detail',
      'Honest communication',
      'Preserving heritage',
    ],
    serviceAreas: ['Newport', 'Aquidneck Island', 'Rhode Island'],
    certifications: ['Licensed & insured'],
  },

  copy: {
    heroHeadline: 'Restoration Craftsmanship for Newport\'s Historic Homes',
    heroSubtitle: 'Thirty years of experience. Thoughtful restorations, renovations, and additions across Aquidneck Island.',
    servicesOverviewSubtitle: 'Restoration, renovation, and addition work for historic and older homes—preserving character and improving longevity.',
    servicesOverviewSupporting: 'Custom woodwork and finish craftsmanship are woven into every project.',
    servicesPageHeroSubtitle: 'Restoration, renovation, and addition work for Newport\'s historic and older homes. Craftsmanship built to last.',
    aboutHeroSubtitle: 'Thirty years of restoration and renovation experience for Newport and Aquidneck Island.',
    aboutSpecializeSubtitle: 'Restoration craftsmanship, thoughtful renovation, and work done properly.',
    additionalCraftsmanshipTitle: 'Custom Woodwork & Supporting Craftsmanship',
    additionalCraftsmanshipBody:
      'Custom woodwork, millwork, and finish craftsmanship are integral to our restoration and renovation work. Period-appropriate details, matching existing trim, and quality materials—whether it\'s a historic restoration, a kitchen or bathroom renovation, or an addition that needs to blend with the original structure.',
    testimonialsSubtitle: 'What Newport and Aquidneck Island homeowners say about working with us.',
    ctaTitle: 'Discuss Your Restoration or Renovation',
    ctaSubtitle: 'We\'d be glad to discuss your historic home. Reach out and we\'ll respond within 24 hours.',
    contactHeroSubtitle: 'Discuss your historic home restoration or renovation. We typically respond within 24 hours.',
    aboutServiceAreasSubtitle: 'Serving Newport and Aquidneck Island homeowners.',
    aboutValuesSubtitle: 'What guides our work on every historic home.',
    projectsHeroSubtitle: 'Our work focuses on thoughtful restorations, renovations, and additions throughout Newport and Aquidneck Island.',
    projectsIntroHeadline: 'Restoration Work That Respects Character',
    projectsIntroDescription:
      'Our work focuses on thoughtful restorations, renovations, and additions throughout Newport and Aquidneck Island. Each project reflects careful craftsmanship and respect for the character of older homes.',
    projectsGalleryTitle: 'Gallery',
    projectsGallerySubtitle: 'Additional images from our restoration and renovation work.',
  },

  primaryServiceDescriptions: {
    restorations:
      'Restore and preserve historic and period homes. We bring careful craftsmanship to character-defining details—exterior restoration, period-appropriate interior work, and structural updates that respect older construction. Newport and Aquidneck Island have many homes that deserve work done properly.',
    renovations:
      'Thoughtful renovations for older homes. Kitchens, bathrooms, interior finishes—we coordinate every detail for a cohesive result that respects the existing structure. We understand older construction, material compatibility, and how to improve a home without losing what makes it special.',
    additions:
      'Additions that match your home. New rooms, decks, porches—we handle foundation through finish, with attention to how new work meets the existing structure. For historic and older homes, we take care that additions feel integrated rather than tacked on.',
  },

  supportingSpecialties: [
    'Custom woodwork & millwork',
    'Period-appropriate interior finishes',
    'Kitchens & bathrooms in older homes',
    'Decks, porches & exterior structures',
  ],
} as const;

export type SiteContent = typeof siteContent;
