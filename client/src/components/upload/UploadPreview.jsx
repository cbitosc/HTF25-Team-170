import React from "react";

export default function UploadPreview({ image }) {
  return (
    <img
      src={image}
      alt="Preview"
      className="w-32 h-32 object-cover rounded-xl border border-green-300"
    />
  );
}