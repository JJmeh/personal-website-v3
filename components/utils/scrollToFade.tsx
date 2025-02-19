'use client'
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ScrollToFadeProps {
    children: React.ReactNode
}

const ScrollToFade: React.FC<ScrollToFadeProps> = ({children}) => {
    const [isVisible, setIsVisible] = useState(false)
    const domRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(!isVisible){
                setIsVisible(entry.isIntersecting)
            }
        }, {threshold: 0.3})

        const currentRef = domRef.current

        if(currentRef){
            observer.observe(currentRef);
        }
        return () => {
            if(currentRef){
                observer.unobserve(currentRef);
            }
        };
    }, [isVisible])

    return (
        <div
            ref={domRef}
            className={cn('transition-all ease-in-out duration-[1.2s]', !isVisible ? 'opacity-0 invisible' : 'opacity-100 visible')}
        >
            {children}
        </div>
    )
}

export default ScrollToFade;