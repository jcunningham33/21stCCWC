# Follow-ups — items to revisit after framework is set up

This is the living punch list of everything the static archive
intentionally **left as a placeholder or default** because it could
not be verified from public sources or required infrastructure that
isn't in place yet. Revisit each item once hosting/domain/email/CMS
decisions are made.

## Status legend

- 🟥 **Blocking** — public visitors will notice this is missing/wrong.
- 🟧 **Needed before launch** — should be filled in before announcing.
- 🟨 **Nice to have** — improves the site but launch can proceed.
- 🟩 **Optional / future** — backlog.

---

## 1. Content the church needs to supply

| # | Item | Where it lives in the repo | Status |
| --- | --- | --- | --- |
| 1.1 | ~~Office phone number~~ — **DONE**. Corrected to `447-284-8227` (confirmed by the church). | `site/pages/contact.html`, all footers, JSON-LD | ✅ |
| 1.0 | **Leadership section wording** — the About and Home pages still describe Bishop George L. Dowell in the present tense. With his passing and the 50 Years celebration announced for August 8, 2026, the church should decide how to memorialize him (e.g., an "In Loving Memory" section) and confirm Senior Pastor Shanae Dowell's title. Awaiting the church's preferred wording. | `site/pages/about.html`, `site/index.html` | 🟥 |
| 1.2 | **Confirmed church email** (currently `21stccwc@gmail.com` placeholder) | `site/pages/contact.html`, all footers, `site/assets/js/main.js` fallback | 🟥 |
| 1.3 | ~~Mid-week schedule~~ — **DONE** (Wednesday 6:00 PM Bible Study). | `site/index.html`, `site/pages/ministries.html`, `contact.html`, JSON-LD | ✅ |
| 1.4 | **Monthly food distribution date/time** (still "monthly" — needs day/date pattern) | `site/pages/ministries.html` | 🟧 |
| 1.5 | **Photos**: building exterior, sanctuary, congregation, pastors, worship team, food-distribution event | drop into `site/assets/images/`, reference where needed | 🟥 |
| 1.6 | **Pastor headshots** for the 4 leadership entries on About | `site/pages/about.html` Meet the Leadership | 🟧 |
| 1.7 | **Doctrinal / statement of faith review** — currently standard evangelical wording | `site/pages/about.html` "What We Believe" | 🟧 |
| 1.8 | **Mission statement wording** — currently paraphrased; church may have official wording | `site/pages/about.html`, `site/index.html` hero subhead | 🟨 |
| 1.9 | **Denomination / affiliation** (if any) | `site/pages/about.html` | 🟨 |
| 1.10 | **Year founded** (currently 2014, from public IRS / Charity Navigator data — confirm) | `site/pages/about.html` "Our Story" | 🟨 |
| 1.11 | ~~Address ZIP~~ — **DONE** (61832 wired everywhere). | every page footer, JSON-LD, map iframes | ✅ |
| 1.12 | ~~Real logo artwork~~ — current SVG approximates the brush-cross design. Drop the **original PNG/SVG** the family has into `site/assets/images/` (filenames `logo.svg`, `logo-mark.svg`, `favicon.svg` — see `site/assets/images/README.md`). | `site/assets/images/` | 🟧 |
| 1.13 | ~~Cash App giving~~ — **DONE** (`$21stccwc`). | `site/pages/give.html`, all footers | ✅ |
| 1.14 | ~~Leadership bios~~ — **DONE** (4 pastors). | `site/pages/about.html` | ✅ |
| 1.15 | ~~Sermons → YouTube channel link~~ — **DONE** (`UCFrwg_xUsFdlNga9U5T-LZA`). Featured-video iframes still optional. | `site/pages/sermons.html` | ✅ |
| 1.16 | ~~Contact form fields~~ — **DONE** (First Name, Last Name, Phone, Email, Message). | `site/pages/contact.html` | ✅ |

## 2. Functionality that needs a backend / framework

| # | Item | Notes | Status |
| --- | --- | --- | --- |
| 2.1 | **Contact form handler** | Currently shows fallback message. Form already has `name="contact"` so on Netlify just add `data-netlify="true"` to the `<form>` tag in `site/pages/contact.html` and submissions appear in Netlify Forms. Alternatives: Formspree, Basin, or a serverless function. | 🟧 |
| 2.2 | ~~Online giving~~ — **DONE** via Cash App (`$21stccwc`). Add Givelify / PushPay / Tithe.ly only if the church wants additional rails later. | `site/pages/give.html` | ✅ |
| 2.3 | **Prayer request submissions** | Currently funneled through the contact form. If a dedicated prayer email or form is desired, add to `site/pages/ministries.html` ("Prayer Ministry" card) and `contact.html`. | 🟨 |
| 2.4 | **Email newsletter / mailing list signup** | Not in current build. If desired, add a Mailchimp/Buttondown/ConvertKit embed on the Contact page or footer. | 🟩 |
| 2.5 | **Live-stream embed** | Sermons page currently links out to Facebook/YouTube. Replace `<a class="btn">Watch</a>` cards with `<iframe>` embeds (FB video plugin or YouTube embed) once we pick a default platform. | 🟨 |
| 2.6 | **Events / calendar** | No calendar in current build. If services, conferences, food giveaways, anniversaries should be displayed, add a section using a Google Calendar embed or a simple JSON-driven list. | 🟩 |

## 3. Branding & design decisions

| # | Item | Notes | Status |
| --- | --- | --- | --- |
| 3.1 | **Logo** — current SVG approximates the brush-cross artwork in blue + gold. Drop the church's original file into `site/assets/images/logo.svg` (and `logo-mark.svg` / `favicon.svg`) to override. See `site/assets/images/README.md`. | `site/assets/images/` | 🟧 |
| 3.2 | ~~Brand color palette~~ — **DONE**: blue `#1e40af` + gold `#f5b800` to match the artwork. | `:root` in `site/assets/css/styles.css` | ✅ |
| 3.3 | **Typography** — Playfair Display (display) + Source Sans 3 (body), via Google Fonts. The original logo uses a brush script — if the church wants a closer match in headlines, swap to a brush/marker font. | `<link>` tags + CSS vars | 🟨 |
| 3.4 | **Hero image** — currently a CSS gradient | replace with a real photo behind a dark overlay in `.hero` | 🟨 |
| 3.5 | **Pastors section image tile** on home page (text-only placeholder) | replace `<div class="image-stack">` in `site/index.html` with `<img>` of pastors | 🟧 |

## 4. Hosting / domain / email infrastructure

| # | Item | Notes | Status |
| --- | --- | --- | --- |
| 4.1 | **Choose host** — Netlify, Vercel, Cloudflare Pages, GitHub Pages, or shared hosting | both `netlify.toml` and `vercel.json` are committed; pick one. | 🟥 |
| 4.2 | **Domain** — keep `21stccwc.com` (point DNS at new host) or use a new domain | DNS change steps differ per host. | 🟥 |
| 4.3 | **HTTPS** — auto on Netlify/Vercel/Cloudflare; manual on shared hosting | verify after DNS cutover. | 🟧 |
| 4.4 | **Mail / email forwarding** for `21stccwc@gmail.com` (or chosen address) | needs MX records + a mailbox or forwarder (Google Workspace, Cloudflare Email Routing, etc.). | 🟧 |
| 4.5 | **`www` ↔ apex** redirect | Netlify/Vercel handle it via domain settings — confirm post-deploy. | 🟨 |
| 4.7 | **Sitemap/robots domain assumption** — `sitemap.xml` and `robots.txt` use absolute `https://21stccwc.com/...` URLs (required by the sitemap spec); they become fully correct at DNS cutover. If a different domain is chosen, update both files. | `site/sitemap.xml`, `site/robots.txt` | 🟨 |
| 4.6 | **Old URL redirects** — `/home--21st-century-christian-worship-center-page` → `/` already configured | confirm working after DNS cutover, then audit Google Search Console for any other paths to redirect. | 🟨 |

## 5. SEO & analytics

| # | Item | Notes | Status |
| --- | --- | --- | --- |
| 5.1 | **Google Search Console** — add property and submit `sitemap.xml` | after launch. | 🟧 |
| 5.2 | **Google Business Profile** — confirm listing reflects the same address, hours, website | external to the repo, but worth doing in the same sweep. | 🟨 |
| 5.3 | **Analytics** — pick one: Plausible, Fathom, GA4, Cloudflare Web Analytics | add `<script>` snippet to all pages (or a shared partial if we adopt a framework). | 🟨 |
| 5.4 | **Open Graph / social preview image** — currently uses the SVG logo | export a 1200×630 PNG and reference in each page's `<meta property="og:image">`. | 🟨 |
| 5.5 | **Real meta descriptions per page** — currently descriptive but generic | refine after final content is in. | 🟩 |

## 6. Accessibility & quality

| # | Item | Notes | Status |
| --- | --- | --- | --- |
| 6.1 | **Run Lighthouse / axe-core** on the deployed URL | target Performance + Accessibility ≥ 95. | 🟧 |
| 6.2 | **Alt text** on every real photo we add | enforce as we add images. | 🟧 |
| 6.3 | **Color contrast audit** on burgundy + gold combinations | check small body text on dark sections especially. | 🟨 |

## 7. If/when we move from raw static HTML to a framework

The site is intentionally plain HTML right now so it works on any host
with zero build tooling. When we decide on a framework, here is the
migration path that keeps content portable:

| Option | Why pick it | What changes |
| --- | --- | --- |
| **Astro** (recommended) | Static output, component reuse, content collections, MDX. Same hosting story as today. | Move each `pages/*.html` to `src/pages/*.astro`; extract header/footer into `<Layout>`; sermon list and ministries become content collections. |
| **Eleventy (11ty)** | Simplest; just templates + data files. | Convert pages to `.njk`/`.md`, header/footer become `_includes` partials. |
| **Next.js** | Overkill for this site; only if a real CMS/login/dashboard is needed. | Pages become `app/page.tsx`; static assets stay in `public/`. |
| **WordPress** | If non-technical staff need to edit content directly. | Reskin a theme using the existing CSS as the starting point; not necessary if we're happy editing HTML in PRs. |

**When a framework is picked, revisit these specific items first**, since
they're the ones that benefit most from componentization:

- The shared site header (`<header class="site-header">`) — currently
  duplicated across all 6 pages plus 404. Becomes one component.
- The shared footer — duplicated across all 6 pages plus 404. Becomes
  one component.
- The sermon list on `pages/sermons.html` — becomes a content
  collection so adding a sermon = 1 markdown/JSON entry instead of
  copy/paste HTML.
- The ministries cards on `pages/ministries.html` — same: content
  collection.
- The verse / scripture quote on the home page — becomes a reusable
  `<Verse />` component if used elsewhere.

## 8. Things explicitly **not** done in this archive

- Did not scrape or mirror the original site's HTML/CSS/images
  (origin returned HTTP 403 from automated fetchers).
- Did not migrate any user data or form submissions.
- Did not set up email, DNS, or hosting accounts.
- Did not register or modify any domain.
- Did not publish the site to any host.

---

## How to use this document

1. Sit down with the church (Bishop Dowell + Co-Pastor Dowell) and walk
   through Section 1 — most items are 5-minute answers.
2. Pick a host (Section 4.1) — recommend **Netlify** for ease + free
   form handling.
3. Wire up the contact form (Section 2.1) and an online giving
   provider (Section 2.2).
4. Replace placeholder images and logo (Sections 1.5, 1.6, 3.1, 3.5).
5. Cut DNS over and run the SEO checklist (Section 5).
6. Once stable, decide if/when to adopt a framework (Section 7) — only
   worth doing once we're routinely changing 3+ pages at a time.
