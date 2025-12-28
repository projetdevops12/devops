import { getAllStations } from "../repositories/station.repository.js";

export async function fetchStations() {
    return await getAllStations();
}
