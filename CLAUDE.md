# MAIVO Studios Landing Page

Studio conventions: ../claude-playbook.md
Brand guide: ../maivo-brand-guide.md

## What this is

A single-page landing page for MAIVO Studios — the studio's public website. Needs to be live at a Vercel URL so it can be submitted as the "Company website" in the Google Africa Applied AI Lab application.

## Stack

- React + Vite (standard MAIVO stack)
- Deploy to Vercel via GitHub (repo: `maivo-studios-site`)
- Zero dependencies beyond React and Vite

## What to do

1. Scaffold a new Vite + React project in this folder
2. The main landing page component is in `src/App.jsx` — use the component code from `landing-page.jsx` in this folder as the source
3. Strip out the default Vite boilerplate (index.css, App.css, assets) — the component is self-contained with inline styles
4. Set the page title to "MAIVO Studios" in `index.html`
5. Add the Google Fonts import to `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
   ```
6. Set background color on `body` and `html` to `#0b0f19` in a minimal `index.css` to prevent white flash on load
7. Add a favicon — use a simple 32x32 green dot (#2d9d78) on transparent background (generate as SVG favicon)
8. Deploy to Vercel — target URL: `maivo-studios.vercel.app` (or similar available slug)

## Verification

- Visit the live Vercel URL
- Page loads with dark background, no white flash
- MAIVO brand header visible with green dot
- All product cards render with correct status pills
- Live product links (maivo-position-sizer.vercel.app, htc-tower-booking.vercel.app) open in new tabs
- LinkedIn and GitHub links work
- Mobile responsive — test at 375px width
- Page title shows "MAIVO Studios"

## Do not

- Add routing — it's a single page
- Add analytics or tracking
- Add a light mode toggle
- Change any colors, fonts, or copy from the component — it follows the brand guide exactly
