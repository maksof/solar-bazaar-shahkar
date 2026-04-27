"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#060F1C", color: "rgba(255,255,255,0.5)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#FF6A00,#FF8C38)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3.5" fill="white"/>
                  {[0,45,90,135,180,225,270,315].map((deg, i) => {
                    const r = (deg * Math.PI) / 180;
                    return <line key={i} x1={9+5.5*Math.cos(r)} y1={9+5.5*Math.sin(r)} x2={9+8*Math.cos(r)} y2={9+8*Math.sin(r)} stroke="white" strokeWidth="1.8" strokeLinecap="round"/>;
                  })}
                </svg>
              </div>
              <div>
                <p style={{ color: "white", fontWeight: 800, fontSize: 16, lineHeight: 1 }}>Solar Shahkar</p>
                <p style={{ color: "#FF6A00", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>B2B Marketplace</p>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 300, marginBottom: 24 }}>
              Pakistan&apos;s first dedicated B2B solar marketplace — connecting suppliers directly with verified installers nationwide.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: "📍", text: "Solar Shahkar HQ, Shahkar, Punjab, Pakistan" },
                { icon: "📞", text: "+92 300 0000000" },
                { icon: "✉️", text: "hello@solarbazaar.pk" },
              ].map(c => (
                <div key={c.text} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ fontSize: 13, marginTop: 1 }}>{c.icon}</span>
                  <span style={{ fontSize: 13 }}>{c.text}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", path: null, isInsta: true },
                { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z" },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", textDecoration: "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#FF6A00"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FF6A00"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  {s.isInsta ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.6)" stroke="none"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                      {s.path && <path d={s.path}/>}
                      {s.label === "LinkedIn" && <circle cx="4" cy="4" r="2"/>}
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Platform",
              links: ["How It Works", "Supplier Benefits", "Platform Features", "Pricing", "API Access"],
            },
            {
              title: "Company",
              links: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
            },
            {
              title: "Get Started",
              links: ["Join as Supplier", "Register as Installer", "Book a Demo", "Help Center", "Terms of Service"],
            },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: "white", fontWeight: 700, fontSize: 13, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#FF6A00")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} Solar Shahkar. All rights reserved. Made with ❤️ for Pakistan&apos;s solar industry.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
              <a key={l} href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
