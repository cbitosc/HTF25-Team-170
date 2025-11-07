import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/meals/user123")
      .then((res) => setMeals(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Meal History</h2>
      <p className="mb-4 text-gray-600">Total Calories Today: {totalCalories} kcal</p>

      <ul className="space-y-3">
        {meals.map((meal, index) => (
          <li key={index} className="bg-white p-4 shadow rounded-lg flex justify-between">
            <span>{meal.food_name}</span>
            <span>{meal.calories} kcal</span>
          </li>
        ))}
      </ul>
    </div>
  );
}