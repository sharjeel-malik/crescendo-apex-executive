# Crescendo Apex — Website Documentation

A complete, production-grade, responsive website for **CRESCENDO APEX**, the executive consulting, speaking, and authorship practice of **Shomari White** ([crescendoapex.co](https://crescendoapex.co)).

---

## 1. Quick Start & Development

To run the project locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite development server
npm run dev
```

The application runs at `http://localhost:3000`.

To build the production bundle:

```bash
npm run build
```

---

## 2. Replacing the Form Endpoint (`FORM_ENDPOINT`)

All contact, speaking request, and book launch notification forms submit JSON payloads via `fetch` POST to a single constant `FORM_ENDPOINT` located in `src/config.ts`.

### How to set up real form receiving:
1. Create a free account at **[Formspree](https://formspree.io)** (or Formkeep / Basin / Getform).
2. Create a new form (e.g. named "Crescendo Apex Inquiries") and copy your unique form URL (e.g. `https://formspree.io/f/mqkenwop`).
3. Open `src/config.ts` and replace the placeholder value:

```typescript
// src/config.ts
export const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_REAL_FORM_ID';
```

4. If an endpoint submission fails or is unreachable, each form automatically shows a courteous error message with an instant `mailto:shomari@crescendoapex.co` link prefilled with the user's message and details.

---

## 3. Managing Client Photos & Media

All client photographs are stored in `/public/images/`:

- `hero-portrait.jpg` — Home page hero section portrait (Shomari in executive pinstripe suit and burgundy striped tie).
- `about-portrait.jpg` — About Shomari hero portrait.
- `perspective-portrait.jpg` — Perspective & Experience section and author portrait.
- `speaking-stage.jpg` — Speaking hero backdrop and speaking strip.
- `speaking-audience.jpg` — Speaking gallery audience view.
- `workshop.jpg` — Interactive workshop and operational excellence card.
- `meeting-collab.jpg` — Donor stewardship collaborative meeting card.
- `community-event.jpg` — Engagement strategy and community event card.
- `candid-1.jpg` — Organizational culture card.
- `candid-2.jpg` — About gallery candid photo.
- `og-social.jpg` — OpenGraph and Twitter social card preview image (1200x630px).

### Adding or Swapping Images:
- Drop your high-resolution JPG or PNG file into `/public/images/` using the file names listed above.
- The templates use `object-fit: cover` and responsive width/height attributes for fast loading and clean layout preservation.

---

## 4. Editing Site Copy & Brand Details

All text, verified credentials, service topics, and contact information are centralized in **`src/content.ts`**:

- **Verified Credentials**: Update leadership roles, organizations, and years under `siteContent.verifiedCredentials`.
- **Contact Details**: Update email, phone, and LinkedIn under `siteContent.contact`. Note: Any contact item left as an empty string (e.g. `phone: ""`) will automatically be hidden from the UI.
- **Testimonials**: Add quotes to `siteContent.testimonials`. When the array is empty (`[]`), the Testimonials section remains completely hidden.
- **Career Highlights**: Add bullet points to `siteContent.about.careerHighlights` to render them on the About page.
- **Media Kit**: Add downloadable PDF/asset URLs to `siteContent.speaking.mediaKit.downloads` to render download buttons.

---

## 5. Deployment & Pointing `crescendoapex.co`

### Option A: Cloudflare Pages / Vercel / Netlify (Recommended)
1. Push this repository to GitHub or GitLab.
2. In your hosting dashboard (e.g., Cloudflare Pages or Vercel), create a new project and connect the repository:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add a single-page app rewrite rule (if not applied automatically):
   - For Netlify: create a `public/_redirects` file containing `/* /index.html 200`
   - For Vercel: create a `vercel.json` with rewrites to `/index.html`

### Option B: Custom Domain Configuration (`crescendoapex.co`)
1. In your domain registrar (GoDaddy, Namecheap, Google Domains, etc.), navigate to **DNS Management**.
2. Add the DNS records provided by your host:
   - **Apex / Root Domain (`crescendoapex.co`)**:
     - Type: `A` (or `CNAME` flattening / ALIAS depending on provider)
     - Host: `@`
     - Value: [IP address provided by host, e.g. `76.76.21.21` or Cloudflare DNS]
   - **Subdomain (`www.crescendoapex.co`)**:
     - Type: `CNAME`
     - Host: `www`
     - Value: `crescendoapex.co` (or your deployment target)
3. SSL certificates will be generated automatically via Let's Encrypt / Cloudflare.

---

## 6. SEO & Accessibility Standards
- **Semantic HTML**: Exactly one `<h1>` per page, `<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`, and `<dialog>` tags.
- **WCAG AA Compliance**: High-contrast ratios on dark navy (`#0B2342`) and warm cream (`#FAF5EA`), accessible focus rings on all interactive elements, native form labels, and `prefers-reduced-motion` detection.
- **Metadata**: Canonical URLs, meta descriptions, OpenGraph tags, dynamic titles, `public/robots.txt`, and `public/sitemap.xml`.
