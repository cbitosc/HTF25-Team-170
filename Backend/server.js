import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mealRoutes from "./routes/mealRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("FoodVision API running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/meal", mealRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
