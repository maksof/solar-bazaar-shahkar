"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(Math.floor(start));
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L15.5 9.5H22L16.5 13.5L18.5 20L13 16.5L7.5 20L9.5 13.5L4 9.5H10.5L13 3Z" fill="rgba(255,106,0,0.2)" stroke="#FF6A00" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    end: 500, suffix: "+",
    label: "Active Installers",
    sub: "Verified buyer network",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="7" width="20" height="15" rx="3" fill="rgba(255,106,0,0.15)" stroke="#FF6A00" strokeWidth="1.6"/>
        <path d="M8 7V5a5 5 0 0 1 10 0v2" stroke="#FF6A00" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="13" cy="14.5" r="2.5" fill="#FF6A00"/>
      </svg>
    ),
    end: 120, suffix: "+",
    label: "Trusted Suppliers",
    sub: "Distributors & wholesalers",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" fill="rgba(255,106,0,0.1)" stroke="#FF6A00" strokeWidth="1.6"/>
        <path d="M8 13l4 4 6-6" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    end: 40, suffix: "+",
    label: "Cities Covered",
    sub: "Nationwide reach",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 19L8 13L12 16L17 8L22 12" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="12" r="2" fill="#FF6A00"/>
        <rect x="2" y="3" width="22" height="20" rx="3" stroke="#FF6A00" strokeWidth="1.6" fill="rgba(255,106,0,0.08)"/>
      </svg>
    ),
    end: 200, suffix: "%",
    label: "Avg. Business Growth",
    sub: "After joining platform",
  },
];

export default function TrustBar() {
  return (
    <section style={{ background: "white", padding: "60px 24px", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 40 }}>
          TRUSTED BY PAKISTAN&apos;S LEADING SOLAR DISTRIBUTORS
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="card-lift animate-fade-up"
              style={{
                animationDelay: `${i * 0.1}s`,
                background: "#F7F9FC",
                border: "1px solid #E2E8F0",
                borderRadius: 20,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "default",
              }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "white", border: "1px solid #E2E8F0", boxShadow: "0 2px 10px rgba(10,37,64,0.06)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                {s.icon}
              </div>
              <div style={{ fontSize: 38, fontWeight: 900, background: "linear-gradient(135deg,#FF6A00,#FF8C38)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1, marginBottom: 6 }}>
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </div>
              <p style={{ color: "#0A2540", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{s.label}</p>
              <p style={{ color: "#94A3B8", fontSize: 12 }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
