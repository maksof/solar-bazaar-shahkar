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

const testimonials = [
  {
    initials: "MH",
    name: "Muhammad Hamza",
    role: "Director",
    company: "Hamza Solar Distributors",
    city: "Lahore, Punjab",
    rating: 5,
    quote: "Before Solar Shahkar, we were spending weeks tracking down serious buyers. Now we get 15–20 new installer inquiries every week. Our monthly revenue doubled in just 4 months. This platform truly understands Pakistan's solar market.",
    growth: "2.3X revenue in 4 months",
    avatar: "#FF6A00",
  },
  {
    initials: "AR",
    name: "Ahmed Raza",
    role: "CEO",
    company: "AR Power Solutions",
    city: "Karachi, Sindh",
    rating: 5,
    quote: "We were skeptical, but the results speak for themselves. The order management dashboard alone saves 3–4 hours daily. Every buyer on this platform is genuine — they come with real project specs and purchase orders. Highly recommended.",
    growth: "180% order volume increase",
    avatar: "#1B3A5C",
  },
  {
    initials: "TK",
    name: "Tariq Khan",
    role: "Owner",
    company: "TK Solar & Electricals",
    city: "Rawalpindi, Punjab",
    rating: 5,
    quote: "I was struggling to compete with big distributors. Solar Shahkar gave us a direct channel to installers in 8 cities. Our stock turnover improved dramatically and we signed 3 long-term supply agreements through the platform.",
    growth: "₨ 5M additional revenue",
    avatar: "#059669",
  },
];

const brands = [
  { name: "Growatt", abbr: "GW" },
  { name: "Jinko Solar", abbr: "JK" },
  { name: "Longi", abbr: "LG" },
  { name: "Deye", abbr: "DY" },
  { name: "Pylontech", abbr: "PT" },
  { name: "Solis", abbr: "SL" },
  { name: "Huawei", abbr: "HW" },
  { name: "Risen", abbr: "RS" },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" style={{ background: "#F7F9FC", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
          <span className="chip" style={{ marginBottom: 16, display: "inline-flex" }}>Testimonials</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "#0A2540", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 16 }}>
            Real Suppliers.
            <br />
            <span className="text-gradient-orange">Real Results.</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: 17, lineHeight: 1.7 }}>
            Hundreds of Pakistani solar distributors are already growing with Solar Shahkar. Here&apos;s what they say.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 60 }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-lift"
              style={{
                background: "white",
                border: "1.5px solid #E2E8F0",
                borderRadius: 24,
                padding: "36px 32px",
                boxShadow: "0 4px 24px rgba(10,37,64,0.07)",
                position: "relative",
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Top gradient line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${t.avatar}, transparent)`, borderRadius: "24px 24px 0 0" }} />

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#FF6A00">
                    <path d="M8 1.5l1.6 4H15l-4 3 1.5 4.5L8 11 4.5 13l1.5-4.5-4-3H6.4L8 1.5z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.75, marginBottom: 28, position: "relative" }}>
                <span style={{ color: "#FF6A00", fontSize: 56, lineHeight: 0, fontFamily: "Georgia, serif", verticalAlign: -24, opacity: 0.2, position: "absolute", top: 0, left: -6 }}>"</span>
                <span style={{ paddingLeft: 16, display: "block" }}>{t.quote}</span>
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: `linear-gradient(135deg, ${t.avatar}, ${t.avatar}CC)`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ color: "#0A2540", fontWeight: 800, fontSize: 14, marginBottom: 2 }}>{t.name}</p>
                    <p style={{ color: "#64748B", fontSize: 12 }}>{t.role}, {t.company}</p>
                    <p style={{ color: "#94A3B8", fontSize: 11, marginTop: 1 }}>📍 {t.city}</p>
                  </div>
                </div>
                <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 100, padding: "5px 10px", display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                  <span style={{ color: "#15803D", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>{t.growth}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand strip */}
        <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 48 }}>
          <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
            Suppliers Dealing in These Brands Use Solar Shahkar
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {brands.map(b => (
              <div key={b.name} style={{ display: "flex", alignItems: "center", gap: 10, background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "10px 18px", boxShadow: "0 2px 8px rgba(10,37,64,0.04)", transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#FF6A00"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(255,106,0,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(10,37,64,0.04)"; }}
              >
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "#F7F9FC", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A2540", fontSize: 10, fontWeight: 900 }}>{b.abbr}</div>
                <span style={{ color: "#0A2540", fontWeight: 700, fontSize: 13 }}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
