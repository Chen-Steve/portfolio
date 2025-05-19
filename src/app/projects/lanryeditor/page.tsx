import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function LanryEditorPage() {
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
        
        <h1 className="text-4xl font-bold mb-4">LanryEditor</h1>
        
        <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/lanryeditor.png"
            alt="LanryEditor preview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700">
              LanryEditor is a specialized desktop application built with C/C++, designed specifically for 
              light novel writing and publishing. It provides a rich text editing environment with features 
              tailored to the unique needs of light novel authors and translators.
            </p>
          </div>

          <div className="bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Built with</h2>
            <ul className="grid grid-cols-2 gap-3">
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">C/C++</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">Qt Framework</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">SQLite</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">Custom Text Engine</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Advanced rich text editing capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Custom formatting templates for light novels</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Chapter organization and management</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Export to multiple formats (PDF, EPUB, HTML)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Integrated spell checking and grammar tools</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Auto-save and version control</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 