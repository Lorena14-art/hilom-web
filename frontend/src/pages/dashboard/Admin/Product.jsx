import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCatalog() {
  // --- STATE MANAGEMENT ---
  const [designs, setDesigns] = useState([
    {
      id: 1,
      name: 'Amihan Tee',
      category: 'Tops',
      subCategory: 'Tees',
      price: '600',
      originalPrice: '2345',
      discount: '74',
      status: 'Published',
      sizes: ['S', 'M', 'L'],
      colors: ['#FFFFFF', '#000000', '#3E2723'],
      image: null,
    },
  ]);

  const [filter, setFilter] = useState('All');
  const [subFilter, setSubFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Tops',
    subCategory: 'Tees',
    price: '',
    originalPrice: '',
    discount: '',
    sizes: [],
    colors: [],
    image: null,
  });

  // --- EFFECT: Body Scroll Lock ---
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // --- CONFIGURATION ---
  const subCategoryOptions = {
    Tops: ['Tees', 'Sweater', 'Hoodie'],
    Bottoms: ['Trousers', 'Shorts'],
    Accessories: ['Baseball Cap', 'Bucket Hat'],
  };

  const sizeOptions = ['S', 'M', 'L', 'XL', '2XL', 'Adjustable'];
  const colorOptions = [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#000000' },
    { name: 'Sage', hex: '#9BA893' },
    { name: 'Cream', hex: '#F2E8CF' },
    { name: 'Khaki', hex: '#B8A98F' },
    { name: 'Dark Brown', hex: '#3E2723' },
  ];

  // --- HANDLERS ---
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setNewProduct({ ...newProduct, image: URL.createObjectURL(file) });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setDesigns([...designs, { ...newProduct, id: Date.now() }]);
    setIsModalOpen(false);
    setNewProduct({
      name: '',
      category: 'Tops',
      subCategory: 'Tees',
      price: '',
      originalPrice: '',
      discount: '',
      sizes: [],
      colors: [],
      image: null,
    });
  };

  const filteredDesigns = useMemo(() => {
    let result = designs;
    if (filter !== 'All') {
      result = result.filter((d) => d.category === filter);
      if (subFilter !== 'All') result = result.filter((d) => d.subCategory === subFilter);
    }
    return result;
  }, [filter, subFilter, designs]);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-16 font-sans text-stone-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto space-y-8 md:space-y-12"
      >
        {/* HEADER SECTION */}
        <div className="space-y-6">

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-stone-100 pb-10">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl italic text-stone-800 leading-tight">
                Full Collection
              </h1>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-stone-400 mt-2 font-bold">
                Hilom_Studio_Archive
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto bg-stone-900 text-white px-10 py-4 rounded-2xl text-[10px] font-bold tracking-widest hover:bg-stone-700 transition-all shadow-xl shadow-stone-200"
            >
              + NEW DESIGN
            </button>
          </div>
        </div>

        {/* FILTER SYSTEM */}
        <div className="space-y-6 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-6 md:gap-10 border-b border-stone-50 pb-4 min-w-max">
            {['All', 'Tops', 'Bottoms', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setSubFilter('All');
                }}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold pb-2 transition-all relative ${filter === cat ? 'text-stone-900' : 'text-stone-300 hover:text-stone-500'}`}
              >
                {cat}
                {filter === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-stone-50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative border border-stone-100 transition-all group-hover:shadow-lg group-hover:border-stone-200">
                  {item.image ? (
                    <img src={item.image} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest text-stone-200 font-bold">
                      No Image
                    </div>
                  )}
                  {item.discount && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-md text-[9px] font-bold tracking-tighter shadow-sm">
                      {item.discount}% OFF
                    </div>
                  )}
                </div>

                <div className="mt-5 px-1 space-y-2">
                  <h3 className="font-serif italic text-xl md:text-2xl text-stone-800">
                    {item.name}
                  </h3>
                  <div className="flex items-baseline gap-2 font-mono">
                    <span className="text-md md:text-lg font-bold">₱{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-[10px] md:text-xs text-stone-300 line-through font-medium">
                        ₱{item.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1">
                    {item.colors?.map((c) => (
                      <div
                        key={c}
                        className="w-2.5 h-2.5 rounded-full border border-stone-100"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* NEW PRODUCT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative bg-white w-full max-w-2xl rounded-t-[2.5rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto overflow-x-hidden custom-scrollbar"
            >
              {/* CLOSE BUTTON (UPPER RIGHT) */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center hover:bg-stone-100 transition-colors z-[110]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="#1C1917"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <form
                onSubmit={handleAddProduct}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                <div className="md:col-span-2 text-center border-b border-stone-100 pb-6 pr-12">
                  <h2 className="font-serif text-3xl md:text-4xl italic text-stone-800">
                    New Design
                  </h2>
                </div>

                {/* IMAGE UPLOAD */}
                <div className="md:col-span-2 flex flex-col items-center py-4">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-stone-50 rounded-full border-2 border-dashed border-stone-200 flex items-center justify-center relative overflow-hidden group hover:border-stone-400 transition-all">
                    {newProduct.image ? (
                      <img src={newProduct.image} className="w-full h-full object-cover" />
                    ) : (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="opacity-0 absolute inset-0 cursor-pointer z-10"
                      />
                    )}
                    {!newProduct.image && (
                      <span className="text-stone-300 text-[9px] font-bold">ADD PHOTO</span>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-2">
                    Product Title
                  </label>
                  <input
                    required
                    className="w-full mt-2 bg-stone-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-stone-200 transition-all outline-none"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  />
                </div>

                {/* PRICING BLOCK */}
                <div className="grid grid-cols-3 gap-3 md:col-span-2 bg-stone-50 p-5 rounded-2xl">
                  <div className="col-span-1">
                    <label className="text-[9px] font-bold text-stone-400">SALE</label>
                    <input
                      type="number"
                      className="w-full mt-1 bg-white rounded-lg p-3 text-xs font-mono outline-none"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-[9px] font-bold text-stone-400">RETAIL</label>
                    <input
                      type="number"
                      className="w-full mt-1 bg-white rounded-lg p-3 text-xs font-mono outline-none"
                      value={newProduct.originalPrice}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, originalPrice: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-[9px] font-bold text-stone-400">OFF %</label>
                    <input
                      className="w-full mt-1 bg-red-50 text-red-600 rounded-lg p-3 text-xs font-bold outline-none"
                      value={newProduct.discount}
                      onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
                    />
                  </div>
                </div>

                {/* SIZES & COLORS */}
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-2">
                    Sizes & Colors
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sizeOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          const sizes = newProduct.sizes.includes(s)
                            ? newProduct.sizes.filter((x) => x !== s)
                            : [...newProduct.sizes, s];
                          setNewProduct({ ...newProduct, sizes });
                        }}
                        className={`px-4 py-2 rounded-lg text-[10px] font-bold border transition-all ${newProduct.sizes.includes(s) ? 'bg-stone-900 text-white' : 'bg-white text-stone-400 hover:border-stone-200'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {colorOptions.map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        onClick={() => {
                          const colors = newProduct.colors.includes(c.hex)
                            ? newProduct.colors.filter((x) => x !== c.hex)
                            : [...newProduct.colors, c.hex];
                          setNewProduct({ ...newProduct, colors });
                        }}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${newProduct.colors.includes(c.hex) ? 'border-stone-900 scale-110 shadow-sm' : 'border-stone-50'}`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 pt-6 flex flex-col md:flex-row gap-4 sticky bottom-0 bg-white md:relative pb-4 md:pb-0">
                  <button
                    type="submit"
                    className="flex-1 bg-stone-900 text-white py-5 rounded-2xl text-[11px] font-bold tracking-widest uppercase shadow-lg hover:bg-stone-800 transition-all"
                  >
                    Publish Product
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-5 text-[11px] font-bold tracking-widest text-stone-400 uppercase hover:text-stone-600"
                  >
                    Discard
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Custom CSS for the modal scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e7e5e4;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d6d3d1;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
