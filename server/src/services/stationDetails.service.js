import { getStationDetails } from "../repositories/stationDetails.repository.js";

export async function fetchStationDetails(id_station) {
    return await getStationDetails(id_station);
}
