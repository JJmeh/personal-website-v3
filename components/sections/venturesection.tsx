import PagePadding from "../utils/pagepadding";

const VentureSection = () => {
    return (
        <section id="venture-sections" className="py-24 md:py-40 border-b border-b-secondary">
            <PagePadding>
                <div className="max-w-[80rem] mx-auto">
                <div>
                    <div id="section-title" className="flex items-center justify-between border-t-2 border-t-foreground pt-7"> 
                        <h2 className="font-semibold text-4xl md:text-[3.5rem] tracking-tight text-foreground">Ventures</h2>
                    </div>
                    <div id="venture-content" className="mt-24 w-full">
                        <h2 className="font-semibold text-3xl md:text-5xl tracking-tight text-foreground text-center">Coming Soon...</h2>
                    </div>
                </div>
                </div>
            </PagePadding>
        </section>
    )
}

export default VentureSection;