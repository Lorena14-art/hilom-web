import { motion } from 'framer-motion';

interface ProductProps {
  images: string | string[];
  title: string;
  price: string;
  category: string;
  fabric: string;
  isFeatured?: boolean;
  totalItems?: number;
  currentIndex?: number;
  onDotClick?: (index: number) => void;
}

export default function ProductCard({
  images,
  title,
  price,
  category,
  fabric,
  isFeatured = false,
  totalItems = 0,
  currentIndex = 0,
  onDotClick,
}: ProductProps) {
  const mainImage = Array.isArray(images) ? images[0] : images;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Flex container pulls both items toward the center */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Left Side: Product Image Container */}
        <motion.div
          key={title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[500px] aspect-[4/5] bg-stone-50 rounded-brand overflow-hidden border border-stone-100 flex items-center justify-center p-8 md:p-12 shadow-sm"
        >
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
          />

          {/* Internal Category Label */}
          <div className="absolute top-8 left-8">
            <span className="text-[9px] tracking-[0.4em] text-stone-300 uppercase">{category}</span>
          </div>
        </motion.div>

        {/* Right Side: Centered Content Block */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:min-w-[320px]">
          <motion.div
            key={`text-${title}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <h2 className="font-serif text-5xl md:text-7xl text-heritage-brown italic leading-tight">
              {title}
            </h2>
            <p className="text-stone-400 font-light italic text-sm md:text-base">
              Crafted with {fabric}
            </p>
          </motion.div>

          <p className="text-stone-400 tracking-[0.3em] text-sm md:text-base">₱{price}</p>

          {/* Slider Pagination Dots */}
          {isFeatured && totalItems > 1 && (
            <div className="flex gap-2 py-2">
              {Array.from({ length: totalItems }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => onDotClick?.(idx)}
                  className={`h-[2px] transition-all duration-500 rounded-full ${
                    currentIndex === idx
                      ? 'w-10 bg-heritage-brown'
                      : 'w-4 bg-stone-200 hover:bg-stone-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
