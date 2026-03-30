/**
 * Milliken Contracting — Services Content
 * Maps service slugs to manifest images. From IMAGE-CONTENT-PLAN.md.
 */

import { getImageById, getImagePath, type ImageManifestEntry } from './imageManifest';

// Service slug -> dedicated assets in public/images/services/
const SERVICE_IMAGE_MAP: Record<string, string> = {
  restorations: 'service-restorations',
  renovations: 'service-renovations',
  additions: 'service-additions',
  'full-construction': 'service-fullconstruction',
};

export function getServiceImage(slug: string): ImageManifestEntry | undefined {
  const id = SERVICE_IMAGE_MAP[slug];
  return id ? getImageById(id) : undefined;
}

export function getServiceImagePath(slug: string): string {
  const entry = getServiceImage(slug);
  return entry ? getImagePath(entry) : '';
}

export function getServiceImageAlt(slug: string): string {
  const entry = getServiceImage(slug);
  return entry ? entry.alt : '';
}
