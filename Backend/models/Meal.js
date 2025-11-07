import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  nutrients: Object,
  imageUrl: String,
});

export default mongoose.model("Meal", mealSchema);
