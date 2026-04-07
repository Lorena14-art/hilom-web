import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section
      id="home"
       className="relative h-screen w-full flex items-center justify-center bg-[#F9F7F2] overflow-hidden"
    >
      {/* Background Decorative Element (Optional Soft Gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heritage-brown/[0.03] via-transparent to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Animated Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-xs tracking-[0.6em] text-stone-400 uppercase mb-6"
        >
          Wear the Narrative
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-heritage-brown italic leading-none"
        >
          Hilom
        </motion.h1>

        {/* Brand Philosophy Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-stone-500 max-w-md font-light italic text-sm md:text-base leading-relaxed"
        >
          Intentional garments rooted in culture, designed for collective healing and timeless
          impact.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-6 items-center"
        >
          <Link
            to="/wardrobe"
            className="px-10 py-4 bg-heritage-brown text-white text-[10px] uppercase tracking-[0.2em] hover:bg-stone-800 transition-all duration-500 rounded-sm shadow-sm"
          >
            Explore Wardrobe
          </Link>
          <a
            href="#philosophy"
            className="text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-heritage-brown transition-colors duration-300 border-b border-transparent hover:border-heritage-brown/30 pb-1"
          >
            Our Philosophy
          </a>
        </motion.div>
      </div>

      {/* Background Watermark (Floating Effect) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <img src="/hilom.png" alt="" className="w-1/2 md:w-1/3 grayscale" />
      </motion.div>
    </section>
  );
}
