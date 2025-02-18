'use client'

import Link from "next/link";
import Image from "next/image";

import NavLink from "../base/navlink";
import PagePadding from "../utils/pagepadding";
import HamburgetButton from "./hamburgerButton";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const click_event = (state: boolean) => {
        setIsSidebarOpen(state)
    }

    const email = 'jeremiah.kaliki@gmail.com'
    return (
        <header className="bg-primary fixed top-0 w-screen py-5 z-10">
            <PagePadding>
                <div className="h-10 flex justify-between items-center max-w-[80rem] mx-auto text-foreground">
                    <Link href='/' className="h-10 transition-all duration-300 ease-out hover:rotate-[-45deg] hover:opacity-60">
                        <Image
                            src='/images/J-w.svg'
                            width={40}
                            height={40}
                            alt="Logo of the Website"
                            className="h-10 rotate-[45deg] hidden md:block"
                        />
                        <Image
                            src='/images/J.svg'
                            width={40}
                            height={40}
                            alt="Logo of the Website"
                            className="h-10 rotate-[45deg] block md:hidden"
                        />
                    </Link>

                    <nav className="gap-8 items-center hidden md:flex">
                        <NavLink
                            link="/#project-sections"
                            text="Project"
                        />
                        <NavLink
                            link="/#about-sections"
                            text="About"
                        />
                        <NavLink
                            link="/#services-sections"
                            text="Services"
                        />
                        <NavLink
                            link="/#contact-sections"
                            text="Contact"
                        />
                        <Link href={'mailto:'+email}>
                            <div className="bg-whiteish text-foreground border-secondary border-2 px-4 py-3 rounded-lg text-sm transition-all duration-300 ease-out hover:-translate-y-[2px]">
                                Email me →
                            </div>
                        </Link>
                    </nav>
                    <HamburgetButton onClick={(s) => click_event(s)} classname="md:hidden" state={isSidebarOpen}></HamburgetButton>
                </div>
            </PagePadding>
            <div id="sidebar" className={cn("fixed z-30 bg-whiteish right-0 h-screen pt-36 px-16 top-0 border-2 transition-all duration-300 ease-out", isSidebarOpen ?  'translate-x-0' : 'translate-x-full')}>
                <nav className="flex flex-col gap-9 w-44 items-end">
                    <NavLink
                        link="/#project-sections"
                        text="Project"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <NavLink
                        link="/#about-sections"
                        text="About"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <NavLink
                        link="/#services-sections"
                        text="Services"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <NavLink
                        link="/#contact-sections"
                        text="Contact"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <Link href={'mailto:'+email}>
                        <div className="bg-foreground text-whiteish px-4 py-3 rounded-lg text-sm transition-all duration-300 ease-out hover:-translate-y-[2px]">
                            ← Email me
                        </div>
                    </Link>
                </nav>
            </div>
            <div className={cn("z-20 left-0 top-0 fixed bg-black w-screen h-screen transition-all duration-300 ease-out", isSidebarOpen ? 'opacity-35 pointer-events-auto cursor-pointer' : 'opacity-0 pointer-events-none')} onClick={() => click_event(false)}></div>
        </header>
    )
}

export default Navbar;