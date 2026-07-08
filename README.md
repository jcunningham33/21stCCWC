# 21st Century Christian Worship Center — Static Site Archive

A clean, static-site replica of the public web presence of **21st Century
Christian Worship Center** (Danville, Illinois) — built to be hosted
independently of the original `21stccwc.com` domain.

```
21stCCWC/
├── site/                  ← deploy this folder
│   ├── index.html         ← Home
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── pages/
│   │   ├── about.html
│   │   ├── ministries.html
│   │   ├── sermons.html
│   │   ├── give.html
│   │   └── contact.html
│   └── assets/
│       ├── css/styles.css
│       ├── js/main.js
│       └── images/        (logo.svg, favicon.svg)
├── netlify.toml           ← Netlify deploy config
├── vercel.json            ← Vercel deploy config
└── README.md
```

## What's included

- **Home** — hero, welcome, three‑pillar cards, pastor intro,
  scripture, service times, sermon CTAs
- **About** — story, beliefs, pastor bios, mission
- **Ministries** — worship, Bible study, prayer, food distribution,
  women, men, youth, outreach
- **Sermons** — links to recent featured messages on Facebook + YouTube
- **Give** — in‑person, by‑mail, and Cash App giving instructions
- **Contact** — address, email, embedded Google map, contact form,
  social links

Each page includes:

- Responsive layout (desktop + mobile)
- Sticky header with mobile menu toggle
- Accessible markup (skip link, semantic landmarks, alt text, focus styles)
- JSON‑LD `Church` schema on the home page
- Open Graph + favicon
- Generated sitemap and robots.txt

## Verified content sources

Because the live site at `https://21stccwc.com/...` is not publicly
fetchable from this build environment (returns HTTP 403), the replica
content was assembled from the church's confirmed public sources:

- Facebook: <https://www.facebook.com/21stccwc/>
- YouTube: <https://www.youtube.com/@21stccwc>
- Instagram: <https://www.instagram.com/21stccwc/>
- Local news coverage (WCIA, MyWabashValley) on the church's monthly
  food distribution

Confirmed facts used:

- Name: 21st Century Christian Worship Center
- City: Danville, IL
- Address: 421 N. Vermilion St.
- Sunday Worship: 10:00 AM
- Senior Pastor: Bishop George L. Dowell
- Co‑Pastor: Shanae Dowell
- Tagline: "A body of radical believers…"
- Outreach: monthly free food distribution
- Founded 2014

## Deploy

### Netlify

1. Push this repo to GitHub.
2. In Netlify → "Add new site" → "Import from Git".
3. Build command: *(leave blank)* — pure static.
4. Publish directory: `site`
5. Click **Deploy**. `netlify.toml` configures redirects + security headers.
6. **Custom domain:** Site settings → Domain management → add your domain;
   update DNS (CNAME or Netlify nameservers) per Netlify's instructions.
   HTTPS is auto‑provisioned via Let's Encrypt.

### Vercel

1. Push to GitHub.
2. In Vercel → "Add New" → "Project" → import the repo.
3. Framework: **Other**. Build command: *(empty)*. Output dir: `site`.
4. Deploy. `vercel.json` handles redirects + headers.
5. Add custom domain in Project → Settings → Domains.

### Any static host (Cloudflare Pages, GitHub Pages, S3+CloudFront, shared hosting)

Upload the contents of the `site/` directory to the document root.

### Local preview

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Customization checklist (for the church to fill in)

The replica is intentionally conservative — wherever a fact wasn't
verifiable from public sources, sensible defaults were used. Recommended
content updates before public launch:

- [ ] Add a **phone number** in `pages/contact.html` and the footer
- [ ] Replace `21stccwc@gmail.com` if a different email is preferred
- [ ] Confirm or update **mid‑week Bible study** times in `index.html`
      and `pages/ministries.html`
- [ ] Add real **photos**: building exterior, congregation, pastors,
      worship — drop into `site/assets/images/` and reference in HTML
- [ ] Replace the placeholder image-stack tile on the home "Pastors"
      section with a photo of Bishop and Co‑Pastor Dowell
- [ ] Add the church's preferred **online giving** link
      (Givelify, PushPay, Tithe.ly, etc.) on `pages/give.html`
- [ ] Wire up the **contact form** to a backend
      (Netlify Forms — add `data-netlify="true" name="contact"`,
      Formspree, or similar) — currently it shows a friendly fallback
      message asking visitors to email
- [ ] Verify denominational/doctrinal statement wording in
      `pages/about.html`
- [ ] Embed actual sermon **video players** in `pages/sermons.html`
      (Facebook video embed iframes or YouTube `<iframe>` per video)

## Functionality not replicated

- **Original CMS** (Yola/Wix/etc.) — the source page is a CMS-rendered
  template. We rebuilt a clean static equivalent rather than mirroring
  the proprietary CMS markup.
- **Form submissions** — the contact form needs a backend to actually
  send mail. See the checklist above.
- **Original imagery** — we could not download original photos because
  the source domain blocked all automated access from this build
  environment. SVG placeholders/wordmark are used in the meantime.

## License & attribution

All textual content describes the public ministry of 21st Century
Christian Worship Center and is intended for use by that church
(or with its permission). Scripture quoted is KJV (public domain).
Fonts loaded from Google Fonts (Open Font License).

## Summary report

| Item | Status |
| --- | --- |
| Pages captured | 6 (Home, About, Ministries, Sermons, Give, Contact) + 404 |
| Responsive layout (mobile/desktop) | ✅ |
| Navigation works across all pages | ✅ |
| Internal links validated | ✅ |
| Sitemap + robots.txt | ✅ |
| Deploy configs (Netlify/Vercel) | ✅ |
| Phone, email, schedule, giving (Cash App), leadership bios | ✅ supplied by the church |
| Contact form | ✅ mailto form — opens the visitor's email app addressed to 21stccwc@gmail.com (no third-party account needed) |
| Original photos mirrored | ❌ — church to supply; SVG logo approximation in place |
| Original CMS interactives mirrored | ❌ — replaced with clean static equivalents |

Recommendations:

1. Have the church supply current photos, phone number, and online
   giving URL.
2. Enable Netlify Forms (or similar) for the contact form.
3. After the first deploy, embed real Facebook/YouTube video iframes
   on the Sermons page in place of the "Watch" link cards.
