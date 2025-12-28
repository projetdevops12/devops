// src/context/StationDetailsProvider.jsx
import React, { useState } from "react";
import { StationDetailsContext } from "./StationDetailsContext.js";
import { fetchStationDetails } from "../api/stationDetails.api.js";

export function StationDetailsProvider({ children }) {
    const [details, setDetails] = useState(null);

    const loadStationDetails = async (id_station) => {
        const data = await fetchStationDetails(id_station);
        setDetails(data);
    };

    return (
        <StationDetailsContext.Provider value={{ details, loadStationDetails }}>
            {children}
        </StationDetailsContext.Provider>
    );
}
