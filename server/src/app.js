import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import stationRoutes from "./routes/station.routes.js";
import machineRoutes from "./routes/machine.routes.js";
import stationDetailsRoutes from "./routes/stationDetails.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// API
app.use("/api/stations", stationRoutes);
app.use("/api/machines", machineRoutes);
app.use("/api/station-details", stationDetailsRoutes);

// __dirname ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Frontend en production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
}

export default app;
