import React from "react";
import { useMachine } from "../hooks/useMachine.js";

export function MachineList() {
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
        <span className="machine-badge">
              {machine[0].name}
        </span>

    );
}
