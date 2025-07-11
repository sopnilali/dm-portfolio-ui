'use client'
import React from 'react'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import { useGetAllTestimonialsQuery } from '@/components/Redux/features/testimonials/testimonialsApi'

const Testimonials = () => {

  const { data: testimonials, isLoading, isError } = useGetAllTestimonialsQuery(undefined);

  const testimonialsData = testimonials?.data || [];

  
  if (isLoading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
    )
}

if (isError || !testimonialsData) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl text-red-600 dark:text-red-400">Error loading testimonials</h1>
        </div>
    )
}

  return (
    <section className="w-full py-16 px-2 sm:px-6 md:px-12 bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-white text-gray-900 transition-colors duration-300">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2942] dark:text-white mb-2">What My Clients Says</h2>
        <div className="w-20 h-1 bg-[#ea6153] mx-auto mb-4"></div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((t: any, idx: number) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl duration-200">
            <FaQuoteLeft className="text-[#ea6153] text-3xl mb-4" />
            <div className="w-20 h-20 rounded-full border-4 border-[#ea6153] overflow-hidden mb-4">
              <Image src={t.photo} alt={t.name} width={80} height={80} className="object-cover w-full h-full" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">{t.description}</p>
            <div className="w-12 h-1 bg-[#ea6153] mx-auto mb-2"></div>
            <span className="text-lg font-medium text-[#0A2942] dark:text-white">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

