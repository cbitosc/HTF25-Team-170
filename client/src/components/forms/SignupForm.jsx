import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/authService';
import InputField from './InputField';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    setError('');

    try {
      const data = await signup(name, email, password);
      localStorage.setItem('token', data.token);
      navigate('/quiz');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border-4 border-[#3E5F44] rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Signup to begin your journey!
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Green background box */}
        <div className="bg-[#CBF3BB] rounded-lg p-6 mb-6 space-y-4">
          <InputField
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={setName}
            required
          />

          <InputField
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={setEmail}
            required
          />

          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            required
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#3E5F44] text-white py-3 rounded-lg font-semibold hover:bg-[#2d4633] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating account...' : 'SignUp and take quiz'}
        </button>
      </form>

      {/* Login link */}
      <p className="text-center mt-6 text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-[#3E5F44] font-semibold hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}