import React, { useEffect, useState } from "react";
import { StationContext } from "./StationContext.js";
import { fetchStations } from "../api/station.api.js";

export function StationProvider({ children }) {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        fetchStations().then(setStations);
    }, []);

    return (
        <StationContext.Provider value={{ stations }}>
            {children}
        </StationContext.Provider>
    );
}
