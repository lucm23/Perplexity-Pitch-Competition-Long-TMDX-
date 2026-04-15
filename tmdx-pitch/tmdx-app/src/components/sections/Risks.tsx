import FadeUp from "@/components/ui/FadeUp";

const risks = [
  { risk: "DOJ Investigation", mitigant: "No CID in any SEC filing as of April 2026. The likely DOJ vector is CMS billing compliance — not financial statement manipulation. Beneish M-Score -2.98 addresses the latter. Each clean quarterly filing without CID disclosure = governance premium compression." },
  { risk: "Customer Concentration\n(top 5 = 40%)", mitigant: "High operational switching costs. 4-year NOP relationships. 80+ active centers. Zero voluntary reductions." },
  { risk: "NRP \u201cDisplacement\u201d", mitigant: "NRP = DBD donors. OCS = DCD donors. Different populations, not substitutes. OCS liver share GREW 26% → 36% despite NRP." },
  { risk: "$94 Convertible Floor\n(7.1% above current)", mitigant: "$488M cash > $470M debt. FCF self-funding. Stop at $85 sized for this." },
  { risk: "Q1 2026 EPS Cliff\n(-76% vs Q4)", mitigant: "Seasonal. Guided 90 days ago. Every Q1 in TMDX history. Already priced in." },
  { risk: "CFO Replacement\n(Dec 2024)", mitigant: "CFO: Gerardo Hernandez (replaced Stephen Gordon, Dec 2024 — stated reason: planned transition). Hernandez: first full quarter = Q4 2025 clean beat (+39% EPS), deferred tax asset release (auditor-certified permanent profitability confidence). Growth CFO behavior, not cleanup." },
  { risk: "Litigation Liability", mitigant: "$488M cash. Scenarios under $300M fully covered." },
];

export default function Risks() {
  return (
    <section id="risks">
      <div className="container">
        <FadeUp><div className="section-label">Bear Case</div></FadeUp>
        <FadeUp delay={0.05}><div className="section-title">We Know It Cold</div></FadeUp>

        <FadeUp delay={0.1}>
          <div className="bear-quote">
            &quot;The bear case on TMDX is not that the business is fake — it is that governance uncertainty combined with a convertible note floor at $94 creates a scenario where the stock can halve on news flow alone. We believe this risk is MORE than priced in at $100.69.&quot;
            <span className="rr">3.6:1 risk/reward · $85 hard stop</span>
            <span style={{ display:"block", fontSize:11, color:"var(--text-muted)", marginTop:8, fontStyle:"normal" }}>
              <strong>R/R note:</strong> Pre-mortem failure chains are overlapping conditionals. DCF scenarios are mutually exclusive. Even at 40% bear weight, probability-weighted target ≈ $129, above entry.
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p style={{ fontSize:13, color:"var(--text-muted)", marginTop:32, marginBottom:32, padding:"14px 18px", background:"var(--surface)", borderRadius:6, borderLeft:"3px solid var(--accent)" }}>
            <strong>Downside recovery scenario:</strong> If stock reaches $75 (governance scare, not fundamental impairment): cash $488M covers all litigation under $300M, FCF still positive (~$80M+), management retains equity awards — re-entry thesis intact. Trough EBITDA under full bear: ~$155M (26% margin on $595M revenue) at 18x terminal = ~$88 floor.<br/><br/>
            <strong>Position sizing note:</strong> The $85 stop assumes an orderly exit. A DOJ CID disclosure could gap the stock to $52-60 — making the true worst-case drawdown ~$40-48, not $15.69. We account for this by sizing this as a <strong>2-3% position</strong>.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="chart-wrapper" style={{ overflowX:"auto" }}>
            <h3>Risk / Mitigant Matrix</h3>
            <div className="risk-table-wrapper">
              <table className="risk-table">
                <thead><tr><th>Risk</th><th>Mitigant</th></tr></thead>
                <tbody>
                  {risks.map(r => (
                    <tr key={r.risk}>
                      <td style={{ whiteSpace:"pre-line" }}>{r.risk}</td>
                      <td dangerouslySetInnerHTML={{ __html: r.mitigant }}/>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="scorpion-box">
            <h4>Scorpion Capital Status</h4>
            <div className="scorpion-item">
              <span className="icon-check">✓</span>
              <span><strong style={{ color:"var(--bull)" }}>PROVEN WRONG:</strong> &quot;FCF will never turn positive&quot; → FY2025: <span className="font-mono">+$134M</span></span>
            </div>
            <div className="scorpion-item">
              <span className="icon-warn">⚠</span>
              <span><strong style={{ color:"var(--gold)" }}>STILL OPEN:</strong> CFO explanation, DSO monitoring, DOJ reference — we&apos;ve sized position accordingly</span>
            </div>
            <div className="scorpion-item">
              <span className="icon-data">◆</span>
              <span>Beneish M-Score: <span className="font-mono">-2.98</span> (below <span className="font-mono">-1.78</span> manipulation threshold)</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
