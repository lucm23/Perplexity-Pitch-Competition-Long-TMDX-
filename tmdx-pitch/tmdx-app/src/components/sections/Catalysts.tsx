"use client";
import FadeUp from "@/components/ui/FadeUp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  { date: "May 7, 2026", title: "Q1 Earnings", text: "EPS -76% vs Q4. Seasonal. Guided. Beat = squeeze trigger." },
  { date: "H1 2026", title: "Italy NOP", text: "First European revenue. Proof for $2B+ TAM." },
  { date: "H1 2026", title: "ENHANCE Update", text: "On-track = heart thesis reactivated." },
  { date: "Q3 2026", title: "Kidney Trial", text: "FDA protocol confirmation." },
  { date: "EOY 2026", title: "OPTN Decision", text: "Binary. Approved = federally integrated." },
  { date: "2027–2029", title: "Kidney FDA + Commercial", text: "$2B+ TAM begins." },
];

function TimelineDot({ delay }: { delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="timeline-dot"
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.4, ease: "backOut" }}
    />
  );
}

export default function Catalysts() {
  return (
    <section id="catalysts">
      <div className="container">
        <FadeUp><div className="section-label">Catalysts</div></FadeUp>
        <FadeUp delay={0.05}><div className="section-title">What Moves This Stock</div></FadeUp>

        <FadeUp delay={0.1}>
          <div className="timeline" id="timeline">
            <div className="timeline-line"/>
            <div className="timeline-events">
              {events.map((ev, i) => (
                <div className="timeline-event" key={ev.date + ev.title}>
                  <TimelineDot delay={i * 0.15} />
                  <div>
                    <div className="timeline-date">{ev.date}</div>
                    <div className="timeline-title">{ev.title}</div>
                    <div className="timeline-text">{ev.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="squeeze-box">
            <div className="big-nums">7.9M shares short · 9.2 days to cover</div>
            <p>Any positive catalyst = asymmetric upside amplifier.<br/>The short squeeze is a <strong>FREE OPTION</strong> on each catalyst above.</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
