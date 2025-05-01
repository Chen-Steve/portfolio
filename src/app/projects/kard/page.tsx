import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe } from "@phosphor-icons/react/dist/ssr";

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

        <div className="mb-8">
          <Link
            href="https://kard.space/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black hover:text-gray-600 bg-white px-4 py-2 rounded-lg border-2 border-black transition-all hover:shadow-md"
          >
            <Globe className="w-5 h-5 mr-2" />
            Visit Website
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700">
              Kard is a full-stack flashcard website. It&apos;s meant to be a free alternative to quizlet.
            </p>
          </div>

          <div className="bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Built with</h2>
            <ul className="grid grid-cols-2 gap-3">
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">Next.js</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">TypeScript</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">Supabase</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">Tailwind CSS</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Create and manage flashcard decks</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Spaced repetition learning system</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Progress tracking and statistics</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Responsive design for all devices</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Real-time synchronization</span>
              </li>
            </ul>
          </div>

          
        </div>
      </div>
    </main>
  );
} 