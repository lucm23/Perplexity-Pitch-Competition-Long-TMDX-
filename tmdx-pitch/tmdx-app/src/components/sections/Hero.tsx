"use client";
import { useEffect, useState } from "react";
import FadeUp from "@/components/ui/FadeUp";
import AudioPlayer from "@/components/ui/AudioPlayer";

// Mirrors the tmdxPrice() JSONP callback from the original HTML
function LivePriceBadge() {
  const [badge, setBadge] = useState<{ price: number; pct: number; post: number | null; postPct: number | null } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/price")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => setBadge(d))
      .catch(() => setError(true));
  }, []);

  if (error || !badge) {
    // Fallback: same Yahoo Finance link as the original HTML
    return (
      <a
        href="https://finance.yahoo.com/quote/TMDX"
        target="_blank"
        rel="noopener"
        style={{ color: "var(--text-faint)", textDecoration: "none", fontSize: 11 }}
      >
        Live price ↗
      </a>
    );
  }

  const isUp = badge.pct >= 0;
  const color = isUp ? "var(--bull)" : "var(--bear)";
  const displayPrice = (badge.post ?? badge.price).toFixed(2);
  const displayPct   = badge.post ? badge.postPct! : badge.pct;
  const suffix       = badge.post ? " AH" : "";

  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
      <span style={{ color, fontWeight: 700 }}>Live·${displayPrice}</span>
      {" "}
      <span style={{ color: "var(--text-faint)" }}>
        {isUp ? "+" : ""}{displayPct.toFixed(2)}%{suffix}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="overview">
      <div className="hero-grid-bg"/>
      <div className="container">
        <FadeUp><div className="hero-pill">LONG · NYSE: TMDX</div></FadeUp>
        <FadeUp delay={0.05}><h1 className="font-display">TransMedics Group</h1></FadeUp>
        <FadeUp delay={0.1}>
          <p className="hero-sub">
            The only vertically integrated organ transplant network on earth — priced as a device company.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-label">Entry Price</div>
              <div className="kpi-value font-mono" style={{ color: "var(--text)" }}>$100.69</div>
              <div id="livePriceBadge" style={{ marginTop:6, fontSize:12, fontFamily:"var(--font-mono)", minHeight:16 }}>
                <LivePriceBadge />
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">Near-Term Target</div>
              <div className="kpi-value font-mono text-bull">$130</div>
              <div className="kpi-delta text-bull">+29% ↑ <span style={{ fontSize:10, fontWeight:400, color:"var(--text-faint)" }}>pre-governance-compression</span></div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">Bull Target</div>
              <div className="kpi-value font-mono text-accent">$155</div>
              <div className="kpi-delta text-accent">+54% ↑</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">Stop Loss</div>
              <div className="kpi-value font-mono text-bear">$85.00</div>
              <div className="kpi-delta text-bear">-16% ↓</div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="stats-row">
            <span>Risk/Reward: <span className="mono">3.6:1</span></span>
            <span>·</span>
            <span>Analyst Consensus: <span className="mono">$148.62</span> <span style={{ fontSize:11, color:"var(--text-faint)" }}>(8 analysts · live Apr 6 2026)</span></span>
            <span>·</span>
            <span>Short Float: <span className="mono">23.7%</span></span>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}><AudioPlayer /></FadeUp>

        <FadeUp delay={0.3}>
          <div className="why-box">
            <h3>Why Now</h3>
            <ul>
              <li>First positive FCF in company history (<span className="font-mono text-accent">+$134M</span>, 2025)</li>
              <li>Guidance: beat HIGH end 3 consecutive years (2023–2025)</li>
              <li><span className="font-mono">23.7%</span> float short = short squeeze mechanism loaded</li>
              <li>Governance discount creates institutional no-touch status — each clean quarterly filing compresses it</li>
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div style={{ maxWidth:700, marginBottom:20, padding:"16px 20px", background:"var(--accent-dim)", border:"1px solid rgba(0,201,177,0.25)", borderRadius:"var(--radius)", fontSize:15, lineHeight:1.6 }}>
            <strong style={{ color:"var(--text)" }}>The non-consensus view:</strong>{" "}
            <span style={{ color:"var(--text-muted)" }}>
              The bear thesis on TMDX is built on a <strong style={{ color:"var(--text)" }}>biological error</strong> — NRP and OCS serve different donor populations. Simultaneously, a governance overhang suppresses the price despite 5/8 analysts rating BUY at $148+. Neither mechanism is in any sell-side model. The de-risking path is sequential, measurable, and already started.
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="omega-teaser">Built with the <span className="accent">Omega Framework</span> · 6 stages · 4 AI agents · direction-neutral ↓</div>
        </FadeUp>
        <FadeUp delay={0.45}>
          <div className="author-line">
            Researched &amp; authored by <span style={{ color:"#00C9B1", fontWeight:600 }}>Luc Mwizerwa</span> using Perplexity Computer · April 2026<br/>
            Position taken personally after this research · Not financial advice
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
