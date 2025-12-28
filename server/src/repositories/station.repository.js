import { pool } from "../config/db.js";

export async function getAllStations() {
    const result = await pool.query(`
    SELECT id_station, name, target, id_workstation_type
    FROM t_workstation
    ORDER BY id_station
  `);
    return result.rows;
}
