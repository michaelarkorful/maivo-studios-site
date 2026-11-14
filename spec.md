# maivostudio.com — spec

Studio conventions: ../claude-playbook.md
Design system: ../forest-brand-guide.md (light mode, studio-site type pairing)
Principles and decision log: ../maivo-principles.md · ../maivo-decisions.md (run 1, 13 Nov 2026)
How MAIVO sells: ../maivo-offers.md

## What this is

The public, one-page website for MAIVO. It presents **MAIVO itself**: what it builds, the Standard it holds to and how it works. It sends every visitor to one action: emailing for a free discovery call. It's for businesses in Ghana whose operations lose money and time, in any industry. Most visitors will open it on a phone, from a link someone sent them.

Stewrd and the HTC booking system are **evidence** of MAIVO, not what MAIVO is.

**The decision it drives:** whether a visitor emails for a discovery call. Every section exists to earn that email. Anything that doesn't is cut.
**Prediction (review 31 Jan 2027):** at least 3 discovery conversations started from the site's email button, counted in Gmail by the subject "Operations at my business". Fewer than 3 → rework the outreach or the page before Stewrd's pilot season.

## Status

Live on maivostudio.com since 13 Nov 2026. This spec describes the page as it is.

## Source of truth

**This spec** is the source of truth for copy and page structure. Use the copy below word for word. The visual language (colours, type, radii, panel and card styling, spacing) comes from the brand guide and the values under "Design system" below. If something looks wrong, ask Mike. Don't fix it silently.

## Rules for every line of copy

- MAIVO is the subject of every section. HTC appears only as evidence inside sections, never as a section of its own, and is never named (it's always "a 344-bed student hostel in Accra").
- Never define MAIVO's market as businesses on "WhatsApp and spreadsheets". MAIVO looks at any operation and fixes what costs it money and time.
- No prices, fees, amounts or payment terms on the page.
- Every claim is backed by a number from a live system, or left out.
- One action everywhere: **Book a discovery call**.
- No trading tools, and no mention of the visitor management system.

## The page, top to bottom

**1. Header**
Left: green dot, "MAIVO", "by Michael Arkorful". On narrow phones "by Michael Arkorful" wraps under "MAIVO".
Right: link **Book a discovery call**.

**2. Hero**
- `<h1>`: **Operations software that disappears into the work.**
- Supporting line: MAIVO studies how your operation actually runs, finds where it loses money and time, and builds the software that closes the gap. Designed and built in Accra.
- Primary button: **Book a discovery call** (dark `#051F20` fill, `#DAF1DE` text)

**3. How MAIVO works**
`<h2>`: How MAIVO works
Four numbered steps in a white card (surface, 1.5px border, 16px radius), one row per step with a divider between rows. Step numbers in green.
1. **Learn how it runs.** A free 30-minute call about your operation.
2. **Find what it's costing you.** Paid scoping measures the problem, and a fixed price is agreed before any work starts.
3. **Build it to the Standard.** Nothing is called done until it works live.
4. **Keep it running.** MAIVO stays on to look after it, and your data stays yours.

Layout: all four rows are the same height at every width, with the content centred in each row. On wide screens the title sits in a fixed 280px column and the description beside it, on one line. On phones the description sits under the title.

**4. The MAIVO Standard** (dark ink panel)
`<h2>`: The MAIVO Standard
Intro: Every system MAIVO builds is held to three commitments.
Three rows. Each has a commitment (statement plus supporting line) and its proof (figure plus label):
- **It can't make the mistake that costs you money.** No more beds sold twice, or refunds to argue over. — **0** overbookings, with 456 requests for 344 beds
- **It takes work off your staff, not on.** No more chasing payment proofs and deadlines by hand. — **7 → 2** staff steps per booking
- **Your data is yours.** Clean records you can pull out whenever you need them. — **Exported** for management meetings and booking reports

The arrow in "7 → 2" is drawn (a thin line arrow in the same colour as the digits), because Newsreader has no arrow character. It looks the same on every device. Screen readers and copied text get "7 to 2".

Layout: on wide screens the proof sits to the right of the commitment. When a row is narrower than 660px the proof drops below the commitment and takes a 1px green line down its left side with an 18px indent. The two-column layout has no line. The label under each figure is 14px and breaks into even lines when it wraps.

Footnote (13px): Measured on the booking system Michael built for a 344-bed student hostel in Accra, which closed a GH₵18,200 loss in its first booking cycle.

Pull quote, 40px below the panel, in Newsreader: Staff stopped talking about bookings. That silence is the product.

**5. Who builds it** (photo plus bio, no heading)
> MAIVO is led by Michael Arkorful, who has spent his career on operations floors, from continuous improvement at Barry Callebaut to running facilities at a student hostel, where he built the system behind these numbers. MAIVO builds with an AI-native process, so a small studio delivers what used to take a team.

**6. Closing** (dark ink panel)
- `<h2>`: Tell me how your operation runs today.
- Line: MAIVO takes on one client build at a time.
- Button: **Book a discovery call** (`#DAF1DE` fill, `#051F20` text)

**7. Footer** (28px below the closing panel, 13px text-body type)
- From MAIVO: **Stewrd**, booking and payments for student hostels. (Plain text; see Open items.)
- michael@maivostudio.com · Accra, Ghana

## Facts on the page (must stay true)

| Claim | Value | Source |
|---|---|---|
| Overbookings | 0, with 456 requests for 344 beds | HTC booking system, first cycle (Sep 2026 intake) |
| Staff steps per booking | 7 → 2 | HTC process map |
| Data export | Exported for management meetings and booking reports | Mike, HTC |
| Loss closed | GH₵18,200 in its first booking cycle | HTC measured overbooking loss |

## Design system

Forest, **light mode only**, studio-site type pairing. Full rules are in `../forest-brand-guide.md`. The values the page uses:

| Token | Hex | Use |
|---|---|---|
| base | `#F2F7F3` | Page background, also `html`/`body` background |
| surface | `#FFFFFF` | Cards (How MAIVO works) |
| border | `#DCE8DF` | Card and photo borders (1.5px), step dividers |
| green | `#235347` | Brand line and dot, links, step numbers, ink-panel dividers, proof line |
| text | `#051F20` | Headings, body emphasis, ink-panel fill, primary button fill |
| text-body | `#547464` | Body prose, labels, footer |
| ink-panel text | `#DAF1DE` | Headings, figures, button fill inside ink panels, primary button text |
| ink-panel soft | `#8EB69B` | Supporting text and labels inside ink panels |

**Type:** Newsreader (300, 400) for the hero headline, section headings, proof figures and the pull quote. Hanken Grotesk (400, 500) for everything else. Never set the serif below 24px.

**Radii:** 16px for cards, panels and the photo. 14px for buttons.

**Spacing:** 56px from the header's bottom edge to the headline's top edge, at every screen width. 88px between sections.

**Never:** gradients, emoji, dark-mode toggle, monospace, uppercase other than the brand line, Outfit, DM Mono, Fraunces, Manrope.

## Assets

- Photo: `public/michael.jpg`. Render at 140×168 with `object-fit: cover`, a 16px radius and `alt="Michael Arkorful"`.
- Favicon: `public/favicon.svg`, a single `#235347` dot.

## Head and metadata (`index.html`)

- `<title>`: `MAIVO — Operations software that disappears into the work`
- `meta description` and `og:description`: `MAIVO studies how your operation runs, finds where it loses money and time, and builds the software that closes the gap. Designed and built in Accra.`
- `og:title` same as the title, `og:type` = `website`, `og:url` = `https://maivostudio.com`. No `og:image`.
- `theme-color`: `#F2F7F3`. Fonts: Newsreader + Hanken Grotesk from Google Fonts with `display=swap`.

## Behaviour

- Every **Book a discovery call** control is a real `<a>` with `href="mailto:michael@maivostudio.com?subject=Operations%20at%20my%20business"`. Keep that subject exactly; the prediction count depends on it. There are three: header, hero, closing.
- The footer email address is a mailto link with the same subject.
- No other links. No forms, analytics, tracking, cookie banner, routing or new dependencies.

## Mobile and accessibility

- Must work from 360px wide up. At phone widths, the Standard rows stack (statement above figure, with the green line beside the proof), the steps stay one per row, and the photo sits above the bio. No horizontal scroll at any width.
- Touch targets are at least 44px tall.
- Text contrast is at least 4.5:1 everywhere, including the soft text inside the ink panels.
- One `<h1>` (the hero). `<h2>` for "How MAIVO works", "The MAIVO Standard" and the closing heading.

## Build approach

The page is `src/App.jsx` (single component, inline styles, colour object at the top), `index.html`, and `src/index.css` for the reset and the one phone-only rule. Make every change on a new branch, never directly on `main`.

## Verification (before telling Mike it's done)

On the Vercel **preview** URL for the branch before merging, and on maivostudio.com after:

1. Every section, in order, matches "The page, top to bottom", with the copy word for word. ("7 → 2" reads as "7 to 2" in the page text, because its arrow is drawn.)
2. Exactly three **Book a discovery call** controls, each opening a new email to michael@maivostudio.com with the subject "Operations at my business".
3. None of these strings appear anywhere in the built page or `index.html`: "WhatsApp", "spreadsheets", "the same system", "every booking cycle", "Booking and operations", "Two ways to work together", "A system built for you", "Email Michael", "trained as a mechanical engineer", "HTC", "355", "VMS", "visitor", "Position Sizer", "EdgeScan", "Ledger". ("355" counts only when it stands alone. React's own code contains it inside longer numbers such as 33554432.)
4. Header-to-headline gap is 50–60px at 375px, 536px and 1280px wide (measure the distance from the header's bottom edge to the `<h1>`'s top edge).
5. At 375px and 360px wide, nothing overflows sideways and every line is readable. Headline, section headings, figures and pull quote render in Newsreader; everything else in Hanken Grotesk (check computed styles). The "₵" in the footnote is not in Hanken Grotesk, so the device's own font draws that one character. Mike accepted this on 14 Nov 2026.
6. The page loads on a light background with no dark flash, and the photo loads from `/michael.jpg`.
7. The four "How MAIVO works" rows are the same height at 375px, 768px and 1280px wide.
8. The green proof line shows at every width where the Standard rows are stacked, and at none where they sit in two columns.

Report the preview URL to Mike, with a screenshot at 1280px and one at 375px.

## Launch

Going live means merging the branch into `main`, which auto-deploys to maivostudio.com. **Mike decides when.** Don't merge without his explicit go-ahead in the session.

## Out of scope

Dark mode, a case-study page, MAIVO Trading pages, analytics, a contact form, a booking calendar, and a WhatsApp link.

## Open items

- Link the Stewrd footer line once Stewrd's own site is live.
- Revisit "Who builds it" when the first team member joins (principle 7).
