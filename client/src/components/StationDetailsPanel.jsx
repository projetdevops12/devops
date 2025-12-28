import React from "react";
import { useStationDetails } from "../hooks/useStationDetails.js";
import { StationChart } from "./StationChart.jsx";
import { StationKPIs } from "./StationKPIs.jsx";

export function StationDetailsPanel() {
    const { details } = useStationDetails();

    if (!details || !details.station) {
        return (
            <div className="d-flex justify-content-center align-items-center h-100">
                <h2>Bonjour</h2>
            </div>
        );
    }

    const { station, articles } = details;

    return (
        <div className="p-4 station-details-panel">
            <h2>{station.name}</h2>
            <p>Type : {station.type_name}</p>
            <p>Target : {station.target}</p>

            {/* KPIs */}
            <h3 className="mt-4">Indicateurs clés</h3>
            <StationKPIs articles={articles} />

            {/* Graphique */}
            <h3 className="mt-4">Activité (articles par heure)</h3>
            <StationChart articles={articles} />
        </div>
    );
}
