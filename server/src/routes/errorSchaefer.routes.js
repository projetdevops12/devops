import express from "express";
import { fetchErrorsSchaefer } from "../controllers/errorSchaefer.controller.js";

const router = express.Router();

router.get("/", fetchErrorsSchaefer);

export default router;
