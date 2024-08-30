"use client";

import React from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.title === "FinSight") {
      e.preventDefault();
      toast.info("Currently Building... This project is under construction.");
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-300 hover:border-black transition duration-300 dark:bg-gray-200 dark:border-white">
      <h3 className="text-base sm:text-lg font-semibold text-black mb-2">{project.title}</h3>
      <p className="text-xs sm:text-sm text-gray-700 mb-3">{project.description}</p>
      {project.title === "FinSight" ? (
        <a
          href="#"
          onClick={handleClick}
          className="inline-flex items-center justify-center rounded-md bg-black text-white px-2 py-1 text-xs font-medium shadow transition-colors hover:bg-gray-800"
        >
          View Project
        </a>
      ) : (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-black text-white px-2 py-1 text-xs font-medium shadow transition-colors hover:bg-gray-800"
        >
          View Project
        </Link>
      )}
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Kard",
      description: "Fullstack CRUD website for creating and managing flashcards.",
      link: "https://kard-sandy.vercel.app/"
    },
    {
      title: "FinSight",
      description: "Bloomberg terminal alternative for stock analysis.",
      link: "#"
    },
    {
      title: "Particle Simulator",
      description: "A comprehensive 2D/3D particle simulator with diverse particle types and interactions.",
      link: "https://github.com/Chen-Steve/particle-life-main"
    },
    {
      title: "Coup Online",
      description: "An online version of the board game Coup!",
      link: "https://couponline-eight.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8 underline text-center">My Projects</h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProjectsSection;