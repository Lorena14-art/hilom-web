import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link'; // Added for the scroll link

// 1. Core Components
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Philosophy from '../components/Philosophy';
import Archive from '../components/Archive';
import Footer from '../components/Footer';

// 2. Data
import { allProducts } from '../data/product';

export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Memoize featured products
  const featuredProducts = useMemo(() => (allProducts || []).slice(0, 4), [allProducts]);

  // Handle scroll for the floating button
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play timer for slider
  useEffect(() => {
    if (featuredProducts.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <HeroSection />

      {/* Featured Selection */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.6em] text-stone-400 uppercase block mb-4">
              People's Choice
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-heritage-brown italic leading-tight">
              Featured Selection
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-heritage-brown/20 mx-auto mt-8"
            />
          </motion.div>
        </div>

        <ProductCard
          {...featuredProducts[currentIndex]}
          isFeatured={true}
          totalItems={featuredProducts.length}
          currentIndex={currentIndex}
          onDotClick={setCurrentIndex}
        />
      </section>

      <Philosophy />
      <Archive />
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-10 right-6 md:right-12 z-[90]"
          >
            <Link smooth to="/#home" className="flex flex-col items-center group gap-2">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-md border border-stone-100 rounded-full flex items-center justify-center shadow-sm hover:border-heritage-brown transition-all duration-500 group-hover:-translate-y-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-heritage-brown"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </div>
              <span className="text-[7px] uppercase tracking-[0.5em] text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Top
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
