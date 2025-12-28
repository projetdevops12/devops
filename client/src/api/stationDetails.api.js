// src/api/stationDetails.api.js
export async function fetchStationDetails(id_station) {
    const res = await fetch(`http://localhost:5000/api/station-details/${id_station}`);
    return res.json();
}
