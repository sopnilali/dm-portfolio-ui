import Portfolio from '@/components/Modules/Portfolio'
import React from 'react'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
  keywords: ['Portfolio', 'Portfolio', 'Portfolio'],
  openGraph: {
    title: 'Portfolio',
    description: 'Portfolio'
  },
  alternates: {
    canonical: '/portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const PortfolioPage = () => {
  return (
    <div>
      <Portfolio/>
    </div>
  )
}

export default PortfolioPage
