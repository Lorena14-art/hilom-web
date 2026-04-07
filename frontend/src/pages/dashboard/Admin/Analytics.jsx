import { motion } from 'framer-motion';

export default function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Page Header */}
      <div className="border-b border-stone-100 pb-8">
        <h1 className="font-serif text-4xl italic text-heritage-brown">Analytics Overview</h1>
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mt-2">
          Store_Performance_Metrics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Total Revenue', 'Active Users', 'New Orders'].map((stat) => (
          <div key={stat} className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">{stat}</p>
            <p className="text-3xl font-serif italic text-heritage-brown">$0.00</p>
          </div>
        ))}
      </div>

      {/* Placeholder for charts */}
      <div className="bg-stone-50 h-96 rounded-3xl border border-stone-100 flex items-center justify-center border-dashed">
        <p className="text-stone-400 text-sm font-medium">Data Visualization Area</p>
      </div>
    </motion.div>
  );
}
