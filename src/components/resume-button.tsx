"use client";

import { useState } from 'react';
import ResumeModal from './resume-modal';

export default function ResumeButton() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsResumeModalOpen(true)}
        className="text-sm underline hover:opacity-80 transition-opacity"
      >
        Resume
      </button>
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </>
  );
} 