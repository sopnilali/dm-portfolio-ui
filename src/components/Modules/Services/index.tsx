import React from 'react'
// @ts-ignore
import services from './services.json'
import { MdOutlineDesignServices, MdOutlineCampaign, MdOutlineWeb } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'

const iconMap: Record<string, React.ReactNode> = {
  MdOutlineDesignServices: <MdOutlineDesignServices className="text-[#ea6153] text-4xl" />,
  MdOutlineCampaign: <MdOutlineCampaign className="text-[#ea6153] text-4xl" />,
  MdOutlineWeb: <MdOutlineWeb className="text-[#ea6153] text-4xl" />,
}

const Services = () => {
  return (
    <section className="w-full  py-16 px-2 sm:px-6 md:px-12">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2942] mb-2">What Services I'm Providing</h2>
        <p className="text-base text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s: any, idx: number) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl duration-200 h-full min-h-[400px]">
            <div className="w-16 h-16 rounded-full bg-[#ffe3e0] flex items-center justify-center mb-4">
              {iconMap[s.icon]}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0A2942] mb-4">{s.title}</h3>
            <p className="text-gray-700 text-base mb-8 flex-grow">{s.description}</p>
            <div className="flex-grow"></div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 hover:border-[#ea6153] transition-colors duration-200 mt-4">
              <FiArrowRight className="text-2xl text-gray-600 hover:text-[#ea6153] transition-colors duration-200" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
