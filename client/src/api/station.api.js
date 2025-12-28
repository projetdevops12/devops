export async function fetchStations() {
    const res = await fetch("http://localhost:5000/api/stations");
    return res.json();
}
