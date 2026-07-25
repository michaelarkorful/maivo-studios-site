import { useState } from "react";

const colors = {
  bgBase: "#0b0f19",
  bgSurface: "#141926",
  bgElevated: "#111621",
  borderDefault: "#1e2536",
  borderSubtle: "#1a2030",
  accentPrimary: "#2d9d78",
  accentPrimaryGlow: "#2d9d7866",
  accentBright: "#3ddba0",
  accentPrimaryBg: "#2d9d7818",
  accentPrimaryBorder: "#2d9d7855",
  textPrimary: "#e4e8f1",
  textSecondary: "#c8cdd8",
  textTertiary: "#5a6378",
  textMuted: "#4a5368",
  textFaint: "#3a4258",
  textGhost: "#2e3548",
  textFootnote: "#2a3040",
};

const products = [
  {
    line: "TRADING TOOLS",
    tag: "MAIVO",
    items: [
      {
        name: "Position Sizer",
        status: "Live",
        desc: "Two taps to asset, instant lot calculation. Pip values for forex, indices, metals, and crypto.",
        url: "https://maivo-position-sizer.vercel.app",
      },
      {
        name: "EdgeScan",
        status: "Private Beta",
        desc: "Multi-layer directional bias scanner. Fundamentals, sentiment, COT, and technicals in one score.",
        url: null,
      },
      {
        name: "Ledger",
        status: "Prototype",
        desc: "MT5 statement parser with expectancy dashboard, equity curve, and R-distribution analysis.",
        url: null,
      },
    ],
  },
  {
    line: "PROPERTY OPERATIONS",
    tag: "STEWRD",
    items: [
      {
        name: "Hostel Booking System",
        status: "Production",
        desc: "344-bed student hostel. Gender-lock allocation, auto-expiry, payment receipts, WhatsApp integration. Zero overbookings since launch.",
        url: "https://htc-tower-booking.vercel.app",
      },
      {
        name: "Stewrd Platform",
        status: "Building",
        desc: "Multi-tenant B2B platform for hostel managers near African universities. Booking, operations, and analytics on one shared room spine.",
        url: null,
      },
    ],
  },
];

const statusColor = (status) => {
  if (status === "Live" || status === "Production") return colors.accentBright;
  if (status === "Private Beta" || status === "Building") return "#e8a838";
  return colors.textMuted;
};

export default function MAIVOLanding() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div
      style={{
        backgroundColor: colors.bgBase,
        color: colors.textSecondary,
        fontFamily: "'Outfit', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; }
        ::selection { background: ${colors.accentPrimary}40; color: ${colors.textPrimary}; }
      `}</style>

      {/* Hero */}
      <header
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "80px 20px 60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: colors.accentPrimary,
              boxShadow: `0 0 12px ${colors.accentPrimaryGlow}`,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 2.5,
              color: colors.accentPrimary,
              textTransform: "uppercase",
            }}
          >
            MAIVO
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            fontSize: 32,
            color: colors.textPrimary,
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          AI-native product studio
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: colors.textSecondary,
            maxWidth: 520,
          }}
        >
          One founder. AI as the entire team. Building affordable tools for
          retail traders and property operators — markets where the alternatives
          are overpriced or don't exist.
        </p>
      </header>

      {/* Method */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 20px 60px",
        }}
      >
        <div
          style={{
            backgroundColor: colors.bgSurface,
            border: `1px solid ${colors.borderDefault}`,
            borderRadius: 12,
            padding: "24px 20px",
          }}
        >
          <div
            style={{
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: colors.textMuted,
              marginBottom: 14,
            }}
          >
            HOW WE BUILD
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: colors.textSecondary }}>
            MAIVO uses AI across every function — product design, engineering,
            operations, and marketing — through a disciplined pipeline: sharpen
            the goal, grill the requirements, validate the market, prototype a
            working v1, refine on real data, then launch. The entire stack runs
            at zero cost: React, Vercel, Google Sheets, no paid APIs. Every
            system ships with automated tests and is verified against the live
            deployment, not just local dev.
          </p>
        </div>
      </section>

      {/* Products */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 20px 60px",
        }}
      >
        {products.map((line, li) => (
          <div key={li} style={{ marginBottom: li < products.length - 1 ? 40 : 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: colors.textMuted,
                }}
              >
                {line.line}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: 500,
                  fontSize: 10,
                  color: colors.accentPrimary,
                  padding: "2px 8px",
                  borderRadius: 6,
                  backgroundColor: colors.accentPrimaryBg,
                  border: `1px solid ${colors.accentPrimaryBorder}`,
                }}
              >
                {line.tag}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {line.items.map((product, pi) => {
                const key = `${li}-${pi}`;
                const isHovered = hoveredProduct === key;
                return (
                  <div
                    key={pi}
                    style={{
                      backgroundColor: colors.bgElevated,
                      border: `1px solid ${isHovered && product.url ? colors.accentPrimaryBorder : colors.borderDefault}`,
                      borderRadius: 12,
                      padding: "18px 20px",
                      transition: "all 0.15s",
                      cursor: product.url ? "pointer" : "default",
                    }}
                    onMouseEnter={() => setHoveredProduct(key)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    onClick={() => product.url && window.open(product.url, "_blank")}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontWeight: 500,
                          fontSize: 15,
                          color: colors.textPrimary,
                        }}
                      >
                        {product.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontWeight: 500,
                          fontSize: 10,
                          color: statusColor(product.status),
                          padding: "2px 8px",
                          borderRadius: 6,
                          backgroundColor: `${statusColor(product.status)}15`,
                          border: `1px solid ${statusColor(product.status)}30`,
                        }}
                      >
                        {product.status.toUpperCase()}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: colors.textTertiary,
                      }}
                    >
                      {product.desc}
                    </p>
                    {product.url && (
                      <div
                        style={{
                          marginTop: 10,
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          color: isHovered ? colors.accentBright : colors.textFaint,
                          transition: "color 0.15s",
                        }}
                      >
                        {product.url.replace("https://", "")} →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Traction */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 20px 60px",
        }}
      >
        <div
          style={{
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: colors.textMuted,
            marginBottom: 16,
          }}
        >
          PROOF OF WORK
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}
        >
          {[
            { value: "344", label: "Beds managed in production" },
            { value: "184", label: "Automated tests" },
            { value: "$0", label: "Monthly infrastructure cost" },
            { value: "1", label: "Person on the team" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: colors.bgSurface,
                border: `1px solid ${colors.borderDefault}`,
                borderRadius: 8,
                padding: "16px 14px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: 500,
                  fontSize: 28,
                  color: colors.accentBright,
                  letterSpacing: -1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: colors.textMuted,
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 20px 60px",
        }}
      >
        <div
          style={{
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: colors.textMuted,
            marginBottom: 16,
          }}
        >
          ABOUT
        </div>
        <div
          style={{
            backgroundColor: colors.bgSurface,
            border: `1px solid ${colors.borderDefault}`,
            borderRadius: 12,
            padding: "24px 20px",
          }}
        >
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: colors.textSecondary,
              marginBottom: 16,
            }}
          >
            MAIVO Studios is run by Michael Arkorful from Accra, Ghana. By day,
            a facility officer managing a 344-bed student hostel. By night, an
            active forex trader and product builder. The studio exists because
            the tools Mike needed — for his hostel operations, for his trading —
            were either too expensive or didn't exist. So he builds them.
          </p>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: colors.textSecondary,
            }}
          >
            The thesis is simple: AI changes who can ship software. A solo
            founder with domain expertise, a disciplined methodology, and AI as
            the full stack team can build production systems that compete with
            funded startups — at zero infrastructure cost. MAIVO is the proof.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 20px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {[
            { label: "LinkedIn", url: "https://linkedin.com/in/michael-arkorful" },
            { label: "GitHub", url: "https://github.com/michaelarkorful" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: colors.textTertiary,
                padding: "8px 16px",
                borderRadius: 8,
                backgroundColor: colors.bgSurface,
                border: `1px solid ${colors.borderDefault}`,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = colors.accentPrimaryBorder;
                e.target.style.color = colors.accentBright;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = colors.borderDefault;
                e.target.style.color = colors.textTertiary;
              }}
            >
              {link.label} →
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "20px 20px 40px",
          borderTop: `1px solid ${colors.borderSubtle}`,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            color: colors.textFootnote,
          }}
        >
          MAIVO Studios · Accra, Ghana · 2026
        </div>
      </footer>
    </div>
  );
}
