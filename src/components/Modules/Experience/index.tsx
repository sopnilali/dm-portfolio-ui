'use client'
import React from 'react'
import { useGetAllExperienceQuery } from '@/components/Redux/features/experience/experienceApi';
import { formatDate } from '@/components/Shared/FormatDate';
import { usePathname } from 'next/navigation';

const Experience = () => {

  const { data: experience, isLoading, isError } = useGetAllExperienceQuery(undefined);

  const experienceData = experience?.data || [];

  const pathname = usePathname();


  if (isLoading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
    )
}

if (isError || !experience?.data) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl text-red-600 dark:text-red-400">Error loading experience</h1>
        </div>
    )
}




  return (
    <section className={`w-full  py-16 px-2 sm:px-6 md:px-12 bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-white text-gray-900 transition-colors duration-300 ${pathname === '/experience' ? 'mt-12' : ''}`}>
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2942] dark:text-white mb-2">Work Experience</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w-20 h-1 bg-[#ea6153] mx-auto mt-4"></div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experienceData.map((exp: any, idx: number) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col text-left transition-transform hover:-translate-y-1 hover:shadow-xl duration-200">
            <h3 className="text-lg md:text-xl font-semibold text-[#0A2942] dark:text-white mb-2">{exp.designation}</h3>
            <h4 className="text-base md:text-lg text-[#0A2942] dark:text-white mb-2">{exp.company}</h4>
            <div className="text-[#ea6153] text-base mb-4">{formatDate(exp.startDate)} - { exp.endDate ? formatDate(exp.endDate) : 'Continue'}</div>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-8">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
