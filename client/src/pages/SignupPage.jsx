import SignupForm from '../components/forms/SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-[#3E5F44] rounded"></div>
            <h1 className="text-3xl font-bold text-gray-800">MealMatrix</h1>
          </div>
        </div>

        {/* Signup Form */}
        <SignupForm />
      </div>
    </div>
  );
}