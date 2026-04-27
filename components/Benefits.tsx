"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); o.disconnect(); } }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const benefits = [
  {
    icon: "📈",
    title: "Increase Sales Volume",
    desc: "Tap into 500+ active installers placing orders every day. Your products reach buyers you'd never find on your own.",
    stat: "3X",
    statLabel: "more buyers reached",
    color: "#FF6A00",
  },
  {
    icon: "✅",
    title: "Verified Buyers Only",
    desc: "Every installer is KYC-verified. No tire-kickers. Deal with serious professionals with real projects and budgets.",
    stat: "100%",
    statLabel: "verified buyers",
    color: "#059669",
  },
  {
    icon: "🚫",
    title: "No Middleman",
    desc: "Cut brokers out completely. You set your price, negotiate directly, and keep your full profit margin every sale.",
    stat: "0",
    statLabel: "commission on margin",
    color: "#8B5CF6",
  },
  {
    icon: "⚡",
    title: "Faster Order Processing",
    desc: "Digital orders and integrated logistics cut your order-to-delivery time significantly. Less paperwork, more sales.",
    stat: "60%",
    statLabel: "faster order cycle",
    color: "#0EA5E9",
  },
];

export default function Benefits() {
  const { ref, inView } = useInView();

  return (
    <section id="benefits" style={{ background: "linear-gradient(180deg, #F7F9FC 0%, white 100%)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Two-column header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 64, flexWrap: "wrap" }} className="benefits-header">
          <div>
            <span className="chip" style={{ marginBottom: 16, display: "inline-flex" }}>Why Suppliers Choose Us</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, color: "#0A2540", letterSpacing: "-1px", lineHeight: 1.1, margin: 0 }}>
              The Solar Shahkar
              <br />
              <span className="text-gradient-orange">Supplier Advantage</span>
            </h2>
          </div>
          <p style={{ color: "#64748B", fontSize: 17, lineHeight: 1.75, margin: 0 }}>
            We built Solar Shahkar by talking to 200+ solar distributors across Pakistan. Every feature solves a real problem you face every day — from finding serious buyers to processing orders faster.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              className="card-lift"
              style={{
                background: "white",
                border: "1.5px solid #E2E8F0",
                borderRadius: 24,
                padding: "32px 28px",
                boxShadow: "0 2px 16px rgba(10,37,64,0.05)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = b.color + "66"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0"; }}
            >
              {/* Top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, borderRadius: "24px 24px 0 0", background: b.color, opacity: 0 }} className="card-accent" />

              <div style={{ fontSize: 40, marginBottom: 20 }}>{b.icon}</div>
              <h3 style={{ color: "#0A2540", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>{b.title}</h3>
              <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{b.desc}</p>

              <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: b.color, lineHeight: 1 }}>{b.stat}</span>
                <span style={{ color: "#94A3B8", fontSize: 12, lineHeight: 1.4, fontWeight: 500 }}>{b.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .benefits-header { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
