import React from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-6 bg-green-700 text-white">
      <h1 className="text-2xl font-semibold">MealMatrix Dashboard</h1>
      <button
        onClick={() => navigate("/upload")}
        className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition"
      >
        Upload New Meal
      </button>
    </div>
  );
}