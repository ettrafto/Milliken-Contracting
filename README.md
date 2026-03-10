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

Place client images in `public/images/`:

- `hero/` - Hero section images
- `services/` - Service images
- `about/` - About/team photos

Update paths in `src/data/services.ts` to use `/images/...`.

## Deployment

Build for production:

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## License

Private - Jorgen Construction
