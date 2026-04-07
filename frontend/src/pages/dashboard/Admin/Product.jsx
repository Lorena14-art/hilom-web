import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Product() {
  const [designs, setDesigns] = useState([
    { id: 1, name: 'Linen Shirt', category: 'Tops', price: '1250', status: 'Published' },
    { id: 2, name: 'Stone Trousers', category: 'Bottoms', price: '1850', status: 'Draft' },
    { id: 3, name: 'Silk Scarf', category: 'Accessories', price: '850', status: 'Published' },
    { id: 4, name: 'Canvas Tote', category: 'Accessories', price: '650', status: 'Archived' },
  ]);

  const [filter, setFilter] = useState('All');

  const filteredDesigns = filter === 'All' ? designs : designs.filter((d) => d.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      {/* Header Section */}
      <div className="flex justify-between items-end border-b border-stone-100 pb-8">
        <div>
          <h1 className="font-serif text-4xl italic text-heritage-brown">Product Catalog</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mt-2 font-bold">
            Visual_Collection_Manager
          </p>
        </div>
        <button className="bg-stone-900 text-white px-8 py-3 rounded-2xl text-[10px] font-bold tracking-widest hover:bg-heritage-brown transition-all shadow-xl shadow-stone-200">
          + NEW DESIGN
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex gap-8 border-b border-stone-50 pb-2">
        {['All', 'Tops', 'Bottoms', 'Accessories'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[10px] uppercase tracking-[0.2em] font-bold pb-2 transition-all ${
              filter === cat
                ? 'text-stone-900 border-b-2 border-stone-900'
                : 'text-stone-300 hover:text-stone-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredDesigns.map((item) => (
          <motion.div
            layout
            key={item.id}
            className="group relative bg-white p-4 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-stone-50 rounded-[2rem] overflow-hidden relative flex items-center justify-center border border-stone-50">
              <span className="text-[10px] uppercase tracking-widest text-stone-200 font-bold">
                No Image
              </span>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <button className="bg-white text-stone-900 px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                  Edit Gallery
                </button>
              </div>

              {/* Status Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[8px] font-bold tracking-widest uppercase ${
                  item.status === 'Published'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-stone-200 text-stone-500'
                }`}
              >
                {item.status}
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-6 px-2 pb-2">
              <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">
                {item.category}
              </p>
              <h3 className="font-serif italic text-xl text-stone-800 mt-1">{item.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-bold text-stone-900 font-mono">₱{item.price}</span>
                <button className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors">
                  <span className="text-xs">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
