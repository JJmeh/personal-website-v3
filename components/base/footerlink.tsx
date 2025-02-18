import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface FooterLinkProps{
    link: string;
    children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ link, children}) => {

    return (
        <Link href={link} target="_blank" className={cn("w-max text-foreground underline underline-offset-4 font-semibold transition-all duration-300 ease-out hover:opacity-65 hover:skew-y-6 hover:no-underline")}>
            {children}
        </Link>
    )
}

export default FooterLink;