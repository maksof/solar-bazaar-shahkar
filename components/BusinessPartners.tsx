"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); o.disconnect(); } }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function BusinessPartners() {
  const { ref, inView } = useInView(0.1);

  return (
    <section style={{ background: "#080E1A", padding: "0", overflow: "hidden" }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "stretch",
          minHeight: 620,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* LEFT — Portrait Image */}
        <div style={{
          flex: "0 0 420px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative top-left orange line */}
          <div style={{
            position: "absolute",
            top: 48,
            left: 48,
            width: 48,
            height: 3,
            background: "#FF6A00",
            zIndex: 3,
          }} />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/yasir2.png"
            alt="Muhammad Yasir Khan"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 5%",
              display: "block",
              filter: "grayscale(20%) contrast(1.05)",
            }}
          />

          {/* Right edge gradient blending into content */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background: "linear-gradient(to right, transparent, #080E1A)",
          }} />

          {/* Bottom gradient */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background: "linear-gradient(to top, #080E1A, transparent)",
          }} />

          {/* Section label — rotated on left side */}
          <div style={{
            position: "absolute",
            left: -32,
            top: "50%",
            transform: "translateY(-50%) rotate(-90deg)",
            transformOrigin: "center center",
            color: "rgba(255,255,255,0.18)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            Business Partner
          </div>
        </div>

        {/* RIGHT — Content */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 72px 72px 48px",
          position: "relative",
        }}>
          {/* Orange accent line */}
          <div style={{
            width: 48,
            height: 3,
            background: "#FF6A00",
            marginBottom: 28,
          }} />

          {/* Name */}
          <h2 style={{
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: 12,
          }}>
            Muhammad
            <br />
            Yasir Khan
          </h2>

          {/* Title */}
          <p style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#FF6A00",
            letterSpacing: "0.05em",
            marginBottom: 32,
          }}>
            Business Partner / Solar Shahkar
          </p>

          {/* Divider */}
          <div style={{
            width: "100%",
            height: 1,
            background: "rgba(255,255,255,0.08)",
            marginBottom: 28,
          }} />

          {/* Bio */}
          <p style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.85,
            maxWidth: 420,
            marginBottom: 36,
          }}>
            Muhammad Yasir Khan Solar Shahkar ke trusted business partner hain.
            Pakistan mein solar energy solutions ko distribute karne mein ahem
            kirdar ada kar rahe hain. Unka tajurba aur dedication solar industry
            ko aage le jaane mein madad deta hai.
          </p>

          {/* Email */}
          <a
            href="mailto:yasirkhan@solarbazaar.pk"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "rgba(255,255,255,0.7)",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#FF6A00")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
          >
            <span style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Zm1 0v.217l5 3.334 5-3.334V4H3Zm10 1.55-4.496 2.997a1 1 0 0 1-1.008 0L3 5.55V12h10V5.55Z" fill="currentColor"/>
              </svg>
            </span>
            yasirkhan@solarbazaar.pk
          </a>

          {/* Bottom-right decorative number */}
          <div style={{
            position: "absolute",
            bottom: 40,
            right: 72,
            fontSize: 120,
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-4px",
          }}>
            01
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .partner-inner { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
