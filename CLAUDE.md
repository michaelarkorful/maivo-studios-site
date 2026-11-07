# MAIVO Studio Site (maivostudio.com)

Studio conventions: ../claude-playbook.md
Design system: ../forest-brand-guide.md

## What this is

The public, single-page website for MAIVO, by Michael Arkorful: operations software for owner-operators in Ghana. **`spec.md` is the source of truth.** Read it before any change. `design/reference.html` is the approved layout and copy.

## Talking to Mike

Mike is not a developer. On trading topics he is expert — skip the basics.
On anything technical (databases, deployment, terminals, code) assume he
does not know the term and has not done the thing before.

- Define every technical term on first use, in one plain sentence.
- Give complete step-by-step instructions. Do not skip steps that seem
  obvious — "open a terminal" and "save the file" are steps.
- Say where he is before what to do: which app, which screen, which button.
- After a step succeeds, explain in two sentences what just happened and
  why it mattered.
- If he is stuck on something simple, the explanation was too compressed.
  Start over more slowly rather than repeating it.
- Never write "just" — "just run the migration" hides ten minutes of work.

## Stack

- React + Vite. React and Vite are the only dependencies, so don't add any.
- Deploy: pushing to `main` on `github.com/michaelarkorful/maivo-studios-site` auto-deploys to Vercel and goes live. Other branches get a Vercel preview URL.

## Live URLs

- `maivostudio.com` is the main address (verify against this one)
- `www.maivostudio.com` redirects to `maivostudio.com`
- `maivo-studios.vercel.app` (Vercel slug, same deployment)

## Layout

- `src/App.jsx`: the entire page, one component, inline styles, colours in an object at the top.
- `src/index.css`: global reset, plus the `#F2F7F3` background on `html`/`body`.
- `index.html`: title, meta description, Open Graph tags, `theme-color`, Google Fonts (Newsreader + Hanken Grotesk).
- `public/`: `favicon.svg`, `michael.jpg`.
- `design/reference.html`: design reference only. Never shipped.

## Verification

Follow the checklist in `spec.md`, on the Vercel preview URL before merging and on maivostudio.com after.

Note: headless Chrome on Windows clamps `--window-size` to a minimum of about 500px, which clips the render and looks like overflow. For viewports under 500px, drive Chrome over CDP with `Emulation.setDeviceMetricsOverride` instead.

## Do not

- Merge to `main` without Mike's explicit go-ahead in the session.
- Change copy, colours or fonts away from `design/reference.html` without asking.
- Name HTC, mention the visitor management system, or show prices, fees or payment terms.
- Add routing, analytics, tracking, forms, cookie banners, a theme toggle, or dependencies.
