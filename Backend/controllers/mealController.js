import axios from "axios";
import Meal from "../models/Meal.js";
import fs from "fs";

export const detectMeal = async (req, res) => {
  try {
    const image = req.file;
    if (!image) return res.status(400).json({ message: "No image uploaded" });

    // call fake AI (mock for now)
    const detectedFood = "Pasta"; // Replace later with real AI
    const calories = 350;

    const meal = await Meal.create({
      name: detectedFood,
      calories,
      imageUrl: image.path,
    });

    res.json({ message: "Meal detected", meal });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
