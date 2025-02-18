import React from "react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
    name: string;
    is_last?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, is_last = false }) => {
    return (
        <div className={cn("py-6 md:py-9 lg:py-12 w-full", !is_last ? 'border-b border-secondary' : '')}>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium">{name}</h3>
        </div>
    )
}

export default ServiceCard;