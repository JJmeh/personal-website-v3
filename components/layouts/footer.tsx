import Link from "next/link"
import PagePadding from "../utils/pagepadding";
import Image from "next/image";
import EmailCopy from "../base/emailcopy";
import FooterLink from "../base/footerlink";

const Footer = () => {

    const email = 'jeremiah.kaliki@gmail.com'

    return (
        <footer className="bg-primary top-0 w-screen pt-20 md:pt-32 lg:pt-40 pb-20 z-10">
            <PagePadding>
                <div className="flex w-full flex-col md:flex-row md:max-w-[80rem] mx-auto text-foreground justify-between items-start gap-20 md:gap-0">
                    <Link href='/' className="h-10 w-10 block pt-3 transition-all duration-300 ease-out hover:rotate-[-45deg] hover:opacity-60 ">
                        <Image
                            src='/images/J.svg'
                            width={40}
                            height={40}
                            alt="Logo of the Website"
                            className="h-10 w-10 rotate-[45deg]"
                        />
                    </Link>
                    <div className="w-full md:max-w-[70rem] md:ml-20">
                        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 w-full">
                            <h3 className="leading-[1.2] text-3xl font-medium max-w-[36rem] text-foreground">I’m JJ — a freelance software engineer and web developer based in Jakarta</h3>
                            <div className="flex gap-3 items-center">
                                <EmailCopy email={email} classname="px-5 py-3"></EmailCopy>
                                <Link href={'mailto:'+email}>
                                    <div className="bg-foreground text-whiteish px-5 py-3 rounded-xl text-lg w-max font-medium transition-all duration-300 ease-out hover:-translate-y-[2px]">
                                        Email me →
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <hr className="mt-16 mb-6 md:mt-20 md:mb-10 border-foreground"/>

                        <div className="flex">
                            <div className="flex flex-col gap-4 w-1/2 md:w-1/3">
                                <p className="text-foreground font-semibold">Social</p>
                                <div className="flex flex-col gap-2">
                                    <FooterLink link="https://www.linkedin.com/in/jeremiahjason/">Linkedin</FooterLink>
                                    <FooterLink link="https://www.instagram.com/jj.klki_/">instagram</FooterLink>
                                    <FooterLink link="https://github.com/JJmeh">Github</FooterLink>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 w-1/2 md:w-1/3">
                                <p className="text-foreground font-semibold">Ventures</p>
                                <div className="flex flex-col gap-2">
                                    <p className="text-foreground font-semibold">Coming Soon...</p>
                                </div>
                            </div>



                        </div>
                        <hr className="my-10 border-foreground"/>
                        <div className="flex flex-col gap-4 w-full md:w-1/3 h-max justify-end">
                            <p className="text-foreground font-normal">©2025 to ∞ Jeremiah Jason</p>
                        </div>
                    </div>
                </div>
            </PagePadding>
        </footer>
    )
}

export default Footer;