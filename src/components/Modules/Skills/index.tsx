'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import skills from './skills.json'
import { Skill } from '@/components/Types/skill.type'
import { div } from 'framer-motion/client'

const Skills = () => {

  const pathname = usePathname()


  return (
    <div className='w-full px-2 sm:px-6 md:px-12'>
     {/* Header */}
     {
      pathname === '/skill' ? (
        <div className="container py-16  mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2942] mb-2">Skills</h2>
        <p className="text-base text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w-20 h-1 bg-[#ea6153] mx-auto mt-4"></div>
      </div>
      ) : null
     }
     {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start justify-between mt-8">
      {/* Left Column */}
      <div className="flex-1 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2942] mb-2">Digital Marketing</h2>
        <div className="w-20 h-1 bg-[#ea6153] mb-6"></div>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipisci elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="mt-4 bg-[#ea6153] hover:bg-[#e14b3a] text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-200 shadow">
          Download CV
        </button>
      </div>
      {/* Right Column: Skills Bars */}
      <div className="flex-1 w-full h-full flex flex-col gap-8 ">
      {(skills as Skill[]).map((skill) => (
        <div key={skill.name} className="w-full">
          <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden flex items-center">
            <div
              className="h-6 bg-[#ea6153] rounded-full flex items-center pl-4 text-white text-sm font-medium transition-all duration-700"
              style={{ width: `${skill.percentage}%` }}
            >
              {skill.name}{skill.level ? ` (${skill.level})` : ''}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Skills
