// src/components/MachineList.jsx
import React from "react";
import { useMachine } from "../hooks/useMachine.js";

export function MachineList({ selectedMachine, onSelectMachine }) {
    const { machine } = useMachine();

    if (!machine) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary"></div>
                <p className="mt-3 text-muted">Chargement...</p>
            </div>
        );
    }

    return (
        <div className="text-center mb-4">
            <select
                className="form-select w-auto d-inline-block machine-select"
                value={selectedMachine || ""}
                onChange={(e) => onSelectMachine(e.target.value)}
            >
                <option value="">Sélectionnez une machine</option>

                {machine.map((m) => (
                    <option key={m.id_machine} value={m.id_machine}>
                        {m.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
