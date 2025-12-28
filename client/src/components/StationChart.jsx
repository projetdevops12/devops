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

export function StationChart({ articles }) {
    const countsByHour = {};

    articles.forEach(a => {
        const hour = a.hour?.substring(0, 2) || "00";
        countsByHour[hour] = (countsByHour[hour] || 0) + 1;
    });

    const labels = Object.keys(countsByHour);
    const values = Object.values(countsByHour);

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
