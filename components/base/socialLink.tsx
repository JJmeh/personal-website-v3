import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";

interface SocialLinkProps{
    link: string;
    type?: 'normal' | 'big';
    children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, children, type = 'normal' }) => {
    
    const additional_style: ClassValue = (type == 'big') ? 'text-3xl' : ''

    return (
        <Link href={link} target="_blank" className={cn("w-max text-foreground underline underline-offset-4 font-semibold transition-all duration-300 ease-out hover:opacity-65 hover:skew-y-3 hover:no-underline", additional_style)}>
            {children}
        </Link>
    )
}

export default SocialLink;