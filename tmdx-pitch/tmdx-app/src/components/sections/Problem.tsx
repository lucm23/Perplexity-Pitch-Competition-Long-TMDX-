import FadeUp from "@/components/ui/FadeUp";

export default function Problem() {
  const stats = [
    { number: "105K+", desc: "people on the US organ transplant waitlist" },
    { number: "8,000+", desc: "kidneys discarded annually due to cold storage failure" },
    { number: "20", desc: "people die every day waiting for an organ" },
    { number: "-1%", desc: "national transplant volumes without TMDX (2022–2025)", accent: true },
  ];

  return (
    <section id="problem">
      <div className="container">
        <FadeUp><div className="section-label">The Broken System</div></FadeUp>
        <FadeUp delay={0.05}>
          <div className="section-title">105,000 people are waiting.<br/>8,000 organs are thrown away every year.</div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="stat-grid">
            {stats.map((s) => (
              <div className="card stat-card" key={s.number}>
                <div className="stat-number" style={s.accent ? { color: "var(--accent)" } : {}}>{s.number}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="content-para">
            Cold storage has a fatal limitation: organs degrade within hours. Surgeons routinely decline viable donors because transplant risk is too high. <strong>Thousands die waiting for organs that were thrown away.</strong>
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="content-para">TransMedics built the only solution on earth.</p>
        </FadeUp>
      </div>
    </section>
  );
}
