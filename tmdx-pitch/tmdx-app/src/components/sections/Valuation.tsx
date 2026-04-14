"use client";
import FadeUp from "@/components/ui/FadeUp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dcfRows = [
  { label: "BEAR", prob: "25%", assumptions: "WACC 15.5% · 18x terminal · ENHANCE stall · 25% probability", price: "$70.73", barColor: "var(--bear)", barTarget: 24.5, priceColor: "var(--bear)", cls: "" },
  { label: "BASE", prob: "55%", assumptions: "WACC 13.0% · 22x terminal · Guidance delivered · 55% probability", price: "$148.32", barColor: "var(--accent)", barTarget: 51.3, priceColor: "var(--accent)", cls: "dcf-base" },
  { label: "BULL", prob: "20%", assumptions: "WACC 11.5% · 28x terminal · OPTN + kidney + Europe · 20% probability", price: "$289.12", barColor: "var(--gold)", barTarget: 100, priceColor: "var(--gold)", cls: "" },
  { label: "WEIGHTED", prob: "", assumptions: "Risk/Reward: 3.6:1 · Current price $100.69 sits at the floor", price: "$157.08", barColor: "linear-gradient(90deg,var(--accent),var(--gold))", barTarget: 54.3, priceColor: "var(--accent)", cls: "dcf-base", special: true },
];

function AnimatedBar({ target, color }: { target: number; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="dcf-bar-container" ref={ref}>
      <motion.div
        style={{ height:"100%", borderRadius:999, background: color }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${target}%` } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export default function Valuation() {
  return (
    <section id="valuation">
      <div className="container">
        <FadeUp><div className="section-label">Valuation</div></FadeUp>
        <FadeUp delay={0.05}><div className="section-title">What Is TMDX Worth?</div></FadeUp>
        <FadeUp delay={0.1}>
          <div className="section-subtitle">
            Our DCF was derived independently — then matched consensus. Validation, not anchoring.{" "}
            <em style={{ fontSize:14 }}>Note: The $130 near-term target reflects intrinsic value discounted by the current governance premium; the base DCF of $148.32 is the fundamental value after governance compression.</em>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="dcf-scenarios">
            {dcfRows.map((row) => (
              <div className={`dcf-row${row.cls ? " "+row.cls : ""}${row.special ? "" : ""}`} key={row.label} style={row.special ? { borderColor:"var(--gold)" } : {}}>
                <div className="dcf-label" style={row.special ? { color:"var(--accent)" } : {}}>
                  {row.label} {row.prob && <span className="prob">({row.prob})</span>}
                </div>
                <div>
                  <AnimatedBar target={row.barTarget} color={row.barColor} />
                  <div className="dcf-assumptions">{row.assumptions}</div>
                </div>
                <div className="dcf-price" style={{ color: row.priceColor }}>{row.price}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="chart-wrapper">
            <h3>Sensitivity Matrix — WACC vs. Terminal Multiple</h3>
            <div className="sensitivity-wrapper" style={{ overflowX:"auto" }}>
              <table className="sensitivity-table">
                <thead><tr><th>WACC \ Multiple</th><th>18x</th><th>22x</th><th>26x</th><th>28x</th></tr></thead>
                <tbody>
                  <tr><td>11.5%</td><td>$110</td><td className="cell-highlight">$133</td><td>$155</td><td>$167</td></tr>
                  <tr><td>13.0%</td><td className="cell-current">$96</td><td className="cell-highlight">$120</td><td>$143</td><td>$156</td></tr>
                  <tr><td>15.5%</td><td>$76</td><td className="cell-current">$96</td><td>$115</td><td>$125</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize:13, color:"var(--text-muted)", marginTop:12 }}>
              Current price <span className="font-mono">$100.69</span> is at or below the most conservative intersection shown. Every reasonable scenario produces upside.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="chart-wrapper">
            <h3>Wall Street Comparison <span style={{ fontSize:12, fontWeight:400, color:"var(--text-muted)", fontFamily:"var(--font-mono)" }}>· Live data April 6, 2026</span></h3>
            <div style={{ overflowX:"auto" }}>
              <div className="ws-table-wrapper">
                <table className="ws-table">
                  <thead><tr><th>Firm</th><th>Rating</th><th>Target</th><th>Our View</th></tr></thead>
                  <tbody>
                    <tr><td>Evercore ISI <span style={{ fontSize:11, color:"var(--bear)" }}>▼ cut today from $170</span></td><td>Outperform</td><td style={{ color:"var(--bear)" }}>$118</td><td className="disagree">Disagree: inconsistent 12% upside with Outperform rating</td></tr>
                    <tr><td>Stifel</td><td>Hold</td><td>$130</td><td className="disagree">Neutral: Stop-loss at $85; hold implies insufficient conviction</td></tr>
                    <tr><td>JP Morgan</td><td>Neutral</td><td>$149</td><td className="disagree">Disagree: governance de-risking mechanism not modeled</td></tr>
                    <tr><td>Morgan Stanley</td><td>Equal-Weight</td><td>$135</td><td className="disagree">Disagree: FCF inflection invalidates multiple compression thesis</td></tr>
                    <tr><td>Piper Sandler</td><td>Overweight</td><td>$160</td><td className="agree">Aligned</td></tr>
                    <tr><td>Oppenheimer</td><td>Outperform</td><td>$175</td><td className="agree">Aligned</td></tr>
                    <tr><td>Needham</td><td>Buy</td><td>$174</td><td className="agree">Aligned</td></tr>
                    <tr><td>Our DCF</td><td>LONG</td><td>$148</td><td>Independently derived · avg consensus $148.62 = 0.2% variance</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="peer-line">
            Peer P/E: <span className="mono">ISRG 57x</span> · <span className="mono">EW 45x</span> · <span className="mono">PEN 73x</span> · <span className="mono">TMDX 21.5x</span>{" "}
            <span style={{ fontSize:11, color:"var(--text-faint)" }}>(live Apr 6 2026)</span> — with 40% governance haircut: <span className="mono">35x → $170 implied</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
