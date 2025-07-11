'use client'

import React, { useState, useEffect } from 'react'
// @ts-ignore
import portfolio from './portfolio.json'
import { useGetAllPortfolioQuery } from '@/components/Redux/features/portfolio/portfolioApi';
import { usePathname } from 'next/navigation';

const getSlidesToShow = () => {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  const { data: portfolio, isLoading, isError } = useGetAllPortfolioQuery(undefined);

  const pathname = usePathname();

  const portfolioData = portfolio?.data || [];
  console.log(portfolioData);

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (portfolioData.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % portfolioData.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [portfolioData.length]);

  // Calculate visible slides (right-to-left) only if data exists
  const slides = [];
  if (portfolioData.length > 0) {
    for (let i = 0; i < slidesToShow; i++) {
      // For RTL, show previous slides
      slides.push(portfolioData[(current + i) % portfolioData.length]);
    }
    slides.reverse();
  }

  console.log(slides);

  // Show loading state if data is not available
  if (isLoading) {
    return (
      <section className="w-full py-16 px-2 sm:px-6 md:px-12 bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-white text-gray-900 transition-colors duration-300">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">Loading portfolio...</p>
        </div>
      </section>
    );
  }

  // Show error state if there's an error
  if (isError) {
    return (
      <section className="w-full py-16 px-2 sm:px-6 md:px-12 bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-white text-gray-900 transition-colors duration-300">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">Error loading portfolio data</p>
        </div>
      </section>
    );
  }

  // Show empty state if no data
  if (portfolioData.length === 0) {
    return (
      <section className="w-full py-16 px-2 sm:px-6 md:px-12 bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-white text-gray-900 transition-colors duration-300">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">No portfolio items available</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`w-full py-16 px-2 sm:px-6 md:px-12 bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-white text-gray-900 transition-colors duration-300 ${pathname === '/portfolio' ? 'mt-12' : ''}`}>
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2942] dark:text-white mb-2">My Portfolio</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w-20 h-1 bg-[#ea6153] mx-auto mt-4"></div>
      </div>
      <div className="container mx-auto flex gap-8 justify-center items-center">
        {slides.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="group flex-1 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl max-w-[600px] min-w-0"
            style={{ minHeight: 320 }}
            target="_blank" rel="noopener noreferrer"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
              <img
                src={item.photo}
                alt={item.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              {/* Title always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end z-10">
                <span className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg">{item.title}</span>
              </div>
              {/* Description overlay on hover */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-white text-lg md:text-xl text-center px-6">{item.description || 'No description available.'}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
