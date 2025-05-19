import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export default function KardPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Kard</h1>
        
        <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/kard.png"
            alt="Kard preview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-8 flex gap-4">
          <Link
            href="https://kard.space/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black hover:text-gray-600 bg-white px-4 py-2 rounded-lg border-2 border-black transition-all hover:shadow-md"
          >
            <Globe className="w-5 h-5 mr-2" />
            Website
          </Link>
          <Link
            href="https://github.com/Chen-Steve/Kard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black hover:text-gray-600 bg-white px-4 py-2 rounded-lg border-2 border-black transition-all hover:shadow-md"
          >
            <GithubLogo className="w-5 h-5 mr-2" />
            Source
          </Link>
        </div>

        <div className="">
            <p className="text-gray-700">
              Kard is a full-stack flashcard website. It&apos;s a a free alternative to quizlet. (Deprecated for now)
            </p>
        </div>
        
      </div>
    </main>
  );
} 