import EmailCopy from "@/components/base/emailcopy";
import ProjectSection from "@/components/sections/projectsection";
import VentureSection from "@/components/sections/venturesection";
import PagePadding from "@/components/utils/pagepadding";
import Link from "next/link";
import ExperienceCard from "@/components/base/experienceCard";
// import { useState } from "react";
import { ExperienceCardProps } from "@/components/base/experienceCard";
import ServiceCard, { ServiceCardProps } from "@/components/base/serviceCard";
import SocialLink from "@/components/base/socialLink";
import ScrollToFade from "@/components/utils/scrollToFade";

export default function Home() {
  
  // DATA

  const list_of_experience: ExperienceCardProps[] = [
    {
      img: "/images/logo-2025.png",
      alt_text: "My logo",
      position: "Web Developer & Software Engineer",
      company_name: "Freelance",
      end_date: "Today",
      start_date: "September 2024",
      link: "https://jeremiahjason.com",
      is_last: false
    },
    {
      img: "/images/gli-logo.png",
      alt_text: "Global Loyalty Indonesia logo",
      position: "Intern Backend Engineer",
      company_name: "Global Loyalty Indonesia",
      end_date: "September 2024",
      start_date: "September 2023",
      link: 'https://gli.id/',
      is_last:  false,
    },
    {
      img: "/images/geniora-logo.jpeg",
      alt_text: "Geniora logo",
      position: "Part-Time Web Developer",
      company_name: "Geniora",
      end_date: "September 2023",
      start_date: "September 2021",
      link: 'https://geniora.com',
      is_last: true,
    }
  ]
  const cv_link: string = '/files/JEREMIAH_JASON_RESUME_2025.pdf'

  const email = 'jeremiah.kaliki@gmail.com'
  
  const list_of_services: ServiceCardProps[] = [
    {
      name: 'Website Development',
      is_last: false
    },
    {
      name: 'API Development',
      is_last: false
    },
    {
      name: 'Web Application Development',
      is_last: true
    }
  ]

  return (
    <main>
      <section id="hero-section" className="w-screen bg-primary h-[28rem] md:h-[38rem]">
        <PagePadding>
          <div className="max-w-[80rem] mx-auto pt-32 md:pt-48 pb-40 md:pl-[10%]">
            <ScrollToFade>
            <h1 className="text-foreground md:text-whiteish font-semibold tracking-[-0.005em] text-[52px] md:text-[4rem] lg:text-[5rem] leading-[1.05]">
              Jeremiah Jason<br></br>
              Freelance software <br></br>
              engineer
            </h1>
            </ScrollToFade>
          </div>
        </PagePadding>
      </section>

      <ScrollToFade>
      <section id="short-intro" className="py-24 md:py-40 border-b border-b-secondary">
        <PagePadding>
          <div className="w-full md:max-w-[80rem] mx-auto md:pl-[10%]">
            <p className="text-3xl w-full md:max-w-[52ch] tracking-[-0.005rem] leading-[1.5] mb-8">
              Freelance software engineer and web developer. Based in Indonesia, Jakarta. Available for remote-friendly freelance work.
            </p>
            <div className="mt-2 flex gap-3 items-center ">
              <Link href={'mailto:'+email}>
                  <div className="bg-foreground text-whiteish px-7 py-4 rounded-xl text-lg w-max font-medium transition-all duration-300 ease-out hover:-translate-y-[2px]">
                      Email me →
                  </div>
              </Link>
              <EmailCopy email={email}></EmailCopy>
            </div>
          </div>
        </PagePadding>
      </section>
      </ScrollToFade>

      <ScrollToFade>
      <ProjectSection></ProjectSection> 
      </ScrollToFade>

      <ScrollToFade>
      <VentureSection></VentureSection>
      </ScrollToFade>

      <ScrollToFade>
      <section id="about-sections" className="py-24 md:py-40 border-b border-b-secondary">
          <PagePadding>
              <div className="max-w-[80rem] mx-auto">
              <div>
                  <div id="section-title" className="flex items-center justify-between border-t-2 border-t-foreground pt-7"> 
                      <h2 className="font-semibold text-4xl md:text-[3.5rem] tracking-tight text-foreground">About</h2>
                  </div>
                  <div id="about-content" className="mt-10 md:mt-20 w-full flex flex-col md:flex-row md:justify-between md:gap-24 lg:gap-40">
                      <div className="w-full md:w-1/2">
                        <p className="w-full mb-10 md:mb-0 md:max-w-[26ch] leading-[1.4] text-[28px] md:text-3xl font-medium tracking-tight">I’m JJ — a freelance software engineer and web developer. I care a lot about making an impactful softwares. Currently based in Jakarta, Indonesia.</p>
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col md:items-end">
                        <p className="w-full md:max-w-[38ch] leading-[1.5] text-2xl font-normal tracking-tight mb-6">Recently I’ve been trying to develop applications to help in my day to day activities. Alongside that, I’m launching my software engineer and web developing freelance and software development business, helping clients build robust, high-quality software solutions tailored to their needs.</p>
                        <p className="w-full md:max-w-[38ch] leading-[1.5] text-2xl font-normal tracking-tight mb-6">Before all this - I’m a recently graduated university student with experience in frontend programming, backend development, database design, API design and a little bit of system design gainned from doing internship at <Link href={'https://geniora.com'} className="font-semibold underline underline-offset-4 transition-all duration-300 ease-out hover:opacity-65  hover:skew-x-3" target="_blank">Geniora</Link> and <Link className="font-semibold underline underline-offset-4 transition-all duration-300 ease-out hover:opacity-65  hover:skew-x-3" href={'https://gli.id/'} target="_blank">GLI</Link> or Global Loyalty Indonesia, the company that created <Link className="font-semibold underline underline-offset-4 transition-all duration-300 ease-out hover:opacity-65  hover:skew-x-3" href={'https://alfagift.id/'} target="_blank">Alfagift</Link>.</p>
                      </div>
                  </div>
              </div>
              </div>
          </PagePadding>
      </section>
      </ScrollToFade>

      <ScrollToFade>
      <section id="experience-sections" className="py-24 md:py-40 border-b border-b-secondary">
          <PagePadding>
              <div className="max-w-[80rem] mx-auto">
              <div className="flex flex-col lg:flex-row justify-between lg:justify-between lg:gap-40">
                <div className="w-full lg:w-1/2">
                  <div id="section-title" className="flex items-center justify-between border-t-2 border-t-foreground pt-7 md:sticky top-[7.75rem]"> 
                      <h2 className="font-semibold text-4xl md:text-[3.5rem] tracking-tight text-foreground">Experience</h2>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex lg:justify-end mt-16 md:mt-32 lg:mt-0">
                  <div id="experience-content" className="flex justify-end flex-col gap-10 w-full">
                    { 
                      list_of_experience.map((a, i) => (
                        <ExperienceCard 
                          key={i}
                          img={a.img}
                          alt_text={a.alt_text}
                          position={a.position}
                          company_name={a.company_name}
                          end_date={a.end_date}
                          start_date={a.start_date}
                          link={a.link}
                        />
                      ))
                    }
                    <Link target="_blank" href={cv_link} className="mt-4">
                      <div className="w-full bg-foreground text-whiteish text-center rounded-xl py-4 px-8 leading-[1.5] font-medium text-lg transition-all duration-300 ease-out hover:-translate-y-[2px]">
                        See full CV →
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
          </PagePadding>
      </section>
      </ScrollToFade>

      <ScrollToFade>
      <section id="services-sections" className="py-24 md:py-40 border-b border-b-secondary">
          <PagePadding>
              <div className="max-w-[80rem] mx-auto">
              <div>
                  <div id="section-title" className="flex items-center justify-between border-t-2 border-t-foreground pt-7"> 
                      <h2 className="font-semibold text-4xl md:text-[3.5rem] tracking-tight text-foreground">Services</h2>
                  </div>

                  <div id="about-content" className="mt-5 md:mt-12 w-full flex flex-col">
                    { list_of_services.map((a, i) => (
                      <ServiceCard 
                        key={i}
                        name={a.name}
                        is_last={a.is_last}
                      />
                    ))}
                  </div>
              </div>
              </div>
          </PagePadding>
      </section>
      </ScrollToFade>
      
      <ScrollToFade>
      <section id="contact-sections" className="py-24 md:py-40">
          <PagePadding>
              <div className="max-w-[80rem] mx-auto">
              <div>
                  <div id="section-title" className="flex items-center justify-between border-t-2 border-t-foreground pt-7"> 
                      <h2 className="font-semibold text-4xl md:text-[3.5rem] tracking-tight text-foreground">Get in touch</h2>
                  </div>

                  <div id="contact-content" className="mt-10 md:mt-12 w-full flex flex-col">
                    <h3 className="text-[3.25rem] lg:text-[86px] font-medium leading-[1.2]">Have a project in mind?</h3>
                    <div className="w-full flex flex-col md:flex-row pt-12 md:pt-28 gap-10 md:gap-32 lg:gap-48">
                      <div className="w-full md:max-w-[720px]">
                        <p className="tracking-[-0.005em] text-2xl mb-6">Send some details about your project to <Link href={'mailto:'+email} className="underline underline-offset-8 font-semibold transition-all duration-300 ease-out hover:opacity-65">{email}</Link></p>
                        <p className="tracking-[-0.005em] text-2xl mb-6">I can help in creating a website, developing a Web Application or creating an API for your services and businesses.</p>
                        <p className="tracking-[-0.005em] text-2xl">Currently based in Jakarta, Indonesia — available for remote-friendly work.</p>

                        <div className="mt-8 md:mt-12 flex gap-3 items-center">
                          <Link href={'mailto:'+email}>
                              <div className="bg-foreground text-whiteish px-7 py-4 rounded-xl text-lg w-max font-medium transition-all duration-300 ease-out hover:-translate-y-[2px]">
                                  Email me →
                              </div>
                          </Link>
                          <EmailCopy email={email}></EmailCopy>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <SocialLink link="https://www.linkedin.com/in/jeremiahjason/" type="big">Linkedin</SocialLink>
                        <SocialLink link="https://www.instagram.com/jj.klki_/" type="big">Instagram</SocialLink>
                        <SocialLink link="https://github.com/JJmeh" type="big">Github</SocialLink>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
          </PagePadding>
      </section>
      </ScrollToFade>
    </main>
  );
}
