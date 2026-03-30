import type { Service } from '../types';
import { getServiceImagePath, getServiceImageAlt } from '../content/services';
import { siteContent } from '../content/siteContent';

/** Order: Additions → Renovations → Restoration Work (content-v2) */
const primaryServicesData: Omit<Service, 'images'>[] = [
  {
    id: '1',
    title: 'Additions',
    slug: 'additions',
    description: siteContent.primaryServiceDescriptions.additions,
    shortDescription: 'Seamless additions that feel like part of the original home.',
    scopeOfWork: [
      'Foundation work',
      'Structural framing',
      'Decks & porches',
      'Integration with existing architecture',
    ],
  },
  {
    id: '2',
    title: 'Renovations',
    slug: 'renovations',
    description: siteContent.primaryServiceDescriptions.renovations,
    shortDescription: 'Kitchens, baths, and interior spaces built with care.',
    scopeOfWork: [
      'Kitchens & bathrooms in historic homes',
      'Interior finishes that match existing',
      'Careful structural updates',
      'Material compatibility',
    ],
  },
  {
    id: '3',
    title: 'Restoration Work',
    slug: 'restorations',
    description: siteContent.primaryServiceDescriptions.restorations,
    shortDescription: 'Preserving and repairing older homes the right way.',
    scopeOfWork: [
      'Exterior restoration',
      'Period-appropriate interior work',
      'Character-defining details',
      'Structural updates for older construction',
    ],
  },
  {
    id: '4',
    title: 'Full Construction',
    slug: 'full-construction',
    description: siteContent.primaryServiceDescriptions.fullConstruction,
    shortDescription: 'Ground-up and large-scale builds managed with craftsman oversight.',
    scopeOfWork: [
      'Structural framing and envelope',
      'Coordination from shell through finish',
      'Ground-up and major new construction',
      'Site logistics and trade coordination',
    ],
  },
];

function toServiceWithImages(s: Omit<Service, 'images'>): Service {
  return {
    ...s,
    images: [getServiceImagePath(s.slug)],
    imageAlt: getServiceImageAlt(s.slug),
  };
}

/** Home and overview: first three services only */
export const services: Service[] = primaryServicesData
  .filter((s) => s.slug !== 'full-construction')
  .map(toServiceWithImages);

/** Services page: includes Full Construction */
export const servicesPageServices: Service[] =
  primaryServicesData.map(toServiceWithImages);
