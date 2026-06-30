# Lena B — Data Analyst Portfolio

A single-page, responsive portfolio site built with plain HTML, CSS and JavaScript (no build step required).

## File structure

```
portfolio/
├── index.html      # All page content & structure
├── style.css       # Design tokens, layout, dark/light theme, animations
├── script.js       # Theme toggle, mobile nav, reveal animations, KPI counters, form
├── assets/
│   └── Lena-B-Resume.pdf   # Downloadable résumé (wired to the "Download Résumé" button)
└── README.md
```

## Design notes

- **Palette:** deep navy (`#0B1F3A`) + warm amber (`#E8A33D`) + teal accent (`#1B6E6E`), inspired by dashboard UIs — ties directly to Lena's Power BI work.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (data/code accents — used for the hero "query" panel, tags, and stats).
- **Signature element:** the hero's terminal-style panel with a mock SQL query and animated KPI cards (dashboards built, certifications, GPA) — a nod to the dashboards she actually builds.
- Respects `prefers-reduced-motion`, has visible keyboard focus states, and uses semantic HTML for accessibility.

## Running locally

No build tools needed. Just open `index.html` in a browser, or serve it locally:

```bash
cd portfolio
python3 -m http.server 8080
# visit http://localhost:8080
```

## Deployment

### Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: **Other** (static site). No build command needed — leave output directory as root.
4. Deploy.

### Netlify
1. Push to GitHub (or drag-and-drop the `portfolio` folder into Netlify's "Deploy manually" box on app.netlify.com).
2. No build command; publish directory = `/` (root of this folder).
3. Deploy — Netlify gives you a live URL instantly.

### GitHub Pages
1. Push this folder to a repo (e.g. `lena-basheer/portfolio`).
2. Repo Settings → Pages → Source: `main` branch, root folder.
3. Site will be live at `https://lena-basheer.github.io/portfolio/`.

## Customizing the contact form

The form currently only validates and shows a confirmation message client-side — it does not send email yet. To make it functional without a backend:
- **Formspree** (easiest): sign up at formspree.io, get a form endpoint, and change the `<form>` tag's behavior to POST to that endpoint.
- **EmailJS**: similar drop-in approach, sends straight from the browser.
- Or wire it to any backend/API route you control.

## SEO & performance checklist already covered
- Meta description, keywords, and Open Graph tags in `<head>`.
- Single HTTP request for CSS/JS each — no frameworks, fast load.
- Semantic landmarks (`header`, `main`, `section`, `footer`) and skip-to-content link.
- All images/icons are inline SVG (no extra requests).

## Suggested enhancements
- Replace placeholder GitHub project links with the actual repo URLs once public.
- Add real screenshots/GIFs of the Power BI dashboards to each project card.
- Connect the contact form to Formspree/EmailJS for live email delivery.
- Add a `sitemap.xml` and `robots.txt` if hosting on a custom domain.
- Consider adding Google Analytics or Plausible for visitor insights.
- Swap the static résumé PDF whenever it's updated — same filename, same button.
