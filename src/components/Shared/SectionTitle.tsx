'use client'
import React from 'react'

const SectionTitle = ({title, description}: {title: string, description?: string}) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>
      <p className=' text-base text-center max-w-[500px]'>{description}</p>
    </div>
  )
}

export default SectionTitle
