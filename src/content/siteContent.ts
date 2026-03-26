/**
 * Milliken Contracting — Site Content
 * Craftsman positioning: additions, renovations, kitchens, baths, and older-home restoration.
 * Aligned with docs/content-v2.md.
 */

export const siteContent = {
  company: {
    name: 'Milliken Contracting',
    tagline: 'Preserving the character of old homes with modern craftsmanship.',
    yearsInBusiness: 30,
    description:
      'With over 30 years of experience, Milliken Contracting approaches every project as a craftsman first. From kitchens and bathrooms to full additions and restoration work, the focus is always the same—build it properly, respect the structure, and make it last. Working across Newport and Aquidneck Island, we bring modern building techniques to homes with history—without losing what makes them special.',
    story:
      "For over three decades, Jorgen Milliken has worked as a craftsman focused on doing things the right way—whether that's a kitchen renovation, a home addition, or restoring parts of an older home. Every house has its own character, especially in Newport and across Aquidneck Island. The goal isn't to overwrite that—it's to understand it, work with it, and improve it without cutting corners. Some projects call for restoration. Others call for renovation or new construction. The approach stays the same: careful work, the right materials, and attention to detail that holds up over time.",
    specializations: [
      'Additions',
      'Kitchens & Bathrooms',
      'Renovations',
      'Restoration Work',
      'Custom Woodwork',
    ],
    values: [
      'Quality craftsmanship',
      'Longevity',
      'Work done properly',
      "Respect for the home's character",
      'Integrity',
      'Attention to detail',
      'Honest communication',
      'Preserving heritage',
    ],
    serviceAreas: ['Newport', 'Aquidneck Island', 'Rhode Island'],
    certifications: ['Rhode Island Registered Contractor #37417'],
  },

  copy: {
    heroHeadline: 'Old Homes. Built Right.',
    heroSubtitle:
      'Over 30 years of hands-on craftsmanship across additions, renovations, kitchens, and baths—bringing modern precision to homes with history.',
    servicesOverviewTitle: 'Craftsmanship Across Every Part of Your Home',
    servicesOverviewSubtitle:
      'From kitchens and baths to full additions and restoration work—done with respect for the home and attention to detail.',
    servicesOverviewSupporting:
      'Custom woodwork and finish craftsmanship are part of every project.',
    servicesPageHeroTitle: 'What We Build',
    servicesPageHeroSubtitle:
      'Additions, renovations, kitchens, baths, and restoration work—crafted to last.',
    aboutHeroTitle: "A Craftsman's Approach",
    aboutHeroSubtitle:
      '30+ years of building, restoring, and improving homes across Newport and Aquidneck Island.',
    aboutSpecializeSubtitle:
      'A full range of craftsmanship, with deep experience in older homes.',
    additionalCraftsmanshipTitle: 'Custom Woodwork & Supporting Craftsmanship',
    additionalCraftsmanshipBody:
      "Custom woodwork and finish craftsmanship are at the core of everything we do—whether it's a kitchen, an addition, or restoring original details. Period-appropriate details, matching existing trim, and quality materials still apply across every kind of project.",
    testimonialsSubtitle: 'What Newport and Aquidneck Island homeowners say about working with us.',
    ctaTitle: "Let's Talk About Your Home",
    ctaSubtitle:
      "Whether you're planning an addition, renovation, or restoring an older space, we're ready to help.",
    contactHeroSubtitle:
      "Whether you're planning an addition, renovation, or restoring an older space, we typically respond within 24 hours.",
    aboutServiceAreasSubtitle: 'Serving Newport and Aquidneck Island homeowners.',
    aboutValuesSubtitle: 'What guides our work on every home.',
    projectsHeroSubtitle:
      'Our work spans additions, renovations, kitchens, baths, and restoration across Newport and Aquidneck Island.',
    projectsIntroHeadline: 'Craftsmanship Across Every Project',
    projectsIntroDescription:
      'Our work spans additions, renovations, kitchens, baths, and restoration projects across Newport and Aquidneck Island. Every project is approached with the same goal: do it right and make it last.',
    projectsGalleryTitle: 'Gallery',
    projectsGallerySubtitle:
      'Additional images from additions, renovations, and restoration work across Newport and Aquidneck Island.',
  },

  primaryServiceDescriptions: {
    additions:
      "Additions that feel like they've always been part of your home. New rooms, decks, and porches—we handle foundation through finish, with attention to how new work meets the existing structure so everything reads as intentional, not tacked on.",
    renovations:
      'Kitchens, bathrooms, and interior spaces done properly. We coordinate every detail for a cohesive result that respects the existing structure—older construction, material compatibility, and improved function without losing what makes the home special.',
    restorations:
      'When older homes need careful repair or preservation. We bring careful craftsmanship to character-defining details—exterior work, period-appropriate interiors, and structural updates that respect older construction.',
  },

  supportingSpecialties: [
    'Custom woodwork & millwork',
    'Period-appropriate interior finishes',
    'Kitchens & bathrooms in older homes',
    'Decks, porches & exterior structures',
  ],
} as const;

export type SiteContent = typeof siteContent;
