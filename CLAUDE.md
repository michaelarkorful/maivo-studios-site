# MAIVO Studios Landing Page

Studio conventions: ../claude-playbook.md
Brand guide: ../maivo-brand-guide.md

## What this is

A single-page landing page for MAIVO Studios — the studio's public website. Submitted as the "Company website" for the Google Africa Applied AI Lab application.

## Stack

- React + Vite (standard MAIVO stack)
- Zero dependencies beyond React and Vite — the page uses only `useState` and `useEffect`
- Deploy: push to `main` on `github.com/michaelarkorful/maivo-studios-site` auto-deploys to Vercel

## Live URLs

- `maivostudio.com` — custom domain, redirects to `www.maivostudio.com` (verify against this one)
- `maivo-studios.vercel.app` — Vercel slug, same deployment

## Layout

- `src/App.jsx` — the entire landing page. Self-contained with inline styles; colors live in the `C` object at the top. This is the only component.
- `src/index.css` — global reset plus `#0b0f19` background on `html`/`body` to prevent white flash on load
- `src/main.jsx` — Vite entry point
- `index.html` — title, meta description, `theme-color`, Google Fonts (Outfit + DM Mono)
- `public/favicon.svg` — green dot (#2d9d78)

Page title is `MAIVO — Tools for traders. Systems for operators.`

## Verification

Check against the live URL after deploy:

- Page loads with dark background (#0b0f19), no white flash
- MAIVO brand header visible with green dot
- All product cards render with correct status pills
- Live product links (maivo-position-sizer.vercel.app, htc-tower-booking.vercel.app) open in new tabs
- LinkedIn and GitHub links work
- Two-column splits are side by side on desktop, stacked on mobile — test at 375px width
- On mobile, prose appears before the product cards in both splits
- Page title reads "MAIVO — Tools for traders. Systems for operators."

Note: headless Chrome on Windows clamps `--window-size` to ~500px minimum, which clips the render and looks like overflow. For sub-500px viewports drive Chrome over CDP with `Emulation.setDeviceMetricsOverride` instead.

## Do not

- Add routing — it's a single page
- Add analytics, tracking, or cookie banners
- Add a light mode toggle or theme switcher
- Change any colors, fonts, or copy — the component follows the brand guide exactly
- Add dependencies
