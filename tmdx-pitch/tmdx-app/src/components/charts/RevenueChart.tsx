"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

export default function RevenueChart() {
  const labels = ["2021","2022","2023","2024","2025","2026E","2027E","2028E"];
  const data   = [30,93,242,442,605,737,875,1009];
  const colors = ["#00C9B1","#00C9B1","#00C9B1","#00C9B1","#00C9B1","#F0B429","#F0B429","#F0B429"];

  return (
    <>
      <div style={{ display:"flex", gap:16, justifyContent:"flex-end", marginBottom:8, fontSize:11, fontFamily:"var(--font-mono)" }}>
        <span style={{ display:"flex", alignItems:"center", gap:5, color:"var(--text-muted)" }}>
          <span style={{ display:"inline-block", width:10, height:10, background:"#00C9B1", borderRadius:2 }}/> Actual
        </span>
        <span style={{ display:"flex", alignItems:"center", gap:5, color:"var(--text-muted)" }}>
          <span style={{ display:"inline-block", width:10, height:10, background:"#F0B429", borderRadius:2 }}/> Estimate
        </span>
      </div>
      <Bar
        data={{ labels, datasets: [{ data, backgroundColor: colors, borderRadius: 4, maxBarThickness: 56 }] }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 1500, easing: "easeOutQuart" },
          layout: { padding: { top: 40, right: 8 } },
          scales: {
            y: { beginAtZero: true, grid: { color: "rgba(37,42,58,0.5)" }, ticks: { callback: (v) => "$"+v+"M", font: { family: "'JetBrains Mono',monospace", size: 11 } } },
            x: { grid: { display: false } },
          },
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx) => "$"+ctx.raw+"M" } },
            datalabels: {
              anchor: "end", align: "top",
              formatter: (v) => "$"+v+"M",
              color: (ctx) => ctx.dataIndex >= 5 ? "#F0B429" : "#00C9B1",
              font: { family: "'JetBrains Mono',monospace", size: 10, weight: "bold" as const },
              display: (ctx) => (ctx.dataset.data[ctx.dataIndex] as number) >= 93,
            },
          },
        }}
      />
    </>
  );
}
