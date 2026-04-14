"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ChartDataLabels);

const fcfData   = [-58, -192, -81, 134, 81, 164];
const fcfLabels = ["2022","2023","2024","2025","2026E","2027E"];

export default function FCFChart() {
  return (
    <Line
      data={{
        labels: fcfLabels,
        datasets: [{
          data: fcfData,
          borderColor: "#00C9B1",
          segment: { borderColor: (ctx: any) => ctx.p0.parsed.y <= 0 && ctx.p1.parsed.y <= 0 ? "#F43F5E" : "#00C9B1" },
          fill: "origin",
          backgroundColor: "rgba(0,201,177,0.08)",
          tension: 0.3,
          pointRadius: (ctx: any) => ctx.dataIndex === 3 ? 8 : 6,
          pointBackgroundColor: (ctx: any) => (ctx.raw as number) < 0 ? "#F43F5E" : "#00C9B1",
          pointBorderColor: "transparent",
          borderWidth: 2.5,
        }],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1500, easing: "easeOutQuart" },
        layout: { padding: { top: 52, bottom: 16, left: 8, right: 8 } },
        scales: {
          y: {
            min: -250,
            grid: { color: "rgba(37,42,58,0.5)" },
            ticks: { callback: (v) => "$"+v+"M", font: { family: "'JetBrains Mono',monospace", size: 11 } },
          },
          x: { grid: { display: false } },
        },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => "$"+ctx.raw+"M" } },
          datalabels: {
            anchor: (ctx) => fcfData[ctx.dataIndex] >= 0 ? "end" : "start",
            align: (ctx) => fcfData[ctx.dataIndex] >= 0 ? "top" : "bottom",
            offset: (ctx) => ctx.dataIndex === 3 ? 4 : 6,
            clamp: true,
            formatter: (v) => (v > 0 ? "+" : "") + "$" + v + "M",
            color: (ctx) => fcfData[ctx.dataIndex] < 0 ? "#F43F5E" : "#00C9B1",
            font: (ctx) => ({ family: "'JetBrains Mono',monospace", size: 10, weight: ctx.dataIndex === 3 ? "700" : "500" }),
          },
        },
      }}
    />
  );
}
