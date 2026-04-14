import FadeUp from "@/components/ui/FadeUp";

const insights = [
  { num: "01", stage: "Stage 2 Deep Due Diligence", insight: "NRP and OCS serve biologically different donor populations — the entire bear thesis is built on a clinical error", method: "MULTI-SOURCE SYNTHESIS", methodType: "method", methodDesc: "Simultaneously synthesized: Heart Surgery Forum clinical trial (Feb 2025) + UNOS/OPTN DBD/DCD classification data + OCS utilization trajectories. Cross-referenced three primary sources in one session. Found: NRP = DBD donors; OCS = DCD donors. Different populations.", miss: "BASELINE MISS", missType: "miss", missDesc: "The Heart Surgery Forum paper is in PubMed — not Bloomberg or FactSet. Most analysts cite the NRP competitive threat from secondary sell-side notes without reading the original clinical literature. Manual cross-reference across three systems = days of work." },
  { num: "02", stage: "Stage 1B Sentiment Scan", insight: "Governance overhang creates institutional \"no-touch\" status — explaining why 5/8 analysts rate BUY at $148+ but clients aren't buying. Each clean filing = governance premium compression.", method: "CROSS-SYSTEM ARBITRAGE", methodType: "method", methodDesc: "Cross-referenced 8 analyst reports + 13F institutional flow data + short interest (23.7% float) in one thread. Found the disconnect: analyst recommendations diverge from institutional positioning. Mapped common variable to DOJ/governance overhang.", miss: "BASELINE MISS", missType: "miss", missDesc: "Requires pulling 13F data from SEC EDGAR, cross-tabbing analyst ratings from Bloomberg, and sourcing short interest from FINRA — three separate systems. Computer unified them in one session." },
  { num: "03", stage: "Stage 1B + External Federal Research", insight: "HRSA OPTN modernization = potential government-mandated monopoly. Decision EOY 2026. 30–40% probability. Not priced in any sell-side model.", method: "FEDERAL PRIMARY SOURCE", methodType: "method", methodDesc: "Pulled the Feb 2026 HRSA official government update directly (hrsa.gov). TMDX seeking OPTN membership — decision EOY 2026. Cross-checked with UNOS historical records for private-operator admission precedent.", miss: "BASELINE MISS", missType: "miss", missDesc: "HRSA.gov updates are not indexed in Bloomberg or FactSet. Zero sell-side notes mention OPTN membership potential for TMDX. Government-domain research is outside financial analyst coverage." },
  { num: "04", stage: "Stage 2 Forensic Analysis", insight: "Scorpion Capital's 342-page bear report — all 15 core allegations forensically analyzed. The FCF allegation (core bear thesis) definitively disproved. Beneish M-Score: -2.98.", method: "DOCUMENT FORENSICS", methodType: "method", methodDesc: "Parsed the full 342-page Scorpion Capital report, cross-checked each allegation against actual financial outcomes: FY2025 FCF +$134M, Beneish M-Score -2.98. Categorized: 5 definitively wrong, 3 partially disproved, 7 still live risks.", miss: "BASELINE MISS", missType: "miss", missDesc: "342 pages manually = 2–3 days of analyst work minimum. Computer parsed, categorized, and cross-checked all allegations against live financial data in minutes." },
  { num: "05", stage: "Stage 2 Financial Modeling", insight: "The FCF inflection (-$192M → +$134M) is driven by CapEx normalization after fleet-build completion — not cost-cutting. ROIC: 4% → 32% in one year = infrastructure harvest.", method: "CROSS-DOMAIN MODELING", methodType: "method", methodDesc: "Built a 5-year FCF model cross-checking TMDX CapEx vs. 22-jet fleet completion milestones vs. public aviation infrastructure cost data. Connected medtech financial modeling to aircraft fleet economics.", miss: "BASELINE MISS", missType: "miss", missDesc: "No sell-side analyst models aircraft fleet depreciation curves against medtech FCF projections. This cross-domain synthesis is only natural for an AI research partner." },
  { num: "06", stage: "Stage 5 Pre-Mortem", insight: "Pre-mortem found 2 severe cognitive biases (Narrative Fallacy + Overconfidence) before any DCF was built. Stop loss changed $92.50 → $85. Thesis hardened, not abandoned.", method: "KAHNEMAN PRE-MORTEM", methodType: "method", methodDesc: "Assumed the long thesis had already failed. Reverse-engineered 3 failure chains. Identified 2 cognitive biases that were inflating conviction. Corrected both before Stage 6 DCF.", miss: "BASELINE MISS", missType: "miss", missDesc: "Running a pre-mortem requires an adversarial counterpart to challenge your own reasoning. Impossible in solo research. The bias correction changed the position sizing and stop loss." },
  { num: "07", stage: "Stage 4 Adversarial Debate", insight: "The bear agent's own worst-case stress test produces EPS $3.64 vs. 2024 actual $1.01. The short case is mathematically self-defeating.", method: "4-AGENT ADVERSARIAL DEBATE", methodType: "method", methodDesc: "Four AI agents debated simultaneously with no prior direction. The Risk Manager ran ENHANCE stall + customer loss + margin compression. Its own math produced EPS $3.64 — 3.6× the FY2024 actual of $1.01.", miss: "BASELINE MISS", missType: "miss", missDesc: "Impossible without AI — requires running 4 simultaneous analytical frameworks with genuine adversarial tension." },
];

export default function Intelligence() {
  return (
    <section id="intelligence" style={{ background:"linear-gradient(180deg,var(--bg) 0%,rgba(0,201,177,0.03) 50%,var(--bg) 100%)" }}>
      <div className="container">
        <FadeUp><div className="section-label">Intelligence Layer</div></FadeUp>
        <FadeUp delay={0.05}><div className="section-title">What Only Computer Found</div></FadeUp>
        <FadeUp delay={0.1}>
          <div className="section-subtitle">Every key insight below is traceable to a specific Perplexity Computer research method — not replicable from Bloomberg, FactSet, or standard sell-side workflows.</div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="intel-header-badge">◆ COMPUTER SURFACED THIS — 7 DIFFERENTIATED INSIGHTS ACROSS 6 RESEARCH STAGES</div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="intel-col-headers">
            <div style={{ fontSize:10, fontFamily:"var(--font-mono)", fontWeight:700, color:"var(--accent)", letterSpacing:"0.1em", textTransform:"uppercase" }}>The Insight</div>
            <div style={{ fontSize:10, fontFamily:"var(--font-mono)", fontWeight:700, color:"var(--gold)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Computer Method</div>
            <div style={{ fontSize:10, fontFamily:"var(--font-mono)", fontWeight:700, color:"var(--bear)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Baseline Would Have Missed</div>
          </div>
        </FadeUp>

        <div className="intel-grid">
          {insights.map((ins, i) => (
            <FadeUp key={ins.num} delay={i * 0.07}>
              <div className="intel-card">
                <div className="intel-num">INSIGHT {ins.num} · {ins.stage}</div>
                <div className="intel-card-inner">
                  <div className="intel-col">
                    <div className="intel-col-label label-insight">The Insight</div>
                    <div className="intel-col-insight">{ins.insight}</div>
                  </div>
                  <div className="intel-col">
                    <div className="intel-tag intel-tag-method">{ins.method}</div>
                    <div className="intel-col-method">{ins.methodDesc}</div>
                  </div>
                  <div className="intel-col">
                    <div className="intel-tag intel-tag-miss">{ins.miss}</div>
                    <div className="intel-col-miss">{ins.missDesc}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="premium-data-box">
            <div className="premium-data-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Premium Data Sources — Pulled Live for This Analysis
            </div>
            <div className="premium-sources">
              <div className="premium-source">
                <div className="premium-source-name">Coherent Market Insights / Statista</div>
                <div className="premium-source-stat">NMP Market: $2.05B (2026) → $6.57B (2033)</div>
                <div className="premium-source-note">CAGR 18.11% · Global normothermic machine perfusion market. Cross-verified via Statista organ transplant diagnostics data.</div>
              </div>
              <div className="premium-source">
                <div className="premium-source-name">PitchBook Essentials</div>
                <div className="premium-source-stat">XVIVO: $157M raised · ~$800M valuation (PitchBook, 2023 deal)</div>
                <div className="premium-source-note">TMDX $605M FY2025 = 3.4× revenue gap on comparable public market multiples. Pulled April 2026.</div>
              </div>
              <div className="premium-source">
                <div className="premium-source-name">Perplexity Finance Tools</div>
                <div className="premium-source-stat">TMDX: 8 analysts · $148.62 avg target · 62.5% BUY</div>
                <div className="premium-source-note">Live consensus as of April 6, 2026. 0 SELL ratings. Avg target $148.62 matches our DCF base case of $148.32 within 0.2%.</div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
