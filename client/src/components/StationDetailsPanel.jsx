// src/components/StationDetailsPanel.jsx
import React from "react";
import { useStationDetails } from "../hooks/useStationDetails.js";
import { StationChart } from "./StationChart.jsx";
import { StationKPIs } from "./StationKPIs.jsx";

export function StationDetailsPanel() {
    const { details } = useStationDetails();

    if (!details || !details.station) {
        return (
            <div className="d-flex justify-content-center align-items-center h-100">
                <h2> </h2>
            </div>
        );
    }

    const { station, hourly, moyenne } = details;

    return (
        <div className="p-4 station-details-panel">
            <h2>{station.name}</h2>
            <p>Type : {station.type_name}</p>
            <p>Target : {station.target}</p>

            <h3 className="mt-4">Indicateurs clés</h3>
            <StationKPIs hourly={hourly} moyenne={moyenne} />

            <h3 className="mt-4">Activité (articles par heure)</h3>
            <StationChart hourly={hourly} moyenne={moyenne} />

            {/* TABLEAU TOTAL PAR HEURE (filtré) */}
            <h3 className="mt-4">Total des articles par heure</h3>

            <div className="table-responsive">
                <table className="error-table">
                    <thead>
                    <tr>
                        <th>Heure</th>
                        <th>Total articles</th>
                    </tr>
                    </thead>

                    <tbody>
                    {hourly
                        .filter(h => h.total > 0)   // <-- FILTRE ICI
                        .map(h => (
                            <tr key={h.hour}>
                                <td>{Number(h.hour)- 1 }h - {Number(h.hour)}h</td>
                                <td>{h.total}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
