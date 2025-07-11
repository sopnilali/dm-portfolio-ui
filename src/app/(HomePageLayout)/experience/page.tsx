import Experience from '@/components/Modules/Experience'
import React from 'react'

export const metadata = {
  title: 'Experience',
  description: 'Experience',
  keywords: ['Experience', 'Experience', 'Experience'],
  openGraph: {
    title: 'Experience',
    description: 'Experience'
  },
  alternates: {
    canonical: '/experience',
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

const ExperiencePage = () => {
  return (
    <div>
      <Experience/>
    </div>
  )
}

export default ExperiencePage
