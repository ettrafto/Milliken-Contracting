# Site copy map — Milliken Contracting

**Purpose:** Where user-facing and SEO copy lives in the codebase.  
**Primary content source:** `src/content/siteContent.ts` (marketing + page blurbs). **Company object on the site** is assembled in `src/data/company.ts` from `siteContent`. **Phone/email** come from `src/content/business.ts` via `src/data/contact.ts`.

**Note:** `src/content/business.ts` is mostly an internal brief; only `contact.phone` / `contact.email` (and formatted phone) are wired into the UI through `contactInfo`.

**Duplicate / drift:** Testimonials in `src/data/testimonials.ts` refer to “Jorgen Construction” while the brand elsewhere is “Milliken Contracting.” `index.html` meta/title align with `siteContent`, not `business.ts` tagline.

---

## Main headers & body copy (as shown on the site)

Verbatim text visitors see, grouped by page. Line breaks are omitted; bullets are list items as rendered.

### Global (navbar & footer)

- **Browser title:** Milliken Contracting | Restoration Craftsmanship for Newport's Historic Homes (`index.html`)
- **Meta description:** Milliken Contracting - Restoration craftsmanship for Newport's historic homes. Thirty years of experience in restorations, renovations, and additions across Aquidneck Island.
- **Logo / brand (nav):** Milliken Contracting
- **Nav links:** Home · Projects · Services · About · Contact
- **Footer — company:** Milliken Contracting  
- **Footer — tagline (paragraph):** Restoration craftsmanship for Newport's historic homes.
- **Footer — contact:** (401) 207-8109 · millikenjorgen@gmail.com (`src/data/contact.ts` / `business.ts`)
- **Footer — service areas (paragraph):** Newport, Aquidneck Island, Rhode Island
- **Footer — copyright:** © *{current year}* Milliken Contracting. All rights reserved.

### Home (`/`)

- **Hero (H1):** Restoration Craftsmanship for Newport's Historic Homes  
- **Hero (subtitle):** Thirty years of experience. Thoughtful restorations, renovations, and additions across Aquidneck Island.  
- **Hero button:** Request a Quote  

- **Section — Our Services (H2)**  
- **Subtitle:** Restoration, renovation, and addition work for historic and older homes—preserving character and improving longevity.  
- **Supporting line:** Custom woodwork and finish craftsmanship are woven into every project.  
- **Button:** View All Services  

**Service cards (H3 + short paragraph each):**

1. **Restorations** — Restoration of historic and period homes.  
2. **Renovations** — Thoughtful renovations for older homes.  
3. **Additions** — Additions that respect the original structure.  

- **Section — About Milliken Contracting (H2)**  
- **Subtitle / paragraph:** Milliken Contracting brings over 30 years of experience to Newport and Aquidneck Island. We specialize in restoration, renovation, and addition work for historic and older homes—preserving character, improving longevity, and delivering craftsmanship built to last.  
- **Stat label:** Years in Business (with “30+”)  
- **Button:** Learn More About Us  

- **Section — What Our Clients Say (H2)**  
- **Subtitle:** What Newport and Aquidneck Island homeowners say about working with us.  

**Testimonials (quote + attribution):**

1. “Jorgen Construction transformed our kitchen beyond our expectations. The attention to detail and craftsmanship is outstanding. We couldn't be happier.” — **Sarah M.**, Homeowner  
2. “Professional from start to finish. They completed our bathroom renovation on time and within budget. The quality of work is exceptional.” — **James R.**, Homeowner  
3. “We hired them for a full home addition. The team was communicative, respectful of our space, and delivered exactly what we envisioned.” — **Linda K.**, Homeowner  

- **Bottom CTA (H2):** Discuss Your Restoration or Renovation  
- **Subtitle:** We'd be glad to discuss your historic home. Reach out and we'll respond within 24 hours.  
- *(Contact form labels/placeholders: see [Contact form](#contact-form-ui) below.)*

### About (`/about`)

- **Hero (H1):** About Us  
- **Hero (subtitle):** Thirty years of restoration and renovation experience for Newport and Aquidneck Island.  

- **Our Story (H2)**  
- **Body:** For over three decades, Jorgen Milliken has focused on what older homes need: careful restoration, thoughtful renovation, and additions that respect the original structure. Newport and Aquidneck Island are full of historic homes that deserve work done properly—not rushed, not generic. We take pride in understanding older construction, matching materials, and improving homes for the long term. Our clients care about craftsmanship and longevity. So do we.  

- **What We Specialize In (H2)**  
- **Subtitle:** Restoration craftsmanship, thoughtful renovation, and work done properly.  
- **List:** Restorations · Renovations · Additions · Custom woodwork  

- **Experience & Credentials (H2)**  
- **Stat label:** Years in Business (30+)  
- **Credential chip:** Licensed & insured  

- **Our Values (H2)**  
- **Subtitle:** What guides our work on every historic home.  
- **Value cards:** Quality craftsmanship · Longevity · Work done properly · Respect for historic character · Integrity · Attention to detail · Honest communication · Preserving heritage  

- **Service Areas (H2)**  
- **Subtitle:** Serving Newport and Aquidneck Island homeowners.  
- **Areas line:** Newport • Aquidneck Island • Rhode Island  
- **Button:** Get in Touch  

### Services (`/services`)

- **Hero (H1):** Our Services  
- **Hero (subtitle):** Restoration, renovation, and addition work for Newport's historic and older homes. Craftsmanship built to last.  

**Per service (H2 + body + “Typical Scope of Work” bullets):**

1. **Restorations** — Restore and preserve historic and period homes. We bring careful craftsmanship to character-defining details—exterior restoration, period-appropriate interior work, and structural updates that respect older construction. Newport and Aquidneck Island have many homes that deserve work done properly.  
   - Exterior restoration · Period-appropriate interior work · Character-defining details · Structural updates for older construction  

2. **Renovations** — Thoughtful renovations for older homes. Kitchens, bathrooms, interior finishes—we coordinate every detail for a cohesive result that respects the existing structure. We understand older construction, material compatibility, and how to improve a home without losing what makes it special.  
   - Kitchens & bathrooms in historic homes · Interior finishes that match existing · Careful structural updates · Material compatibility  

3. **Additions** — Additions that match your home. New rooms, decks, porches—we handle foundation through finish, with attention to how new work meets the existing structure. For historic and older homes, we take care that additions feel integrated rather than tacked on.  
   - Foundation work · Structural framing · Decks & porches · Integration with existing architecture  

- **Supporting block (H2):** Custom Woodwork & Supporting Craftsmanship  
- **Body:** Custom woodwork, millwork, and finish craftsmanship are integral to our restoration and renovation work. Period-appropriate details, matching existing trim, and quality materials—whether it's a historic restoration, a kitchen or bathroom renovation, or an addition that needs to blend with the original structure.  
- **Chips:** Custom woodwork & millwork · Period-appropriate interior finishes · Kitchens & bathrooms in older homes · Decks, porches & exterior structures  
- **Button:** Request a Quote  

### Contact (`/contact`)

- **Hero (H1):** Get in Touch  
- **Hero (subtitle):** Discuss your historic home restoration or renovation. We typically respond within 24 hours.  

- **Column heading (H2):** Request a Quote  
- **Contact sidebar (H3):** Get in Touch  
- **Labels + values:** Phone — (401) 207-8109 · Email — millikenjorgen@gmail.com  
- **Service Areas (H3)**  
- **Paragraph:** Newport, Aquidneck Island, Rhode Island  

### Projects (`/projects`)

- **Hero (H1):** Our Projects  
- **Hero (subtitle):** Our work focuses on thoughtful restorations, renovations, and additions throughout Newport and Aquidneck Island.  

- **Intro (SectionHeader):** Restoration Work That Respects Character  
- **Intro body:** Our work focuses on thoughtful restorations, renovations, and additions throughout Newport and Aquidneck Island. Each project reflects careful craftsmanship and respect for the character of older homes.  

- **H2:** Featured Work  
- **H2:** All Projects  

**Project cards (category label + title + excerpt):**

1. **RESTORATION** — Historic Newport Home Restoration — *Careful restoration work preserving original character while improving structural integrity. Exterior woodwork, period-appropriate details, and careful attention to historic materials.* (Location: Newport, RI)  
2. **RENOVATION** — Front Porch Renovation — *Complete porch renovation with new decking, railings, and structural updates. The transformation preserved the home's character while modernizing the entryway.* (Location: Aquidneck Island)  
3. **ADDITION** — Modern Addition — *New addition with modern staircase, cable railing, and shingle siding. The addition integrates with the existing structure while bringing contemporary craftsmanship to the project.* (Location: Newport, RI)  

- **Gallery (H2):** Gallery  
- **Gallery (subtitle):** Additional images from our restoration and renovation work.  
- **Button:** Discuss Your Project  

### Project detail (`/projects/:slug`)

- **Back link:** ← Back to Projects  
- **Category label** (uppercase style): Restoration · Renovation · Addition · Custom Woodwork (per project)  
- **H1 / body / location:** Same titles and descriptions as project cards above.  
- **H2:** Before & After *(if pairs exist)*  
- **Slider labels:** Exterior restoration · Porch renovation *(where defined)*  
- **H2:** Gallery *(if gallery images exist)*  

**Missing project (404-style):**

- **H1:** Project not found  
- **Paragraph:** The project you're looking for doesn't exist or has been removed.  
- **Button:** View All Projects  

### Contact form UI

Used on `/contact` and the home page CTA block.

- **Fields:** Name * · Email * · Phone · Project Type · Project Description *  
- **Placeholders:** Your name · your@email.com · (555) 123-4567 · Tell us about your project...  
- **Project type options:** Select a service · Kitchen Remodeling · Bathroom Remodeling · Home Addition · Full Renovation · Outdoor Project · Other  
- **Submit:** Submit Request · *(loading)* Sending...  
- **Success:** Thank you! We'll be in touch soon.  
- **Error:** Something went wrong. Please try again.  

---

## Global (all pages)

| Copy | Location |
|------|----------|
| Document `<title>` | `index.html` |
| Meta description | `index.html` |
| Nav labels (Home, Projects, Services, About, Contact) | `src/data/navigation.ts` |
| Brand name in header | `Navbar.tsx` → `companyInfo.name` → `siteContent.company.name` |
| Footer: company name, tagline | `Footer.tsx` → `companyInfo` → `siteContent` |
| Footer: “Contact”, phone, email | `Footer.tsx` + `contactInfo` → `src/data/contact.ts` → `business.contact` |
| Footer: “Service Areas”, area list | `Footer.tsx` → `companyInfo.serviceAreas` |
| Footer copyright | `Footer.tsx` — `© {year} {name}. All rights reserved.` |

---

## `src/content/siteContent.ts` (central copy)

### `siteContent.company`

Used via `src/data/company.ts` on About, Contact, Footer, Navbar (name), About preview (description), etc.

- `name`, `tagline`, `yearsInBusiness`, `description`, `story`
- `specializations` (array)
- `values` (array)
- `serviceAreas` (array)
- `certifications` (array)

### `siteContent.copy`

| Key | Typical use |
|-----|-------------|
| `heroHeadline`, `heroSubtitle` | Home hero (`HomePage` → `Hero`) |
| `servicesOverviewSubtitle`, `servicesOverviewSupporting` | Home services section (`ServicesOverview`) |
| `servicesPageHeroSubtitle` | Services page hero |
| `aboutHeroSubtitle`, `aboutSpecializeSubtitle`, `aboutServiceAreasSubtitle`, `aboutValuesSubtitle` | About page |
| `additionalCraftsmanshipTitle`, `additionalCraftsmanshipBody` | Services page bottom block |
| `supportingSpecialties` | Same section (list chips) — lives on `siteContent`, not inside `copy` |
| `testimonialsSubtitle` | Home testimonials section |
| `ctaTitle`, `ctaSubtitle` | Home bottom CTA (`CTABlock`) |
| `contactHeroSubtitle` | Contact page hero |
| `projectsHeroSubtitle`, `projectsIntroHeadline`, `projectsIntroDescription`, `projectsGalleryTitle`, `projectsGallerySubtitle` | Projects page |

### `siteContent.primaryServiceDescriptions`

Long body copy for Restorations / Renovations / Additions — consumed by `src/data/services.ts`.

### `siteContent.supportingSpecialties`

Bullet list on Services page (custom woodwork, finishes, etc.).

---

## `src/data/services.ts` (services UI)

Per service: `title`, `slug`, `description` (from `siteContent.primaryServiceDescriptions`), `shortDescription`, `scopeOfWork` (bullets).  
**Where it shows:** Home service cards (`ServiceCard`), Services page (`ServiceDetail`).  
Image alts/paths: `src/content/services.ts` + `imageManifest`.

---

## `src/content/projects.ts` (projects)

- **Category labels:** Restoration, Renovation, Addition, Custom Woodwork (`CATEGORY_LABELS`).
- **Each project:** `title`, `location`, `description`, `tags`, `beforeAfterPairs[].label` (e.g. “Exterior restoration”, “Porch renovation”).
- **Slugs** derived from `title` automatically.

**Where it shows:** Projects listing (`ProjectCard`), project detail (`ProjectDetail`), URLs `/projects/:slug`.

---

## `src/data/testimonials.ts`

Three testimonials: `quote`, `author`, `roleOrLocation`.  
**Where it shows:** Home — “What Our Clients Say” (`HomePage` + `TestimonialCard`).

---

## `src/content/imageManifest.ts`

- **User-facing:** every entry’s `alt` (heroes, cards, gallery, modals, SEO).
- **Internal:** `notes`, `recommendedPlacement`, etc. (not shown as body copy on the page).

**Where it shows:** Any component that uses manifest entries (hero/home images from `homeContent.ts`, service images, project images, orphan gallery on Projects page, `ImageGalleryModal` caption).

---

## Per route

### `/` — Home (`src/pages/HomePage.tsx`)

| Copy | Source |
|------|--------|
| Hero H1 + subtitle | `siteContent.copy.heroHeadline`, `heroSubtitle` |
| Hero CTA button | Inline: **“Request a Quote”** |
| Section “Our Services” + subtitle + supporting line | `ServicesOverview` → `siteContent.copy` |
| “View All Services” | `ServicesOverview` (hardcoded) |
| Service cards | `data/services` + image alts from manifest |
| “About {company.name}” + description + years | `AboutPreview` → `companyInfo` |
| “Years in Business”, “Learn More About Us” | `AboutPreview` (hardcoded) |
| “What Our Clients Say” + subtitle | `HomePage` title + `siteContent.copy.testimonialsSubtitle` |
| Testimonial quotes | `testimonials` |
| Bottom CTA title/subtitle + form | `siteContent.copy.ctaTitle`, `ctaSubtitle` + `ContactForm` |

### `/about` — About (`src/pages/AboutPage.tsx`)

| Copy | Source |
|------|--------|
| Hero: “About Us”, subtitle | Title hardcoded; subtitle `siteContent.copy.aboutHeroSubtitle` |
| “Our Story” + body | Heading hardcoded; body `companyInfo.story` |
| “What We Specialize In” + subtitle | Hardcoded + `siteContent.copy.aboutSpecializeSubtitle` |
| Specialization list | `companyInfo.specializations` |
| “Experience & Credentials”, “Years in Business” | Hardcoded; years from `companyInfo` |
| Certs | `companyInfo.certifications` |
| “Our Values” + subtitle | Hardcoded + `aboutValuesSubtitle` |
| Value cards | `companyInfo.values` |
| “Service Areas” + subtitle | Hardcoded + `aboutServiceAreasSubtitle` |
| Map image `alt` | **“Aquidneck Island”** (hardcoded) |
| Area line | `companyInfo.serviceAreas.join(' • ')` |
| “Get in Touch” | Button text hardcoded |

### `/services` — Services (`src/pages/ServicesPage.tsx`)

| Copy | Source |
|------|--------|
| Hero: “Our Services”, subtitle | Hardcoded + `servicesPageHeroSubtitle` |
| Each service block | `ServiceDetail` → `services` data |
| “Typical Scope of Work” | `ServiceDetail` (hardcoded heading) |
| Additional craftsmanship title/body + chips | `siteContent.copy` + `siteContent.supportingSpecialties` |
| “Request a Quote” | Hardcoded button |

### `/contact` — Contact (`src/pages/ContactPage.tsx`)

| Copy | Source |
|------|--------|
| Hero: “Get in Touch”, subtitle | Hardcoded + `contactHeroSubtitle` |
| “Request a Quote” (form column) | Hardcoded |
| Contact block | `ContactInfo` (see below) |
| “Service Areas” + paragraph + map `alt` | Hardcoded + `companyInfo.serviceAreas` |

### `/projects` — Projects (`src/pages/ProjectsPage.tsx`)

| Copy | Source |
|------|--------|
| Hero: “Our Projects”, subtitle | Hardcoded + `projectsHeroSubtitle` |
| Intro headline/description | `projectsIntroHeadline`, `projectsIntroDescription` |
| “Featured Work” | Hardcoded |
| “All Projects” | Hardcoded |
| Cards | `projects.ts` + manifest alts |
| Gallery section title/subtitle | `projectsGalleryTitle`, `projectsGallerySubtitle` |
| Orphan thumbnails | Manifest `alt` |
| “Discuss Your Project” | Button hardcoded |

### `/projects/:slug` — Project detail (`src/pages/ProjectDetailPage.tsx` + `ProjectDetail.tsx`)

| Copy | Source |
|------|--------|
| “← Back to Projects” | Hardcoded link text |
| “Project not found” + message + “View All Projects” | Hardcoded (404-style state) |
| Title, category, location, description | `projects.ts` |
| “Before & After”, slider labels | Hardcoded section title; `pair.label` from data |
| “Gallery” | Hardcoded |
| Image alts | Manifest |

---

## Shared components (hardcoded UI strings)

| Component | File | Notable copy |
|-----------|------|----------------|
| `ContactForm` | `src/components/sections/ContactForm.tsx` | Labels: Name, Email, Phone, Project Type, Project Description; placeholders; select options (Kitchen Remodeling, Bathroom Remodeling, …); success/error messages; “Sending…”, “Submit Request” |
| `ContactInfo` | `src/components/sections/ContactInfo.tsx` | “Get in Touch”, “Phone”, “Email” |
| `CTABlock` | `src/components/sections/CTABlock.tsx` | Default CTA: “Request a Quote” |
| `Hero` / `HeroSimple` | `Hero.tsx`, `HeroSimple.tsx` | Pass-through text; `HeroSimple` uses empty `alt=""` on background image |
| `MapEmbed` | `src/components/sections/MapEmbed.tsx` | Placeholder paragraph if no URL (component not used in routes currently) |
| `ImageGalleryModal` | `src/components/ui/ImageGalleryModal.tsx` | `aria-label`s, image caption uses `entry.alt` |
| `BeforeAfterSlider` | `src/components/ui/BeforeAfterSlider.tsx` | `aria-label` on range input |

---

## Reference-only file (mostly not on the site)

**`src/content/business.ts`** — Discovery notes, alternate tagline/description, service area display text, CTAs (`Request a Consultation`, `Call Now`), goals, ideal clients, etc. **Not** what the rendered marketing pages read for company story/tagline (those are `siteContent`). **Is** used for phone/email in `contact.ts`.
