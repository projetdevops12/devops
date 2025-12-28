import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "projetdevops",
    password: "myrooot123",
    port: 5432,
});
