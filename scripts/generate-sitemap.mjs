/**
 * Writes public/sitemap.xml and public/robots.txt from routes + projects index.
 * Run after generate-projects-index. Set VITE_SITE_URL in .env (full origin, no trailing slash).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadSiteUrl() {
  const envPath = path.join(root, '.env');
  if (fs.existsSync(envPath)) {
    const text = fs.readFileSync(envPath, 'utf8');
    for (const line of text.split('\n')) {
      const m = line.match(/^\s*VITE_SITE_URL\s*=\s*(.+)$/);
      if (m) {
        return m[1].trim().replace(/^["']|["']$/g, '').replace(/\/$/, '');
      }
    }
  }
  const env = process.env.VITE_SITE_URL;
  if (env && env.trim()) return env.trim().replace(/\/$/, '');
  return 'https://YOURDOMAIN.com';
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function projectSlug(entry) {
  const desc = entry.description ?? {};
  const raw = typeof desc.slug === 'string' ? desc.slug.trim() : '';
  return raw ? slugify(raw) : entry.folder;
}

const siteUrl = loadSiteUrl();
const indexPath = path.join(root, 'src', 'content', 'generated', 'projectsIndex.json');
const projects = fs.existsSync(indexPath)
  ? JSON.parse(fs.readFileSync(indexPath, 'utf8')).projects ?? []
  : [];

const staticPaths = ['/', '/projects', '/services', '/about', '/contact'];
const projectPaths = projects.map((p) => `/projects/${encodeURIComponent(projectSlug(p))}`);

const urls = [...staticPaths, ...projectPaths];
const today = new Date().toISOString().slice(0, 10);

const urlEntries = urls
  .map(
    (loc) => `  <url>
    <loc>${loc === '/' ? `${siteUrl}/` : `${siteUrl}${loc}`}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${loc === '/' ? '1.0' : loc.startsWith('/projects/') ? '0.7' : '0.8'}</priority>
  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), sitemap);

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(root, 'public', 'robots.txt'), robots);

console.log(
  `generate-sitemap: ${urls.length} URL(s), site=${siteUrl} → public/sitemap.xml, public/robots.txt`
);
