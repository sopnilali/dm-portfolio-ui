
import LayoutWraper from '@/components/Layouts/LayoutWraper'
import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {


    return (
        <LayoutWraper>
            <Navbar />
            {children}
            <Footer />
        </LayoutWraper>
    )
}

export default Layout
