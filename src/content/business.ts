/**
 * Milliken Contracting — Business Content
 * Single source of truth for company info, messaging, and site configuration.
 * Import and destructure as needed across pages/components.
 */

export const business = {
  company: {
    name: 'Milliken Contracting',
    primaryContact: 'Jorgen Milliken',
    yearsInBusiness: 30,
    yearsInBusinessLabel: '30+ years',
    // Helper: short blurb for hero, cards, meta
    tagline:
      'Quality craftsmanship for restorations, renovations, and additions.',
    // Helper: longer description for About page
    description:
      'Milliken Contracting brings over 30 years of experience to Aquidneck Island. We specialize in restorations, renovations, additions, and custom woodwork—delivering quality work built to last.',
    story: null, // _missing: company origin story
  },

  contact: {
    phone: '401-207-8109',
    phoneFormatted: '(401) 207-8109',
    email: 'millikenjorgen@gmail.com',
    /** Set to match Google Business Profile exactly (street, city, ST ZIP); leave empty until confirmed */
    address: '',
    //mapEmbedUrl: null, // _missing: Google Maps embed
  },

  serviceArea: {
    primary: 'Aquidneck Island',
    regions: ['Aquidneck Island'],
    // Helper: for footer, contact page
    displayText: 'Serving Aquidneck Island',
  },

  businessProfile: {
    // Confirmed from discovery
    specializations: [
      'Restorations',
      'Renovations',
      'Additions',
      'Custom woodwork',
    ],
    // Inferred from "likely residential remodeling / general contracting"
    specializationsInferred: ['Residential remodeling', 'General contracting'],
    // All project types discussed (confirmed + likely)
    projectTypes: [
      'Home renovations',
      'Kitchen remodels',
      'Bathroom remodels',
      'Additions',
      'New construction',
      'Decks and outdoor structures',
      'Commercial construction',
      'Roofing',
      'General contracting',
    ],
  },

  preferredProjects: {
    // Most profitable / most desirable
    topPriorities: ['Restorations', 'Renovations', 'Additions'],
    // Wants more of
    growthFocus: ['Custom woodwork'],
    // Preferred not to take on — not clearly answered
    avoid: null, // _missing
  },

  portfolio: {
    photoCount: 100,
    organizedByProject: false,
    hasBeforeAfter: true,
    categories: [
      'Kitchens',
      'Bathrooms',
      'Full Renovations',
      'Additions',
      'Outdoor Projects',
      'Commercial Projects',
    ],
    // Ideal metadata per project (for when portfolio is built)
    metadataFields: [
      'projectLocation',
      'projectType',
      'briefDescription',
      'challengesSolved',
      'materialsUsed',
      'completionDate',
    ],
  },

  goals: {
    sitePurpose: [
      'Generate new leads',
      'Showcase past work',
      'Build credibility',
      'Make contact easier',
      'Attract larger projects',
    ],
    desiredUserActions: ['Submit contact form', 'Call the business'],
  },

  idealClients: {
    targetMarkets: ['Homeowners', 'Property managers'],
    clientsTheyEnjoy: [
      'People looking for quality',
      'People looking for longevity',
      'People wanting good, clean work done properly',
    ],
    clientsToAvoid: ['House flippers', 'Realtors'],
    // Helper: messaging for hero, about, CTA
    clientFitMessaging:
      'For homeowners and property managers who value quality, longevity, and work done right.',
  },

  leadGeneration: {
    currentSources: ['Phone', 'Referrals'],
    desiredFeatures: ['Phone call button', 'Consultation request form'],
    // Helper: primary and secondary CTAs
    primaryCta: 'Request a Consultation',
    secondaryCta: 'Call Now',
    primaryCtaHref: '/contact',
    phoneCtaHref: 'tel:401-207-8109',
  },

  branding: {
    logo: {
      hasTraditionalLogo: false,
      note: 'Client has a picture they would like to use — not clearly a traditional contractor logo.',
    },
    colors: ['greens', 'greys', 'blues'],
    style: {
      preference: 'Image-forward, design-led, visually strong',
      reference: 'Preferred example #2 from reference set',
      emphasis: 'Showcase craftsmanship visually',
    },
  },

  reviews: {
    hasReviews: false,
    platforms: [], // No Google, Yelp, Facebook, Houzz, etc.
    reviewLinks: [],
    note: 'No current reviews listed on any platform.',
  },

  // Helper: featured items for homepage/services prioritization
  featured: {
    services: [
      'Restorations',
      'Renovations',
      'Additions',
      'Custom woodwork',
    ],
    projectCategories: [
      'Kitchens',
      'Bathrooms',
      'Full Renovations',
      'Additions',
      'Outdoor Projects',
    ],
  },

  _notes: {
    missingInfo: [
      'Physical address (if any)',
      'Google Maps embed URL',
      'Company origin story / "our story" narrative',
      'Projects preferred NOT to take on',
      'Logo / hero image asset from client',
    ],
    inferredItems: [
      'Residential remodeling and general contracting as specializations',
      'Developers as possible target market',
    ],
    followUp: [
      'Confirm full list of specializations',
      'Clarify projects to avoid',
      'Obtain logo/hero image',
      'Get physical address and map embed',
      'Request testimonials or review links when available',
    ],
  },
} as const;

export type Business = typeof business;
