import express from "express";
import {getMachines} from "../controllers/machine.controller.js";

const router = express.Router();

router.get("/", getMachines); // renvoie UNE seule machine

export default router;
