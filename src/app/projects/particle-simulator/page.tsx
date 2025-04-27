import React from 'react';
import Link from 'next/link';
import { ArrowLeft, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export default function ParticleSimulatorPage() {
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
        
        <h1 className="text-4xl font-bold mb-4">Particle Simulator</h1>
        
        <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <video
            src="/particle-simulator.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-8">
          <Link
            href="https://github.com/Chen-Steve/particle-life"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black hover:text-gray-600 bg-white px-4 py-2 rounded-lg border-2 border-black transition-all hover:shadow-md"
          >
            <GithubLogo className="w-5 h-5 mr-2" />
            View Source
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700">
              A comprehensive particle simulation system that demonstrates emergent behavior through simple rules 
              and interactions between different particle types. There is a python & c/c++ version but the main version is JavaScript and HTML Canvas, 
              this project showcases both 2D and 3D particle simulations with various interaction rules.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Built with</h2>
            <ul className="grid grid-cols-2 gap-3">
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">JavaScript</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">HTML Canvas</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">WebGL</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">Custom Physics Engine</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">c/c++</span>
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium">python</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>2D and 3D particle simulation modes</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Customizable particle types and behaviors</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Real-time parameter adjustment</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Efficient collision detection</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-black rounded-full"></span>
                <span>Interactive visualization controls</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 