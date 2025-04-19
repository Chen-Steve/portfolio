"use client";

export default function ProjectsButton() {
  const scrollToProjects = () => {
    document.getElementById('projects-section')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToProjects}
      className="text-sm underline hover:opacity-80 transition-opacity"
    >
      My projects
    </button>
  );
} 