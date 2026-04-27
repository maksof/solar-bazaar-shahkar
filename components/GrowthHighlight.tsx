"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); o.disconnect(); } }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function GrowthHighlight() {
  const { ref, inView } = useInView();

  return (
    <section id="growth" style={{ background: "white", padding: "96px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="growth-grid">
          {/* LEFT — Image + stats overlay */}
          <div
            style={{
              position: "relative",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Main image */}
            <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 32px 80px rgba(10,37,64,0.2)" }}>
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=85"
                alt="Solar business growth"
                width={600}
                height={420}
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(10,37,64,0.7) 100%)", borderRadius: 28 }} />
            </div>

            {/* Floating stat cards */}
            <div style={{ position: "absolute", top: 24, left: -24, background: "white", borderRadius: 18, padding: "16px 20px", boxShadow: "0 12px 40px rgba(10,37,64,0.18)", minWidth: 160, animation: "floatY 4s ease-in-out infinite" }}>
              <p style={{ color: "#94A3B8", fontSize: 11, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Avg. Growth</p>
              <p style={{ color: "#FF6A00", fontWeight: 900, fontSize: 36, lineHeight: 1, marginBottom: 3 }}>2X</p>
              <p style={{ color: "#64748B", fontSize: 11 }}>Revenue in 6 months</p>
            </div>

            <div style={{ position: "absolute", bottom: 24, right: -24, background: "#0A2540", borderRadius: 18, padding: "16px 20px", boxShadow: "0 12px 40px rgba(0,0,0,0.3)", minWidth: 180, animation: "floatY 4s ease-in-out infinite 2s" }}>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>This Quarter</p>
              <div style={{ display: "flex", gap: 12 }}>
                <div>
                  <p style={{ color: "white", fontWeight: 900, fontSize: 20, lineHeight: 1 }}>₨ 8.4M</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 2 }}>Revenue</p>
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
                <div>
                  <p style={{ color: "#22C55E", fontWeight: 900, fontSize: 20, lineHeight: 1 }}>+24%</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 2 }}>vs last quarter</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Copy */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <span className="chip" style={{ marginBottom: 20, display: "inline-flex" }}>Proven Growth</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, color: "#0A2540", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 20 }}>
              Suppliers Who Join
              <br />
              <span className="text-gradient-orange">Double Their Revenue</span>
              <br />
              in 6 Months
            </h2>
            <p style={{ color: "#64748B", fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
              The numbers are clear. Solar Shahkar suppliers consistently see 2X revenue growth within their first two quarters — more orders, more verified buyers, and less time wasted on cold calls and middlemen.
            </p>

            {/* Progress bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {[
                { label: "Suppliers doubling order volume in 90 days", pct: 78, color: "#FF6A00" },
                { label: "Average increase in active buyers", pct: 68, color: "#8B5CF6" },
                { label: "Reduction in sales cycle time", pct: 60, color: "#059669" },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "#64748B", fontSize: 13, fontWeight: 500 }}>{item.label}</span>
                    <span style={{ color: item.color, fontSize: 14, fontWeight: 800 }}>{item.pct}%</span>
                  </div>
                  <div style={{ height: 6, background: "#F1F5F9", borderRadius: 100, overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        borderRadius: 100,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}AA)`,
                        width: inView ? `${item.pct}%` : "0%",
                        transition: `width 1.2s ease ${0.4 + i * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a href="#final-cta" style={{ background: "linear-gradient(135deg,#FF6A00,#FF8C38)", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block", boxShadow: "0 6px 20px rgba(255,106,0,0.35)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(255,106,0,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,106,0,0.35)"; }}
            >
              Start Growing Today →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .growth-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>
    </section>
  );
}
