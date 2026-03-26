/**
 * Milliken Contracting — Projects from public/images/projects/{folder}/description.json
 * Loose images at public/images/projects/*.jpg appear in the gallery section.
 * Run: npm run generate-projects-index (also runs predev/prebuild)
 */

import projectsIndexData from './generated/projectsIndex.json';
import { imageManifest } from './imageManifest';
import type { ImageManifestEntry } from './imageManifest';

export type ProjectCategory = 'restoration' | 'renovation' | 'addition' | 'custom-woodwork';

export interface BeforeAfterPair {
  beforeFilename: string;
  afterFilename: string;
  label?: string;
}

export interface ProjectEntry {
  /** Folder name under /images/projects */
  folder: string;
  id: string;
  slug: string;
  title: string;
  location?: string;
  category: ProjectCategory;
  description: string;
  featured: boolean;
  coverFilename: string;
  galleryFilenames: string[];
  beforeAfterPairs: BeforeAfterPair[];
  tags?: string[];
}

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  restoration: 'Restoration',
  renovation: 'Renovation',
  addition: 'Addition',
  'custom-woodwork': 'Custom Woodwork',
};

const PROJECTS_BASE = '/images/projects';

type RawDesc = {
  title?: string;
  slug?: string;
  type?: string;
  location?: string;
  description?: string;
  featured?: boolean;
  order?: number;
  coverImage?: string;
  'main-image'?: string;
  gallery?: string[];
  beforeAfter?: Array<{ before?: string; after?: string; label?: string }>;
  tags?: string[];
};

type GeneratedProject = {
  folder: string;
  description: RawDesc;
  folderImages: string[];
};

function isRemoteUrl(s: string): boolean {
  return /^https?:\/\//i.test(s.trim());
}

function basename(pathOrFile: string): string {
  const parts = pathOrFile.replace(/\\/g, '/').split('/');
  return parts[parts.length - 1] ?? pathOrFile;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function mapTypeToCategory(t: string | undefined): ProjectCategory {
  const lower = (t ?? '').toLowerCase();
  if (lower.includes('restoration')) return 'restoration';
  if (lower.includes('renovation')) return 'renovation';
  if (lower.includes('addition')) return 'addition';
  if (lower.includes('custom')) return 'custom-woodwork';
  return 'restoration';
}

function pickCover(desc: RawDesc, folderImages: string[]): string {
  const fromJson = (desc.coverImage ?? '').trim();
  if (fromJson && !isRemoteUrl(fromJson)) {
    const name = basename(fromJson);
    if (!folderImages.length || folderImages.includes(name)) return name;
  }
  const legacy = (desc['main-image'] ?? '').trim();
  if (legacy && !isRemoteUrl(legacy)) {
    const name = basename(legacy);
    if (!folderImages.length || folderImages.includes(name)) return name;
  }
  return folderImages[0] ?? '';
}

function normalizeProject(raw: GeneratedProject): ProjectEntry {
  const desc = raw.description;
  const folder = raw.folder;
  const folderImages = raw.folderImages;

  const cover = pickCover(desc, folderImages);
  const used = new Set<string>();
  if (cover) used.add(cover);

  const beforeAfterPairs: BeforeAfterPair[] = [];
  for (const p of desc.beforeAfter ?? []) {
    if (!p?.before || !p?.after) continue;
    if (isRemoteUrl(p.before) || isRemoteUrl(p.after)) continue;
    const b = basename(p.before);
    const a = basename(p.after);
    if (
      folderImages.length &&
      (!folderImages.includes(b) || !folderImages.includes(a))
    ) {
      continue;
    }
    beforeAfterPairs.push({ beforeFilename: b, afterFilename: a, label: p.label });
    used.add(b);
    used.add(a);
  }

  let galleryFilenames: string[];
  const explicitGallery = desc.gallery?.filter(Boolean) ?? [];
  if (explicitGallery.length) {
    galleryFilenames = explicitGallery
      .map((g) => basename(g))
      .filter((g) => !isRemoteUrl(g))
      .filter((g) => folderImages.length === 0 || folderImages.includes(g));
  } else {
    galleryFilenames = folderImages.filter((f) => !used.has(f));
  }

  const slug = desc.slug?.trim() ? slugify(desc.slug) : folder;

  return {
    folder,
    id: folder,
    slug,
    title: desc.title ?? folder,
    location: desc.location,
    category: mapTypeToCategory(desc.type),
    description: desc.description ?? '',
    featured: Boolean(desc.featured),
    coverFilename: cover,
    galleryFilenames,
    beforeAfterPairs,
    tags: desc.tags,
  };
}

const index = projectsIndexData as { projects: GeneratedProject[]; looseImages: string[] };

const projectsCache: ProjectEntry[] = index.projects.map(normalizeProject);

export function getProjects(): ProjectEntry[] {
  return projectsCache;
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projectsCache.find((p) => p.slug === slug || p.folder === slug);
}

export function getFeaturedProjects(): ProjectEntry[] {
  return projectsCache.filter((p) => p.featured);
}

export function getCategoryLabel(category: ProjectCategory): string {
  return CATEGORY_LABELS[category] ?? category;
}

/** URL for an image inside a project folder */
export function projectAssetUrl(folder: string, filename: string): string {
  if (!filename) return '';
  return `${PROJECTS_BASE}/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
}

/** Loose image at /images/projects/{filename} (root of projects folder) */
export function looseProjectImageUrl(filename: string): string {
  return `${PROJECTS_BASE}/${encodeURIComponent(filename)}`;
}

function humanizeFilename(filename: string): string {
  return basename(filename)
    .replace(/\.[^.]+$/, '')
    .replace(/[-_.]+/g, ' ')
    .trim();
}

/** Alt text: manifest match by filename, else humanized basename */
export function altForProjectImage(filename: string): string {
  const entry = imageManifest.find((e) => e.filename === filename) as ImageManifestEntry | undefined;
  return entry?.alt ?? humanizeFilename(filename);
}

export function getManifestEntryByFilename(filename: string): ImageManifestEntry | undefined {
  return imageManifest.find((e) => e.filename === filename);
}

const LOOSE_GALLERY_EXCLUDE = new Set(['projects-header.png']);

/** Gallery section: images at projects root not inside a project folder */
export function getLooseProjectGalleryImages(): { src: string; alt: string }[] {
  return index.looseImages
    .filter((filename) => !LOOSE_GALLERY_EXCLUDE.has(filename))
    .map((filename) => ({
      src: looseProjectImageUrl(filename),
      alt: altForProjectImage(filename),
    }));
}
