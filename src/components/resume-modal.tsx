"use client";

import React, { useEffect, useRef } from 'react';
import { updateCursor } from 'ipad-cursor';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import '../app/globals.css';
interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      updateCursor();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure this path is correct
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div ref={modalRef} className="block-icon">
        <Image
          src="/resume.png"
          alt="Resume"
          width={1000}
          height={1000}
          onClick={onClose}
          priority
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />
        <button
          onClick={handleDownload}
          className="icon-tag dark:bg-white dark:hover:bg-gray-200"
          aria-label="Download resume"
        >
          <FiDownload className="w-full h-full text-black" />
        </button>
      </div>
    </div>
  );
}