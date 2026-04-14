"use client";
import FadeUp from "@/components/ui/FadeUp";
import dynamic from "next/dynamic";

const RevenueChart = dynamic(() => import("@/components/charts/RevenueChart"), { ssr: false });
const FCFChart = dynamic(() => import("@/components/charts/FCFChart"), { ssr: false });

export default function Financials() {
  return (
    <section id="financials">
      <div className="container">
        <FadeUp><div className="section-label">Financial Model</div></FadeUp>
        <FadeUp delay={0.05}><div className="section-title">The Numbers</div></FadeUp>

        <FadeUp delay={0.1}>
          <div className="chart-wrapper">
            <h3>Revenue Growth (<span className="font-mono">$M</span>)</h3>
            <div className="chart-canvas-container"><RevenueChart /></div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="chart-wrapper">
            <h3>Free Cash Flow Inflection (<span className="font-mono">$M</span>)</h3>
            <div className="chart-canvas-container"><FCFChart /></div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h3 className="font-display" style={{ fontSize:18, marginBottom:16 }}>ROIC Trajectory</h3>
          <div className="roic-grid">
            {[{ year:"FY2024", val:"~4%", muted:true }, { year:"FY2025", val:"~32%" }, { year:"FY2026E", val:"~35%+" }].map(r => (
              <div className="card roic-block" key={r.year}>
                <div className="roic-year">{r.year}</div>
                <div className="roic-value" style={r.muted ? { color:"var(--text-muted)" } : {}}>{r.val}</div>
              </div>
            ))}
          </div>
          <p className="content-para" style={{ fontSize:14, color:"var(--text-muted)" }}>Invested capital ~$280M. NOPAT ~$85M (adj.). 4% → 32% in one year = the operating leverage story quantified.</p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="chart-wrapper">
            <h3>Forward Estimates</h3>
            <div style={{ overflowX:"auto" }}>
              <div className="fin-table-wrapper">
                <table className="fin-table">
                  <thead><tr><th>Year</th><th>Revenue</th><th>EBITDA</th><th>EBITDA Mgn</th><th>Net Income</th><th>FCF</th></tr></thead>
                  <tbody>
                    <tr><td>FY2026E</td><td>$737.7M</td><td>$162M</td><td>22.0%</td><td>$96.5M</td><td>$81M</td></tr>
                    <tr><td>FY2027E</td><td>$875.4M</td><td>$233M</td><td>26.6%</td><td>$151M</td><td>$164M</td></tr>
                    <tr className="highlight-row"><td>FY2028E</td><td>$1,009M</td><td>$340M</td><td>33.7%</td><td>$201M</td><td>$220M</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h3 className="font-display" style={{ fontSize:18, marginBottom:16 }}>Guidance Track Record — Beat HIGH End 3 Years Running</h3>
          <div className="guidance-grid">
            {[
              { year:"2023", range:"$185–$210M", actual:"$241.6M", beat:"+22% above HIGH" },
              { year:"2024", range:"$385–$415M", actual:"$441.5M", beat:"+6.4% above HIGH" },
              { year:"2025", range:"$560–$600M", actual:"$605.5M", beat:"+0.9% above HIGH" },
            ].map(g => (
              <div className="guidance-row" key={g.year}>
                <span className="guidance-year">{g.year}</span>
                <span className="guidance-range">Guided <span className="font-mono">{g.range}</span> → Actual <span className="font-mono">{g.actual}</span></span>
                <span className="guidance-beat">{g.beat}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div style={{ fontSize:13, color:"var(--text-muted)", background:"var(--surface)", borderRadius:6, padding:"10px 16px", marginBottom:12, borderLeft:"3px solid var(--accent)" }}>
            <strong style={{ color:"var(--text)" }}>Growth deceleration is intentional, not structural.</strong> 83%→37%→20-25%: the 83% was fleet-build-driven pull-forward; 37% was NOP network expansion; 20-25% is base maturation. Unit economics are <em>improving</em> — $0.44 flow-through vs $0.33 in 2024.
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="op-stat">
            <span>Operating leverage: <strong>$0.44</strong> of every new revenue dollar → operating income</span>
            <span>CapEx down <strong>54%</strong> YoY — fleet build complete</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.45}>
          <div className="ni-note">
            FY2025 net income <span className="font-mono">$190M</span> includes <span className="font-mono">$83.8M</span> non-recurring tax benefit. Adjusted NI: ~<span className="font-mono">$106M</span>. FY2026E <span className="font-mono">$96.5M</span> = -9% adjusted, not the -49% headline suggests.
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
