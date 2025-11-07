export default function InputField({ type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        {placeholder}
      </label>
      <input
        type={type}
        placeholder=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-[#3E5F44] focus:outline-none transition"
      />
    </div>
  );
}