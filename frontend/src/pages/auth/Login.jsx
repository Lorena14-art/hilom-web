import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    console.log('--- Login Attempt ---');
    console.log('Normalized Email:', normalizedEmail);

    // ADMIN CREDENTIAL CHECK
    if (normalizedEmail === 'admin@hilom.com' && normalizedPassword === 'admin123') {
      console.log('Credentials Verified: Redirecting to Admin Terminal...');

      // We navigate to /admin. Because of our App.jsx setup,
      // it will load AdminDashboard.jsx and redirect to Analytics.
      navigate('/admin');
    } else if (normalizedEmail === 'staff@hilom.com' && normalizedPassword === 'staff123') {
      console.log('Staff Access Granted');
      navigate('/staff/orders');
    } else if (normalizedEmail === 'customer@hilom.com' && normalizedPassword === 'user123') {
      console.log('Customer Access Granted');
      navigate('/wardrobe');
    } else {
      // Fallback for standard login simulation
      console.log('Fallback: Standard Login for', normalizedEmail);
      navigate('/wardrobe');
    }
  };

  return (
    /* Layout: items-start for stability, pt-25/48 for header clearance, pb-32 for breathing room */
    <div className="min-h-screen bg-white flex items-start justify-center px-6 pt-25 md:pt-48 pb-32 relative overflow-hidden">
      {/* Background Subtle Grid - Brutalist Aesthetic */}
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
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl italic text-heritage-brown mb-4">
            Welcome Back
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-500 ml-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-brand px-4 py-4 text-sm focus:outline-none focus:border-heritage-brown transition-colors placeholder:text-stone-300 shadow-sm"
                placeholder="juandelacruz@example.com"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[9px] uppercase tracking-tighter text-stone-400 hover:text-heritage-brown transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-brand px-4 py-4 text-sm focus:outline-none focus:border-heritage-brown transition-colors placeholder:text-stone-300 shadow-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-heritage-brown text-white text-[11px] uppercase tracking-[0.4em] py-5 rounded-brand hover:bg-stone-800 transition-all duration-500 shadow-md active:scale-[0.98] mt-4"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link Section */}
        <div className="mt-6 text-center">
          <p className="text-[11px] text-stone-400 font-light tracking-wide">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-[12px] text-heritage-brown italic font-serif hover:underline ml-1"
            >
              Create one
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
