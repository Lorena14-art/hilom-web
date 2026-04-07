import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ images, title, price, category, fabric }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasMultipleImages = Array.isArray(images);
  const isHoodie = category.toLowerCase().includes('hoodie');
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
        className={`relative overflow-hidden rounded-brand bg-stone-50 aspect-[4/5] shadow-sm border border-stone-100 flex items-center justify-center transition-all duration-1000 ${paddingClass}`}
      >
        <img
          src={hasMultipleImages ? (isHovered ? images[1] : images[0]) : images}
          alt={title}
          className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105"
        />
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className={`w-1.5 h-1.5 rounded-full transition-colors ${!isHovered ? 'bg-heritage-brown' : 'bg-stone-300'}`}
            />
            <div
              className={`w-1.5 h-1.5 rounded-full transition-colors ${isHovered ? 'bg-heritage-brown' : 'bg-stone-300'}`}
            />
          </div>
        )}
      </div>

      <div className="text-center space-y-1">
        <p className="text-[9px] tracking-[0.3em] text-stone-400 uppercase">{category}</p>
        <h3 className="font-serif text-lg md:text-xl italic text-heritage-brown">{title}</h3>
        <p className="text-[10px] text-stone-500 font-light italic">Crafted with {fabric}</p>
        <p className="text-stone-400 tracking-[0.2em] text-[10px] md:text-xs pt-1">₱{price}</p>
      </div>
    </motion.div>
  );
};

export default function Wardrobe() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const ITEMS_PER_PAGE = 8;

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
      title: 'Humay',
      category: 'Tees',
      price: '850',
      fabric: 'Heavyweight Premium Cotton',
      images: ['/wardrobe/tees/HumayFront.png', '/wardrobe/tees/HumayBlack.png'],
    },
    {
      title: 'Pahinga',
      category: 'Tees',
      price: '850',
      fabric: 'Heavyweight Premium Cotton',
      images: ['/wardrobe/tees/PahingaFront.png', '/wardrobe/tees/PahingaBack.png'],
    },
    {
      title: 'Panatag',
      category: 'Tees',
      price: '850',
      fabric: 'Heavyweight Premium Cotton',
      images: ['/wardrobe/tees/PanatagFront.png', '/wardrobe/tees/PanatagBack.png'],
    },
    {
      title: 'Panimula',
      category: 'Tees',
      price: '850',
      fabric: 'Heavyweight Premium Cotton',
      images: ['/wardrobe/tees/PanimulaFront.png', '/wardrobe/tees/PanimulaBack.png'],
    },
    {
      title: 'Amihan',
      category: 'Polo Sweaters',
      price: '1,450',
      fabric: 'Soft-Brushed Terry',
      images: '/wardrobe/polo-sweater/Amihan.png',
    },
    {
      title: 'Dagat',
      category: 'Polo Sweaters',
      price: '1,450',
      fabric: 'Soft-Brushed Terry',
      images: '/wardrobe/polo-sweater/Dagat.png',
    },
    {
      title: 'Hiraya',
      category: 'Polo Sweaters',
      price: '1,450',
      fabric: 'Soft-Brushed Terry',
      images: '/wardrobe/polo-sweater/Hiraya.png',
    },
    {
      title: 'Lupa',
      category: 'Polo Sweaters',
      price: '1,450',
      fabric: 'Soft-Brushed Terry',
      images: '/wardrobe/polo-sweater/Lupa.png',
    },
    {
      title: 'Siliman',
      category: 'Polo Sweaters',
      price: '1,450',
      fabric: 'Soft-Brushed Terry',
      images: '/wardrobe/polo-sweater/Siliman.png',
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

  const categories = ['All', 'Hoodies', 'Tees', 'Polo Sweaters', 'Bucket Hat', 'Baseball Cap'];

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  const filteredProducts = useMemo(
    () =>
      selectedCategory === 'All'
        ? allProducts
        : allProducts.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  const displayedProducts = useMemo(
    () => filteredProducts.slice(0, visibleCount),
    [filteredProducts, visibleCount]
  );

  const handleSeeMore = () => setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  const handleSeeLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Lessened padding-top from pt-32 to pt-16 */}
      <div className="pt-16 pb-24 px-6 max-w-7xl mx-auto">
        {/* Navigation Section centered with flex justify-center */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex justify-center"
        >
          <Link to="/" className="group flex items-center gap-3 w-fit">
            <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:-translate-x-0.5 transition-transform"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 group-hover:text-stone-900 transition-colors font-bold">
              Back to Home
            </span>
          </Link>
        </motion.div>

        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-heritage-brown italic">
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
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, idx) => (
              <ProductCard key={`${product.title}-${idx}`} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Buttons Section */}
        <AnimatePresence>
          {(visibleCount < filteredProducts.length || visibleCount > ITEMS_PER_PAGE) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-24 flex flex-col items-center"
            >
              <div className="w-px h-16 bg-stone-100 mb-8" />
              <div className="flex gap-12 md:gap-24">
                {visibleCount < filteredProducts.length && (
                  <button
                    onClick={handleSeeMore}
                    className="group flex flex-col items-center gap-4 transition-all"
                  >
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 group-hover:text-heritage-brown">
                      See More
                    </span>
                    <div className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-heritage-brown transition-colors">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-stone-300 group-hover:text-heritage-brown group-hover:translate-y-1 transition-all"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </button>
                )}

                {visibleCount > ITEMS_PER_PAGE && (
                  <button
                    onClick={handleSeeLess}
                    className="group flex flex-col items-center gap-4 transition-all"
                  >
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 group-hover:text-heritage-brown">
                      See Less
                    </span>
                    <div className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-heritage-brown transition-colors">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-stone-300 group-hover:text-heritage-brown group-hover:-translate-y-1 transition-all"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
