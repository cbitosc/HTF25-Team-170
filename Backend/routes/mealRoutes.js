import express from "express";
import multer from "multer";
import { detectMeal } from "../controllers/mealController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("image"), detectMeal);

export default router;
