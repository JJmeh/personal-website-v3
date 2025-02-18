import React from "react"

interface PagePaddingProps {
    children: React.ReactNode
}

const PagePadding: React.FC<PagePaddingProps> = ({ children }) => {
    return (
        <div className="px-8 sm:px-16 md:px-20">
            {children}
        </div>
    )
}

export default PagePadding;