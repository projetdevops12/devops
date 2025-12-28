import React from "react";

export function StationKPIs({ articles }) {
    if (!articles || articles.length === 0) {
        return <p>Aucune donnée disponible</p>;
    }

    // Regrouper par heure
    const countsByHour = {};
    articles.forEach(a => {
        const hour = a.hour?.substring(0, 2) || "00";
        countsByHour[hour] = (countsByHour[hour] || 0) + 1;
    });

    const hours = Object.keys(countsByHour);
    const values = Object.values(countsByHour);

    const total = articles.length;
    const maxHour = hours[values.indexOf(Math.max(...values))];
    const avg = Math.round(total / hours.length);

    return (
        <div className="kpi-container">
            <div className="kpi-card">
                <h4>Total articles</h4>
                <p>{total}</p>
            </div>

            <div className="kpi-card">
                <h4>Heure la plus active</h4>
                <p>{maxHour}h</p>
            </div>

            <div className="kpi-card">
                <h4>Moyenne / heure</h4>
                <p>{avg}</p>
            </div>
        </div>
    );
}
