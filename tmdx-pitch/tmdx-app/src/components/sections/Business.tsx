"use client";
import FadeUp from "@/components/ui/FadeUp";
import { Plane, Building2, Users, Cpu, Heart, Globe } from "lucide-react";
import dynamic from "next/dynamic";

const UtilizationChart = dynamic(() => import("@/components/charts/UtilizationChart"), { ssr: false });

const infraItems = [
  { icon: <Plane size={28} color="var(--accent)" strokeWidth={1.5}/>, label: "22 Aircraft", meta: "Owned & operated fleet" },
  { icon: <Building2 size={28} color="var(--accent)" strokeWidth={1.5}/>, label: "18 Logistics Hubs", meta: "Nationwide coverage" },
  { icon: <Users size={28} color="var(--accent)" strokeWidth={1.5}/>, label: "50+ Surgeons", meta: "Embedded organ specialists" },
  { icon: <Cpu size={28} color="var(--accent)" strokeWidth={1.5}/>, label: "MIT Routing Algorithm", meta: "5,139+ NOP cases trained" },
  { icon: <Heart size={28} color="var(--accent)" strokeWidth={1.5}/>, label: "3 FDA-Approved Systems", meta: "Heart · Lung · Liver" },
  { icon: <Globe size={28} color="var(--accent)" strokeWidth={1.5}/>, label: "OPTN Integration", meta: "Decision EOY 2026" },
];

export default function Business() {
  return (
    <section id="business">
      <div className="container">
        <FadeUp><div className="section-label">Not a Device Company</div></FadeUp>
        <FadeUp delay={0.05}><div className="section-title">An Infrastructure Platform.</div></FadeUp>
        <FadeUp delay={0.1}>
          <div className="section-subtitle">The only vertically integrated organ transplant network — with assets no competitor can replicate in under a decade.</div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="infra-grid">
            {infraItems.map(item => (
              <div className="card infra-card" key={item.label}>
                <div className="infra-icon">{item.icon}</div>
                <div className="infra-label">{item.label}</div>
                <div className="infra-meta">{item.meta}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{ background:"var(--accent-dim)", border:"1px solid var(--accent)", borderRadius:8, padding:"12px 18px", marginBottom:32, fontSize:13, lineHeight:1.5 }}>
            <strong style={{ color:"var(--accent)" }}>Revenue Model:</strong>{" "}
            <span style={{ color:"var(--text-muted)" }}>
              High-switching-cost, case-triggered revenue — not subscription-based recurring. Average ~<strong>$118K per NOP case</strong> (product + logistics). Each procedure requires a new organ event; switching cost is <em>operational</em> (embedded surgeons, trained workflows, 4-year NOP relationships), not contractual.
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:8, padding:"12px 18px", marginBottom:20, fontSize:13, lineHeight:1.6 }}>
            <strong style={{ color:"var(--accent)" }}>Volume-Price Elasticity:</strong>{" "}
            <span style={{ color:"var(--text-muted)" }}>
              ~70% of TMDX cases are reimbursed by CMS/Medicaid at fixed NOP rates — not hospital-discretionary. The remaining ~30% private-pay centers have shown zero OCS volume reductions in 4 years of NOP operation. OCS adoption is driven by superior patient outcomes (98% vs 20% utilization), not cost savings — making demand structurally inelastic to pricing pressure.
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="chart-wrapper">
            <h3>OCS vs. Cold Storage Utilization Rate</h3>
            <div className="chart-canvas-container">
              <UtilizationChart />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="impact-line">
            <span className="negative">WITHOUT TMDX: -1% national transplant volumes</span>
            <span className="sep">·</span>
            <span className="positive">WITH TMDX: +25%</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="nrp-box">
            <h3>THE SHORT ARGUMENT THE BEARS GOT WRONG</h3>
            <div className="nrp-columns">
              <div className="nrp-col">
                <h4>NRP (DBD Donors)</h4>
                <p>Normothermic Regional Perfusion — a surgical technique for <strong style={{ color:"var(--text)" }}>donation after brain death</strong>. No device required.</p>
              </div>
              <div className="nrp-col">
                <h4>OCS (DCD Donors)</h4>
                <p>TransMedics OCS — a proprietary device for <strong style={{ color:"var(--text)" }}>donation after circulatory death</strong>. Different population entirely.</p>
              </div>
            </div>
            <p className="nrp-proof">Proof: OCS liver market share <span className="font-mono text-accent">GREW from 26% → 36%</span> despite NRP growth across the same period.</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.45}>
          <div className="replication-box">
            <h3>Replication Barrier</h3>
            <div className="replication-items">
              {[
                ["Aircraft Fleet (22 jets)", "$150–200M · 18-24 months"],
                ["Multi-Organ Clinical Trials", "$150–300M · 3-5 years"],
                ["Transplant Center Relationships", "Not purchasable · 4+ years"],
                ["MIT Routing Algorithm", "Not purchasable · requires cases"],
                ["Total: Competitive Parity", "$500M+ · 2030 earliest"],
              ].map(([label, val]) => (
                <div className="replication-item" key={label}>
                  <span>{label}</span><span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="chart-wrapper" style={{ marginTop:32 }}>
            <h3>Competitive Landscape — The Moat Is Visual</h3>
            <p className="comp-section-intro">
              Head-to-head across the organ care platform market. TMDX is the only player with full-organ + full-logistics vertical integration. <em>Sources: PitchBook Essentials (XVIVO funding/valuation, pulled April 2026), company SEC filings, FDA device database, Perplexity Computer research.</em>
            </p>
            <div className="comp-table-wrapper">
              <table className="comp-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th className="tmdx-head">TMDX</th>
                    <th>XVIVO <span style={{ fontWeight:400, fontSize:9, textTransform:"none" }}>(Sweden, public)</span></th>
                    <th>OrganOx <span style={{ fontWeight:400, fontSize:9, textTransform:"none" }}>(UK, private)</span></th>
                    <th>Paragonix <span style={{ fontWeight:400, fontSize:9, textTransform:"none" }}>(US, private)</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Organs covered</td><td className="tmdx-col">Heart + Lung + Liver</td><td className="comp-limited">Lung (EU) · Heart in trial</td><td className="comp-limited">Liver only</td><td className="comp-limited">Heart cold box only</td></tr>
                  <tr><td>Technology type</td><td className="tmdx-col">Normothermic (NMP) — organ stays alive, beating/breathing in transit</td><td>Normothermic (lung/heart)</td><td>Normothermic (liver only)</td><td className="comp-none">Static cold storage</td></tr>
                  <tr><td>Aviation fleet</td><td className="tmdx-col">22 jets owned &amp; operated</td><td className="comp-none">None</td><td className="comp-none">None</td><td className="comp-none">None</td></tr>
                  <tr><td>Embedded surgeon network</td><td className="tmdx-col">50+ employed surgeons</td><td className="comp-none">None</td><td className="comp-none">None</td><td className="comp-none">None</td></tr>
                  <tr><td>US FDA approvals</td><td className="tmdx-col">All 3 organs (Heart, Lung, Liver)</td><td className="comp-none">None (US)</td><td className="comp-none">None (US)</td><td className="comp-limited">Heart only (EHB)</td></tr>
                  <tr><td>Revenue (latest)</td><td className="tmdx-col">$605M FY2025 (+37% YoY)</td><td>~$180M TTM (SEK 1.9B)</td><td className="comp-none">Private / undisclosed</td><td className="comp-none">Private / undisclosed</td></tr>
                  <tr><td>Valuation / market cap</td><td className="tmdx-col">$3.6B (NYSE: TMDX)</td><td>~$800M est. <span style={{ fontSize:11, fontStyle:"italic" }}>(PitchBook 2023)</span></td><td className="comp-none">~$250–500M est.</td><td className="comp-none">~$100–200M est.</td></tr>
                  <tr><td>US liver market share</td><td className="tmdx-col">36% (grew from 26% at NOP launch)</td><td className="comp-none">&lt;1%</td><td className="comp-none">&lt;1%</td><td className="comp-none">N/A (cold storage)</td></tr>
                  <tr><td>OPTN federal integration</td><td className="tmdx-col">Pursuing — decision EOY 2026</td><td className="comp-none">None</td><td className="comp-none">None</td><td className="comp-none">None</td></tr>
                  <tr><td>Cost to replicate</td><td className="tmdx-col">$500M+ · 2030 earliest</td><td className="comp-limited">In market (limited scope)</td><td className="comp-limited">In market (liver only)</td><td className="comp-limited">In market (no NMP)</td></tr>
                </tbody>
              </table>
            </div>
            <p className="comp-footnote">
              TMDX is not a product comparison. It is a moat comparison. The only company with full-organ + full-logistics vertical integration covering all three transplantable organs with national scale. Revenue gap vs. XVIVO: <strong>3.4×</strong>. TMDX has 3.4× the revenue (current TTM) at 4.5× the valuation — with a regulatory and infrastructure lead no competitor can close before 2030.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
