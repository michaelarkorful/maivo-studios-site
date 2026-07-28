import { useState, useEffect } from "react";

const C = {
  bgBase: "#0b0f19",
  bgSurface: "#141926",
  bgElevated: "#111621",
  borderDefault: "#1e2536",
  borderSubtle: "#1a2030",
  accentPrimary: "#2d9d78",
  accentGlow: "#2d9d7866",
  accentBright: "#3ddba0",
  accentBg: "#2d9d7818",
  accentBorder: "#2d9d7855",
  textPrimary: "#e4e8f1",
  textSecondary: "#c8cdd8",
  textTertiary: "#5a6378",
  textMuted: "#4a5368",
  textFaint: "#3a4258",
  textGhost: "#2e3548",
  textFootnote: "#2a3040",
};

const fonts = {
  display: "'Outfit', sans-serif",
  mono: "'DM Mono', monospace",
};

function useBreakpoint(bp = 600) {
  const [wide, setWide] = useState(typeof window !== "undefined" ? window.innerWidth >= bp : true);
  useEffect(() => {
    const h = () => setWide(window.innerWidth >= bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return wide;
}

const tradingProducts = [
  { name: "Position Sizer", status: "Live", desc: "Two taps to asset, instant lot calculation. Forex, indices, metals, crypto.", url: "https://sizer.maivostudio.com" },
  { name: "EdgeScan", status: "Private Beta", desc: "Multi-layer directional bias scanner. Fundamentals, sentiment, COT, technicals — one score.", url: null },
  { name: "Ledger", status: "Prototype", desc: "MT5 statement parser. Expectancy dashboard, equity curve, R-distribution.", url: null },
];

const opsProducts = [
  { name: "HTC Booking System", status: "Production", desc: "344-bed student hostel. Gender-lock allocation, auto-expiry, payment receipts.", url: "https://htc-tower-booking.vercel.app" },
  { name: "Stewrd", status: "Building", desc: "Multi-tenant hostel booking platform for operators near Ghanaian universities.", url: null },
  { name: "Ops Hub", status: "Specced", desc: "Maintenance tickets, complaints, shift reporting. Nine-metric operations dashboard.", url: null },
];

const statusColor = (s) => {
  if (s === "Live" || s === "Production") return C.accentBright;
  if (s === "Building" || s === "Private Beta") return C.accentPrimary;
  if (s === "Prototype") return "#e8a838";
  return C.textMuted;
};

function ProductRow({ p }) {
  return (
    <div style={{ padding: "12px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontFamily: fonts.mono, fontWeight: 500, fontSize: 13, color: C.textPrimary }}>{p.name}</span>
        <span style={{ fontFamily: fonts.mono, fontWeight: 500, fontSize: 9, color: statusColor(p.status), textTransform: "uppercase", letterSpacing: 0.5 }}>{p.status}</span>
      </div>
      <p style={{ fontFamily: fonts.display, fontSize: 12, color: C.textFaint, margin: 0, lineHeight: 1.55 }}>{p.desc}</p>
      {p.url && (
        <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: fonts.mono, fontSize: 10, color: C.accentPrimary, textDecoration: "none", display: "inline-block", marginTop: 8 }}>
          View live →
        </a>
      )}
    </div>
  );
}

function StatPair({ value, label }) {
  return (
    <div>
      <div style={{ fontFamily: fonts.mono, fontWeight: 500, fontSize: 28, color: C.accentBright, letterSpacing: -1 }}>{value}</div>
      <div style={{ fontFamily: fonts.display, fontSize: 11, color: C.textFaint, marginTop: 2 }}>{label}</div>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div style={{ background: C.bgSurface, borderRadius: 10, padding: "4px 16px", border: `1px solid ${C.borderDefault}` }}>
      {products.map((p, i) => (
        <div key={i} style={{ borderBottom: i < products.length - 1 ? `1px solid ${C.borderSubtle}` : "none" }}>
          <ProductRow p={p} />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const wide = useBreakpoint(600);

  return (
    <div style={{ background: C.bgBase, minHeight: "100vh", fontFamily: fonts.display }}>
      <div style={{ padding: wide ? "72px 32px 80px" : "56px 20px 72px", maxWidth: 720, margin: "0 auto" }}>

        {/* Brand */}
        <div style={{ marginBottom: wide ? 72 : 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.accentPrimary, boxShadow: `0 0 8px ${C.accentGlow}` }} />
            <span style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 13, letterSpacing: 2.5, color: C.accentPrimary }}>MAIVO</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ marginBottom: wide ? 80 : 56 }}>
          <h1 style={{ fontFamily: fonts.display, fontWeight: 500, fontSize: wide ? 36 : 30, lineHeight: 1.2, color: C.textPrimary, margin: "0 0 20px" }}>
            Tools for traders.{wide ? <br /> : " "}Systems for operators.
          </h1>
          <p style={{ fontFamily: fonts.display, fontWeight: 400, fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: 0, maxWidth: 420 }}>
            A product studio in Accra building affordable, precise software for retail forex traders and hostel operators.
          </p>
        </div>

        {/* ── Trading split ── */}
        <div style={{
          display: wide ? "grid" : "flex",
          gridTemplateColumns: "1fr 1fr",
          flexDirection: "column",
          gap: wide ? 32 : 24,
          marginBottom: wide ? 64 : 48,
          alignItems: "start",
        }}>
          {/* Prose + stats */}
          <div>
            <div style={{ fontFamily: fonts.display, fontWeight: 500, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: C.accentPrimary, marginBottom: 16 }}>Trading Tools</div>
            <p style={{ fontFamily: fonts.display, fontSize: 14, color: C.textSecondary, margin: "0 0 24px", lineHeight: 1.7 }}>
              Position sizing, directional bias scanning, and trade journaling for retail forex traders. Built by a trader who uses every tool before shipping it.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <StatPair value="3" label="tools shipped" />
              <StatPair value="0" label="paid APIs" />
            </div>
          </div>
          {/* Product list */}
          <ProductList products={tradingProducts} />
        </div>

        {/* ── Operations split ── */}
        <div style={{
          display: wide ? "grid" : "flex",
          gridTemplateColumns: "1fr 1fr",
          flexDirection: "column-reverse",
          gap: wide ? 32 : 24,
          marginBottom: wide ? 64 : 48,
          alignItems: "start",
        }}>
          {/* Product list — first in grid, second on mobile */}
          <ProductList products={opsProducts} />
          {/* Prose + stats */}
          <div>
            <div style={{ fontFamily: fonts.display, fontWeight: 500, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: C.accentPrimary, marginBottom: 16 }}>Operations</div>
            <p style={{ fontFamily: fonts.display, fontSize: 14, color: C.textSecondary, margin: "0 0 24px", lineHeight: 1.7 }}>
              Booking automation and operations platforms for student hostels near Ghanaian universities. One production system eliminated overbooking entirely.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <StatPair value="344" label="beds managed" />
              <StatPair value="300+" label="bookings processed" />
            </div>
          </div>
        </div>

        {/* ── Method ── */}
        <div style={{ borderTop: `1px solid ${C.borderDefault}`, padding: "32px 0", marginBottom: 48 }}>
          <p style={{ fontFamily: fonts.display, fontSize: 13, color: C.textTertiary, margin: 0, lineHeight: 1.75, maxWidth: 500 }}>
            Every product starts with a structured requirements grill, builds in vertical slices against real data, and ships on a zero-cost stack. AI handles engineering. Mike handles strategy and taste.
          </p>
        </div>

        {/* ── Footer ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: fonts.display, fontSize: 12, color: C.textFaint }}>Michael Arkorful · Accra, Ghana</span>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="https://linkedin.com/in/michael-arkorful" target="_blank" rel="noopener noreferrer" style={{ fontFamily: fonts.mono, fontSize: 11, color: C.textMuted, textDecoration: "none" }}>LinkedIn</a>
            <a href="https://github.com/michaelarkorful" target="_blank" rel="noopener noreferrer" style={{ fontFamily: fonts.mono, fontSize: 11, color: C.textMuted, textDecoration: "none" }}>GitHub</a>
          </div>
        </div>

      </div>
    </div>
  );
}
