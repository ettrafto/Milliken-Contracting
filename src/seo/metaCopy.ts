/** SEO titles and meta descriptions (summaries only; page body copy unchanged). */

export const SEO = {
  home: {
    title: 'Milliken Contracting | Newport & Aquidneck Island Contractor',
    description:
      'Craftsman-led construction, renovations, and restoration for Newport and Aquidneck Island. 30+ years of quality work on older homes.',
  },
  projects: {
    title: 'Projects | Milliken Contracting | Newport RI',
    description:
      'Browse additions, renovations, and restoration projects across Newport and Aquidneck Island. Milliken Contracting portfolio.',
  },
  services: {
    title: 'Construction Services | Newport & Aquidneck Island',
    description:
      'Additions, renovations, restoration, and full construction for Newport and Aquidneck Island homes. Experienced craftsmanship.',
  },
  about: {
    title: 'About | Milliken Contracting',
    description:
      'About Milliken Contracting — 30+ years of hands-on building and restoration across Newport and Aquidneck Island.',
  },
  contact: {
    title: 'Contact | Milliken Contracting',
    description:
      'Request a quote or call Milliken Contracting. Serving Newport, Aquidneck Island, and Rhode Island.',
  },
} as const;

const META_MAX = 160;

export function truncateMeta(text: string, max = META_MAX): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).trimEnd() + '…';
}
