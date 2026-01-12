// src/pages/Home.jsx
import React, { useState } from "react";
import { MachineList } from "../components/MachineList.jsx";
import { StationList } from "../components/StationList.jsx";
import { StationDetailsPanel } from "../components/StationDetailsPanel.jsx";
import { ErrorSchaeferPanel } from "../components/ErrorSchaeferPanel.jsx";
import { ErrorSchaeferButton } from "../components/ErrorSchaeferButton.jsx";

export function Home() {
    const [showErrors, setShowErrors] = useState(false);

    return (
        <div className="container-fluid py-4">

            <h1 className="fw-bold text-center mb-4">DuMoulin</h1>

            <MachineList />

            <div className="row mt-5">

                {/* Colonne gauche */}
                <div className="col-3 border-end">
                    <StationList />

                    {/* Bouton stylé comme une station */}
                    <ErrorSchaeferButton onClick={() => setShowErrors(true)} />
                </div>

                {/* Colonne droite */}
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
