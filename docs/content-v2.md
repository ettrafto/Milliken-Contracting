# Site content — v2 (craftsman positioning)

Rewritten copy draft: broader craftsman positioning (additions, kitchens, baths, and restoration—not restoration-only). *{current year}* in the footer is dynamic.

**Not yet wired in code** — implement in `siteContent`, `index.html`, and related files when approved.

---

## Global — navbar and footer


| Item                      | Copy                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Browser title**         | Milliken Contracting | Old Homes. Built Right.                                                                                                                |
| **Meta description**      | Milliken Contracting — 30+ years of craftsmanship across additions, renovations, kitchens, baths, and historic homes throughout Newport and Aquidneck Island. |
| **Source (title / meta)** | `index.html` *(update on launch)*                                                                                                                             |


- **Logo / brand (nav):** Milliken Contracting
- **Nav links:** Home · Projects · Services · About · Contact

**Footer**


| Item                              | Copy                                                                   |
| --------------------------------- | ---------------------------------------------------------------------- |
| Company                           | Milliken Contracting                                                   |
| **Tagline (footer + brand line)** | Preserving the character of old homes with modern craftsmanship.       |
| Contact                           | (401) 207-8109 · [millikenjorgen@gmail.com](mailto:millikenjorgen@gmail.com) |
| Source (contact)                  | `src/data/contact.ts` / `business.ts`                                  |
| Service areas                     | Newport, Aquidneck Island, Rhode Island                                |
| Copyright                         | © *{current year}* Milliken Contracting. All rights reserved.          |


---

## Home (`/`)

### Hero


| Element      | Copy                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **H1**       | Old Homes. Built Right.                                                                                                                     |
| **Subtitle** | Over 30 years of hands-on craftsmanship across additions, renovations, kitchens, and baths—bringing modern precision to homes with history. |
| **Button**   | Request a Quote                                                                                                                             |


**Alternative hero H1 options (strong — pick one)**

- Respecting the character of old homes with modern craftsmanship  
- Old-world homes, built with modern technique  
- Preserving what matters. Building what lasts.

### Our Services


| Element             | Copy                                                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **H2**              | Craftsmanship Across Every Part of Your Home                                                                           |
| **Subtitle**        | From kitchens and baths to full additions and restoration work—done with respect for the home and attention to detail. |
| **Supporting line** | Custom woodwork and finish craftsmanship are part of every project.                                                    |
| **Button**          | View All Services                                                                                                      |


**Service cards (H3 + short copy)** — *order: additions first; restoration third*

1. **Additions** — Seamless additions that feel like part of the original home
2. **Renovations** — Kitchens, baths, and interior spaces built with care
3. **Restoration Work** — Preserving and repairing older homes the right way

### About Milliken Contracting


| Element    | Copy                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **H2**     | About Milliken Contracting                                                                                                                                                                                                                                                                                                                                                                                        |
| **Body**   | With over 30 years of experience, Milliken Contracting approaches every project as a craftsman first. From kitchens and bathrooms to full additions and restoration work, the focus is always the same—build it properly, respect the structure, and make it last. Working across Newport and Aquidneck Island, we bring modern building techniques to homes with history—without losing what makes them special. |
| **Stat**   | Years in Business (30+)                                                                                                                                                                                                                                                                                                                                                                                           |
| **Button** | Learn More About Us                                                                                                                                                                                                                                                                                                                                                                                               |


### What Our Clients Say


| Element      | Copy                                                                    |
| ------------ | ----------------------------------------------------------------------- |
| **H2**       | What Our Clients Say                                                    |
| **Subtitle** | What Newport and Aquidneck Island homeowners say about working with us. |


**Testimonials** *(unchanged from current site — update when real quotes are available)*

> “Jorgen Construction transformed our kitchen beyond our expectations. The attention to detail and craftsmanship is outstanding. We couldn't be happier.”  
> — **Sarah M.**, Homeowner

> “Professional from start to finish. They completed our bathroom renovation on time and within budget. The quality of work is exceptional.”  
> — **James R.**, Homeowner

> “We hired them for a full home addition. The team was communicative, respectful of our space, and delivered exactly what we envisioned.”  
> — **Linda K.**, Homeowner

### Bottom CTA


| Element      | Copy                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------- |
| **H2**       | Let's Talk About Your Home                                                                         |
| **Subtitle** | Whether you're planning an addition, renovation, or restoring an older space, we're ready to help. |


Contact form labels and messages: see [Contact form UI](#contact-form-ui).

---

## About (`/about`)

### Hero


| Element      | Copy                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ |
| **H1**       | A Craftsman's Approach                                                                     |
| **Subtitle** | 30+ years of building, restoring, and improving homes across Newport and Aquidneck Island. |


### Our Story


| Element  | Copy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **H2**   | Our Story                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Body** | For over three decades, Jorgen Milliken has worked as a craftsman focused on doing things the right way—whether that's a kitchen renovation, a home addition, or restoring parts of an older home. Every house has its own character, especially in Newport and across Aquidneck Island. The goal isn't to overwrite that—it's to understand it, work with it, and improve it without cutting corners. Some projects call for restoration. Others call for renovation or new construction. The approach stays the same: careful work, the right materials, and attention to detail that holds up over time. |


### What We Specialize In


| Element      | Copy                                                                |
| ------------ | ------------------------------------------------------------------- |
| **H2**       | What We Specialize In                                               |
| **Subtitle** | A full range of craftsmanship, with deep experience in older homes. |


- Additions  
- Kitchens & Bathrooms  
- Renovations  
- Restoration Work  
- Custom Woodwork

### Experience & Credentials


| Element        | Copy                     |
| -------------- | ------------------------ |
| **H2**         | Experience & Credentials |
| **Stat label** | Years in Business (30+)  |
| **Credential** | Licensed & insured       |


### Our Values


| Element      | Copy                                |
| ------------ | ----------------------------------- |
| **H2**       | Our Values                          |
| **Subtitle** | What guides our work on every home. |


- Quality craftsmanship  
- Longevity  
- Work done properly  
- **Respect for the home's character** *(replaces “Respect for historic character”)*  
- Integrity  
- Attention to detail  
- Honest communication  
- Preserving heritage

### Service Areas


| Element      | Copy                                             |
| ------------ | ------------------------------------------------ |
| **H2**       | Service Areas                                    |
| **Subtitle** | Serving Newport and Aquidneck Island homeowners. |
| **Areas**    | Newport • Aquidneck Island • Rhode Island        |
| **Button**   | Get in Touch                                     |


---

## Services (`/services`)

### Hero


| Element      | Copy                                                                           |
| ------------ | ------------------------------------------------------------------------------ |
| **H1**       | What We Build                                                                  |
| **Subtitle** | Additions, renovations, kitchens, baths, and restoration work—crafted to last. |


### Primary services

Order on the page: **1. Additions → 2. Renovations → 3. Restoration Work.** Each block is an **H2**, followed by body copy and a **Typical Scope of Work** list.

#### 1. Additions *(first)*

Additions that feel like they've always been part of your home. New rooms, decks, and porches—we handle foundation through finish, with attention to how new work meets the existing structure so everything reads as intentional, not tacked on.

- Foundation work  
- Structural framing  
- Decks & porches  
- Integration with existing architecture

#### 2. Renovations

Kitchens, bathrooms, and interior spaces done properly. We coordinate every detail for a cohesive result that respects the existing structure—older construction, material compatibility, and improved function without losing what makes the home special.

- Kitchens & bathrooms in historic homes  
- Interior finishes that match existing  
- Careful structural updates  
- Material compatibility

#### 3. Restoration Work

When older homes need careful repair or preservation. We bring careful craftsmanship to character-defining details—exterior work, period-appropriate interiors, and structural updates that respect older construction.

- Exterior restoration  
- Period-appropriate interior work  
- Character-defining details  
- Structural updates for older construction

### Custom woodwork & supporting craftsmanship


| Element    | Copy                                                                                                                                                                                                                                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **H2**     | Custom Woodwork & Supporting Craftsmanship                                                                                                                                                                                                                           |
| **Body**   | Custom woodwork and finish craftsmanship are at the core of everything we do—whether it's a kitchen, an addition, or restoring original details. Period-appropriate details, matching existing trim, and quality materials still apply across every kind of project. |
| **Button** | Request a Quote                                                                                                                                                                                                                                                      |


**Topic chips** *(unchanged unless you want to refocus)*

- Custom woodwork & millwork  
- Period-appropriate interior finishes  
- Kitchens & bathrooms in older homes  
- Decks, porches & exterior structures

---

## Contact (`/contact`)

### Hero


| Element      | Copy                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| **H1**       | Get in Touch                                                                                                        |
| **Subtitle** | Whether you're planning an addition, renovation, or restoring an older space, we typically respond within 24 hours. |


### Main column


| Element | Copy            |
| ------- | --------------- |
| **H2**  | Request a Quote |


### Sidebar


| Element   | Copy                                                  |
| --------- | ----------------------------------------------------- |
| **H3**    | Get in Touch                                          |
| **Phone** | (401) 207-8109                                        |
| **Email** | [millikenjorgen@gmail.com](mailto:millikenjorgen@gmail.com) |
| **H3**    | Service Areas                                         |
| **Body**  | Newport, Aquidneck Island, Rhode Island               |


---

## Projects (`/projects`)

### Hero


| Element      | Copy                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| **H1**       | Our Projects                                                                                                 |
| **Subtitle** | Our work spans additions, renovations, kitchens, baths, and restoration across Newport and Aquidneck Island. |


### Intro


| Element      | Copy                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Headline** | Craftsmanship Across Every Project                                                                                                                                                                  |
| **Body**     | Our work spans additions, renovations, kitchens, baths, and restoration projects across Newport and Aquidneck Island. Every project is approached with the same goal: do it right and make it last. |


### Sections

- **H2:** Featured Work  
- **H2:** All Projects

### Project cards


| Category    | Title                             | Excerpt                                                                                                                                                                                  | Location         |
| ----------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| RESTORATION | Historic Newport Home Restoration | Careful restoration work preserving original character while improving structural integrity. Exterior woodwork, period-appropriate details, and careful attention to historic materials. | Newport, RI      |
| RENOVATION  | Front Porch Renovation            | Complete porch renovation with new decking, railings, and structural updates. The transformation preserved the home's character while modernizing the entryway.                          | Aquidneck Island |
| ADDITION    | Modern Addition                   | New addition with modern staircase, cable railing, and shingle siding. The addition integrates with the existing structure while bringing contemporary craftsmanship to the project.     | Newport, RI      |


### Gallery strip


| Element      | Copy                                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------------------- |
| **H2**       | Gallery                                                                                                  |
| **Subtitle** | Additional images from additions, renovations, and restoration work across Newport and Aquidneck Island. |
| **Button**   | Discuss Your Project                                                                                     |


---

## Project detail (`/projects/:slug`)


| Item             | Copy / note                                                           |
| ---------------- | --------------------------------------------------------------------- |
| Back link        | ← Back to Projects                                                    |
| Category (style) | Restoration · Renovation · Addition · Custom Woodwork — *per project* |
| Title & body     | Same as project cards above                                           |
| **H2**           | Before & After — *when pairs exist*                                   |
| Slider labels    | Exterior restoration · Porch renovation — *where defined*             |
| **H2**           | Gallery — *when gallery images exist*                                 |


### Missing project (404-style)


| Element    | Copy                                                              |
| ---------- | ----------------------------------------------------------------- |
| **H1**     | Project not found                                                 |
| **Body**   | The project you're looking for doesn't exist or has been removed. |
| **Button** | View All Projects                                                 |


---

## Contact form UI

Used on `/contact` and the home page CTA block.


| Item             | Copy                                                                                                 |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| **Fields**       | Name * · Email * · Phone · Project Type · Project Description *                                      |
| **Placeholders** | Your name · [your@email.com](mailto:your@email.com) · (555) 123-4567 · Tell us about your project... |
| **Submit**       | Submit Request                                                                                       |
| **Loading**      | Sending...                                                                                           |
| **Success**      | Thank you! We'll be in touch soon.                                                                   |
| **Error**        | Something went wrong. Please try again.                                                              |


**Project type options**

1. Select a service *(empty default)*
2. Kitchen Remodeling
3. Bathroom Remodeling
4. Home Addition
5. Full Renovation
6. Outdoor Project
7. Other

