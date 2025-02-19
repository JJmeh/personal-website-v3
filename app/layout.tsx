import type { Metadata } from "next";
import { geistSans } from "@/lib/font";
import "./globals.css";

import Navbar from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import PlausibleProvider from "next-plausible";
import StartupScreen from "@/components/base/startupscreen";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Jeremiah Jason · Freelance Software Developer",
  description: "Freelance Software Developer. I create landing pages, websites and web application. Available for hire",
  keywords: ["Software Engineer", "SEO", "Web Development", "Freelance", 'Available for hire', 'Jeremiah Jason'],
  authors: [{ name: "Jeremiah Jason" }],
  openGraph: {
    title: "Jeremiah Jason · Freelance Software Developer",
    description: "Freelance Software Developer. I create landing pages, websites and web application. Available for hire",
    url: "https://jeremiahjason.com",
    siteName: "Jeremiah Jason",
    images: [
      {
        url: "https://jeremiahjason.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website OG Image",
      },
    ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@your_twitter_handle",
  //   title: "Your Website Name",
  //   description: "Your Website Description for SEO",
  //   images: ["https://yourwebsite.com/og-image.jpg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <PlausibleProvider domain="jeremiahjason.com" customDomain="https://plausible.jeremiahjason.com" enabled selfHosted/>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jeremiah Jason",
              "jobTitle": "Software Engineer",
              "url": "https://jeremiahjason.com",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased bg-whiteish text-foreground`}
        >
        <StartupScreen>
          <Navbar></Navbar>
          <div id="nav-bar-spacer" className="h-20"></div>

          {children}

          <Footer></Footer>
        </StartupScreen>
      </body>
    </html>
  );
}
