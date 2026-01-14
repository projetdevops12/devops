import { getErrorsSchaefer } from "../repositories/errorSchaefer.repository.js";

export async function fetchErrorsSchaefer(req, res) {
    try {
        const errors = await getErrorsSchaefer();
        res.json(errors); //
    } catch (err) {
        console.error("Erreur API Schaefer:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}
