'use client'

import { useState } from "react";
import PagePadding from "../utils/pagepadding";

import { cn } from "@/lib/utils";

interface filterOptions {
    id: number;
    text: string;
}

const ProjectSection = () => {
    const [filter, setFilter] = useState(1)

    const chooseFilter = (id: number) => {
        setFilter(id)
    }

    const filter_options: filterOptions[] = [
        {
            id: 1,
            text: 'All'
        },
        {
            id: 2,
            text: 'Websites'
        },
        {
            id: 3,
            text: 'Web App'
        },
    ]

    return (
        <section id="project-sections" className="py-24 md:py-40 border-b border-b-secondary">
            <PagePadding>
                <div className="max-w-[80rem] mx-auto">
                <div>
                    <div id="section-title" className="flex gap-4 sm:gap-0 sm:items-center justify-between border-t-2 border-t-foreground pt-7 flex-col sm:flex-row"> 
                        <h2 className="font-semibold text-4xl md:text-[3.5rem] tracking-tight text-foreground">Projects</h2>
                        <div className="flex items-center gap-2 ">
                            {
                                filter_options.map(a => (
                                    <button onClick={() => chooseFilter(a.id)} key={a.id} className={cn(" px-5 py-2 rounded-full font-medium text-foreground transition-all duration-300 ease-out hover:-translate-y-[2px] text-xs md:text-base", filter == a.id ? 'bg-foreground text-whiteish' : 'bg-secondary')}>{a.text}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div id="projects-content" className="mt-24 w-full">
                        <h2 className="font-semibold text-3xl md:text-5xl tracking-tight text-foreground text-center">Coming Soon...</h2>
                    </div>
                </div>
                </div>
            </PagePadding>
        </section>
    )
}

export default ProjectSection;