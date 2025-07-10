import React from 'react'

import HeroSection from '@/components/Shared/HeroSection'
import SectionTitle from '@/components/Shared/SectionTitle'
import About from '@/components/Modules/About'
import Services from '@/components/Modules/Services'
import Experience from '@/components/Modules/Experience'
import Testimonials from '@/components/Modules/Tesimonials'
import Portfolio from '@/components/Modules/Portfolio'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SectionTitle title='About Me' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' />
      <About />
      <Services />
      <Experience />
      <Portfolio/>
      <Testimonials/>
    </div>
  )
}

export default Home
