import React, { useEffect, useState } from "react";
import { MachineContext } from "./MachineContext.js";
import { fetchMachine } from "../api/machine.api.js";

export function MachineProvider({ children }) {
    const [machine, setMachine] = useState(null);

    useEffect(() => {
        const loadMachine = async () => {
            try {
                const data = await fetchMachine();
                console.log("Machine reçue :", data);
                setMachine(data);
            } catch (err) {
                console.error("Erreur fetchMachine :", err);
            }
        };

        loadMachine();
    }, []);

    return (
        <MachineContext.Provider value={{ machine }}>
            {children}
        </MachineContext.Provider>
    );
}
