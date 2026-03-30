/**
 * Sets description.json coverImage to the first *-cover* image in each project folder
 * (e.g. circle-window-cover.jpg). Run after adding cover files: npm run sync-project-covers
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsRoot = path.join(__dirname, '..', 'public', 'images', 'projects');
const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;
const COVER_MARK = /-cover\./i;

let updated = 0;
for (const folder of fs.readdirSync(projectsRoot)) {
  const full = path.join(projectsRoot, folder);
  if (!fs.statSync(full).isDirectory()) continue;
  const descPath = path.join(full, 'description.json');
  if (!fs.existsSync(descPath)) continue;

  const names = fs.readdirSync(full).filter((n) => IMAGE_EXT.test(n) && !n.startsWith('.'));
  const covers = names.filter((n) => COVER_MARK.test(n)).sort((a, b) => a.localeCompare(b));
  if (covers.length === 0) {
    console.warn(`sync-project-covers: no *-cover* image in ${folder}/`);
    continue;
  }
  const desc = JSON.parse(fs.readFileSync(descPath, 'utf8'));
  const chosen = covers[0];
  if (covers.length > 1) {
    console.warn(`sync-project-covers: multiple *-cover* in ${folder}/, using ${chosen}`);
  }
  if (desc.coverImage === chosen) continue;
  desc.coverImage = chosen;
  fs.writeFileSync(descPath, JSON.stringify(desc, null, 2) + '\n');
  console.log(`${folder}: coverImage → ${chosen}`);
  updated++;
}
console.log(`sync-project-covers: ${updated} description.json file(s) updated`);
