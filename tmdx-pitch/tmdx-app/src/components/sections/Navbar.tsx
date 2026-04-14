"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#business", label: "Business" },
  { href: "#research", label: "Research" },
  { href: "#intelligence", label: "Intel", highlight: true },
  { href: "#variant", label: "Options" },
  { href: "#financials", label: "Financials" },
  { href: "#valuation", label: "Valuation" },
  { href: "#catalysts", label: "Catalysts" },
  { href: "#risks", label: "Risks" },
  { href: "#close", label: "Close" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [livePrice, setLivePrice] = useState<{ price: number; pct: number; post?: number; postPct?: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("https://tmdx-price-proxy.vercel.app/api/price")
      .then(r => r.json())
      .then(d => setLivePrice(d))
      .catch(() => {});
  }, []);

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="mainNav">
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="tmdx">TMDX</span>
            <span className="subtitle">TransMedics Stock Pitch</span>
          </div>
          <div className="nav-links">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={l.highlight ? { color: "var(--accent)", fontWeight: 600 } : {}}
                onClick={e => smoothScroll(e, l.href)}
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            id="hamburger"
            aria-label="Menu"
            onClick={() => setMobileOpen(o => !o)}
          >
            <span/><span/><span/>
          </button>
          <div className="nav-right">
            <div className="nav-badge">
              <span className="dot"/>
              {livePrice ? (
                <>
                  LIVE·<span style={{ fontFamily: "var(--font-mono)" }}>${(livePrice.post ?? livePrice.price).toFixed(2)}</span>
                </>
              ) : (
                <>LONG · <span style={{ fontFamily: "var(--font-mono)" }}>$100.69</span></>
              )}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <div className={`mobile-nav${mobileOpen ? " open" : ""}`} id="mobileNav">
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={e => smoothScroll(e, l.href)}>
            {l.label}{l.highlight ? " ◆" : ""}
          </a>
        ))}
      </div>
    </>
  );
}
