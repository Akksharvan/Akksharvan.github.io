import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

import ActiveSectionContextProvider from "@/context/active-section-context";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akksharvan | Personal Portfolio",
  description: "Akksharvan is a full-time student studying Computer Science & Applied Mathematics at UNC Chapel Hill.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang = "en" className = "!scroll-smooth">
      <body className = {`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className = "bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"> </div>
        <div className = "bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"> </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
