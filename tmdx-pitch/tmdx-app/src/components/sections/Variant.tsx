import FadeUp from "@/components/ui/FadeUp";

const options = [
  { badge: "NOT IN ANY SELL-SIDE MODEL", title: "OPTN Federal Integration", sub: "Federal Ecosystem", desc: "HRSA modernizing OPTN. TMDX seeking membership. Decision EOY 2026. Probability estimate: ~30-40%. If approved: federally integrated into national organ allocation — not priced in any model. Asymmetric payoff: 30-40% probability of material re-rating event." },
  { badge: "NOT IN ANY SELL-SIDE MODEL", title: "OCS Kidney", sub: "$2B+ TAM", desc: "20,000+ transplants/yr. 8,000+ kidneys discarded. FDA trial Q3 2026. Commercial 2029. Larger than current liver + heart combined. Quick sizing: 20% penetration × 20,000 cases × $100K ASP = $400M incremental revenue by 2031." },
  { badge: "NOT IN ANY SELL-SIDE MODEL", title: "Europe", sub: "45% of Global Volume", desc: "TMDX today: $16.7M international (2.8%). Italy NOP H1 2026. At US penetration: $2B+ additional revenue at scale." },
  { badge: "NEAR-TERM · 2026-2027", title: "Oil Normalization", sub: "+$15-20M Gross Profit", desc: "Brent at $105-115 (Iran war) vs. $75 normalized baseline adds ~$8-12M annual jet fuel cost. Normalization = ~200bps EBITDA margin recovery not in any sell-side 2026 model.", gold: true },
];

export default function Variant() {
  return (
    <section id="variant">
      <div className="container">
        <FadeUp><div className="section-label">Variant Perception</div></FadeUp>
        <FadeUp delay={0.05}><div className="section-title">The Market Is Missing Three Things</div></FadeUp>

        <FadeUp delay={0.1}>
          <div className="mechanism-box">
            <p>
              <strong>5 of 8 analysts rate TMDX BUY at $155</strong> — yet their clients are not buying. Governance overhang (DOJ investigation, class action, unexplained CFO departure) creates <strong>discretionary active fund</strong> no-touch status.{" "}
              <em style={{ fontSize:13, color:"var(--text-muted)" }}>(Note: BlackRock&apos;s +1.19% QoQ accumulation is passive index inclusion — not a discretionary conviction call.)</em>{" "}
              The de-risking catalyst is sequential: <strong>clean Q2, Q3, Q4 2026 quarterly filings without DOJ CID disclosure</strong>. Each clean filing compresses the governance premium.
            </p>
          </div>
        </FadeUp>

        <div className="option-grid">
          {options.map((o, i) => (
            <FadeUp key={o.title} delay={i * 0.1}>
              <div className="card option-card">
                <div className="option-badge" style={o.gold ? { background:"var(--gold)", color:"#1a1a1a" } : {}}>{o.badge}</div>
                <h3>{o.title}</h3>
                <div className="option-sub">{o.sub}</div>
                <p>{o.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="closing-line">
            At <span className="font-mono">$100.69</span>, you&apos;re paying for the liver business.<br/>
            <em>The kidney, Europe, OPTN, and a $15-20M oil tailwind are all free.</em>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
