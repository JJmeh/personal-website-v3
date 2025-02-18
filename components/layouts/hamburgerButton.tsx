'use client'
import { cn } from "@/lib/utils"
// import React, { useState } from "react"

interface HamburgetButtonProps {
    onClick: (state: boolean) => void;
    state: boolean;
    classname?: string;
}

const HamburgetButton: React.FC<HamburgetButtonProps> = ({ onClick, classname = '', state = false }) => {
    const click_event = () => {
        onClick(!state)
    }

    return (    
        <button className={cn("text-text w-9 h-9 relative focus:outline-none bg-transparent z-40", classname)} onClick={click_event}>
            <span className="sr-only">Open main menu</span>
            <div className="block w-9 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" className={cn("block absolute h-0.5 w-9 bg-current transform transition duration-500 ease-in-out bg-foreground", state ? 'rotate-45' : ' -translate-y-2'  )}></span>
                <span aria-hidden="true" className={cn("block absolute h-0.5 w-9 bg-current transform transition duration-500 ease-in-out bg-foreground", state ? 'opacity-0' : '')}></span>
                <span aria-hidden="true" className={cn("block absolute h-0.5 w-9 bg-current transform  transition duration-500 ease-in-out bg-foreground", state ? '-rotate-45' : ' translate-y-2')}></span>
            </div>
        </button>
    )
}

export default HamburgetButton;