// src/routes/stationDetails.routes.js
import express from "express";
import { getStationDetailsController } from "../controllers/stationDetails.controller.js";

const router = express.Router();

router.get("/:id", getStationDetailsController);

export default router;
