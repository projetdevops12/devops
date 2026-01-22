// src/components/StationList.jsx
import React from "react";
import { useStations } from "../hooks/useStations.js";
import { useStationDetails } from "../hooks/useStationDetails.js";

export function StationList({ machineId }) {
    const { stations } = useStations();
    const { loadStationDetails } = useStationDetails();

    // Rien sélectionné → on ne montre pas les stations
    if (!machineId) {
        return <p className="loading-text">Sélectionnez une machine</p>;
    }

    if (!stations.length) {
        return <p className="loading-text">Chargement...</p>;
    }

    // Pas de filtrage → on affiche toutes les stations
    return (
        <div className="station-list">
            {stations.map((station) => (
                <div key={station.id_station} className="station-card">
                    <span className="station-name">{station.name}</span>

                    <button
                        className="station-btn"
                        onClick={() => loadStationDetails(station.id_station)}
                    >
                        Visualiser
                    </button>
                </div>
            ))}
        </div>
    );
}
