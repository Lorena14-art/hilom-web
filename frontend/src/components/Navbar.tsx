import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // Changed path to /#home to target the Hero section ID
    { name: 'Home', path: '/#home' },
    { name: 'Wardrobe', path: '/wardrobe' },
    { name: 'Philosophy', path: '/#philosophy' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 flex justify-between items-center ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-100 py-3'
          : 'bg-transparent'
      }`}
    >
      {/* Brand Logo - Also points to #home */}
      <Link smooth to="/#home" className="flex items-center gap-3 group">
        <img
          src="/hilom.png"
          alt="HILOM Logo"
          className="h-8 md:h-10 w-auto transition-transform duration-500 group-hover:scale-110"
        />
        <span className="font-serif text-xl md:text-2xl tracking-tighter text-heritage-brown uppercase italic">
          Hilom
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => {
          const linkPath = link.path.split('#')[0];
          const linkHash = link.path.split('#')[1] ? `#${link.path.split('#')[1]}` : '';

          // Updated isActive logic to handle the #home hash
          const isActive = location.pathname === linkPath && location.hash === linkHash;

          return (
            <Link
              key={link.name}
              smooth
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.4em] transition-colors duration-300 relative group ${
                isActive ? 'text-heritage-brown' : 'text-stone-400 hover:text-heritage-brown'
              }`}
            >
              {link.name}

              {isActive && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-heritage-brown"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
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
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[110] flex flex-col p-12 gap-8"
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

            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  smooth
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif italic text-heritage-brown border-b border-stone-50 pb-4 hover:pl-4 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
