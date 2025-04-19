"use client";

import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function HeaderSection() {
  return (
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
  );
} 