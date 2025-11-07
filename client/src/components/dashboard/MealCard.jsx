import React from "react";

export default function MealCard() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold text-green-700">Today's Meals</h3>
      <p className="text-gray-600 mt-2">No meals logged yet.</p>
    </div>
  );
}