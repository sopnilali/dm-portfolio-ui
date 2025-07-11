'use client'

import React from 'react';
import logo from '@/assets/images/sobuj.jpg'
import { FaLinkedin, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.7,
      duration: 0.5,
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-white text-gray-900 min-h-[90vh] flex items-center justify-center px-8 transition-colors duration-500">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="flex-1">
          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#0A2942] dark:text-white leading-tight mb-2"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I'm Tohidul Islam <span className='text-[#ea6153]'>Sobuj</span>
          </motion.h1>
          <motion.h2
            className="text-5xl md:text-4xl font-bold text-[#0A2942] dark:text-white mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Digital Marketer
          </motion.h2>
          {/* Description */}
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leo. Ilamcorper, lorem ipsum.
          </motion.p>
          {/* Button */}
          <motion.div
            className='flex flex-row gap-4'
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <motion.button
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F26457] text-white hover:scale-98 hover:duration-300 px-8 py-3 rounded-md text-lg font-semibold shadow hover:bg-[#e55347] transition mb-8"
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 dark:border-gray-600 hover:scale-98 hover:duration-300 text-gray-900 dark:text-white px-8 py-3 rounded-md text-base font-semibold shadow transition mb-8 bg-white dark:bg-gray-800"
            >
              Download CV
            </motion.button>
          </motion.div>
          {/* Social Icons */}
          <motion.div
            className="flex flex-row gap-6 text-2xl text-[#0A2942] dark:text-white mt-2"
            initial="hidden"
            animate="visible"
          >
            {[FaLinkedin, FaInstagram, FaDribbble, FaBehance].map((Icon, idx) => (
              <motion.span
                key={idx}
                variants={iconVariants}
                custom={idx + 1}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  aria-label={
                    ["LinkedIn", "Instagram", "Dribbble", "Behance"][idx]
                  }
                  className={
                    [
                      "hover:text-[#0077b5]",
                      "hover:text-[#E4405F]",
                      "hover:text-[#EA4C89]",
                      "hover:text-[#1769ff]",
                    ][idx]
                  }
                >
                  <Icon size={28} />
                </Link>
              </motion.span>
            ))}
          </motion.div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-first lg:order-last pt-10"
          >
            <motion.div
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-square border-4 scale-85 border-gray-200/50 dark:border-gray-700/50 rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] backdrop-blur-xl bg-white dark:bg-gray-800/20"
            >
              <img
                src={logo.src}
                alt="Professional Woman"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
