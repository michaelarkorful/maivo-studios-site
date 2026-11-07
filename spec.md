# maivostudio.com — spec

Studio conventions: ../claude-playbook.md
Design system: ../forest-brand-guide.md (v1.1, light mode, studio-site type pairing)
Positioning source: MAIVO — Positioning doc (decisions summarised below)

## What this is

The public website for MAIVO, a person-led studio ("MAIVO, by Michael Arkorful") that builds operations software for owner-operators in Ghana. It replaces the current dark, trading-and-hostel landing page with a single light page built around one promise and the proof behind it.

**Who it's for:** owner-operators still running on WhatsApp threads and spreadsheets. Hostels come first. Most will open it on a phone, from a link someone sent them on WhatsApp.

**The decision it drives:** whether the visitor emails Michael. Every section exists to earn that email. Anything that doesn't is cut.

## Status

- Design approved: `design/reference.html` (the "5C refined" board on the design canvas).
- Build: not started.
- Launch: merging to `main` puts the site live. Merge only when Mike says so (see Launch).

## Source of truth for layout and copy

`design/reference.html` is the approved page. Rebuild it in the existing React + Vite app so it **matches it exactly**: same sections, same order, same copy word for word, same colours, sizes and spacing. Do not reword, add or remove copy. If something in the reference looks wrong, ask Mike. Don't fix it silently.

The reference is a design file, not production code. Don't ship it, link to it or copy it into `public/`.

## Page structure (top to bottom)

1. **Header.** "MAIVO" brand line with "by Michael Arkorful" on the left, an "Email Michael" link on the right.
2. **Hero.** Headline "Operations software that disappears into the work." plus the supporting line.
3. **The MAIVO Standard.** A dark ink panel holding three commitments. Each has one supporting line and one proof figure, followed by a single footnote naming the hostel and the GH₵18,200 figure.
4. **Two ways to work together.** Two white cards: Stewrd (for student hostels) and A system built for you (for other operators). There are no prices, fees or payment terms on the page, by decision.
5. **About.** Photo plus a two-paragraph bio.
6. **Closing.** A dark ink panel with "Tell me how your operation runs today.", an "Email Michael" button, and the address line.

## Facts on the page (must stay true)

| Claim | Value | Source |
|---|---|---|
| Overbookings | 0, with 456 requests for 344 beds | HTC booking system, first cycle (Sep 2026 intake) |
| Staff steps per booking | 7 → 2 | HTC process map |
| Data export | Exported for management meetings and booking reports | Mike, HTC |
| Loss closed per booking cycle | GH₵18,200 | HTC measured overbooking loss |

HTC is never named on the page. It's always "a 344-bed student hostel in Accra." The visitor management system is never mentioned anywhere.

## Design system

Forest, **light mode only**, studio-site type pairing. Full rules are in `../forest-brand-guide.md` v1.1. The values the page uses:

| Token | Hex | Use |
|---|---|---|
| base | `#F2F7F3` | Page background, also `html`/`body` background |
| surface | `#FFFFFF` | Offer cards |
| surface-selected | `#EAF3EC` | Photo fallback background |
| border | `#DCE8DF` | Card and photo borders (1.5px) |
| green | `#235347` | Brand line, links, ink-panel dividers |
| text | `#051F20` | Headings, body emphasis, ink-panel fill, primary button fill |
| text-body | `#547464` | Body prose, labels |
| ink-panel text | `#DAF1DE` | Headings, figures, button fill inside ink panels |
| ink-panel soft | `#8EB69B` | Supporting text and labels inside ink panels |

**Type:** Newsreader (300, 400) for the hero headline, section headings and proof figures. Hanken Grotesk (400, 500) for everything else. Load both from Google Fonts with `display=swap`. Never set the serif below 24px.

**Radii:** 16px for cards, panels and the photo. 14px for buttons.

**Never:** gradients, emoji, dark-mode toggle, monospace, uppercase other than the brand line, Outfit, DM Mono, Fraunces, Manrope.

## Assets

- Photo: `michael.jpg` (374×449, black and white). Move it from the repo root into `public/michael.jpg`. Render it at 140×168 with `object-fit: cover`, a 16px radius and `alt="Michael Arkorful"`.
- Favicon: replace `public/favicon.svg` with a single `#235347` dot on a transparent background, the same shape as the current one.

## Head and metadata (`index.html`)

- `<title>`: `MAIVO — Operations software that disappears into the work`
- `meta description`: `MAIVO, by Michael Arkorful, builds operations software for businesses in Ghana that still run on WhatsApp and spreadsheets.`
- `theme-color`: `#F2F7F3`
- Replace the Outfit and DM Mono font link with Newsreader and Hanken Grotesk (the same URL as the reference).
- Add Open Graph tags so a WhatsApp share shows a proper preview: `og:title` (same as the title), `og:description` (same as the meta description), `og:type` = `website`, `og:url` = `https://www.maivostudio.com`. No `og:image` for now.
- `src/index.css`: change the `html`/`body` background from `#0b0f19` to `#F2F7F3`, so there's no dark flash on load.

## Behaviour

- Every "Email Michael" control is a `mailto:` link to `michael@maivostudio.com?subject=Operations%20at%20my%20business`.
- No other links, so remove sizer.maivostudio.com, the HTC booking link, LinkedIn and GitHub. Trading tools now live under MAIVO Trading, off this site.
- No forms, no analytics, no tracking, no cookie banner, no routing, no new dependencies.

## Mobile and accessibility

- Must work from 360px wide up. At phone widths, the Standard rows stack (statement above figure), the offer cards stack, and the photo sits above the bio. No horizontal scroll at any width.
- Touch targets are at least 44px tall.
- Text contrast is at least 4.5:1 everywhere, including the soft text inside the ink panels.
- Real `<a>` elements for the email links. One `<h1>` (the hero), with `<h2>` for "The MAIVO Standard", "Two ways to work together" and the closing heading.

## Build approach

One vertical slice: replace `src/App.jsx` with the new page as a single component, using inline styles and a colour object at the top, the same pattern as the current file. Build on a branch called `forest-redesign`, never directly on `main`.

## Verification (before telling Mike it's done)

On the Vercel **preview** URL for the `forest-redesign` branch:

1. The page loads on a light background with no dark flash.
2. Side by side with `design/reference.html` at 1280px, every section, line of copy, colour and font matches.
3. At 375px and 360px wide, nothing overflows sideways, the rows stack as described, and every line of text is readable.
4. The headline and figures render in Newsreader, and everything else in Hanken Grotesk. Check this in the browser's computed styles, not by eye.
5. Both "Email Michael" links open a new email to michael@maivostudio.com with the subject pre-filled.
6. The photo loads from `/michael.jpg`.
7. The page title and favicon have changed in the browser tab.
8. The words "355", "VMS", "visitor", "HTC", "Position Sizer", "EdgeScan" and "Ledger" don't appear anywhere in the built page.

Report the preview URL to Mike, with a screenshot at 1280px and one at 375px.

## Launch

Going live means merging `forest-redesign` into `main`, which auto-deploys to maivostudio.com. **Mike decides when.** Don't merge without his explicit go-ahead in the session.

## Out of scope

Dark mode, a case-study page, MAIVO Trading pages, analytics, a contact form, and a WhatsApp link.
