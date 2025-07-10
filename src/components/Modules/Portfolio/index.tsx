'use client'

import React, { useState, useEffect } from 'react'
// @ts-ignore
import portfolio from './portfolio.json'

const getSlidesToShow = () => {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev - 1 + portfolio.length) % portfolio.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Calculate visible slides (right-to-left)
  const slides = [];
  for (let i = 0; i < slidesToShow; i++) {
    // For RTL, show previous slides
    slides.push(portfolio[(current - i + portfolio.length) % portfolio.length]);
  }
  slides.reverse();

  return (
    <section className="w-full py-16 px-2 sm:px-6 md:px-12">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2942] mb-2">My Portfolio</h2>
        <p className="text-base text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w-20 h-1 bg-[#ea6153] mx-auto mt-4"></div>
      </div>
      <div className="container mx-auto flex gap-8 justify-center items-center">
        {slides.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="group flex-1 rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl max-w-[600px] min-w-0"
            style={{ minHeight: 320 }}
            target="_blank" rel="noopener noreferrer"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
              <img
                src={item.image}
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
