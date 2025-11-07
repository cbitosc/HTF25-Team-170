import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import InputField from './InputField';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border-4 border-[#3E5F44] rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Welcome back!
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Green background box */}
        <div className="bg-[#CBF3BB] rounded-lg p-6 mb-6 space-y-4">
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
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#3E5F44] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#2d4633] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>

      {/* Signup link */}
      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{' '}
        <a href="/signup" className="text-[#3E5F44] font-semibold hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
}