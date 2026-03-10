/**
 * Milliken Contracting — Home Page Content
 * Image placements from IMAGE-CONTENT-PLAN.md
 */

import {
  getImageById,
  getImagePath,
  type ImageManifestEntry,
} from './imageManifest';

// Hero: 18.jpg — Victorian house, wraparound porch
const HERO_IMAGE_ID = '18';

// Featured: 4 strongest finished shots — 9, 4, 12, 8
const FEATURED_IMAGE_IDS = ['9', '4', '12', '8'] as const;

// Services overview: one per service card — 3, 9, 8.1, 14
// (Custom woodwork, Bathroom, Additions/timber, Exteriors)
const SERVICES_IMAGE_IDS = ['3', '9', '8.1', '14'] as const;

// About preview: craftsmanship-focused — 1.1 (custom exterior staircase)
const ABOUT_IMAGE_ID = '1-1';

// Page heroes: About (4 = herringbone interior), Services (18-1), Contact (19), Projects (1 = Victorian)
const ABOUT_HERO_IMAGE_ID = '4';
const SERVICES_HERO_IMAGE_ID = '18-1';
const CONTACT_HERO_IMAGE_ID = '19';
const PROJECTS_HERO_IMAGE_ID = '1';

export function getHeroImage(): { src: string; alt: string } {
  const entry = getImageById(HERO_IMAGE_ID);
  if (!entry) return { src: '', alt: '' };
  return { src: getImagePath(entry), alt: entry.alt };
}

export function getFeaturedImages(): Array<{ src: string; alt: string; id: string }> {
  return FEATURED_IMAGE_IDS.map((id) => {
    const entry = getImageById(id);
    if (!entry) return { src: '', alt: '', id };
    return { src: getImagePath(entry), alt: entry.alt, id };
  }).filter((e) => e.src);
}

export function getServicesOverviewImages(): ImageManifestEntry[] {
  return SERVICES_IMAGE_IDS.map((id) => getImageById(id)).filter(
    (e): e is ImageManifestEntry => !!e
  );
}

export function getAboutPreviewImage(): { src: string; alt: string } {
  const entry = getImageById(ABOUT_IMAGE_ID);
  if (!entry) return { src: '', alt: '' };
  return { src: getImagePath(entry), alt: entry.alt };
}

export function getAboutHeroImage(): { src: string; alt: string } {
  const entry = getImageById(ABOUT_HERO_IMAGE_ID);
  if (!entry) return { src: '', alt: '' };
  return { src: getImagePath(entry), alt: entry.alt };
}

export function getServicesHeroImage(): { src: string; alt: string } {
  const entry = getImageById(SERVICES_HERO_IMAGE_ID);
  if (!entry) return { src: '', alt: '' };
  return { src: getImagePath(entry), alt: entry.alt };
}

export function getContactHeroImage(): { src: string; alt: string } {
  const entry = getImageById(CONTACT_HERO_IMAGE_ID);
  if (!entry) return { src: '', alt: '' };
  return { src: getImagePath(entry), alt: entry.alt };
}

export function getProjectsHeroImage(): { src: string; alt: string } {
  const entry = getImageById(PROJECTS_HERO_IMAGE_ID);
  if (!entry) return { src: '', alt: '' };
  return { src: getImagePath(entry), alt: entry.alt };
}
