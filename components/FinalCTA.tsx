"use client";

import Image from "next/image";

export default function FinalCTA() {
  return (
    <section id="final-cta" style={{ position: "relative", padding: "100px 24px", overflow: "hidden", background: "#0A2540" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
          alt="Solar panels"
          fill
          style={{ objectFit: "cover", opacity: 0.06 }}
          sizes="100vw"
        />
      </div>
      {/* Glows */}
      <div style={{ position: "absolute", top: "0%", left: "30%", width: 700, height: 700, background: "radial-gradient(circle, rgba(255,106,0,0.12) 0%, transparent 60%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "0%", right: "20%", width: 500, height: 500, background: "radial-gradient(circle, rgba(255,106,0,0.07) 0%, transparent 60%)", zIndex: 1, pointerEvents: "none" }} />
      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.03, backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,106,0,0.12)", border: "1px solid rgba(255,106,0,0.3)", borderRadius: 100, padding: "7px 18px", marginBottom: 32 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6A00", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ color: "#FF8C38", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em" }}>Limited Supplier Spots Available</span>
        </div>

        {/* Headline */}
        <h2 style={{ fontSize: "clamp(34px,5vw,64px)", fontWeight: 900, color: "white", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 20 }}>
          Start Selling to{" "}
          <span className="text-gradient-orange">500+ Installers</span>
          <br />
          Today
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
          Join Pakistan&apos;s fastest-growing B2B solar marketplace. Free to start. No monthly fees.
          Get your first order within 7 days — guaranteed.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
          <a href="#"
            style={{ background: "linear-gradient(135deg,#FF6A00,#FF8C38)", color: "white", fontWeight: 800, fontSize: 16, padding: "16px 32px", borderRadius: 14, textDecoration: "none", boxShadow: "0 8px 28px rgba(255,106,0,0.45)", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(255,106,0,0.55)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,106,0,0.45)"; }}
          >
            Join Solar Shahkar — It&apos;s Free
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M11 5l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#how-it-works"
            style={{ color: "white", fontWeight: 600, fontSize: 16, padding: "15px 32px", borderRadius: 14, textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
          >
            See How It Works
          </a>
        </div>

        {/* Trust signals */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", marginBottom: 36 }}>
          {["✓ No setup fee", "✓ No monthly subscription", "✓ First order in 7 days guaranteed", "✓ Dedicated onboarding support"].map(item => (
            <span key={item} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 500 }}>{item}</span>
          ))}
        </div>

        {/* Social proof */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ display: "flex" }}>
            {["#FF6A00", "#1B3A5C", "#2E5F8A", "#FF8C38", "#059669"].map((c, i) => (
              <div key={i} style={{ width: 38, height: 38, borderRadius: "50%", background: c, border: "2.5px solid #0A2540", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 12, marginLeft: i > 0 ? -10 : 0, zIndex: 5 - i }}>
                {["M", "A", "S", "R", "T"][i]}
              </div>
            ))}
          </div>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
            <strong style={{ color: "white" }}>120+ suppliers</strong> growing with us
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
      `}</style>
    </section>
  );
}
