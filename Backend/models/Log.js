import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  userId: String,
  mealId: String,
  quantity: Number,
  time: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Log", logSchema);
