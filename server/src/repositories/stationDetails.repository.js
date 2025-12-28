// src/repositories/stationDetails.repository.js
import { pool } from "../config/db.js";

export async function getStationDetails(id_station) {
    const stationQuery = `
        SELECT s.id_station, s.name, s.target, s.id_workstation_type, t.name AS type_name
        FROM t_workstation s
        JOIN t_workstation_type t ON t.id_workstation_type = s.id_workstation_type
        WHERE s.id_station = $1
    `;
    const stationResult = await pool.query(stationQuery, [id_station]);
    const station = stationResult.rows[0];

    if (!station) {
        return { station: null, articles: [] };
    }

    let articlesQuery = "";

    if (station.id_workstation_type === 1) {
        // loading → entrants
        articlesQuery = `
            SELECT id_induct AS id, id_pouch, id_article, date, hour
            FROM t_induct
            WHERE id_workstation = $1
            ORDER BY date DESC, hour DESC
            LIMIT 1400
        `;
    } else {
        // unloading → sortants
        articlesQuery = `
            SELECT id_packout AS id, id_pouch, date, hour
            FROM t_packout_station
            WHERE id_workstation = $1
            ORDER BY date DESC, hour DESC
            LIMIT 1400
        `;
    }

    const articlesResult = await pool.query(articlesQuery, [id_station]);

    return {
        station,
        articles: articlesResult.rows
    };
}
