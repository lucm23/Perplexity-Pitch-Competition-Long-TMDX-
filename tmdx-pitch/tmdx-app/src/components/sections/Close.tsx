import FadeUp from "@/components/ui/FadeUp";

const threads = [
  { href:"https://www.perplexity.ai/computer/tasks/perplexity-pitch-competition-ORV7.fXtQaqwoNaxjTLsYw?view=thread#70", label:"Perplexity Pitch Competition — Omega Framework Build", desc:"Stages 1–6 · debate · DCF" },
  { href:"https://www.perplexity.ai/computer/tasks/tmdx-investment-thesis-documen-BUAPb7glQ66HM7hc6x_kQg?view=thread", label:"TMDX Investment Thesis — Deep Due Diligence", desc:"36-step DDT · forensics · OPTN" },
  { href:"https://www.perplexity.ai/computer/tasks/ai-market-analysis-prompt-desi-Qj5Uw_RpSrC3mZGp6m3jXg?view=thread", label:"AI Market Analysis — Prompt Design & Methodology", desc:"Direction-neutral · adversarial design" },
  { href:"https://www.perplexity.ai/computer/tasks/ai-video-and-html-embed-for-tm-1X6aNXVyTtqfIp9kPShVSQ?view=thread#1", label:"AI Video & HTML Embed — Pitch Asset Production", desc:"TTS narration · video gen · embed" },
];

export default function Close() {
  return (
    <section className="close-section" id="close">
      <div className="container">
        <FadeUp>
          <div className="close-statement">
            At <span className="font-mono">$100.69</span>, you&apos;re paying for the liver business.<br/>
            The heart expansion, kidney platform, European NOP,<br/>
            OPTN federal integration, and a <span style={{ color:"var(--gold)" }}>$15-20M oil normalization tailwind</span> are all <em>free</em>.
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="summary-box">
            <span className="direction">LONG TMDX</span>
            <span className="divider">|</span>
            <span>Entry <span className="font-mono">$100.69</span></span>
            <span className="divider">|</span>
            <span>Near-Term <span className="font-mono text-bull">$130</span> <span style={{ fontSize:12 }}>(+29%)</span></span>
            <span className="divider">|</span>
            <span>Bull <span className="font-mono text-accent">$155</span> <span style={{ fontSize:12 }}>(+54%)</span></span>
            <span className="divider">|</span>
            <span>Stop <span className="font-mono text-bear">$85</span> <span style={{ fontSize:12 }}>(-16%)</span></span>
            <span className="divider">|</span>
            <span>R/R <span className="font-mono text-accent">3.6:1</span></span>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="skin-statement">After completing this research using Perplexity Computer, I was personally convinced enough to take a position in TMDX. This is my actual investment view — not a theoretical exercise.</p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="disclaimer">Not financial advice. For educational and competition purposes only.</p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div style={{ maxWidth:680, margin:"0 auto 28px", border:"1px solid var(--border)", borderRadius:"var(--radius-sm)", overflow:"hidden" }}>
            <div style={{ padding:"8px 14px", background:"var(--surface-elevated)", borderBottom:"1px solid var(--border)", display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:9, fontFamily:"var(--font-mono)", fontWeight:700, color:"var(--accent)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Research Thread Evidence</span>
              <span style={{ fontSize:10, color:"var(--text-faint)", fontFamily:"var(--font-mono)" }}>4 threads · submitted as Computer usage evidence</span>
            </div>
            <div style={{ display:"flex", flexDirection:"column" }}>
              {threads.map((t, i) => (
                <a
                  key={t.href}
                  href={t.href}
                  target="_blank"
                  rel="noopener"
                  style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 14px", textDecoration:"none", borderBottom: i < threads.length - 1 ? "1px solid var(--border)" : "none", transition:"background 0.15s" }}
                  onMouseOver={e => (e.currentTarget.style.background = "var(--accent-dim)")}
                  onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="2.5" style={{ flexShrink:0 }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  <span style={{ fontSize:12, color:"var(--text)", fontWeight:600, flex:1 }}>{t.label}</span>
                  <span style={{ fontSize:10, fontFamily:"var(--font-mono)", color:"var(--text-faint)" }}>{t.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="footer">Built with Perplexity Computer · Omega Framework · By Luc Mwizerwa · April 2026</div>
        </FadeUp>
      </div>
    </section>
  );
}
