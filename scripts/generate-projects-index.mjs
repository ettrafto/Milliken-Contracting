/**
 * Scans public/images/projects and writes src/content/generated/projectsIndex.json
 * - projects: each subfolder with description.json + list of image files in that folder
 * - looseImages: image files directly under projects/ (not inside a subfolder)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const projectsRoot = path.join(root, 'public', 'images', 'projects');
const outDir = path.join(root, 'src', 'content', 'generated');
const outFile = path.join(outDir, 'projectsIndex.json');

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;

/** Not shown in the loose gallery (used as page hero, etc.) */
const LOOSE_IMAGE_EXCLUDE = new Set(['projects-header.png']);

function listDir(full) {
  return fs.readdirSync(full, { withFileTypes: true });
}

function imageFilesInFolder(full) {
  return fs
    .readdirSync(full)
    .filter((name) => IMAGE_EXT.test(name) && !name.startsWith('.'))
    .sort((a, b) => a.localeCompare(b));
}

const looseImages = [];
const projects = [];

if (!fs.existsSync(projectsRoot)) {
  console.warn('generate-projects-index: missing', projectsRoot);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify({ projects: [], looseImages: [] }, null, 2));
  process.exit(0);
}

for (const ent of listDir(projectsRoot)) {
  const full = path.join(projectsRoot, ent.name);
  if (ent.isFile()) {
    if (
      IMAGE_EXT.test(ent.name) &&
      !ent.name.startsWith('.') &&
      !LOOSE_IMAGE_EXCLUDE.has(ent.name)
    ) {
      looseImages.push(ent.name);
    }
    continue;
  }
  if (!ent.isDirectory() || ent.name.startsWith('.')) continue;

  const descPath = path.join(full, 'description.json');
  if (!fs.existsSync(descPath)) continue;

  let description;
  try {
    description = JSON.parse(fs.readFileSync(descPath, 'utf8'));
  } catch (e) {
    console.warn('generate-projects-index: invalid JSON', descPath, e.message);
    continue;
  }

  const folderImages = imageFilesInFolder(full);

  projects.push({
    folder: ent.name,
    description,
    folderImages,
  });
}

projects.sort((a, b) => {
  const ao = a.description?.order ?? 9999;
  const bo = b.description?.order ?? 9999;
  if (ao !== bo) return ao - bo;
  return a.folder.localeCompare(b.folder);
});

looseImages.sort((a, b) => a.localeCompare(b));

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify({ projects, looseImages }, null, 2));
console.log(
  `generate-projects-index: ${projects.length} project(s), ${looseImages.length} loose image(s) → ${path.relative(root, outFile)}`
);
