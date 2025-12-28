import express from "express";
import { getStations } from "../controllers/station.controller.js";

const router = express.Router();

router.get("/", getStations);

export default router;
