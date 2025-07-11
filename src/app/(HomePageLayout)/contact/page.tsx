import ContactForm from '@/components/Modules/Contact/ContactForm'
import React from 'react'

export const metadata = {
  title: 'Contact',
  description: 'Contact',
  keywords: ['Contact', 'Contact', 'Contact'],
  openGraph: {
    title: 'Contact',
    description: 'Contact'
  },
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const ContactPage = () => {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default ContactPage
