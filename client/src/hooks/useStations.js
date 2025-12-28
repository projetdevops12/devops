import { useContext } from "react";
import { StationContext } from "../context/StationContext.js";

export function useStations() {
    return useContext(StationContext);
}
