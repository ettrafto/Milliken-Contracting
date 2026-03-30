/** Base site URL for canonical links and JSON-LD. Set `VITE_SITE_URL` in `.env` (e.g. https://millikencontracting.com). */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL;
  if (typeof raw === 'string' && raw.trim().length > 0) {
    return raw.replace(/\/$/, '');
  }
  return 'https://YOURDOMAIN.com';
}
