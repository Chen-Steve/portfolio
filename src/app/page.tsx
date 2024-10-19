"use client";

import { MdLightMode } from "react-icons/md";
import { PiMoonFill } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";

import Link from "next/link";
import Image from 'next/image';
import ProjectsSection from '../components/project-section';
import { useState, useEffect } from 'react';
import ResumeModal from '../components/resume-modal';
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#F8F7F6] text-foreground dark:bg-gray-800 dark:text-white">
      <header className="px-4 lg:px-6 w-4/5 mx-auto h-12 sm:h-14 flex items-center mt-5">
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
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-black dark:text-white text-center lg:text-left w-full"
                  data-cursor="text"
                >
                  Steven Chen
                </h1>
                <p 
                  className="max-w-[500px] text-md sm:text-md md:text-lg text-black text-left dark:text-gray-300"
                  data-cursor="text"
                >
                  Computer Science and Statistics at UIUC.
                </p>
                <ScrollLink 
                  to="projects-section" 
                  smooth={true} 
                  duration={500} 
                  className="text-sm sm:text-base text-black dark:text-gray-300 underline"

                >
                  My projects
                </ScrollLink>
                <div className="flex justify-center lg:justify-start w-full items-center space-x-2">
                  <button
                    onClick={() => setIsResumeModalOpen(true)}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-black text-white px-4 text-lg font-medium shadow transition-colors hover:bg-gray-800 dark:bg-white dark:text-black"

                  >
                    Resume
                  </button>
                  <Link 
                    href="https://www.linkedin.com/in/chensteven2077/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-1 rounded-full transition-colors group" 
                  >
                    <CiLinkedin className="w-6 h-6 sm:w-7 sm:h-7 text-black dark:text-white" />
                  </Link>
                  <Link 
                    href="https://github.com/Chen-Steve" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-1 rounded-full transition-colors group" 
                  >
                    <IoLogoGithub className="w-6 h-6 sm:w-7 sm:h-7 text-black dark:text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <hr className="w-4/5 mx-auto mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-16 sm:mb-20 md:mb-24 lg:mb-30 border-t border-black dark:border-white" />

        <div id="projects-section">
          <ProjectsSection />
        </div>
      </main>
      <footer className="py-4 sm:py-6" data-cursor="text">
        <div className="container px-4 md:px-6">
          <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-300">
            © 2024 Steven Chen. All rights reserved.
          </p>
        </div>
      </footer>
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </div>
  );
}
