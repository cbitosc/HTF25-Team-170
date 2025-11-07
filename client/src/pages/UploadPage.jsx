import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadMealImage } from "../services/userService";
import UploadMeal from "../components/upload/UploadMeal";
import UploadPreview from "../components/upload/UploadPreview";

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (file) => {
    setSelectedImage(file);
    setPreviewURL(URL.createObjectURL(file));
    setResult(null);
  };

  const handleUpload = async () => {
    if (!selectedImage) return alert("Please upload an image first!");

    setLoading(true);
    try {
      const data = await uploadMealImage(selectedImage);
      setResult(data);
    } catch (error) {
      alert("Error analyzing the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-10 py-4 border-b border-green-200">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/upload")}>
          <img src="/src/assets/logo.png" alt="MealMatrix Logo" className="w-44 h-auto" />
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="border border-green-400 px-4 py-2 rounded-lg hover:bg-green-100 transition"
        >
          Dashboard
        </button>
      </div>

      {/* Upload Section */}
      <div className="w-full max-w-3xl p-8 mt-8 border-t-4 border-green-500 shadow-md rounded-xl">
        <div className="flex justify-between mb-4">
          <p className="text-lg font-medium">
            Result:{" "}
            <span className="text-green-700">
              {result
                ? `${result.food_name} (${result.calories} kcal)`
                : "*Data from Backend*"}
            </span>
          </p>

          {previewURL && <UploadPreview image={previewURL} />}
        </div>

        <UploadMeal onFileChange={handleFileChange} />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Image"}
        </button>
      </div>
    </div>
  );
}