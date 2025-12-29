// src/components/StationList.jsx
import React from "react";
import { useStations } from "../hooks/useStations.js";
import { useStationDetails } from "../hooks/useStationDetails.js";

export function StationList() {
    const { stations } = useStations();
    const { loadStationDetails } = useStationDetails();

    if (!stations.length) {
        return <p className="loading-text">Chargement...</p>;
    }

    return (
        <div className="station-list">
            {stations.map((station) => (
                <div key={station.id_station} className="station-card">
                    <span className="station-name">{station.name}</span>

                    <button
                        className="station-btn"
                        onClick={() => loadStationDetails(station.id_station)}
                    >
                        Visualisé
                    </button>
                </div>
            ))}
        </div>
    );
}
