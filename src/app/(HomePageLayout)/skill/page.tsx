import Skills from '@/components/Modules/Skills'
import React from 'react'

export const metadata = {
  title: 'Skills',
  description: 'Skills',
  keywords: ['Skills', 'Skills', 'Skills'],
  openGraph: {
    title: 'Skills',
    description: 'Skills'
  },
  alternates: {
    canonical: '/skill',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}


const SkillPage = () => {
  return (
    <div>
      <Skills />
    </div>
  )
}

export default SkillPage
