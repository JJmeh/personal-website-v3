import Link from "next/link";
import React from "react";

interface NavLinkProps {
    link: string;
    text: string;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ link, text, onClick }) => {
    // const router = useRouter()

    const click_event = () => {
        if(onClick != undefined){
            onClick()
        }
    }

    return (
        <Link 
            href={link}
            className="w-max text-xl font-semibold tracking-normal text-foreground md:text-whiteish transition-all ease-out duration-300 hover:opacity-65 hover:skew-y-3"
        >
            <button onClick={click_event}>
            {text}
            </button>
        </Link>
    )
}

export default NavLink;