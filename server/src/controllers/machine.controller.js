import { fetchMachines } from "../services/machine.service.js";


export async function getMachines(req, res) {
    try {
        const machines = await fetchMachines();
        res.json(machines);
    } catch (error) {
        console.error("Erreur getMachines :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
}

