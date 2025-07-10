import React from 'react'
// @ts-ignore
import experience from './experience.json'

const Experience = () => {
  return (
    <section className="w-full py-16 px-2 sm:px-6 md:px-12">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2942] mb-2">Work Experience</h2>
        <p className="text-base text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w-20 h-1 bg-[#ea6153] mx-auto mt-4"></div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experience.map((exp: any, idx: number) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col text-left transition-transform hover:-translate-y-1 hover:shadow-xl duration-200">
            <h3 className="text-lg md:text-xl font-semibold text-[#0A2942] mb-2">{exp.name}</h3>
            <div className="text-[#ea6153] text-base mb-4">{exp.startDate}-{exp.endDate ? exp.endDate : 'Continue'}</div>
            <p className="text-gray-700 text-base mb-8">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
