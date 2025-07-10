'use client'

import SectionTitle from '@/components/Shared/SectionTitle'
import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import sobuj from '@/assets/images/sobuj.jpg'
import Skills from '../Skills'
import Testimonials from '../Tesimonials'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const About = () => {

  const pathname = usePathname()


  return (
    <section className=" container mx-auto px-2 sm:py-14  md:py-16  w-full">
      <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${pathname === '/' ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'}`}>
        {/* Left: Image with border */}
        <div className="relative flex-shrink-0 mb-8 lg:mb-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#F26457] z-0 scale-105 hidden sm:block"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
            <Image src={sobuj} alt="Professional" width={340} height={420} className="object-cover w-full h-[320px] sm:h-[400px] md:h-[420px] rounded-2xl" />
          </div>
        </div>
        {/* Center: Main Content */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-10 w-full h-full">
          {/* Main Column */}
          <div className="flex-1 flex flex-col justify-between mb-8 md:mb-0 h-full min-h-[420px]">
            {/* SectionTitle moved above columns for alignment */}

            <div className="flex-1 flex flex-col items-start">
              <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold text-[#0A2942] leading-tight mb-4 self-start">Designing With Passion While Exploring The World</h2>
              <div className="w-12 sm:w-16 h-1 bg-[#F26457] mb-4 sm:mb-6 self-start"></div>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-8 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-8 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="mt-auto">
                <span className="text-base sm:text-lg text-[#0A2942]">Let's talk with me.</span>
                {pathname === '/' && <div className="text-lg sm:text-2xl font-bold text-[#0A2942] mt-2"><button className='bg-[#F26457] text-white px-4 py-2 rounded-md text-lg font-semibold'>contact Me</button></div>}
                {pathname === '/about' && <div className="text-lg sm:text-2xl font-bold text-[#0A2942] mt-2">contact@domain.com</div>}
              </div>
            </div>
          </div>
          {/* Side Column */}
          <div className="flex-1 flex flex-col justify-between h-full min-h-[420px]">
            {/* Empty div for alignment with SectionTitle */}
            <div className="hidden md:block "></div>
            <div className="flex flex-col items-start">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#0A2942] leading-tight mb-4 self-start">I Create Products Not Just Arts</h2>
              <div className="w-12 sm:w-16 h-1 bg-[#F26457] mb-4 sm:mb-6 self-start"></div>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-8 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-8 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            {/* Social Icons */}
            <div className="flex flex-row gap-6 sm:gap-8 text-2xl sm:text-3xl text-[#0A2942] mt-6 sm:mt-8 justify-start ">
              <Link href="#" aria-label="LinkedIn" className="hover:text-[#0077b5] transition-colors"><FaLinkedin /></Link>
              <Link href="#" aria-label="Instagram" className="hover:text-[#E4405F] transition-colors"><FaInstagram /></Link>
              <Link href="#" aria-label="Dribbble" className="hover:text-[#EA4C89] transition-colors"><FaDribbble /></Link>
              <Link href="#" aria-label="Behance" className="hover:text-[#1769ff] transition-colors"><FaBehance /></Link>
            </div>
          </div>
        </div>
      </div>
      {pathname === '/about' && <Skills />}
      {pathname === '/about' && <Testimonials />}
    </section>
  )
}

export default About
