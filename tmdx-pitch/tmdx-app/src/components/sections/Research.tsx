"use client";
import FadeUp from "@/components/ui/FadeUp";
import Tooltip from "@/components/ui/Tooltip";
import { motion } from "framer-motion";

const stages = [
  { id: "S1A", name: "Macro Regime", desc: "Bridgewater-style analysis", tooltip: "S1A · Macro Regime — Identified a stagflation-adjacent regime from Iran war oil shock — and found TMDX's organ transplant demand is structurally immune to it." },
  { id: "S1B", name: "Sentiment", desc: "Real-time flow scanner", tooltip: "S1B · Sentiment Scan — Found the real mispricing mechanism: 5 of 8 analysts rate BUY at $155, but institutional no-touch status from governance overhang is suppressing the price." },
  { id: "S2", name: "36-Step DDT", desc: "Goldman methodology", tooltip: "S2 · 36-Step Deep Dive — Ran Goldman's 7-block due diligence and found the FCF inflection — from -$192M (2023) to +$134M (2025) — disproving Scorpion Capital's core bear thesis." },
  { id: "S3", name: "Post-Earnings", desc: "Quality check", tooltip: "S3 · Post-Earnings Check — Confirmed that management has beaten the HIGH end of guidance every year since 2023 — making the 2026 guidance of $727-757M likely the floor, not the ceiling." },
  { id: "S4", name: "Agent Debate", desc: "4-agent adversarial", tooltip: "S4 · 4-Agent Debate — Four AI agents argued the thesis with no prior direction — the bear agent's own worst-case stress test produced EPS of $3.64 — 3.6× the 2024 actual EPS of $1.01." },
  { id: "S5", name: "Pre-Mortem", desc: "Bias correction", tooltip: "S5 · Pre-Mortem — Assumed the long thesis already failed and reverse-engineered 3 failure chains — then corrected 2 severe cognitive biases before a single model was built." },
  { id: "S6", name: "DCF Model", desc: "3-scenario valuation", tooltip: "S6 · DCF Model — Built an independent 3-scenario valuation from scratch — the $148 base case matched the $155 analyst consensus without using it as a reference, validating both models." },
];

export default function Research() {
  return (
    <section id="research">
      <div className="container">
        <FadeUp><div className="section-label">The Omega Framework</div></FadeUp>
        <FadeUp delay={0.05}><div className="section-title">How This Pitch Was Built</div></FadeUp>
        <FadeUp delay={0.1}>
          <div className="section-subtitle">6 Stages · 4 AI Agents · Direction-Neutral — the data determined LONG or SHORT, not the researcher.</div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="pipeline" id="pipeline">
            {stages.map((stage, i) => (
              <>
                <Tooltip
                  key={stage.id}
                  content={
                    <div>
                      <b style={{ color: "var(--accent)", display: "block", marginBottom: 4, fontSize: 12 }}>{stage.tooltip.split("—")[0]}</b>
                      {stage.tooltip.split("—").slice(1).join("—")}
                    </div>
                  }
                >
                  <motion.div
                    className="pipeline-stage"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="stage-id">{stage.id}</div>
                    <div className="stage-name">{stage.name}</div>
                    <div className="stage-desc">{stage.desc}</div>
                  </motion.div>
                </Tooltip>
                {i < stages.length - 1 && (
                  <div className="pipeline-arrow" key={`arrow-${i}`}>→</div>
                )}
              </>
            ))}
          </div>
          <div style={{ fontSize:10, fontFamily:"var(--font-mono)", color:"var(--text-faint)", letterSpacing:"0.1em", marginTop:-32, marginBottom:36, textAlign:"center" }}>
            HOVER ANY STAGE FOR DETAIL
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="chart-wrapper">
            <h3>Stage 4 — 4-Agent Adversarial Debate</h3>
            <div style={{ overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
              <table className="debate-table">
                <thead><tr><th>Agent</th><th>Verdict</th><th>Conviction</th><th>Target</th></tr></thead>
                <tbody>
                  <tr><td>Fundamental Analyst</td><td className="verdict-long">LONG</td><td className="font-mono">8/10</td><td className="font-mono">$151</td></tr>
                  <tr><td>Technical Analyst</td><td className="verdict-wait">WAIT</td><td className="font-mono">7/10</td><td className="font-mono">$135</td></tr>
                  <tr><td>Sentiment / Flow</td><td className="verdict-long">LONG</td><td className="font-mono">7/10</td><td className="font-mono">$155</td></tr>
                  <tr><td>Risk Manager</td><td className="verdict-short">NEUTRAL/SHORT</td><td className="font-mono">6/10</td><td className="font-mono">$80</td></tr>
                  <tr><td>WEIGHTED VERDICT</td><td>LONG</td><td className="font-mono">7/10</td><td className="font-mono">$157</td></tr>
                </tbody>
              </table>
            </div>

            <div className="insight-box" style={{ marginTop: 24 }}>
              <p>The Risk Manager&apos;s own worst-case stress test — ENHANCE stall + customer loss + margin compression — produces EPS of <strong>$3.64</strong>. That is <strong>3.6× the FY2024 actual EPS of $1.01</strong>. A company with a bear-case EPS 260% above prior-year actuals is not a short.</p>
            </div>
            <div className="premortem-note">Stage 5 Pre-Mortem found 2 severe biases (Narrative Fallacy, Overconfidence) — thesis was hardened before any model was built.</div>
            <div style={{ fontSize:12, color:"var(--text-muted)", textAlign:"center", marginTop:8, letterSpacing:"0.02em" }}>
              Sources used: <span style={{ color:"var(--accent)" }}>OPTN/HRSA federal transplant data</span> · SEC filings &amp; earnings transcripts · Heart Surgery Forum clinical trials · ClinicalTrials.gov · Bloomberg consensus · Perplexity Finance tools · Beneish M-Score analysis
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
