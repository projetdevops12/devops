// src/controllers/stationDetails.controller.js
import { fetchStationDetails } from "../services/stationDetails.service.js";

export async function getStationDetailsController(req, res) {
    try {
        const { id } = req.params;
        const data = await fetchStationDetails(id);

        if (!data) return res.status(404).json({ error: "Station introuvable" });

        res.json(data);
    } catch (err) {
        console.error("Erreur getStationDetails :", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}
