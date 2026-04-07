import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation: Ensure passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Registering user:', formData);
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-6 pt-25 md:pt-40 pb-32">
      {/* Background Subtle Grid - Matches Login.jsx */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl italic text-heritage-brown mb-4">
            Create Account
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
            Join the Hilom community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-stone-500 ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 rounded-brand px-4 py-4 text-sm focus:outline-none focus:border-heritage-brown transition-colors placeholder:text-stone-300 shadow-sm"
              placeholder="Juan Dela Cruz"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-stone-500 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 rounded-brand px-4 py-4 text-sm focus:outline-none focus:border-heritage-brown transition-colors placeholder:text-stone-300 shadow-sm"
              placeholder="juan@example.com"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-stone-500 ml-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 rounded-brand px-4 py-4 text-sm focus:outline-none focus:border-heritage-brown transition-colors placeholder:text-stone-300 shadow-sm"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-stone-500 ml-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 rounded-brand px-4 py-4 text-sm focus:outline-none focus:border-heritage-brown transition-colors placeholder:text-stone-300 shadow-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-heritage-brown text-white text-[11px] uppercase tracking-[0.4em] py-5 rounded-brand hover:bg-stone-800 transition-all duration-500 shadow-md active:scale-[0.98] mt-4"
          >
            Register
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-stone-400 font-light tracking-wide">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[12px] text-heritage-brown italic font-serif hover:underline ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
