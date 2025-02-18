import Image from "next/image"
import Link from "next/link"
import React from "react";
import { cn } from "@/lib/utils";

export interface ExperienceCardProps {
    img: string;
    alt_text?: string;
    company_name: string;
    position: string;
    start_date: string;
    end_date: string;
    link?: string;
    is_last?: boolean
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ img, alt_text = 'A company Logo', company_name, position, start_date, end_date, link = '/', is_last = false }) => {
    return (
        <Link href={link} className="hover:opacity-55 transition-all duration-300 ease-out" target="_blank">
            <div id="card-exp" className={cn("flex gap-6 pb-10", !is_last ? 'border-b border-secondary' : '')}>
                <Image 
                src={img}
                width={64}
                height={64}
                alt={alt_text || 'A logo'}
                className="w-16 h-16 rounded-2xl"
                />
                <div>
                <h3 className="leading-[1.2] text-3xl font-semibold">{company_name}</h3>
                <h3 className="leading-[1.2] text-2xl font-medium">{position}</h3>
                <p className="mt-3 text-lg leading-[1.5] tracking-tight text-gray-500 font-medium">{start_date} → {end_date}</p>
                </div>
            </div>
        </Link>
    )
}

export default ExperienceCard;