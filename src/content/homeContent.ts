/**
 * Milliken Contracting — Home Page Content
 * Image placements from IMAGE-CONTENT-PLAN.md
 */

import {
  getImageById,
  getImagePath,
  type ImageManifestEntry,
} from './imageManifest';

const HOME_HERO_IMAGE_ID = 'home-hero';
const HERO_IMAGE_ALT =
  'Home exterior showcasing Milliken Contracting craftsmanship';

/**
 * CSS `object-position` (paired with `object-cover` on the hero image).
 * Change this string to move framing **up** or **down** (second value = vertical anchor).
 *
 * | If you’d use Tailwind… | Set this CSS value instead |
 * |------------------------|----------------------------|
 * | `object-top` | `center top` |
 * | `object-[center_20%]` | `center 20%` |
 * | `object-center` | `center center` (default) |
 * | `object-[center_80%]` | `center 80%` |
 * | `object-bottom` | `center bottom` |
 */
const HERO_IMAGE_OBJECT_POSITION = 'center center';

// Featured: 4 strongest finished shots — 9, 4, 12, 8
const FEATURED_IMAGE_IDS = ['9', '4', '12', '8'] as const;

// Services overview: one per service card — 3, 9, 8.1, 14
// (Custom woodwork, Bathroom, Additions/timber, Exteriors)
const SERVICES_IMAGE_IDS = ['3', '9', '8.1', '14'] as const;

// About preview on home — public/images/home/home-about.jpg
const ABOUT_IMAGE_ID = 'home-about-preview';

// Page heroes: About, Services, Contact use assets under public/images/other and public/images/services
const ABOUT_HERO_IMAGE_ID = 'about-hero';
const SERVICES_HERO_IMAGE_ID = 'services-header';
const CONTACT_HERO_IMAGE_ID = 'contact-hero';
const PROJECTS_HERO_IMAGE_ID = 'projects-page-hero';

/** Projects page hero: lower second value = frame higher on the photo (more sky/roof). Try `center 20%`–`center 40%`. */
const PROJECTS_HERO_IMAGE_OBJECT_POSITION = 'center 65%';

export function getHeroImage(): {
  src: string;
  alt: string;
  imageObjectPosition: string;
} {
  const entry = getImageById(HOME_HERO_IMAGE_ID);
  return {
    src: entry ? getImagePath(entry) : '',
    alt: HERO_IMAGE_ALT,
    imageObjectPosition: HERO_IMAGE_OBJECT_POSITION,
  };
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

export function getProjectsHeroImage(): {
  src: string;
  alt: string;
  imageObjectPosition: string;
} {
  const entry = getImageById(PROJECTS_HERO_IMAGE_ID);
  if (!entry) {
    return { src: '', alt: '', imageObjectPosition: PROJECTS_HERO_IMAGE_OBJECT_POSITION };
  }
  return {
    src: getImagePath(entry),
    alt: entry.alt,
    imageObjectPosition: PROJECTS_HERO_IMAGE_OBJECT_POSITION,
  };
}
