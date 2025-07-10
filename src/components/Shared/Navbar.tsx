'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

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
    <nav className="w-full bg-[#fdf9f8] py-4 px-4 sm:px-8 flex items-center justify-between relative z-20 ">
      <div className='container mx-auto flex items-center justify-between px-4 sm:px-4 lg:px-4'>
        {/* Logo */}
        <div className=" flex items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
            <h2 className='text-2xl font-bold text-[#ea6153]'>SOBUJ</h2>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ea6153]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-[#ea6153] mb-1 transition-all" />
          <span className="block w-6 h-0.5 bg-[#ea6153] mb-1 transition-all" />
          <span className="block w-6 h-0.5 bg-[#ea6153] transition-all" />
        </button>
        {/* Nav Links (desktop) */}
        <div className="hidden sm:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive =
                (pathname === '/' && link.href === '/') ||
                (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-lg font-medium transition-colors duration-200 ${isActive
                        ? 'text-[#ea6153] font-semibold'
                        : 'text-gray-800 hover:text-[#ea6153] font-semibold'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Hire Me Button (desktop) */}
        <div className="hidden sm:block">
          <Link
            href="/contact"
            className="bg-[#ea6153] hover:bg-[#e14b3a] text-white px-6 py-4 rounded-md text-base font-medium transition-colors duration-200 shadow-sm"
          >
            Hire Me
          </Link>
        </div>
        {/* Mobile Menu Dropdown with animation */}
        {menuVisible && (
          <div
            className={`sm:hidden absolute top-full left-0 w-full bg-[#fdf9f8] shadow-lg border-t border-gray-100 z-30 transition-all duration-250 ease-in-out
            ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
            style={{
              transitionProperty: 'opacity, transform',
            }}
          >
            <ul className="flex flex-col items-center py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  (pathname === '/' && link.href === '/') ||
                  (pathname.startsWith(link.href) && link.href !== '/');
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-2 text-base font-medium w-full text-center transition-colors duration-200 ${isActive
                          ? 'text-[#ea6153] font-semibold'
                          : 'text-gray-800 hover:text-[#ea6153] font-semibold'
                        }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block bg-[#ea6153] hover:bg-[#e14b3a] text-white px-8 py-3 rounded-md text-base font-medium transition-colors duration-200 shadow-sm w-full text-center"
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
