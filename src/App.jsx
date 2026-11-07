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

const offers = [
  {
    audience: "For student hostels",
    name: "Stewrd",
    desc: "Booking and operations for your hostel, handled. It proves itself on your first booking cycle before you commit.",
  },
  {
    audience: "For other operators",
    name: "A system built for you",
    desc: "Built around how your business actually runs. Scope and cost are agreed before any work starts, so there are no surprises.",
  },
];

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
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 },
  brand: { display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" },
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
  headerLink: { display: "inline-flex", alignItems: "center", minHeight: 44, fontSize: 14, fontWeight: 500 },
  hero: { display: "flex", flexDirection: "column", gap: 24, maxWidth: 820, paddingTop: 24 },
  h1: {
    margin: 0,
    fontFamily: fonts.serif,
    fontWeight: 300,
    fontSize: "clamp(40px, 6.8vw, 70px)",
    lineHeight: 1.06,
    letterSpacing: -1,
  },
  heroLine: { margin: 0, fontSize: 16, lineHeight: 1.7, color: C.textBody, maxWidth: "56ch" },
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
  offersSection: { display: "flex", flexDirection: "column", gap: 20 },
  offersH2: {
    margin: 0,
    fontFamily: fonts.serif,
    fontWeight: 300,
    fontSize: "clamp(24px, 3.4vw, 32px)",
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  cards: { display: "flex", flexWrap: "wrap", gap: 12 },
  card: {
    flex: "1 1 300px",
    background: C.surface,
    border: `1.5px solid ${C.border}`,
    borderRadius: 16,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  cardAudience: { fontSize: 12, color: C.textBody },
  cardName: { fontSize: 20, fontWeight: 500 },
  cardDesc: { fontSize: 14, lineHeight: 1.65, color: C.textBody },
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
  bioQuote: { margin: 0, fontSize: 15, lineHeight: 1.75, color: C.text },
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
  button: {
    display: "inline-flex",
    alignItems: "center",
    minHeight: 48,
    padding: "0 24px",
    borderRadius: 14,
    background: C.inkText,
    color: C.text,
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
  },
  address: { fontSize: 13, color: C.inkSoft },
};

export default function App() {
  return (
    <div style={s.page}>
      <div style={s.wrap}>
        <header style={s.header}>
          <div style={s.brand}>
            <span style={s.brandName}>
              <span aria-hidden="true" style={s.brandDot} />
              MAIVO
            </span>
            <span style={s.brandBy}>by Michael Arkorful</span>
          </div>
          <a href={MAILTO} style={s.headerLink}>
            Email Michael
          </a>
        </header>

        <section style={s.hero}>
          <h1 style={s.h1}>Operations software that disappears into the work.</h1>
          <p style={s.heroLine}>
            Built by Michael Arkorful with an AI-native process, so businesses get production-grade systems in
            weeks, at a price that makes sense.
          </p>
        </section>

        <section style={{ ...s.ink(56), gap: 8 }}>
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
            Measured on a 344-bed student hostel in Accra, where the same system closed a GH₵18,200 loss every
            booking cycle.
          </span>
        </section>

        <section style={s.offersSection}>
          <h2 style={s.offersH2}>Two ways to work together</h2>
          <div style={s.cards}>
            {offers.map((o) => (
              <div key={o.name} style={s.card}>
                <span style={s.cardAudience}>{o.audience}</span>
                <span style={s.cardName}>{o.name}</span>
                <span style={s.cardDesc}>{o.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={s.about}>
          <img src="/michael.jpg" alt="Michael Arkorful" style={s.photo} />
          <div style={s.bio}>
            <p style={s.bioP}>
              Michael Arkorful builds operations systems: software that replaces the WhatsApp threads and
              spreadsheets a business runs on. He trained as a mechanical engineer, then worked on operations
              floors, from continuous improvement at Barry Callebaut to running facilities at a student hostel,
              where he built the system behind these numbers. MAIVO is how he brings that to other operators.
            </p>
            <p style={s.bioQuote}>Staff stopped talking about bookings. That silence is the product.</p>
          </div>
        </section>

        <section style={{ ...s.ink(48), gap: 24 }}>
          <h2 style={s.closingH2}>Tell me how your operation runs today.</h2>
          <div>
            <a href={MAILTO} style={s.button}>
              Email Michael
            </a>
          </div>
          <span style={s.address}>michael@maivostudio.com · Accra, Ghana</span>
        </section>
      </div>
    </div>
  );
}
