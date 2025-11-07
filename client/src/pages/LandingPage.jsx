import React from "react";
import { Link } from "react-router-dom";  // ← ADD THIS IMPORT
import logo from "../assets/images/logo.png";
import meal1 from "../assets/images/carb.jpg";
import meal2 from "../assets/images/protein.jpg";
import meal3 from "../assets/images/carb.jpg";
import meal4 from "../assets/images/protein.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-[#3E5F44]">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-8 py-4 bg-[#CBF3BB] shadow-md">
        <div className="flex items-center gap-2">
          <img src={logo} alt="MealMatrix Logo" className="h-8 w-8" />
          <h1 className="font-bold text-xl text-[#3E5F44]">MealMatrix</h1>
        </div>
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg border border-[#3E5F44] text-[#3E5F44] hover:bg-[#3E5F44] hover:text-white transition"
          >
            SignUp
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-[#3E5F44] text-white hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mt-10 px-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
        <p className="text-base leading-relaxed mb-4">
          MealMatrix helps you track your daily calorie intake and meet your healthy lifestyle goals. 
          Just take a picture of your meal and upload it to know if you're eating healthy or not.
          <br />
          <br />
          If you're new here, click on SignUp and take the quiz to get started!
          <br />
          <br />
          <strong>Here's to a healthy lifestyle!</strong>
        </p>

        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          {[meal1, meal2, meal3, meal4].map((meal, index) => (
            <img
              key={index}
              src={meal}
              alt={`Meal ${index + 1}`}
              className="w-36 h-36 rounded-lg object-cover shadow-md border-4 border-[#3E5F44]"
            />
          ))}
        </div>

        {/* Get Started Button - MOVED INSIDE */}
        <Link 
          to="/signup"
          className="mt-8 bg-[#3E5F44] text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-[#2d4633] transition"
        >
          Get Started
        </Link>
      </main>

      {/* Why Calorie Tracking */}
      <section className="mt-10 bg-[#CBF3BB] p-6 rounded-lg shadow-md max-w-3xl">
        <h3 className="text-2xl font-semibold mb-3">Why Calorie tracking?</h3>
        <p className="text-sm leading-relaxed">
          Calorie tracking helps people understand their eating habits and maintain a healthy energy balance. 
          It supports weight management—whether for loss, gain, or maintenance.
          <br /><br />
          It also ensures adequate nutrition and prevents overeating or under-eating and raises awareness of portion sizes and food quality.
          Ultimately, it empowers better, more informed health decisions for everyone.
        </p>
      </section>

      {/* About Us */}
      <section className="mt-6 bg-[#CBF3BB] p-6 rounded-lg shadow-md max-w-3xl mb-10">
        <h3 className="text-2xl font-semibold mb-3">About Us</h3>
        <p className="text-sm leading-relaxed">
          MealMatrix is a computer vision-based web application that simplifies calorie tracking and meal logging. 
          Users can upload or capture images of their meals, and the system automatically detects the food items using a pretrained image recognition model. 
          It estimates the calorie content and provides nutritional information based on reliable datasets or APIs.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-4 border-t text-sm text-[#3E5F44]">
        <p className="font-semibold">
          TEAM 170: Kafia Kauser &nbsp;|&nbsp; Akhia Baseer &nbsp;|&nbsp; Madiyah Numa &nbsp;|&nbsp; Samiya Anam
        </p>
        <p className="text-xs mt-2">© MealMatrix</p>
      </footer>
    </div>
  );
};

export default LandingPage;