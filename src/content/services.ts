/**
 * Milliken Contracting — Services Content
 * Maps service slugs to manifest images. From IMAGE-CONTENT-PLAN.md.
 */

import { getImageById, getImagePath, type ImageManifestEntry } from './imageManifest';

// Service slug -> best-fit image id (from audit)
const SERVICE_IMAGE_MAP: Record<string, string> = {
  restorations: '1',   // Victorian restoration
  renovations: '7',    // Interior living space
  additions: '2',     // Modern staircase addition
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
