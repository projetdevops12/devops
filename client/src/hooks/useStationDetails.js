// src/hooks/useStationDetails.js
import { useContext } from "react";
import { StationDetailsContext } from "../context/StationDetailsContext.js";

export function useStationDetails() {
    return useContext(StationDetailsContext);
}
