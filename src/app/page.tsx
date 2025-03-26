"use client";

import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image';
import ProjectsSection from '../components/project-section';
import { useState } from 'react';
import ResumeModal from '../components/resume-modal';

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7F6] flex flex-col">
      <div className="w-11/12 md:w-3/5 mx-auto">
        <header className="h-14 flex items-center justify-between mt-5">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl tracking-tighter">Steven Chen</h1>
            <div className="h-px flex-1 bg-black hidden md:block" />
          </div>
          <nav className="flex gap-8">
            <Link 
              href="https://www.linkedin.com/in/chensteven2077/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
            >
              <LinkedinLogo className="w-8 h-8" weight="light" />
            </Link>
            <Link 
              href="https://github.com/Chen-Steve" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
            >
              <GithubLogo className="w-8 h-8" weight="light" />
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          <section className="py-20 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
              <div className="w-48 h-48 lg:w-56 lg:h-56 overflow-hidden rounded-xl bg-gray-200 relative shrink-0 self-center lg:self-start">
                <Image 
                  src="/headshot.jpg" 
                  alt="Steven Chen" 
                  fill 
                  sizes="(max-width: 1024px) 192px, 224px" 
                  style={{ objectFit: 'cover' }} 
                  priority
                />
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 max-w-lg self-center lg:self-start">
                <p className="text-2xl text-center lg:text-left">
                  Computer Science and Statistics at UIUC.
                </p>
                <p className="text-lg text-center lg:text-left">
                  I like building with Python, React/TypeScript and PostgreSQL.
                </p>
                <div className="flex gap-6">
                  <button 
                    onClick={() => {
                      document.getElementById('projects-section')?.scrollIntoView({ 
                        behavior: 'smooth'
                      });
                    }}
                    className="text-sm underline hover:opacity-80 transition-opacity"
                  >
                    My projects
                  </button>
                  <button
                    onClick={() => setIsResumeModalOpen(true)}
                    className="text-sm underline hover:opacity-80 transition-opacity"
                  >
                    Resume
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <hr className="w-full mx-auto my-20 border-t-2 border-black" />

          <div id="projects-section">
            <ProjectsSection />
          </div>
        </main>

        <footer className="py-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Steven Chen. All rights reserved.
          </p>
        </footer>
      </div>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </div>
  );
}
