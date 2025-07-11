import React from 'react'

import HeroSection from '@/components/Shared/HeroSection'
import SectionTitle from '@/components/Shared/SectionTitle'
import About from '@/components/Modules/About'
import Services from '@/components/Modules/Services'
import Experience from '@/components/Modules/Experience'
import Testimonials from '@/components/Modules/Tesimonials'
import Portfolio from '@/components/Modules/Portfolio'
import Skills from '@/components/Modules/Skills'



export const metadata = {
  title: 'Welcome to Portfolio | Tohidul Islam',
  description: 'Welcome to Portfolio | Tohidul Islam',
  keywords: ['Tohidul Islam','Sobuj Ali', 'Tohidul Islam Sobuj Portfolio', 'Tohidul Islam Sobuj Home', 'Tohidul Islam Sobuj About', 'Tohidul Islam Sobuj Services', 'Tohidul Islam Sobuj Experience', 'Tohidul Islam Sobuj Portfolio', 'Tohidul Islam Sobuj Testimonials'],
  openGraph: {
    title: 'Welcome to Portfolio | Tohidul Islam',
    description: 'Home page of Tohidul Islam Sobuj',
    url: 'https://tohidulislamui.vercel.app',
    images: 'https://res.cloudinary.com/dbebxi5vg/image/upload/v1752129495/documents/n22c72jeoyfiajucyut7.jpg',
  },
  twitter: {
    title: 'Welcome to Portfolio | Tohidul Islam ',
    description: 'Portfolio Dashboard | Tohidul Islam',
    images: 'https://res.cloudinary.com/dbebxi5vg/image/upload/v1752129495/documents/n22c72jeoyfiajucyut7.jpg',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
  appleWebApp: {
    title: 'Portfolio Dashboard | Tohidul Islam',
    statusBarStyle: 'black-translucent',
  },
  appleWebAppStatusBarStyle: 'black-translucent',
  alternates: {
    canonical: 'https://tohidulislamui.vercel.app',
  }
}

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
      <Skills />
    </div>
  )
}

export default Home
