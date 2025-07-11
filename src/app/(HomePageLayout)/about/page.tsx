import About from '@/components/Modules/About'
import React from 'react'

export const metadata = {
  title: 'About',
  description: 'About',
  keywords: ['About', 'About', 'About'],
  openGraph: {
    title: 'About',
    description: 'About'
  },
  alternates: {
    canonical: '/about',
  },
  robots: {
    index: true,
    follow: true,
  },
}


const AboutPages = () => {
  return (
    <div className=' '>
      <About />
    </div>
  )
}

export default AboutPages
