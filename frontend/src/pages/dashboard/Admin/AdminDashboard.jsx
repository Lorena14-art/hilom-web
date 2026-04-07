import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

 const menuItems = [
   { name: 'Analytics', path: '/admin/analytics', icon: '📈' },
   { name: 'Product Catalog', path: '/admin/products', icon: '🎨' }, // Focus on Design/Details
   { name: 'Stock Inventory', path: '/admin/inventory', icon: '📦' }, // Focus on Stock/Numbers
   { name: 'Staff Management', path: '/admin/staff', icon: '👥' },
   { name: 'Marketing Hooks', path: '/admin/marketing', icon: '✨' },
 ];

  return (
    // FIXED: overflow-hidden prevents the weird white gap on the right
    <div className="flex h-screen bg-[#FDFCFB] overflow-hidden font-sans">
      {/* NEW CLEAN SIDEBAR */}
      <aside className="w-64 bg-white border-r border-stone-100 flex flex-col z-50">
        <div className="p-8 pb-12">
          <h2 className="font-serif italic text-2xl text-heritage-brown tracking-tight">Hilom</h2>
          <p className="text-[9px] uppercase tracking-widest text-stone-400 mt-1 font-bold">
            Management Suite
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xl'
                    : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-stone-50">
          <button
            onClick={() => navigate('/login')}
            className="w-full text-left px-4 py-3 text-sm font-semibold text-red-400 hover:text-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* CLEAN HEADER */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-stone-100 flex items-center justify-between px-10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              Live Storefront
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-stone-900">Admin User</p>
              <p className="text-[10px] text-stone-400">Store Owner</p>
            </div>
            <div className="w-10 h-10 bg-heritage-brown rounded-xl flex items-center justify-center text-white font-serif italic text-lg shadow-sm">
              H
            </div>
          </div>
        </header>

        {/* CONTENT VIEWPORT */}
        <main className="flex-1 overflow-y-auto p-10 bg-[#FDFCFB]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
