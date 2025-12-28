// src/pages/Home.jsx
import React from "react";
import { MachineList } from "../components/MachineList.jsx";
import { StationList } from "../components/StationList.jsx";
import { StationDetailsPanel } from "../components/StationDetailsPanel.jsx";

export function Home() {
    return (
        <div className="container-fluid py-4">

            <h1 className="fw-bold text-center mb-4">DuMoulin</h1>

            <MachineList />

            <div className="row mt-5">

                <div className="col-3 border-end">
                    <StationList />
                </div>

                <div className="col-9">
                    <StationDetailsPanel />
                </div>

            </div>
        </div>
    );
}
