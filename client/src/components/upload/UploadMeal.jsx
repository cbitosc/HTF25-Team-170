import React from "react";
import { Upload } from "lucide-react";

export default function UploadMeal({ onFileChange }) {
  return (
    <label className="w-full flex flex-col items-center justify-center border-2 border-green-500 border-dashed rounded-xl py-8 cursor-pointer hover:bg-green-50 transition">
      <Upload className="w-8 h-8 text-green-600 mb-2" />
      <span className="text-green-700 text-lg font-medium">
        Upload the image of your meal here
      </span>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onFileChange(e.target.files[0])}
        className="hidden"
      />
    </label>
  );
}