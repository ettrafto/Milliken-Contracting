import type { Service } from '../types';
import { getServiceImagePath, getServiceImageAlt } from '../content/services';
import { siteContent } from '../content/siteContent';

const primaryServicesData: Omit<Service, 'images'>[] = [
  {
    id: '1',
    title: 'Restorations',
    slug: 'restorations',
    description: siteContent.primaryServiceDescriptions.restorations,
    shortDescription: 'Restoration of historic and period homes.',
    scopeOfWork: [
      'Exterior restoration',
      'Period-appropriate interior work',
      'Character-defining details',
      'Structural updates for older construction',
    ],
  },
  {
    id: '2',
    title: 'Renovations',
    slug: 'renovations',
    description: siteContent.primaryServiceDescriptions.renovations,
    shortDescription: 'Thoughtful renovations for older homes.',
    scopeOfWork: [
      'Kitchens & bathrooms in historic homes',
      'Interior finishes that match existing',
      'Careful structural updates',
      'Material compatibility',
    ],
  },
  {
    id: '3',
    title: 'Additions',
    slug: 'additions',
    description: siteContent.primaryServiceDescriptions.additions,
    shortDescription: 'Additions that respect the original structure.',
    scopeOfWork: [
      'Foundation work',
      'Structural framing',
      'Decks & porches',
      'Integration with existing architecture',
    ],
  },
];

export const services: Service[] = primaryServicesData.map((s) => ({
  ...s,
  images: [getServiceImagePath(s.slug)],
  imageAlt: getServiceImageAlt(s.slug),
}));
