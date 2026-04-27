"use client";

import Image from "next/image";

export default function Features() {
  return (
    <section id="features" style={{ background: "#0A2540", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1800&q=80"
          alt="Solar installation"
          fill
          style={{ objectFit: "cover", opacity: 0.08 }}
          sizes="100vw"
        />
      </div>

      {/* Glow */}
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 60%)", zIndex: 1, pointerEvents: "none" }} />
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.025, backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
          <span className="chip chip-dark" style={{ marginBottom: 16, display: "inline-flex" }}>Platform Features</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "white", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 16 }}>
            Everything You Need to
            <br />
            <span className="text-gradient-orange">Run & Grow Your Business</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.7 }}>
            Purpose-built for Pakistan&apos;s solar supply chain. Powerful tools, zero complexity.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 60 }}>
          {[
            {
              icon: "🌐",
              title: "Vendor Network Access",
              desc: "Instantly connect with 500+ verified solar installers across Pakistan — from Karachi to Peshawar.",
            },
            {
              icon: "📊",
              title: "Order Management Dashboard",
              desc: "Track every order, payment, and delivery status in real-time from one clean interface.",
            },
            {
              icon: "🔔",
              title: "Instant Order Alerts",
              desc: "Get SMS and in-app notifications the moment an installer places an order on your catalog.",
            },
            {
              icon: "📈",
              title: "Real-Time Demand Insights",
              desc: "See trending products in your region and align your inventory to what installers are buying now.",
            },
            {
              icon: "⭐",
              title: "Buyer Ratings & Reviews",
              desc: "Build trust with a verified reputation score. Suppliers with better ratings get more orders.",
            },
            {
              icon: "🚀",
              title: "Simple Onboarding",
              desc: "Go live in under 30 minutes. Our team helps you upload your first product catalog for free.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="card-lift animate-fade-up"
              style={{
                animationDelay: `${i * 0.08}s`,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: "28px 24px",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,106,0,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,106,0,0.15)", border: "1px solid rgba(255,106,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18 }}>
                {f.icon}
              </div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Big feature banner with image */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 28, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", minHeight: 340 }} className="feature-banner">
            {/* Left */}
            <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
              <span className="chip chip-dark" style={{ display: "inline-flex", width: "fit-content" }}>Live Dashboard</span>
              <h3 style={{ color: "white", fontWeight: 900, fontSize: 26, lineHeight: 1.2, margin: 0 }}>
                Full Visibility Into<br />
                <span className="text-gradient-orange">Your Supply Operation</span>
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Real-time order tracking, inventory alerts, buyer analytics, and payment status — all in one screen.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {["Live order notifications via SMS & app", "Inventory low-stock alerts", "Buyer ratings, history & repeat rate", "Export reports as PDF or Excel"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,106,0,0.2)", border: "1px solid rgba(255,106,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 4-4" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — UI mockup */}
            <div style={{ padding: "32px 32px 0", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
              <div style={{ background: "rgba(6,15,28,0.95)", borderRadius: "16px 16px 0 0", border: "1px solid rgba(255,255,255,0.12)", borderBottom: "none", width: "100%", padding: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Weekly Revenue</p>
                    <p style={{ color: "white", fontWeight: 900, fontSize: 22, marginBottom: 4 }}>₨ 2.1M</p>
                    <span style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100 }}>↑ +31%</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>New Orders</p>
                    <p style={{ color: "white", fontWeight: 900, fontSize: 22, marginBottom: 4 }}>142</p>
                    <span style={{ background: "rgba(255,106,0,0.15)", color: "#FF6A00", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100 }}>+18 today</span>
                  </div>
                </div>
                {/* Mini chart */}
                <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 52 }}>
                    {[30, 55, 40, 72, 48, 85, 60, 92, 55, 100, 68, 82].map((h, j) => (
                      <div key={j} style={{ flex: 1, borderRadius: "3px 3px 0 0", height: `${h}%`, background: j >= 9 ? "linear-gradient(180deg,#FF6A00,#FF8C38)" : "rgba(255,255,255,0.1)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .feature-banner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
