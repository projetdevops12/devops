import { fetchStations } from "../services/station.service.js";

export async function getStations(req, res) {
    try {
        const stations = await fetchStations();
        res.json(stations);
    } catch (err) {
        console.error("Erreur getStations :", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}
