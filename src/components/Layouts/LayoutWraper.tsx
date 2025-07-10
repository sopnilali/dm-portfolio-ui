'use client'

import React from 'react'

const LayoutWraper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative z-10  ">
            {children}
        </div>
    )
}

export default LayoutWraper;