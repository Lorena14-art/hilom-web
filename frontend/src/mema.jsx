import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import hilomLogo from './assets/hilom.png';

const ProductCard = ({
  images,
  title,
  price,
  category,
  fabric,
  isFeatured,
  totalItems,
  onDotClick,
  currentIndex,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasMultipleImages = Array.isArray(images);
  const isHoodie = category.toLowerCase().includes('hoodie');

  // Responsive padding: less on mobile to maximize image size
  const paddingClass = isHoodie ? 'p-2' : 'p-4 md:p-8';

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
        className={`relative overflow-hidden rounded-brand bg-stone-50 aspect-[4/5] shadow-sm border border-stone-100 flex items-center justify-center ${paddingClass}`}
      >
        <img
          src={hasMultipleImages ? (isHovered ? images[1] : images[0]) : images}
          alt={title}
          className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105"
        />
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className={`w-1 h-1 rounded-full ${!isHovered ? 'bg-heritage-brown' : 'bg-stone-300'}`}
            />
            <div
              className={`w-1 h-1 rounded-full ${isHovered ? 'bg-heritage-brown' : 'bg-stone-300'}`}
            />
          </div>
        )}
      </div>
      <div className="text-center space-y-1 px-2">
        <p className="text-[8px] md:text-[9px] tracking-[0.3em] text-stone-400 uppercase">
          {category}
        </p>
        <h3 className="font-serif text-base md:text-xl italic text-heritage-brown leading-tight">
          {title}
        </h3>
        <p className="text-[10px] text-stone-500 font-light italic tracking-wide">
          Crafted with {fabric}
        </p>
        <p className="text-stone-400 tracking-[0.2em] text-[10px] md:text-xs pt-1">₱{price}</p>
      </div>

      {isFeatured && (
        <div className="flex justify-center gap-2 pt-6 pb-4">
          {Array.from({ length: totalItems }).map((_, i) => (
            <button
              key={i}
              onClick={() => onDotClick(i)}
              className="py-2 focus:outline-none" // py-2 increases touch target size
            >
              <div
                className={`h-[1px] transition-all duration-500 ${
                  currentIndex === i ? 'w-8 md:w-12 bg-heritage-brown' : 'w-2 md:w-4 bg-stone-200'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default function Homepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const INITIAL_COUNT = 6;

  const allProducts = [
    {
      title: 'Yakap',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Ultra-Soft Fleece',
      images: '/wardrobe/hoodies/YakapBlack.png',
    },
    {
      title: 'Pag-asa',
      category: 'Tees',
      price: '850',
      fabric: 'Heavyweight Premium Cotton',
      images: ['/wardrobe/tees/PagasaFront.png', '/wardrobe/tees/PagasaBack.png'],
    },
    {
      title: 'Amihan',
      category: 'Polo Sweaters',
      price: '1,450',
      fabric: 'Soft-Brushed Terry',
      images: '/wardrobe/polo-sweater/Amihan.png',
    },
    {
      title: 'Tagaytay',
      category: 'Bucket Hat',
      price: '650',
      fabric: 'Durable Canvas',
      images: '/wardrobe/bucket-hat/Tagaytay.png',
    },
    {
      title: 'Alon',
      category: 'Bucket Hat',
      price: '650',
      fabric: 'Durable Canvas',
      images: '/wardrobe/bucket-hat/Alon.png',
    },
    {
      title: 'Silim',
      category: 'Bucket Hat',
      price: '650',
      fabric: 'Durable Canvas',
      images: '/wardrobe/bucket-hat/Silim.png',
    },
    {
      title: 'Sinag',
      category: 'Bucket Hat',
      price: '650',
      fabric: 'Durable Canvas',
      images: '/wardrobe/bucket-hat/Sinag.png',
    },
    {
      title: 'Dapit',
      category: 'Baseball Cap',
      price: '550',
      fabric: 'Structured Twill',
      images: '/wardrobe/baseball-cap/Dapit.png',
    },
    {
      title: 'Lalim',
      category: 'Baseball Cap',
      price: '550',
      fabric: 'Structured Twill',
      images: '/wardrobe/baseball-cap/Lalim.png',
    },
    {
      title: 'Sikat',
      category: 'Baseball Cap',
      price: '550',
      fabric: 'Structured Twill',
      images: '/wardrobe/baseball-cap/Sikat.png',
    },
    {
      title: 'Simula',
      category: 'Baseball Cap',
      price: '550',
      fabric: 'Structured Twill',
      images: '/wardrobe/baseball-cap/Simula.png',
    },
    {
      title: 'Yakap',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Ultra-Soft Fleece',
      images: '/wardrobe/hoodies/YakapWhite.png',
    },
    {
      title: 'Yakap',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Ultra-Soft Fleece',
      images: '/wardrobe/hoodies/YakapBrown.png',
    },
    {
      title: 'Yakap',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Ultra-Soft Fleece',
      images: '/wardrobe/hoodies/YakapCream.png',
    },
    {
      title: 'Linaw',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/LinawBlack.png',
    },
    {
      title: 'Linaw',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/LinawWhite.png',
    },
    {
      title: 'Linaw',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/LinawBrown.png',
    },
    {
      title: 'Linaw',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/LinawCream.png',
    },
    {
      title: 'Alab',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/AlabBlack.png',
    },
    {
      title: 'Alab',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/AlabWhite.png',
    },
    {
      title: 'Dalisay',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/DalisayBlack.png',
    },
    {
      title: 'Dalisay',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/DalisayWhite.png',
    },
    {
      title: 'Silay',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/SilayBlack.png',
    },
    {
      title: 'Silay',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/SilayWhite.png',
    },
    {
      title: 'Sulong',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/SulongBlack.png',
    },
    {
      title: 'Sulong',
      category: 'Hoodies',
      price: '1,650',
      fabric: 'Sustainable Organic Cotton',
      images: '/wardrobe/hoodies/SulongWhite.png',
    },
  ];

  const featuredProducts = allProducts.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const categories = ['All', 'Tees', 'Polo Sweaters', 'Bucket Hat', 'Baseball Cap', 'Hoodies'];

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, allProducts]);

  const displayedProducts = filteredProducts.slice(0, INITIAL_COUNT);

  return (
    <div className="bg-white min-h-screen selection:bg-classic-cream selection:text-heritage-brown overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-12 py-3 md:py-4 bg-white/90 backdrop-blur-md border-b border-stone-100 flex justify-between items-center">
        <div
          className="flex items-center gap-3 md:gap-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={hilomLogo} alt="HILOM Logo" className="h-6 md:h-10 w-auto" />
          <h1 className="font-serif text-lg md:text-2xl tracking-tighter text-heritage-brown uppercase">
            HILOM
          </h1>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.4em] items-center text-stone-400">
          {['Wardrobe', 'Drops', 'Philosophy', 'Archives'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-heritage-brown transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-heritage-brown p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
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

      {/* Mobile Sidebar */}
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
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] shadow-2xl md:hidden px-8 py-12 flex flex-col gap-12"
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
                <p className="text-[9px] tracking-[0.5em] text-stone-300 uppercase font-medium">
                  Navigation
                </p>
                <div className="flex flex-col gap-6">
                  {['Wardrobe', 'Drops', 'Philosophy', 'Archives'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-3xl font-serif italic text-heritage-brown text-left border-b border-stone-50 pb-2"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="drops"
        className="min-h-[70vh] pt-40 pb-10 flex flex-col items-center justify-center bg-classic-cream px-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-7xl md:text-[12rem] font-serif text-heritage-brown italic leading-none">
            Simula
          </h2>
          <p className="mt-8 text-xs md:text-sm tracking-[0.3em] uppercase text-stone-400">
            Initial Release
          </p>
        </motion.div>
      </section>

      {/* Featured Section with Swipe/Drag Logic */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 overflow-hidden">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          {' '}
          {/* Reduced mb-16/24 to mb-8/12 */}
          <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase mb-4">
            The Selection
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-heritage-brown italic">
            Featured Products
          </h2>
          <div className="w-12 h-px bg-heritage-brown/20 mt-6"></div> {/* Reduced mt-8 to mt-6 */}
        </div>

        {/* Responsive Slider Container */}
        {/* Reduced min-height to pull the product card closer to the heading */}
        <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto min-h-[450px] md:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                  setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
                } else if (swipe > 50) {
                  setCurrentIndex(
                    (prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length
                  );
                }
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 touch-none cursor-grab active:cursor-grabbing"
            >
              <ProductCard
                {...featuredProducts[currentIndex]}
                isFeatured={true}
                totalItems={featuredProducts.length}
                currentIndex={currentIndex}
                onDotClick={(i) => setCurrentIndex(i)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Wardrobe Preview Section */}
      <section id="wardrobe" className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-50">
        <div className="flex flex-col items-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase mb-4">
            Complete Collection
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-heritage-brown italic">Wardrobe</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mt-12 border-b border-stone-100 pb-4 w-full max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative pb-2 ${selectedCategory === cat ? 'text-heritage-brown font-medium' : 'text-stone-300 hover:text-stone-500'}`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCat"
                    className="absolute bottom-0 left-0 right-0 h-px bg-heritage-brown"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, idx) => (
              <ProductCard key={`${product.title}-${idx}`} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex flex-col items-center">
          <Link
            to="/wardrobe"
            className="group flex flex-col items-center gap-4 focus:outline-none"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 group-hover:text-heritage-brown transition-colors">
              Enter Wardrobe
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-px h-16 bg-stone-200 group-hover:bg-heritage-brown transition-colors"
            />
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase">Core Values</span>
          <h2 className="font-serif text-4xl mt-4 italic text-heritage-brown">
            The HILOM Philosophy
          </h2>
          <p className="mt-6 text-stone-500 leading-relaxed font-light italic text-sm md:text-base">
            Inspired by the Filipino word for "healing," HILOM merges traditional craftsmanship with
            modern silhouettes. We believe that what you wear should reflect your journey— patient,
            intentional, and deeply rooted.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="archives"
        className="py-24 bg-white flex flex-col items-center border-t border-stone-50"
      >
        <p className="font-serif text-2xl italic text-stone-300">Everything heals in time.</p>
        <div className="mt-8 flex gap-8 text-[9px] uppercase tracking-[0.3em] text-stone-400">
          <button className="hover:text-heritage-brown transition-colors">Instagram</button>
          <button className="hover:text-heritage-brown transition-colors">TikTok</button>
          <button className="hover:text-heritage-brown transition-colors">Contact</button>
        </div>
      </footer>
    </div>
  );
}
