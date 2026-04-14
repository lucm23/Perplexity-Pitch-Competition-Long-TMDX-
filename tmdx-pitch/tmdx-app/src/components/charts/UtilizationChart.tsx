"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

export default function UtilizationChart() {
  const labels = ["OCS Liver", "Cold Storage\nDCD Liver", "OCS Heart", "Cold Storage\nDBD Heart", "OCS Lung", "Cold Storage\nLung"];
  const data = [98, 20, 97, 61, 96, 5];
  const colors = ["#00C9B1", "#2A2F3E", "#00C9B1", "#2A2F3E", "#00C9B1", "#2A2F3E"];

  return (
    <Bar
      data={{ labels, datasets: [{ data, backgroundColor: colors, borderRadius: 4, maxBarThickness: 48 }] }}
      options={{
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1500, easing: "easeOutQuart" },
        scales: {
          x: { max: 100, grid: { color: "rgba(37,42,58,0.5)" }, ticks: { callback: (v) => v + "%", font: { family: "'JetBrains Mono',monospace", size: 11 } } },
          y: { grid: { display: false }, ticks: { font: { size: 11, family: "'Satoshi',sans-serif" } } },
        },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => ctx.raw + "% utilization rate" } },
          datalabels: { anchor: "end", align: "end", formatter: (v) => v + "%", color: "#8892A4", font: { family: "'JetBrains Mono',monospace", size: 11, weight: "600" } },
        },
      }}
    />
  );
}
