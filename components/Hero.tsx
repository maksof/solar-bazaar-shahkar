"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const counterRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const targets = [500, 120, 40, 200];
    const suffixes = ["+", "+", "+", "%"];
    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      let start = 0;
      const end = targets[i];
      const duration = 2000;
      const step = (end / duration) * 16;
      const timer = setInterval(() => {
        start = Math.min(start + step, end);
        el.textContent = Math.floor(start) + suffixes[i];
        if (start >= end) clearInterval(timer);
      }, 16);
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #060F1C 0%, #0A2540 40%, #0d2d50 70%, #0A2540 100%)",
      }}
    >
      {/* Background solar panel image with overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80"
          alt="Solar panels background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,15,28,0.95) 0%, rgba(10,37,64,0.88) 50%, rgba(10,37,64,0.75) 100%)" }} />
      </div>

      {/* Animated grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, opacity: 0.05,
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      {/* Orange glow */}
      <div style={{ position: "absolute", top: "20%", right: "15%", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,106,0,0.15) 0%, transparent 70%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 70%)", zIndex: 1, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "100px 24px 60px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="grid-hero">
          {/* LEFT — content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {/* Announcement badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,106,0,0.12)", border: "1px solid rgba(255,106,0,0.3)", borderRadius: 100, padding: "7px 16px", marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6A00", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ color: "#FF8C38", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em" }}>Pakistan&apos;s First B2B Solar Marketplace</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 900, color: "white", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 20 }}>
              Grow Your Solar
              <br />
              Business{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-gradient-orange">2X</span>
              </span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.85)" }}>with Solar Shahkar</span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              Connect your solar distribution business directly with{" "}
              <strong style={{ color: "white" }}>500+ verified installers</strong> across Pakistan.
              No middlemen. No cold calls. Just orders.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="#final-cta"
                style={{ background: "linear-gradient(135deg,#FF6A00,#FF8C38)", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 12, textDecoration: "none", boxShadow: "0 6px 24px rgba(255,106,0,0.45)", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,106,0,0.55)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,106,0,0.45)"; }}
              >
                Join as Supplier
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#how-it-works"
                style={{ color: "white", fontWeight: 600, fontSize: 15, padding: "13px 28px", borderRadius: 12, textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.25)", backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.06)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
              >
                See How It Works
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { ref: 0, label: "Active Installers", suffix: "+" },
                { ref: 1, label: "Trusted Suppliers", suffix: "+" },
                { ref: 2, label: "Cities Covered", suffix: "+" },
                { ref: 3, label: "Avg. Revenue Growth", suffix: "%" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#FF6A00", lineHeight: 1 }}>
                    <span ref={el => { if (el) counterRefs.current[i] = el; }}>0{s.suffix}</span>
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 3, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dashboard + floating cards */}
          <div className="animate-scale-in animate-float hidden lg:block" style={{ animationDelay: "0.3s", position: "relative" }}>
            <DashboardCard />
          </div>
        </div>
      </div>

      {/* Scrolling products marquee */}
      <div style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.3)", backdropFilter: "blur(10px)", overflow: "hidden", padding: "14px 0" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: 40, width: "max-content" }}>
          {[...Array(2)].flatMap(() =>
            ["Solar Panels", "String Inverters", "Hybrid Inverters", "Lithium Batteries", "AGM Batteries", "Solar Wires & Cables", "MC4 Connectors", "Mounting Structures", "Circuit Breakers", "Charge Controllers", "Energy Meters", "Distribution Boards"].map((p, i) => (
              <span key={`${p}-${i}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>
                <span style={{ color: "#FF6A00" }}>✦</span> {p}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3 }} viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" height={60}>
        <path d="M0,60 C480,0 960,60 1440,20 L1440,60 Z" fill="white" />
      </svg>

      <style>{`
        @media (max-width: 1024px) {
          .grid-hero { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>
    </section>
  );
}

function DashboardCard() {
  return (
    <div style={{ position: "relative" }}>
      {/* Main dashboard */}
      <div style={{
        background: "rgba(13,29,52,0.95)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
      }}>
        {/* Browser bar */}
        <div style={{ background: "rgba(6,15,28,0.8)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {["#FF6A00", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.2)"].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "5px 12px", marginLeft: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>app.solarbazaar.pk/dashboard</span>
          </div>
        </div>

        <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {[
              { label: "Total Orders", value: "1,284", change: "+18%", color: "#FF6A00" },
              { label: "Revenue (PKR)", value: "8.4M", change: "+24%", color: "#22C55E" },
              { label: "Active Buyers", value: "247", change: "+12%", color: "#60A5FA" },
            ].map(s => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 12 }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{s.label}</p>
                <p style={{ color: "white", fontWeight: 800, fontSize: 16, marginBottom: 3 }}>{s.value}</p>
                <p style={{ color: s.color, fontSize: 10, fontWeight: 700 }}>↑ {s.change}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600 }}>Sales Overview</p>
              <span style={{ background: "rgba(255,106,0,0.15)", color: "#FF6A00", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 100 }}>This Month</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
              {[35, 55, 42, 78, 52, 88, 65, 95, 60, 100, 72, 85].map((h, i) => (
                <div key={i} style={{ flex: 1, borderRadius: "3px 3px 0 0", height: `${h}%`, background: (i >= 9) ? "linear-gradient(180deg,#FF6A00,#FF8C38)" : "rgba(255,255,255,0.12)", transition: "all 0.3s" }} />
              ))}
            </div>
          </div>

          {/* Orders */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Recent Orders</p>
            </div>
            {[
              { name: "Ali Solar Works", product: "Panels 450W ×20", amount: "₨ 180K", status: "New", sc: "#FF6A00" },
              { name: "Green Power Co.", product: "Inverter 5kW ×5", amount: "₨ 95K", status: "Processing", sc: "#60A5FA" },
              { name: "Pak Installers", product: "Battery 200Ah ×8", amount: "₨ 64K", status: "Shipped", sc: "#22C55E" },
            ].map((o, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: `${o.sc}22`, display: "flex", alignItems: "center", justifyContent: "center", color: o.sc, fontWeight: 800, fontSize: 11, flexShrink: 0 }}>{o.name[0]}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{o.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>{o.product}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 700 }}>{o.amount}</p>
                  <p style={{ color: o.sc, fontSize: 9, fontWeight: 700 }}>{o.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
