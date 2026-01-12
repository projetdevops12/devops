import { pool } from "../config/db.js";

export async function getErrorsSchaefer() {
    const query = `
        SELECT id_error, rce, code, message, description, localisation, date, conveyor, hour
        FROM t_error_schaefer
        ORDER BY date DESC, hour DESC
        LIMIT 5
    `;

    const result = await pool.query(query);
    return result.rows;
}
