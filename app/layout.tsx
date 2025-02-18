import type { Metadata } from "next";
import { geistSans } from "@/lib/font";
import "./globals.css";

import Navbar from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export const metadata: Metadata = {
  title: "Jeremiah Jason · Freelance Software Developer",
  description: "Freelance Software Developer. I create landing pages, websites and web application. Available for hire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} antialiased bg-whiteish text-foreground`}
      >
        <Navbar></Navbar>
        <div id="nav-bar-spacer" className="h-20"></div>
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
