"use client";

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

const steps = [
  {
    num: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="#FF6A00" strokeWidth="2"/>
        <path d="M5 24c0-5 4-9 9-9s9 4 9 9" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Create Your Profile",
    desc: "Register your business in under 10 minutes. Add your trade license, contact details, and product categories.",
    time: "10 min setup",
  },
  {
    num: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="#FF6A00" strokeWidth="2"/>
        <path d="M10 14h8M14 10v8" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "List Your Products",
    desc: "Upload your full inventory — panels, inverters, batteries, wires — with pricing, photos, and stock levels.",
    time: "Free listings",
  },
  {
    num: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 8h18M5 13h18M5 18h11" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="20" r="4.5" stroke="#FF6A00" strokeWidth="2"/>
        <path d="M20.5 20l1 1 2.5-2" stroke="#FF6A00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Receive Orders",
    desc: "Verified installers browse and place orders directly. Instant SMS + app notifications so you never miss a sale.",
    time: "Instant alerts",
  },
  {
    num: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 20L9 13L14 17L19 8L24 12" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="12" r="2.5" fill="#FF6A00"/>
        <path d="M19 8l5 0 0 4" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Scale Your Business",
    desc: "Use real-time demand insights and buyer analytics to optimize inventory and double your revenue.",
    time: "2X avg. growth",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section id="how-it-works" style={{ background: "white", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
          <span className="chip" style={{ marginBottom: 16, display: "inline-flex" }}>Process</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "#0A2540", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 16 }}>
            From Signup to First Sale
            <br />
            <span className="text-gradient-orange">in Under 48 Hours</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: 17, lineHeight: 1.7 }}>
            A streamlined 4-step process purpose-built for Pakistan&apos;s solar supply chain.
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, position: "relative" }}>
          {/* Connector line */}
          <div className="hidden lg:block" style={{ position: "absolute", top: 60, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0.6) 50%, rgba(255,106,0,0.15) 100%)", zIndex: 0 }} />

          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Icon circle */}
              <div style={{ position: "relative", marginBottom: 24 }}>
                <div style={{ width: 72, height: 72, borderRadius: 20, background: "white", border: "2px solid #E2E8F0", boxShadow: "0 4px 20px rgba(10,37,64,0.08)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", cursor: "default" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#FF6A00"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(255,106,0,0.2)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(10,37,64,0.08)"; }}
                >
                  {s.icon}
                </div>
                {/* Step number */}
                <div style={{ position: "absolute", top: -10, right: -10, width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#FF6A00,#FF8C38)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(255,106,0,0.4)" }}>
                  <span style={{ color: "white", fontSize: 11, fontWeight: 900 }}>{s.num}</span>
                </div>
              </div>

              <h3 style={{ color: "#0A2540", fontWeight: 800, fontSize: 18, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,106,0,0.07)", color: "#FF6A00", fontSize: 11, fontWeight: 700, padding: "5px 12px", borderRadius: 100, border: "1px solid rgba(255,106,0,0.15)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6A00", display: "inline-block" }} />
                {s.time}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <a href="#final-cta" style={{ background: "linear-gradient(135deg,#FF6A00,#FF8C38)", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block", boxShadow: "0 6px 20px rgba(255,106,0,0.35)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Get Started Free — No Monthly Fees
          </a>
          <p style={{ color: "#94A3B8", fontSize: 13, marginTop: 10 }}>✓ Free setup &nbsp; ✓ No subscription &nbsp; ✓ First order in 7 days</p>
        </div>
      </div>
    </section>
  );
}
