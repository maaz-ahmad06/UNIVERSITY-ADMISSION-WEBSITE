import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-950/95 shadow-xl border-b border-navy-800 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 text-white group">
              <div className="bg-gradient-to-br from-maroon-800 to-gold-500 p-2.5 rounded-xl shadow-lg transition-transform group-hover:rotate-6">
                <FaGraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-wide block leading-none group-hover:text-gold-400 transition-colors">
                  APEX
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-500 leading-none">
                  University
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-sm font-semibold tracking-wide transition-colors duration-200 py-2 ${
                        isActive
                          ? 'text-gold-500'
                          : 'text-gray-300 hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeNavBorder"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* CTA Apply Now Button */}
              <Link
                to="/apply"
                className="relative overflow-hidden group bg-gradient-to-r from-maroon-800 to-maroon-700 hover:from-maroon-700 hover:to-maroon-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wider shadow-lg hover:shadow-maroon-900/40 border border-maroon-700 transition-all duration-300"
              >
                <span className="relative z-10">APPLY NOW</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Menu container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-navy-950 border-l border-navy-800 shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-maroon-800 to-gold-500 p-2 rounded-lg">
                      <FaGraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-serif font-bold text-lg text-white">APEX UNIV</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white p-1 rounded-md focus:outline-none"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-navy-800 text-gold-500 border-l-4 border-gold-500'
                            : 'text-gray-300 hover:bg-navy-900 hover:text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Apply Now */}
              <div className="pt-6 border-t border-navy-850">
                <Link
                  to="/apply"
                  className="w-full block text-center bg-gradient-to-r from-maroon-800 to-maroon-700 text-white py-3 rounded-xl font-bold tracking-wider hover:from-maroon-700 hover:to-maroon-600 transition-colors shadow-lg shadow-maroon-950/50"
                >
                  APPLY NOW
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
