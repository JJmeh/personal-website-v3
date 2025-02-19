'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface StartupScreenProps {
    children: React.ReactNode
}

const StartupScreen: React.FC<StartupScreenProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false)
        }, 3000);

        return () => clearTimeout(timeout)
    })

    return (
        <div>
            {!isVisible && children}
            <div className={cn("fixed top-0 left-0 w-screen h-screen bg-whiteish flex items-center justify-center transition-transform duration-[1.2s] ease-in-out z-50", !isVisible ? '-translate-y-full' : '-translate-y-0')}>
                <div className="relative flex items-center justify-center">
                    {/* Outer Pulsing Effect */}

                    {/* Logo Container */}
                    <div className="w-24 z-20 animate-scale-loop">
                        <Image 
                            src={'/images/logo-2025.png'}
                            alt='Website Logo'
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="absolute w-56 aspect-square rounded-full bg-primary animate-pulse-custom"></div>
                </div>
            </div>
        </div>
    )
}

export default StartupScreen