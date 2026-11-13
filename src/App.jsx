const C = {
  base: "#F2F7F3",
  surface: "#FFFFFF",
  border: "#DCE8DF",
  green: "#235347",
  text: "#051F20",
  textBody: "#547464",
  inkText: "#DAF1DE",
  inkSoft: "#8EB69B",
};

const fonts = {
  serif: "'Newsreader', serif",
  sans: "'Hanken Grotesk', sans-serif",
};

const MAILTO = "mailto:michael@maivostudio.com?subject=Operations%20at%20my%20business";
const CTA = "Book a discovery call";

const steps = [
  {
    title: "Learn how it runs.",
    desc: "A free 30-minute call about your operation.",
  },
  {
    title: "Find what it's costing you.",
    desc: "Paid scoping measures the problem, and a fixed price is agreed before any work starts.",
  },
  {
    title: "Build it to the Standard.",
    desc: "Nothing is called done until it works live.",
  },
  {
    title: "Keep it running.",
    desc: "MAIVO stays on to look after it, and your data stays yours.",
  },
];

const standard = [
  {
    statement: "It can't make the mistake that costs you money.",
    support: "No more beds sold twice, or refunds to argue over.",
    figure: "0",
    label: "overbookings, with 456 requests for 344 beds",
  },
  {
    statement: "It takes work off your staff, not on.",
    support: "No more chasing payment proofs and deadlines by hand.",
    figure: "7 → 2",
    label: "staff steps per booking",
  },
  {
    statement: "Your data is yours.",
    support: "Clean records you can pull out whenever you need them.",
    figure: "Exported",
    label: "for management meetings and booking reports",
    wordFigure: true,
  },
];

const button = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 48,
  padding: "0 24px",
  borderRadius: 14,
  fontSize: 14,
  fontWeight: 500,
  textDecoration: "none",
};

const s = {
  page: { minHeight: "100vh", background: C.base, fontFamily: fonts.sans, color: C.text },
  wrap: {
    maxWidth: 1080,
    margin: "0 auto",
    padding: "32px 22px 80px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 88,
  },
  // Header and hero sit in one group so the gap between them is 56px at every width.
  top: { display: "flex", flexDirection: "column", gap: 56 },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 },
  brand: { display: "flex", alignItems: "baseline", gap: "2px 12px", flexWrap: "wrap" },
  brandName: {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 2,
    color: C.green,
  },
  brandDot: { width: 9, height: 9, borderRadius: "50%", background: C.green, flex: "0 0 9px" },
  brandBy: { fontSize: 12, color: C.textBody },
  headerLink: {
    display: "inline-flex",
    alignItems: "center",
    flex: "0 0 auto",
    minHeight: 44,
    fontSize: 14,
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  hero: { display: "flex", flexDirection: "column", gap: 24, maxWidth: 820 },
  h1: {
    margin: 0,
    fontFamily: fonts.serif,
    fontWeight: 300,
    fontSize: "clamp(40px, 6.8vw, 70px)",
    lineHeight: 1.06,
    letterSpacing: -1,
  },
  heroLine: { margin: 0, fontSize: 16, lineHeight: 1.7, color: C.textBody, maxWidth: "56ch" },
  buttonPrimary: { ...button, background: C.text, color: C.inkText },
  buttonOnInk: { ...button, background: C.inkText, color: C.text },
  section: { display: "flex", flexDirection: "column", gap: 20 },
  sectionH2: {
    margin: 0,
    fontFamily: fonts.serif,
    fontWeight: 300,
    fontSize: "clamp(24px, 3.4vw, 32px)",
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  steps: {
    listStyle: "none",
    margin: 0,
    padding: "0 24px",
    background: C.surface,
    border: `1.5px solid ${C.border}`,
    borderRadius: 16,
    // Every row is as tall as the tallest one, so the dividers are evenly spaced at any width.
    display: "grid",
    gridAutoRows: "1fr",
  },
  // flexWrap + alignContent centre the row's content vertically; baseline keeps the number on the title's line.
  step: (first) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    alignContent: "center",
    columnGap: 16,
    padding: "22px 0",
    borderTop: first ? "none" : `1.5px solid ${C.border}`,
  }),
  stepNumber: { flex: "0 0 20px", fontSize: 18, fontWeight: 500, lineHeight: 1.3, color: C.green },
  stepBody: {
    flex: "1 1 0",
    minWidth: 0,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "6px 32px",
  },
  // Fixed title column, so every description starts at the same place and has room for one line on wide screens.
  stepTitle: { flex: "0 1 280px", minWidth: 0, fontSize: 18, fontWeight: 500, lineHeight: 1.3 },
  stepDesc: { flex: "1 1 300px", minWidth: 0, fontSize: 14, lineHeight: 1.65, color: C.textBody },
  standardSection: { display: "flex", flexDirection: "column", gap: 40 },
  ink: (padMax) => ({
    background: C.text,
    borderRadius: 16,
    padding: `clamp(24px, 5vw, ${padMax}px)`,
    display: "flex",
    flexDirection: "column",
  }),
  standardIntro: { display: "flex", flexDirection: "column", gap: 12, paddingBottom: 28 },
  standardH2: {
    margin: 0,
    fontFamily: fonts.serif,
    fontWeight: 300,
    fontSize: "clamp(30px, 5vw, 48px)",
    lineHeight: 1.1,
    letterSpacing: -1,
    color: C.inkText,
  },
  standardLead: { margin: 0, fontSize: 15, lineHeight: 1.6, color: C.inkSoft },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px 40px",
    alignItems: "flex-end",
    padding: "32px 0",
    borderTop: `1px solid ${C.green}`,
  },
  rowText: { flex: "999 1 420px", minWidth: 0, display: "flex", flexDirection: "column", gap: 10 },
  statement: {
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: -0.3,
    color: C.inkText,
  },
  support: { fontSize: 14, lineHeight: 1.6, color: C.inkSoft },
  rowFigure: { flex: "1 1 200px", display: "flex", flexDirection: "column", gap: 4 },
  figure: {
    fontFamily: fonts.serif,
    fontSize: 52,
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: -1.5,
    color: C.inkText,
  },
  wordFigure: { fontFamily: fonts.serif, fontSize: 32, fontWeight: 300, lineHeight: 1.1, color: C.inkText },
  figureLabel: { fontSize: 12, color: C.inkSoft },
  footnote: {
    fontSize: 12,
    lineHeight: 1.6,
    color: C.inkSoft,
    paddingTop: 20,
    borderTop: `1px solid ${C.green}`,
  },
  pullQuote: {
    margin: 0,
    fontFamily: fonts.serif,
    fontWeight: 300,
    fontSize: "clamp(24px, 3.4vw, 32px)",
    lineHeight: 1.3,
    letterSpacing: -0.5,
    maxWidth: "32ch",
  },
  about: { display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center" },
  photo: {
    flex: "0 0 140px",
    width: 140,
    height: 168,
    boxSizing: "content-box",
    objectFit: "cover",
    borderRadius: 16,
    border: `1.5px solid ${C.border}`,
    display: "block",
  },
  bio: { flex: "999 1 320px", display: "flex", flexDirection: "column", gap: 12 },
  bioP: { margin: 0, fontSize: 15, lineHeight: 1.75, color: C.textBody },
  end: { display: "flex", flexDirection: "column", gap: 28 },
  closingIntro: { display: "flex", flexDirection: "column", gap: 12 },
  closingH2: {
    margin: 0,
    fontFamily: fonts.serif,
    fontWeight: 300,
    fontSize: "clamp(24px, 3.6vw, 34px)",
    lineHeight: 1.25,
    letterSpacing: -0.5,
    color: C.inkText,
    maxWidth: "26ch",
  },
  closingLine: { margin: 0, fontSize: 15, lineHeight: 1.6, color: C.inkSoft },
  footer: { display: "flex", flexDirection: "column", fontSize: 13, lineHeight: 1.6, color: C.textBody },
  footerP: { margin: 0 },
  footerName: { fontWeight: 500, color: C.text },
  footerLink: { display: "inline-flex", alignItems: "center", minHeight: 44 },
};

export default function App() {
  return (
    <div style={s.page}>
      <div style={s.wrap}>
        <div style={s.top}>
          <header style={s.header}>
            <div style={s.brand}>
              <span style={s.brandName}>
                <span aria-hidden="true" style={s.brandDot} />
                MAIVO
              </span>
              <span style={s.brandBy}>by Michael Arkorful</span>
            </div>
            <a href={MAILTO} style={s.headerLink}>
              {CTA}
            </a>
          </header>

          <section style={s.hero}>
            <h1 style={s.h1}>Operations software that disappears into the work.</h1>
            <p style={s.heroLine}>
              MAIVO studies how your operation actually runs, finds where it loses money and time, and builds
              the software that closes the gap. Designed and built in Accra.
            </p>
            <div>
              <a href={MAILTO} style={s.buttonPrimary}>
                {CTA}
              </a>
            </div>
          </section>
        </div>

        <section style={s.section}>
          <h2 style={s.sectionH2}>How MAIVO works</h2>
          <ol style={s.steps}>
            {steps.map((step, i) => (
              <li key={step.title} style={s.step(i === 0)}>
                <span aria-hidden="true" style={s.stepNumber}>
                  {i + 1}
                </span>
                <div style={s.stepBody}>
                  <span style={s.stepTitle}>{step.title}</span>
                  <span style={s.stepDesc}>{step.desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section style={s.standardSection}>
          <div style={{ ...s.ink(56), gap: 8 }}>
            <div style={s.standardIntro}>
              <h2 style={s.standardH2}>The MAIVO Standard</h2>
              <p style={s.standardLead}>Every system MAIVO builds is held to three commitments.</p>
            </div>

            {standard.map((r) => (
              <div key={r.statement} style={s.row}>
                <div style={s.rowText}>
                  <span style={s.statement}>{r.statement}</span>
                  <span style={s.support}>{r.support}</span>
                </div>
                <div style={s.rowFigure}>
                  <span style={r.wordFigure ? s.wordFigure : s.figure}>{r.figure}</span>
                  <span style={s.figureLabel}>{r.label}</span>
                </div>
              </div>
            ))}

            <span style={s.footnote}>
              Measured on the booking system Michael built for a 344-bed student hostel in Accra, which closed
              a GH₵18,200 loss in its first booking cycle.
            </span>
          </div>

          <p style={s.pullQuote}>Staff stopped talking about bookings. That silence is the product.</p>
        </section>

        <section style={s.about}>
          <img src="/michael.jpg" alt="Michael Arkorful" style={s.photo} />
          <div style={s.bio}>
            <p style={s.bioP}>
              MAIVO is led by Michael Arkorful, who has spent his career on operations floors, from continuous
              improvement at Barry Callebaut to running facilities at a student hostel, where he built the
              system behind these numbers. MAIVO builds with an AI-native process, so a small studio delivers
              what used to take a team.
            </p>
          </div>
        </section>

        <div style={s.end}>
          <section style={{ ...s.ink(48), gap: 24 }}>
            <div style={s.closingIntro}>
              <h2 style={s.closingH2}>Tell me how your operation runs today.</h2>
              <p style={s.closingLine}>MAIVO takes on one client build at a time.</p>
            </div>
            <div>
              <a href={MAILTO} style={s.buttonOnInk}>
                {CTA}
              </a>
            </div>
          </section>

          <footer style={s.footer}>
            <p style={s.footerP}>
              From MAIVO: <span style={s.footerName}>Stewrd</span>, booking and payments for student hostels.
            </p>
            <p style={s.footerP}>
              <a href={MAILTO} style={s.footerLink}>
                michael@maivostudio.com
              </a>{" "}
              · Accra, Ghana
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
