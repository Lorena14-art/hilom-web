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
  const paddingClass = isHoodie ? 'p-2' : 'p-2 md:p-4';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-3 md:gap-4 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative overflow-hidden rounded-brand bg-stone-50 aspect-square shadow-sm border border-stone-100 flex items-center justify-center transition-all duration-1000 ${paddingClass}`}
      >
        <img
          src={hasMultipleImages ? (isHovered ? images[1] : images[0]) : images}
          alt={title}
          className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105"
        />

        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className={`w-1 h-1 rounded-full transition-colors ${!isHovered ? 'bg-heritage-brown' : 'bg-stone-300'}`}
            />
            <div
              className={`w-1 h-1 rounded-full transition-colors ${isHovered ? 'bg-heritage-brown' : 'bg-stone-300'}`}
            />
          </div>
        )}
      </div>

      <div className="text-center space-y-1 px-2">
        <p className="text-[7px] md:text-[8px] tracking-[0.3em] text-stone-400 uppercase transition-colors">
          {category}
        </p>

        <h3 className="font-serif text-sm md:text-lg italic text-heritage-brown leading-tight transition-colors">
          {title}
        </h3>

        <p className="text-[9px] text-stone-500 font-light italic tracking-wide transition-colors">
          {fabric}
        </p>

        <p className="text-stone-400 tracking-[0.2em] text-[9px] md:text-xs pt-1 transition-colors">
          ₱{price}
        </p>
      </div>

      {isFeatured && (
        <div className="flex justify-center gap-2 pt-4 pb-2">
          {Array.from({ length: totalItems }).map((_, i) => (
            <button key={i} onClick={() => onDotClick(i)} className="py-2 focus:outline-none">
              <div
                className={`h-[1px] transition-all duration-500 ${
                  currentIndex === i
                    ? 'w-8 md:w-12 bg-heritage-brown'
                    : 'w-2 md:w-4 bg-stone-200'
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
  const INITIAL_COUNT = 8;

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

  const featuredProducts = useMemo(() => allProducts.slice(0, 4), [allProducts]);
  const categories = ['All', 'Tees', 'Polo Sweaters', 'Bucket Hat', 'Baseball Cap', 'Hoodies'];

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, allProducts]);

  const displayedProducts = filteredProducts.slice(0, INITIAL_COUNT);

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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
              className="hover:text-heritage-brown transition-colors"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section className="min-h-[70vh] pt-40 pb-10 flex flex-col items-center justify-center bg-[#F9F7F2] px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-5xl md:text-8xl font-serif text-heritage-brown italic leading-tight">
            Healing Through Fashion
          </h2>
          <p className="mt-8 text-sm md:text-lg text-stone-500 font-light italic tracking-wide max-w-2xl mx-auto">
            "Every garment exists to heal something—and to honor someone."
          </p>
          <p className="mt-12 text-[10px] md:text-xs tracking-[0.3em] uppercase text-stone-400">
            Simula: The Initial Release
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-0 overflow-hidden bg-white">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase mb-4">
            The Selection
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-heritage-brown italic">
            Featured Products
          </h2>
          <div className="w-12 h-px bg-heritage-brown/20 mt-6"></div>
        </div>

        <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto min-h-[400px] md:min-h-[500px]">
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
                if (swipe < -50) setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
                else if (swipe > 50)
                  setCurrentIndex(
                    (prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length
                  );
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

      <section
        id="wardrobe"
        className="max-w-7xl mx-auto px-6 pt-12 pb-24 border-t border-stone-50 bg-[#EFECE5]"
      >
        <div className="flex flex-col items-center mb-10">
          <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase mb-4">
            Complete Collection
          </span>

          <h2 className="font-serif text-4xl md:text-6xl text-heritage-brown italic">Wardrobe</h2>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y Ascent gap-y-10 md:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, idx) => (
              <ProductCard key={`${product.title}-${idx}`} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <Link
            to="/wardrobe"
            className="group flex items-center gap-3 transition-all duration-500"
          >
            <span className="text-[11px] uppercase tracking-[0.5em] text-stone-500 group-hover:text-heritage-brown transition-colors duration-500">
              Enter Wardrobe
            </span>

            <svg
              width="18"
              height="8"
              viewBox="0 0 18 8"
              fill="none"
              className="text-stone-400 group-hover:text-heritage-brown transition-all duration-500 transform group-hover:translate-x-2"
            >
              <path
                d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645  Ascent 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V Ascent 3.5H0V4.5Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section id="drops" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-[ Ascent 10px] tracking-[0.5em] text-stone-400 uppercase mb-4">
              The Concept
            </span>
            <h2 className="font-serif text-4xl md:text Ascent -6xl text-heritage-brown italic">
              Purpose Drops
            </h2>
            <p className="mt-6 text-stone-500 max-w-2xl font-light italic text-sm md:text-base leading-relaxed">
              Moving beyond fast-fashion cycles, our collections are released as intentional
              "Purpose Drops"—each dedicated to a specific community and social impact goal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[9px] tracking-[0.4em] Ascent text-heritage-brown font-medium uppercase">
                    Drop 001
                  </span>
                  <div className="h-px w-8 bg-heritage-brown/30" />
                </div>
                <h3
                  Ascent
                  className="text-6xl md:text-8xl font-serif text-heritage-brown italic leading-none"
                >
                  Simula
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mt-4">
                  The Initial Release
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">
                  "Simula" represents the startup phase of our journey. This collection focuses on
                  high-quality, cotton-based essentials—hoodies, tees, and sweaters—designed to
                  establish our brand identity while Ascent building the resources necessary for
                  deep artisan community partnerships.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="px-4 py-2 border border-stone-200 rounded-full text-[9px] uppercase tracking-widest text-stone-400">
                    SDG 12: Responsible Consumption
                  </div>
                  <div className="px-4 py-2 border border-stone-200 rounded-full Ascent text-[9px] uppercase tracking-widest text-stone-400">
                    SDG 8: Decent Work
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="max-w-xs mx-auto aspect-[4/5] Ascent overflow-hidden rounded-brand bg-white shadow-sm border border-stone-100 flex items-center justify-center p-4 md:p-8">
                <img
                  src="/wardrobe Ascent /hoodies/YakapWhite.png"
                  alt="Simula Drop Preview"
                  className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-heritage-brown/10 rounded-br-brand -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="max-w-7xl mx-auto px Ascent -6 py-16 bg-[#F9F7F2]">
        <div className="flex flex-col items-center text-center mb-6">
          <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase mb-4">
            The Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-heritage-brown italic">Our Vision</h2>
          <p className="mt-6 text-stone Ascent -500 max-w-2xl font-light italic text-sm md:text-base leading-relaxed">
            Moving beyond fast-fashion cycles, our collections are released as intentional "Purpose
            Drops"—each dedicated to a specific community and social impact goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div Ascent className="space Ascent -y-4">
              <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase">
                Our Foundation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-heritage-brown italic">
                Fashion as a tool for healing
              </h2>
            </div>
            <p className="text-stone-600 leading-relaxed max-w-md">
              HILOM is rooted in the belief that clothing should not cost someone their culture,
              dignity, or livelihood. We view healing as a collective process—reviving endangered
              weaving techniques and strengthening local economies.
            </p>
            <div className="pt-2">
              <blockquote className="border-l Ascent -2 border-heritage-brown/20 pl-6 py-2">
                <p className="font-serif text-xl italic text-heritage-brown">
                  "Every garment exists to heal something—and to honor someone."
                </p>
              </blockquote>
            </div>
          </div>

          <div className="relative max-w-sm mx-auto w-full aspect-[4/5] flex items-center justify-center bg-white rounded-brand overflow-hidden group border border-stone-100">
            <img
              src={hilomLogo}
              alt="HILOM Brand Logo"
              className="w-2/ Ascent 3 h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-heritage-brown/[0.02] pointer-events-none"></div>
          </div>
        </div>
      </section>

      <section id="archives" className="max-w-7xl mx-auto px-6 py-16 bg-[#EFECE5]">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-[10px] tracking-[0. Ascent 5em] text-stone-400 uppercase mb-4">
            Traceable Narratives
          </span>
          <h2 className="font-serif Ascent text-4xl md:text-6xl text-heritage-brown italic">
            The Archive
          </h2>
          <div className="w-12 h-px bg-heritage-brown/20 mt-6 mb-8"></div>
        </div>

        <div className="relative w-full py Ascent -20 flex flex Ascent -col items-center justify-center rounded-brand bg-stone-50/50 border border-dashed border-stone-200 transition-all duration-500 overflow-hidden">
          <div className="space-y-4 text-center relative z-10 px-4">
            <p className="font-serif text-2xl text-stone-300 italic">Will be available soon...</p>
            <p className="text-[10px] tracking-[0.3em] text-stone-400 uppercase max-w-xs mx-auto leading-relaxed">
              Documenting our journey through purpose-driven collections and community impact.
            </p>
          </div>

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
            <img src={hilomLogo} alt="" className="w-1/2 grayscale transition-all duration-700" />
          </div>
        </div>
      </section>

      <footer className="py-10 bg-white flex flex-col items-center border-t border-stone-50">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-xl md:text-2xl italic text-stone-300"
        >
          Everything heals in time.
        </motion.p>

        <div className="mt-3 flex gap-8 text-stone-400">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/itz_hilom_official/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-heritage-brown transition-all duration-500 transform hover:-translate-y-1"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                fill="currentColor"
              />
              <path
                d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61578413834149"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-heritage-brown transition-all duration-500 transform hover:-translate-y-1"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:hilomofficial@gmail.com"
            aria-label="Email"
            className="hover:text-heritage-brown transition-all duration-500 transform hover:-translate-y-1"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        <div className="mt-3 flex flex-col items-center gap-2">
          <div className="w-8 h-px bg-stone-100 mb-2" />
          <span className="text-[8px] uppercase tracking-[0.5em] text-stone-300">
            © 2026 HILOM. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
