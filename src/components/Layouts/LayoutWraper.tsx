'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { div } from 'framer-motion/client';

import React, { useEffect } from 'react'

const LayoutWraper = ({ children }: { children: React.ReactNode }) => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);




    return (
        <div className="relative min-h-screen">
            {/* Animated gradient background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 dark:from-gray-900 dark:via-gray-700 dark:to-gray-800 animate-gradient transition-colors duration-700"
                    style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradient 15s ease infinite',
                    }}
                />
                <div className="absolute inset-0 backdrop-blur-2xl bg-white/20 dark:bg-black/20 transition-colors duration-700" />
            </div>



            <div className="relative z-10  ">
                {children}
            </div>
        </div>
    )
}

export default LayoutWraper;