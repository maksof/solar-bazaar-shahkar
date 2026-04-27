"use client";

import Image from "next/image";

const products = [
  {
    name: "Solar Panels",
    desc: "Mono & Poly-crystalline, 100W–500W+",
    badge: "Most Ordered",
    badgeColor: "#FF6A00",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    name: "Hybrid Inverters",
    desc: "Growatt, Solis, Deye — 3kW to 20kW",
    badge: "High Demand",
    badgeColor: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80",
  },
  {
    name: "Lithium Batteries",
    desc: "Pylontech, CATL — 5kWh to 50kWh",
    badge: "Best Margin",
    badgeColor: "#059669",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    name: "Complete Systems",
    desc: "3kW to 100kW residential & commercial",
    badge: "Top Seller",
    badgeColor: "#0EA5E9",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    name: "Solar Cables & Wire",
    desc: "6mm² & 10mm² DC cables, connectors",
    badge: null,
    badgeColor: "#FF6A00",
    img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
  },
  {
    name: "Mounting Structures",
    desc: "Rooftop, ground mount, ballast systems",
    badge: null,
    badgeColor: "#FF6A00",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
  },
];

export default function ProductsShowcase() {
  return (
    <section id="products-showcase" style={{ background: "#F7F9FC", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="chip" style={{ marginBottom: 14, display: "inline-flex" }}>Products We Cover</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "#0A2540", letterSpacing: "-1px", lineHeight: 1.1, margin: 0 }}>
              Every Solar Product,
              <br />
              <span className="text-gradient-orange">One Marketplace</span>
            </h2>
          </div>
          <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.6, maxWidth: 380, margin: 0 }}>
            From panels to wires — list your full inventory and reach installers who need exactly what you stock.
          </p>
        </div>

        {/* Product grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {products.map((p, i) => (
            <div
              key={i}
              className="card-lift animate-fade-up"
              style={{
                animationDelay: `${i * 0.08}s`,
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(10,37,64,0.05)",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(10,37,64,0.6) 100%)" }} />
                {p.badge && (
                  <div style={{ position: "absolute", top: 14, left: 14, background: p.badgeColor, color: "white", fontSize: 11, fontWeight: 800, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.04em" }}>
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "20px 22px" }}>
                <h3 style={{ color: "#0A2540", fontWeight: 800, fontSize: 18, marginBottom: 6 }}>{p.name}</h3>
                <p style={{ color: "#64748B", fontSize: 14, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <a href="#final-cta" style={{ color: "#FF6A00", fontWeight: 700, fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 4, transition: "gap 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.gap = "8px")}
                    onMouseLeave={e => (e.currentTarget.style.gap = "4px")}
                  >
                    List This Product
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                    <span style={{ color: "#64748B", fontSize: 12 }}>High demand</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#final-cta" style={{ background: "linear-gradient(135deg,#FF6A00,#FF8C38)", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block", boxShadow: "0 6px 20px rgba(255,106,0,0.35)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(255,106,0,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,106,0,0.35)"; }}
          >
            Join Now & List Your Products →
          </a>
          <p style={{ color: "#94A3B8", fontSize: 13, marginTop: 12 }}>Free to list. Commission only on confirmed orders.</p>
        </div>
      </div>
    </section>
  );
}
