import React from "react";

export function StationKPIs({ hourly, moyenne }) {
    if (!hourly || hourly.length === 0) {
        return <p>Aucune donnée disponible</p>;
    }

    const total = hourly.reduce((sum, h) => sum + Number(h.total), 0);

    const maxEntry = hourly.reduce((max, h) =>
        Number(h.total) > Number(max.total) ? h : max
    );

    return (
        <div className="kpi-container">
            <div className="kpi-card">
                <h4>Total articles</h4>
                <p>{total}</p>
            </div>

            <div className="kpi-card">
                <h4>Heure la plus active</h4>
                <p>{maxEntry.hour}h</p>
            </div>

            <div className="kpi-card">
                <h4>Moyenne / heure</h4>
                <p>{Math.round(moyenne)}</p>
            </div>
        </div>
    );
}
