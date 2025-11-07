import express from "express";
import { savePreferences } from "../controllers/userController.js";

const router = express.Router();

router.post("/preferences", savePreferences);

export default router;
