# maivostudio.com — spec

Studio conventions: ../claude-playbook.md
Design system: ../forest-brand-guide.md (v1.1, light mode, studio-site type pairing)
Principles and decision log: ../maivo-principles.md · ../maivo-decisions.md (run 1, 13 Nov 2026)
How MAIVO sells: ../maivo-offers.md

## What this is

The public, one-page website for MAIVO. It presents **MAIVO itself**: what it builds, the Standard it holds to and how it works. It sends every visitor to one action: emailing for a free discovery call. It's for businesses in Ghana whose operations lose money and time, in any industry. Most visitors will open it on a phone, from a link someone sent them.

Stewrd and the HTC booking system are **evidence** of MAIVO, not what MAIVO is.

**The decision it drives:** whether a visitor emails for a discovery call. Every section exists to earn that email. Anything that doesn't is cut.
**Prediction (review 31 Jan 2027):** at least 3 discovery conversations started from the site's email button, counted in Gmail by the subject "Operations at my business". Fewer than 3 → rework the outreach or the page before Stewrd's pilot season.

## Status

- v1 (Forest redesign) is live.
- v2 (this spec: MAIVO-first story, one path, spacing fix) agreed 13 Nov 2026. Build: done on the `maivo-first` branch, not yet merged.
- Launch: merging to `main` puts the site live. Merge only when Mike says so (see Launch).

## Source of truth for copy and structure

**This spec** is the source of truth for copy and page structure. Use the copy below word for word. `design/reference.html` is still the source of truth for the visual language (colours, type, radii, panel and card styling, spacing rhythm) except where this spec says otherwise. New sections (How MAIVO works, the footer) are styled to match the existing page; they don't appear in the reference. If something looks wrong, ask Mike. Don't fix it silently.

The reference is a design file, not production code. Don't ship it, link to it or copy it into `public/`.

## Rules for every line of copy

- MAIVO is the subject of every section. HTC appears only as evidence inside sections, never as a section of its own, and is never named (it's always "a 344-bed student hostel in Accra").
- Never define MAIVO's market as businesses on "WhatsApp and spreadsheets". MAIVO looks at any operation and fixes what costs it money and time.
- No prices, fees, amounts or payment terms on the page.
- Every claim is backed by a number from a live system, or left out.
- One action everywhere: **Book a discovery call**.
- No trading tools, and no mention of the visitor management system.

## The page, top to bottom

**1. Header**
Left: green dot, "MAIVO", "by Michael Arkorful" (unchanged).
Right: link **Book a discovery call** (replaces "Email Michael").

**2. Hero**
- `<h1>`: **Operations software that disappears into the work.**
- Supporting line: MAIVO studies how your operation actually runs, finds where it loses money and time, and builds the software that closes the gap. Designed and built in Accra.
- Primary button: **Book a discovery call**

**3. How MAIVO works** (new; replaces "Two ways to work together", which is removed entirely)
`<h2>`: How MAIVO works
Four numbered steps, in a white card (surface, 1.5px border, 16px radius), stacked rows with a divider between them. Step numbers in green.
1. **Learn how it runs.** A free 30-minute call about your operation.
2. **Find what it's costing you.** Paid scoping measures the problem, and a fixed price is agreed before any work starts.
3. **Build it to the Standard.** Nothing is called done until it works live.
4. **Keep it running.** MAIVO stays on to look after it, and your data stays yours.

**4. The MAIVO Standard** (keep the dark ink panel and the three stat rows exactly as they are now)
`<h2>`: The MAIVO Standard
Intro: Every system MAIVO builds is held to three commitments.
- **It can't make the mistake that costs you money.** No more beds sold twice, or refunds to argue over. — **0** overbookings, with 456 requests for 344 beds
- **It takes work off your staff, not on.** No more chasing payment proofs and deadlines by hand. — **7 → 2** staff steps per booking
- **Your data is yours.** Clean records you can pull out whenever you need them. — **Exported** for management meetings and booking reports

Footnote (replaces the current one): Measured on the booking system Michael built for a 344-bed student hostel in Accra, which closed a GH₵18,200 loss in its first booking cycle.

Pull quote, directly after the panel, in Newsreader: Staff stopped talking about bookings. That silence is the product.

**5. Who builds it** (keep the current About layout: photo plus bio, no new heading)
Bio (replaces the current bio entirely):
> MAIVO is led by Michael Arkorful, who has spent his career on operations floors, from continuous improvement at Barry Callebaut to running facilities at a student hostel, where he built the system behind these numbers. MAIVO builds with an AI-native process, so a small studio delivers what used to take a team.

**6. Closing** (keep the dark ink panel)
- `<h2>`: Tell me how your operation runs today.
- Line: MAIVO takes on one client build at a time.
- Button: **Book a discovery call**

**7. Footer** (below the closing panel, small text-body type)
- From MAIVO: **Stewrd**, booking and payments for student hostels. (Plain text for now; link it to Stewrd's own site once that exists.)
- michael@maivostudio.com · Accra, Ghana

## Facts on the page (must stay true)

| Claim | Value | Source |
|---|---|---|
| Overbookings | 0, with 456 requests for 344 beds | HTC booking system, first cycle (Sep 2026 intake) |
| Staff steps per booking | 7 → 2 | HTC process map |
| Data export | Exported for management meetings and booking reports | Mike, HTC |
| Loss closed | GH₵18,200 in its first booking cycle | HTC measured overbooking loss |

## Design system

Forest, **light mode only**, studio-site type pairing. Full rules are in `../forest-brand-guide.md` v1.1. The values the page uses:

| Token | Hex | Use |
|---|---|---|
| base | `#F2F7F3` | Page background, also `html`/`body` background |
| surface | `#FFFFFF` | Cards (How MAIVO works) |
| surface-selected | `#EAF3EC` | Photo fallback background |
| border | `#DCE8DF` | Card and photo borders (1.5px), step dividers |
| green | `#235347` | Brand line and dot, links, step numbers, ink-panel dividers |
| text | `#051F20` | Headings, body emphasis, ink-panel fill, primary button fill |
| text-body | `#547464` | Body prose, labels, footer |
| ink-panel text | `#DAF1DE` | Headings, figures, button fill inside ink panels |
| ink-panel soft | `#8EB69B` | Supporting text and labels inside ink panels |

**Type:** Newsreader (300, 400) for the hero headline, section headings, proof figures and the pull quote. Hanken Grotesk (400, 500) for everything else. Never set the serif below 24px.

**Radii:** 16px for cards, panels and the photo. 14px for buttons.

**Spacing change:** the gap between the header and the hero headline is 112px today (measured at 536px wide). Cut it to about half, roughly 56px, at every screen width. Keep the rest of the vertical rhythm as it is.

**Never:** gradients, emoji, dark-mode toggle, monospace, uppercase other than the brand line, Outfit, DM Mono, Fraunces, Manrope.

## Assets

- Photo: `public/michael.jpg`. Render at 140×168 with `object-fit: cover`, a 16px radius and `alt="Michael Arkorful"`.
- Favicon: `public/favicon.svg`, a single `#235347` dot (unchanged).

## Head and metadata (`index.html`)

- `<title>`: `MAIVO — Operations software that disappears into the work` (unchanged)
- `meta description` and `og:description`: `MAIVO studies how your operation runs, finds where it loses money and time, and builds the software that closes the gap. Designed and built in Accra.`
- `og:title` same as the title, `og:type` = `website`, `og:url` = `https://maivostudio.com`. No `og:image` for now.
- `theme-color`: `#F2F7F3`. Fonts: Newsreader + Hanken Grotesk from Google Fonts with `display=swap`.

## Behaviour

- Every **Book a discovery call** control is a real `<a>` with `href="mailto:michael@maivostudio.com?subject=Operations%20at%20my%20business"`. Keep that subject exactly; the prediction count depends on it. There are three: header, hero, closing.
- The footer email address may also be a mailto link with the same subject.
- No other links. No forms, analytics, tracking, cookie banner, routing or new dependencies.

## Mobile and accessibility

- Must work from 360px wide up. At phone widths, the Standard rows stack (statement above figure), the steps stay one per row, and the photo sits above the bio. No horizontal scroll at any width.
- Touch targets are at least 44px tall.
- Text contrast is at least 4.5:1 everywhere, including the soft text inside the ink panels.
- One `<h1>` (the hero). `<h2>` for "How MAIVO works", "The MAIVO Standard" and the closing heading.

## Build approach

One vertical slice: update `src/App.jsx` (single component, inline styles, colour object at the top) and `index.html`. Build on a branch called `maivo-first`, never directly on `main`.

## Verification (before telling Mike it's done)

On the Vercel **preview** URL for the `maivo-first` branch:

1. Every section, in order, matches "The page, top to bottom", with the copy word for word.
2. Exactly three **Book a discovery call** controls, each opening a new email to michael@maivostudio.com with the subject "Operations at my business".
3. None of these strings appear anywhere in the built page or `index.html`: "WhatsApp", "spreadsheets", "the same system", "every booking cycle", "Booking and operations", "Two ways to work together", "A system built for you", "Email Michael", "trained as a mechanical engineer", "HTC", "355", "VMS", "visitor", "Position Sizer", "EdgeScan", "Ledger".
4. Header-to-headline gap is 50–60px at 375px, 536px and 1280px wide (measure the distance from the header's bottom edge to the `<h1>`'s top edge).
5. At 375px and 360px wide, nothing overflows sideways and every line is readable. Headline, figures and pull quote render in Newsreader; everything else in Hanken Grotesk (check computed styles).
6. The page loads on a light background with no dark flash, and the photo loads from `/michael.jpg`.

Report the preview URL to Mike, with a screenshot at 1280px and one at 375px.

## Launch

Going live means merging `maivo-first` into `main`, which auto-deploys to maivostudio.com. **Mike decides when.** Don't merge without his explicit go-ahead in the session.

## Out of scope

Dark mode, a case-study page, MAIVO Trading pages, analytics, a contact form, a booking calendar, and a WhatsApp link.

## Open items

- Link the Stewrd footer line once Stewrd's own site is live.
- Revisit "Who builds it" when the first team member joins (principle 7).
