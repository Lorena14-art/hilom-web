import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InventoryManager() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Linen Shirt', stock: 24, price: '45.00' },
    { id: 2, name: 'Stone Trousers', stock: 12, price: '80.00' },
    { id: 3, name: 'Silk Scarf', stock: 0, price: '35.00' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', stock: '', price: '' });

  // Open Modal for Create or Edit
  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({ name: product.name, stock: product.stock, price: product.price });
    } else {
      setEditingProduct(null);
      setFormData({ name: '', stock: '', price: '' });
    }
    setIsModalOpen(true);
  };

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  // Handle Submit (Create & Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? { ...p, ...formData } : p)));
    } else {
      const newProduct = { id: Date.now(), ...formData };
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header with Add Button */}
      <div className="flex justify-between items-end border-b border-stone-100 pb-8">
        <div>
          <h1 className="font-serif text-4xl italic text-heritage-brown">Inventory Master</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mt-2">
            Stock_Level_Monitoring
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-stone-900 text-white px-6 py-3 rounded-2xl text-xs font-bold tracking-widest hover:bg-heritage-brown transition-colors shadow-lg shadow-stone-200"
        >
          + ADD PRODUCT
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50 border-b border-stone-100">
            <tr>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-stone-400">
                Product
              </th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-stone-400">
                Stock
              </th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-stone-400">
                Price
              </th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-stone-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-stone-50/50 transition-colors group">
                <td className="px-8 py-6 font-medium text-stone-800 italic font-serif text-lg">
                  {item.name}
                </td>
                <td className="px-8 py-6 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.stock > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}
                  >
                    {item.stock} IN STOCK
                  </span>
                </td>
                <td className="px-8 py-6 text-sm text-stone-500 font-mono">₱{item.price}</td>
                <td className="px-8 py-6 text-sm">
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="text-stone-400 hover:text-stone-900 font-bold text-[10px] uppercase tracking-tighter"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-300 hover:text-red-600 font-bold text-[10px] uppercase tracking-tighter"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CRUD Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-stone-900/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white w-full max-w-md p-10 rounded-[40px] shadow-2xl border border-stone-100"
            >
              <h2 className="font-serif text-2xl italic text-stone-800 mb-6">
                {editingProduct ? 'Edit Item' : 'New Product'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">
                    Item Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-heritage-brown/20 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">
                      Stock Level
                    </label>
                    <input
                      required
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">
                      Price (PHP)
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-stone-900 text-white py-4 rounded-2xl text-xs font-bold tracking-[0.2em] mt-4 hover:bg-heritage-brown transition-all"
                >
                  SAVE CHANGES
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
