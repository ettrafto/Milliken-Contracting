# Jorgen Construction Website

A professional 4-page construction company website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **React Router v6** - Client-side routing
- **Tailwind CSS v4** - Styling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, PageLayout
│   ├── sections/   # Hero, ServiceCard, ContactForm, etc.
│   └── ui/         # Button, Section, SectionHeader
├── pages/          # HomePage, AboutPage, ServicesPage, ContactPage
├── data/           # Content (services, projects, testimonials, etc.)
├── types/          # TypeScript interfaces
└── index.css       # Global styles + Tailwind
```

## Content Updates

Edit files in `src/data/` to update site content:

- `navigation.ts` - Nav links
- `services.ts` - Services list
- `testimonials.ts` - Client reviews
- `company.ts` - Company info
- `contact.ts` - Contact details + map embed URL

## Contact Form

The contact form supports Formspree for lead capture. To enable:

1. Create a form at [formspree.io](https://formspree.io)
2. Copy `.env.example` to `.env`
3. Add your Formspree endpoint: `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx`

Without an endpoint, the form runs in demo mode (simulates success).

## Images

Assets live under `public/images/`:

- **Root** — Numbered portfolio photos (`1.jpg`, `1-pre.jpg`, etc.) referenced by [`src/content/imageManifest.ts`](src/content/imageManifest.ts).
- **`home/`** — Home hero (`home-header.png`), optional extras (`home-about.jpg`).
- **`other/`** — Page headers (`about-header.jpg`, `contact-header.jpg`), Aquidneck map (`aquidneck island.png`).
- **`services/`** — Service section images (`service-additions.jpg`, `service-renovations.jpg`, `service-restorations.png`, `services-header.jpg`).

URLs are built with `getImagePath()` from the manifest; do not hardcode paths except for one-off assets if needed. Service cards resolve via [`src/content/services.ts`](src/content/services.ts).

### Projects page (`public/images/projects/`)

- **Project folders** — Each subfolder with a `description.json` is one project on `/projects` and `/projects/:slug`. Put that project’s images in the same folder. The app reads [`src/content/generated/projectsIndex.json`](src/content/generated/projectsIndex.json), which is produced by:

  ```bash
  npm run generate-projects-index
  ```

  This runs automatically before `npm run dev` and `npm run build`.

- **`description.json` fields** — `title`, `type` (e.g. Restoration / Renovation / Addition), `location`, `description`, `featured`, `order`, optional `slug`, `coverImage` (filename in folder), `gallery` (array of filenames), `beforeAfter` (array of `{ "before", "after", "label" }` with local filenames). Remote `http(s)` URLs are ignored.

- **Gallery strip** — Image files placed **directly** under `public/images/projects/` (not inside a project subfolder) appear in the “Gallery” section below the project grid, with optional alt text from [`imageManifest.ts`](src/content/imageManifest.ts) when filenames match.

## Deployment

Build for production:

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## License

Private - Jorgen Construction
