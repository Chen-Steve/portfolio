"use client";

import React from 'react';
import Link from 'next/link';
import { Globe, GithubLogo } from "@phosphor-icons/react";
import Tooltip from './Tooltip';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isWebsite = project.link.startsWith('http') && !project.link.includes('github.com');
  const imageName = project.title.toLowerCase().replace(/\s+/g, '-');
  const projectPath = `/projects/${imageName}`;

  return (
    <div className="group relative flex flex-col">
      <div className="flex justify-between items-center h-10">
        <h3 className="text-base sm:text-lg font-semibold text-black">{project.title}</h3>
        <div className="flex space-x-2 min-w-[40px] justify-end">
          {project.link && (
            <Tooltip content={isWebsite ? "Website" : "GitHub"}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors p-2"
                onClick={(e) => e.stopPropagation()}
              >
                {isWebsite ? (
                  <Globe className="w-5 h-5" weight="regular" />
                ) : (
                  <GithubLogo className="w-5 h-5" weight="regular" />
                )}
              </Link>
            </Tooltip>
          )}
        </div>
      </div>

      <Link href={projectPath} className="block mt-2">
        <div className="bg-background rounded-lg overflow-hidden border-2 border-dotted border-gray-300 w-full h-48 relative">
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
            <img
              src={`/${imageName}.png`}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
        </div>
      </Link>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
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
    },
    {
      title: "LanryEditor",
      description: "A desktop rich text editor built with C/C++, designed specifically for writing and publishing light novels with advanced formatting capabilities.",
      link: "",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
