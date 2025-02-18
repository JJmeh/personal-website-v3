'use client'

import { useState } from "react"
import { cn } from "@/lib/utils";

interface EmailCopyProps {
    email: string;
    classname?: string;
}

const EmailCopy: React.FC<EmailCopyProps> = ({ email, classname='' }) => {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = async () => {
        try{
        await navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
        }catch(error){
        console.error('Failed to copy:', error)
        }
    }

    return (
        <button className={cn("px-7 py-4 rounded-xl text-lg w-[179px] border border-foreground font-medium transition-all duration-300 ease-out hover:-translate-y-[2px]", classname)} onClick={copyToClipboard}>
            {isCopied ? 'Copied!' : 'Copy My Email'}
        </button>
    )
}

export default EmailCopy;