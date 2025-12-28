import { pool } from "../config/db.js";

export async function getAllMachines() {
    const result = await pool.query("SELECT id_machine, name FROM t_machines");
    return result.rows;
}
