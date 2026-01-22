// src/pages/Home.jsx
import React, { useState } from "react";
import logo from "../assets/standaard logo.png";
import { MachineList } from "../components/MachineList.jsx";
import { StationList } from "../components/StationList.jsx";
import { StationDetailsPanel } from "../components/StationDetailsPanel.jsx";
import { ErrorSchaeferPanel } from "../components/ErrorSchaeferPanel.jsx";
import { ErrorSchaeferButton } from "../components/ErrorSchaeferButton.jsx";

export function Home() {
    const [showErrors, setShowErrors] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`container-fluid py-4 ${darkMode ? "dark-mode" : ""}`}>

            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-start mb-4">

                {/* Logo + Select */}
                <div>
                    <img
                        src={logo}
                        alt="DuMoulin"
                        style={{ maxWidth: "180px" }}
                        className="mb-3"
                    />

                    <MachineList
                        selectedMachine={selectedMachine}
                        onSelectMachine={setSelectedMachine}
                    />
                </div>

                {/* Bouton lune */}
                <button
                    className="theme-toggle-btn"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    🌙
                </button>
            </div>

            {/* CONTENU */}
            <div className="row mt-4">
                <div className="col-3 border-end">
                    <StationList machineId={selectedMachine} />
                    <ErrorSchaeferButton onClick={() => setShowErrors(true)} />
                </div>

                <div className="col-9">
                    {showErrors ? (
                        <ErrorSchaeferPanel onBack={() => setShowErrors(false)} />
                    ) : (
                        <StationDetailsPanel />
                    )}
                </div>
            </div>
        </div>
    );
}
