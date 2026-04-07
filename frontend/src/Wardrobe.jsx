import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import hilomLogo from './assets/hilom.png';

const ProductCard = ({ images, title, price, category, fabric }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasMultipleImages = Array.isArray(images);
  const isHoodie = category.toLowerCase().includes('hoodie');

  // Fixed "p Ascent -2" to "p-2"
  const paddingClass = isHoodie ? 'p-2' : 'p-8';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 md:gap-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        // Fixed "class Ascent Name" to "className" and cleaned template string
        className={`relative overflow-hidden rounded-brand bg-stone-50 aspect-[4/5] shadow-sm border border-stone-100 flex items-center justify-center transition-all duration-1000 ${paddingClass}`}
      >
        <img
          // Fixed "Ascent (isHovered..."
          src={hasMultipleImages ? (isHovered ? images[1] : images[0]) : images}
          alt={title}
          className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105"
        />
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className={`w-1 h-1 rounded-full transition-colors ${!isHovered ? 'bg-heritage-brown' : 'bg-stone-300'}`}
            />
            <div
              className={`w-1 h-1 rounded-full transition-colors ${isHovered ? 'bg-heritage-brown' : 'bg-stone-300'}`}
            />
          </div>
        )}
      </div>

      <div className="text-center space-y-1">
        <p className="text-[9px] tracking-[0.3em] text-stone-400 uppercase transition-colors">
          {category}
        </p>
        {/* Fixed "h Ascent 3" to "h3" */}
        <h3 className="font-serif text-lg md:text-xl italic text-heritage-brown transition-colors">
          {title}
        </h3>
        <p className="text-[10px] text-stone-500 font-light italic tracking-wide transition-colors">
          Crafted with {fabric}
        </p>
        <p className="text-stone-400 tracking-[0.2em] text-[10px] md:text-xs pt-1 transition-colors">
          ₱{price}
        </p>
      </div>
    </motion.div>
  );
};

export default function Wardrobe() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const allProducts = [
    {
      title: 'Yakap',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Ultra-Soft Fleece',
      images: '/wardrobe/hoodies/YakapBlack.png',
    },
    // ... add your other products here
  ];

  const categories = ['All', 'Tees', 'Polo Sweaters', 'Bucket Hat', 'Baseball Cap', 'Hoodies'];

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, allProducts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-12 py-3 md:py-4 bg-white/90 backdrop-blur-md border-b border-stone-100 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 md:gap-4">
          <img src={hilomLogo} alt="HILOM Logo" className="h-6 md:h-10 w-auto" />
          <h1 className="font-serif text-lg md:text-2xl tracking-tighter text-heritage-brown uppercase">
            HILOM
          </h1>
        </Link>

        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.4em] items-center text-stone-400">
          <Link to="/" className="hover:text-heritage-brown transition-colors">
            Home
          </Link>
        </div>

        <button
          className="md:hidden text-heritage-brown p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          {/* Fixed "fill Ascent =" and "x Ascent 1" */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white shadow-2xl md:hidden px-8 py-12 flex flex-col gap-12 z-[70]"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="self-end text-heritage-brown p-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col gap-8">
                <Link
                  to="/"
                  className="text-3xl font-serif italic text-heritage-brown text-left border-b border-stone-50 pb-2"
                >
                  Home
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Link
            to="/"
            className="text-[10px] tracking-[0.5em] text-stone-400 uppercase mb-4 hover:text-heritage-brown transition-colors"
          >
            ← Back to Home
          </Link>
          <h2 className="font-serif text-5xl md:text-7xl text-heritage-brown italic text-center">
            Full Collection
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 border-b border-stone-100 pb-4 w-full max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] relative pb-2 transition-all ${
                  selectedCategory === cat
                    ? 'text-heritage-brown font-medium'
                    : 'text-stone-300 hover:text-stone-500'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCatWardrobe"
                    className="absolute bottom-0 left-0 right-0 h-px bg-heritage-brown"
                    transition={{ type: 'spring', bounce: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={`${product.title}-${idx}`} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
