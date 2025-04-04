"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, GithubLogo } from "@phosphor-icons/react";
import Image from 'next/image';
import Tooltip from './Tooltip';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const isParticleSimulator = project.title === "Particle Simulator";
  const imageName = project.title.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full" onClick={e => e.stopPropagation()}>
        <div className="w-full h-96 relative mb-4">
          {isParticleSimulator ? (
            <video
              src="/particle-simulator.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <Image
              src={`/${imageName}.png`}
              alt={`${project.title} preview`}
              fill
              className="object-contain"
            />
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="flex-grow mr-4">{project.description}</p>
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-md px-2 py-1 rounded"
          >
            Esc
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const isWebsite = project.link.startsWith('http') && !project.link.includes('github.com');
  const imageName = project.title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base sm:text-lg font-semibold text-black">{project.title}</h3>
        <div className="flex space-x-2">
          <Tooltip content={isWebsite ? "Website" : "GitHub"}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {isWebsite ? <Globe className="w-5 h-5" weight="regular" /> : <GithubLogo className="w-5 h-5" weight="regular" />}
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="bg-background rounded-lg overflow-hidden border-2 border-dotted border-gray-300 w-full h-48 relative cursor-default">
        {project.title === "Particle Simulator" ? (
          <video
            src="/particle-simulator.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={`/${imageName}.png`}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Kard",
      description: "A fullstack CRUD flashcard study app; nextjs, supabase, typescript, tailwindcss.",
      link: "https://kard.space/",
    },
    {
      title: "Particle Simulator",
      description: "A comprehensive 2D/3D particle simulator with diverse particle types and interactions. Entirely in JS/HTML.",
      link: "https://github.com/Chen-Steve/particle-life",
    },
    {
      title: "Lanry",
      description: "A Light Novel website for translators and readers",
      link: "https://lanry.space/",
    }
  ];

  return (
    <section id="projects" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8 underline text-center">My Projects</h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
