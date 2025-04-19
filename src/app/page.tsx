import Link from "next/link";
import ProjectsSection from '../components/project-section';
import ResumeButton from '../components/resume-button';
import ProjectsButton from '../components/projects-button';
import HeaderSection from '../components/header-section';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-[#F8F7F6] flex flex-col">
      <div className="w-11/12 md:w-3/5 mx-auto">
        <HeaderSection />

        <main className="flex-1">
          <section className="py-20 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
              <div className="w-48 h-48 lg:w-56 lg:h-56 overflow-hidden rounded-xl bg-gray-200 relative shrink-0 self-center lg:self-start">
                <img 
                  src="/headshot.jpg" 
                  alt="Steven Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 max-w-lg self-center lg:self-start">
                <p className="text-2xl text-center lg:text-left">
                  Computer Science and Statistics at UIUC.
                </p>
                <p className="text-lg text-center lg:text-left">
                  I like building with Python, React/TypeScript and C/C++.
                </p>
                <div className="flex gap-6">
                  <ProjectsButton />
                  <ResumeButton />
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
            © {currentYear} Steven Chen. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
