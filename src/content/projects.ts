/**
 * Milliken Contracting — Projects Content
 * Gallery of restoration, renovation, and addition work.
 * References image manifest IDs for consistency.
 */

import { getImageById, getImagePath, imageManifest } from './imageManifest';
import type { ImageManifestEntry } from './imageManifest';

export type ProjectCategory = 'restoration' | 'renovation' | 'addition' | 'custom-woodwork';

export interface BeforeAfterPair {
  beforeImageId: string;
  afterImageId: string;
  label?: string;
}

export interface ProjectEntry {
  id: string;
  slug: string;
  title: string;
  location?: string;
  category: ProjectCategory;
  description: string;
  featured: boolean;
  coverImageId: string;
  galleryImageIds: string[];
  beforeAfterPairs: BeforeAfterPair[];
  tags?: string[];
}

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  restoration: 'Restoration',
  renovation: 'Renovation',
  addition: 'Addition',
  'custom-woodwork': 'Custom Woodwork',
};

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const PROJECTS_DATA: Omit<ProjectEntry, 'slug'>[] = [
  {
    id: 'victorian-restoration',
    title: 'Historic Newport Home Restoration',
    location: 'Newport, RI',
    category: 'restoration',
    description:
      'Careful restoration work preserving original character while improving structural integrity. Exterior woodwork, period-appropriate details, and careful attention to historic materials.',
    featured: true,
    coverImageId: '1',
    galleryImageIds: ['1-1', '1-pre'],
    beforeAfterPairs: [
      {
        beforeImageId: '1-pre',
        afterImageId: '1-1',
        label: 'Exterior restoration',
      },
    ],
    tags: ['victorian', 'historic', 'exterior'],
  },
  {
    id: 'front-porch-renovation',
    title: 'Front Porch Renovation',
    location: 'Aquidneck Island',
    category: 'renovation',
    description:
      'Complete porch renovation with new decking, railings, and structural updates. The transformation preserved the home\'s character while modernizing the entryway.',
    featured: true,
    coverImageId: '12-2',
    galleryImageIds: ['12-before', '12'],
    beforeAfterPairs: [
      {
        beforeImageId: '12-pre',
        afterImageId: '12-2',
        label: 'Porch renovation',
      },
    ],
    tags: ['porch', 'exterior', 'decking'],
  },
  {
    id: 'modern-addition',
    title: 'Modern Addition',
    location: 'Newport, RI',
    category: 'addition',
    description:
      'New addition with modern staircase, cable railing, and shingle siding. The addition integrates with the existing structure while bringing contemporary craftsmanship to the project.',
    featured: false,
    coverImageId: '2',
    galleryImageIds: ['3', '8'],
    beforeAfterPairs: [],
    tags: ['addition', 'staircase', 'modern'],
  },
];

function buildProjects(): ProjectEntry[] {
  return PROJECTS_DATA.map((p) => ({
    ...p,
    slug: toSlug(p.title),
  }));
}

const projectsCache = buildProjects();

export function getProjects(): ProjectEntry[] {
  return projectsCache;
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projectsCache.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectEntry[] {
  return projectsCache.filter((p) => p.featured);
}

export function getCategoryLabel(category: ProjectCategory): string {
  return CATEGORY_LABELS[category] ?? category;
}

export function getProjectImagePath(imageId: string): string {
  const entry = getImageById(imageId);
  return entry ? getImagePath(entry) : '';
}

export function getProjectImageEntry(imageId: string): ImageManifestEntry | undefined {
  return getImageById(imageId);
}

/** Image IDs used in any project (cover, gallery, before/after) */
function getProjectImageIds(): Set<string> {
  const ids = new Set<string>();
  for (const p of projectsCache) {
    ids.add(p.coverImageId);
    p.galleryImageIds.forEach((id) => ids.add(id));
    p.beforeAfterPairs.forEach((pair) => {
      ids.add(pair.beforeImageId);
      ids.add(pair.afterImageId);
    });
  }
  return ids;
}

/** Orphan images: in manifest but not used in any project */
export function getOrphanImages(): ImageManifestEntry[] {
  const usedIds = getProjectImageIds();
  return imageManifest.filter((entry) => !usedIds.has(entry.id));
}
