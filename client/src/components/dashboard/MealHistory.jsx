
import React from "react";

export default function MealHistory() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-lg font-semibold text-green-700">Meal History</h3>
      <ul className="mt-3 text-gray-600">
        <li> Pizza - 266 kcal</li>
        <li> Salad - 152 kcal</li>
      </ul>
    </div>
  );
}