"use client";

import { MdLightMode } from "react-icons/md";
import { PiMoonFill } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";

import Link from "next/link";
import Image from 'next/image';
import ProjectsSection from '../components/ProjectsSection';
import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex flex-col min-h-[100dvh] bg-background text-foreground dark:bg-gray-800 dark:text-white`}>
      <header className={`px-4 lg:px-6 w-4/5 mx-auto h-12 sm:h-14 flex items-center mt-5 border-2 border-black dark:border-gray-200`}>
        <Link href="#" className="flex items-center justify-center">
          <span className="font-bold text-xl sm:text-3xl">SC</span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-4">
          <button onClick={toggleDarkMode} className="text-sm font-medium hover:text-muted-foreground transition-colors">
            {isDarkMode ? <MdLightMode className="w-6 h-6 sm:w-7 sm:h-7" /> : <PiMoonFill className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-16">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-xl bg-gray-200 relative">
                  <Image 
                    src="/headshot.jpg" 
                    alt="Steven Chen" 
                    fill 
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px" 
                    style={{ objectFit: 'cover' }} 
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center lg:items-start space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-black dark:text-white text-center lg:text-left">
                  Steven Chen
                </h1>
                <p className="max-w-[500px] text-sm sm:text-base md:text-lg text-black text-center lg:text-left dark:text-gray-300">
                  A computer science student at UIUC.
                </p>
                <div className="flex justify-center lg:justify-start w-full items-center space-x-4">
                  <Link
                    href="#projects"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-black text-white px-6 text-sm font-medium shadow transition-colors hover:bg-gray-800 dark:bg-white dark:text-black"
                  >
                    View Works
                  </Link>
                  <Link href="https://www.linkedin.com/in/chensteven2077/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gray-200 transition-colors">
                    <CiLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                  </Link>
                  <Link href="https://github.com/Chen-Steve" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gray-200 transition-colors">
                    <IoLogoGithub className="w-6 h-6 sm:w-8 sm:h-8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <hr className="w-4/5 mx-auto mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-16 sm:mb-20 md:mb-24 lg:mb-30 border-t border-black dark:border-white" />

        <ProjectsSection />
      </main>
      <footer className="py-4 sm:py-6">
        <div className="container px-4 md:px-6">
          <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-300">
            © 2024 Steven Chen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}