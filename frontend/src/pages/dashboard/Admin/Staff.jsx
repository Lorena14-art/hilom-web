import { motion } from 'framer-motion';

export default function Staff() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="border-b border-stone-100 pb-8">
        <h1 className="font-serif text-4xl italic text-heritage-brown">Staff Management</h1>
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mt-2">
          Team_Access_Control
        </p>
      </header>

      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50 border-b border-stone-100">
            <tr>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-stone-400">
                Name
              </th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-stone-400">
                Role
              </th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-stone-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            <tr className="hover:bg-stone-50/50 transition-colors">
              <td className="px-8 py-6 font-medium text-stone-800 italic font-serif">Admin User</td>
              <td className="px-8 py-6 text-sm text-stone-500">Store Owner</td>
              <td className="px-8 py-6">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold">
                  ACTIVE
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
