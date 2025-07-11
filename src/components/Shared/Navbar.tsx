'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Skills', href: '/skill' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu open/close with animation
  React.useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true);
    } else {
      // Wait for animation to finish before removing from DOM
      const timeout = setTimeout(() => setMenuVisible(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50' : ''
    }`}>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center">
            <h2 className='text-2xl font-bold text-[#ea6153]'>SOBUJ</h2>
          </div>
        </div>

        {/* Nav Links (desktop only) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive =
                (pathname === '/' && link.href === '/') ||
                (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-lg font-medium transition-all duration-200 relative group ${
                      isActive
                        ? 'text-[#ea6153] font-semibold'
                        : 'text-gray-900 dark:text-gray-300 hover:text-[#ea6153] font-semibold'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ea6153] transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : ''
                    }`} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side - Buttons and Theme Toggle */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Hire Me Button (desktop only) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-[#ea6153] hover:bg-[#e14b3a] text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Hire Me
            </Link>
          </div>
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Hamburger for mobile and tablet */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ea6153] transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`block w-6 h-0.5 bg-[#ea6153] mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#ea6153] mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#ea6153] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile and Tablet Menu Dropdown with animation */}
        {menuVisible && (
          <div
            className={`lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-t border-gray-200/50 dark:border-gray-700/50 z-40 transition-all duration-300 ease-in-out
            ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
          >
            <ul className="flex flex-col items-center py-6 space-y-3">
              {navLinks.map((link) => {
                const isActive =
                  (pathname === '/' && link.href === '/') ||
                  (pathname.startsWith(link.href) && link.href !== '/');
                return (
                  <li key={link.name} className="w-full">
                    <Link
                      href={link.href}
                      className={`block px-6 py-3 text-base font-medium w-full text-center transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        isActive
                          ? 'text-[#ea6153] font-semibold bg-gray-100 dark:bg-gray-800'
                          : 'text-gray-900 dark:text-gray-300 hover:text-[#ea6153] font-semibold'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              
              <li className="pt-3 w-full px-6">
                <Link
                  href="/contact"
                  className="block bg-[#ea6153] hover:bg-[#e14b3a] text-white px-8 py-3 rounded-lg text-base font-medium transition-all duration-200 shadow-md w-full text-center transform hover:-translate-y-0.5"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
