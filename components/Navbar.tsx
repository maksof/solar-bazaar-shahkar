"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Products",     href: "#products-showcase" },
    { label: "Benefits",     href: "#benefits" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        transition: "all 0.35s ease",
        background: scrolled ? "rgba(10,37,64,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#FF6A00,#FF8C38)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(255,106,0,0.4)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3.5" fill="white" />
              {[0,45,90,135,180,225,270,315].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const x1 = 9 + 5.5 * Math.cos(rad);
                const y1 = 9 + 5.5 * Math.sin(rad);
                const x2 = 9 + 8 * Math.cos(rad);
                const y2 = 9 + 8 * Math.sin(rad);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.8" strokeLinecap="round" />;
              })}
            </svg>
          </div>
          <div>
            <div style={{ color: "white", fontWeight: 800, fontSize: 18, lineHeight: 1, letterSpacing: "-0.5px" }}>Solar Shahkar</div>
            <div style={{ color: "#FF6A00", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>B2B Marketplace</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FF6A00")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >{l.label}</a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden md:flex">
          <a href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 600, textDecoration: "none", padding: "8px 16px", borderRadius: 8, transition: "all 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >Sign In</a>
          <a href="#final-cta" style={{ background: "linear-gradient(135deg,#FF6A00,#FF8C38)", color: "white", fontWeight: 700, fontSize: 14, padding: "10px 22px", borderRadius: 10, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,106,0,0.4)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,106,0,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,106,0,0.4)"; }}
          >Join as Supplier →</a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 8 }}>
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4l14 14M18 4L4 18" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 6h16M3 11h16M3 16h16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          }
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "rgba(10,37,64,0.98)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, fontWeight: 500, textDecoration: "none" }}>{l.label}</a>
          ))}
          <a href="#final-cta" onClick={() => setMenuOpen(false)} style={{ background: "linear-gradient(135deg,#FF6A00,#FF8C38)", color: "white", fontWeight: 700, padding: "12px 20px", borderRadius: 10, textAlign: "center", textDecoration: "none", marginTop: 4 }}>Join as Supplier →</a>
        </div>
      )}
    </header>
  );
}
