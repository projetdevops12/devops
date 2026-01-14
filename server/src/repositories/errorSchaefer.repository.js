// src/repositories/errorsSchaefer.repository.js
import { pool } from "../config/db.js";

export async function getErrorsSchaefer() {

    // 1. Récupérer le dernier jour présent dans la table
    const lastDateQuery = `
        SELECT MAX(date) AS last_date
        FROM t_error_schaefer
    `;
    const lastDateResult = await pool.query(lastDateQuery);
    const lastDate = lastDateResult.rows[0]?.last_date;

    if (!lastDate) {
        return { date: null, errors: [] };
    }

    // 2. Récupérer toutes les erreurs de ce jour-là
    const errorsQuery = `
        SELECT id_error, rce, code, message, description, localisation, date, conveyor, hour
        FROM t_error_schaefer
        WHERE date = $1
        ORDER BY hour ASC
    `;

    const result = await pool.query(errorsQuery, [lastDate]);

    return {
        date: lastDate,
        errors: result.rows
    };
}
