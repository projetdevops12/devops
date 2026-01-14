import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export function StationChart({ hourly, moyenne }) {

    const labels = Array.from({ length: 24 }, (_, i) =>
        i.toString().padStart(2, "0")
    );

    const values = labels.map(h => {
        const found = hourly.find(x => x.hour === h);
        return found ? Number(found.total) : 0;
    });

    const data = {
        labels,
        datasets: [
            {
                label: "Articles par heure",
                data: values,
                borderColor: "#4dd0ff",
                backgroundColor: "rgba(77, 208, 255, 0.3)",
                tension: 0.3,
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: "#4dd0ff"
            },
            {
                label: "Moyenne journalière",
                data: Array(24).fill(moyenne),
                borderColor: "#ffcc00",
                borderDash: [5, 5],
                borderWidth: 2,
                pointRadius: 0
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { labels: { color: "#4dd0ff" } }
        },
        scales: {
            x: { ticks: { color: "#4dd0ff" } },
            y: { ticks: { color: "#4dd0ff" } }
        }
    };

    return <Line data={data} options={options} />;
}
