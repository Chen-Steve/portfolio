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
      <>
        <header className="w-full sm:w-11/12 md:w-3/5 lg:w-1/2 mx-auto h-12 sm:h-14 flex items-center justify-between mt-5 px-4 sm:px-0">
          <div className="flex items-center gap-2 sm:gap-4 flex-1">
            <h1 className="text-2xl sm:text-xl md:text-2xl tracking-tighter text-black dark:text-white whitespace-nowrap">
              Steven Chen
            </h1>
            <div className="h-px flex-1 mr-2 bg-black dark:bg-white" />
          </div>
          <nav className="flex gap-1 sm:gap-2 md:gap-2 items-center">
            <Link 
              href="https://www.linkedin.com/in/chensteven2077/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1 rounded-full transition-colors group" 
            >
              <CiLinkedin className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" />
            </Link>
            <Link 
              href="https://github.com/Chen-Steve" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1 rounded-full transition-colors group" 
            >
              <IoLogoGithub className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" />
            </Link>
            
          </nav>
        </header>
      </>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-10 md:py-14 lg:py-20 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-12">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-xl bg-gray-200 relative">
                  <Image 
                    src="/headshot.jpg" 
                    alt="Steven Chen" 
                    fill 
                    sizes="(max-width: 540px) 160px, (max-width: 1024px) 192px, 224px" 
                    style={{ objectFit: 'cover' }} 
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-center lg:items-start space-y-3">
                <p 
                  className="max-w-[450px] text-2xl sm:text-lg md:text-2xl text-center lg:text-left text-black dark:text-gray-300"
                  data-cursor="text"
                >
                  Computer Science and Statistics at UIUC.
                </p>
                <p 
                  className="max-w-[450px] text-md sm:text-lg md:text-md text-center lg:text-left text-black dark:text-gray-300"
                  data-cursor="text"
                >
                  I like building with Python, React/TypeScript and PostgreSQL.
                </p>
                <div className="flex space-x-3">
                  <ScrollLink 
                    to="projects-section" 
                    smooth={true} 
                    duration={500} 
                    className="text-xs sm:text-sm text-black dark:text-gray-300 underline"
                  >
                    My projects
                  </ScrollLink>
                  <button
                    onClick={() => setIsResumeModalOpen(true)}
                    className="text-xs sm:text-sm text-black dark:text-gray-300 underline"
                  >
                    Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <hr className="w-2/4 mx-auto mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-16 sm:mb-20 md:mb-24 lg:mb-30 border-t border-black dark:border-white" />

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
