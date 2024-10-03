"use client";

import React, { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumeUrl = "https://docs.google.com/document/d/1xmIMqafP0Zle2uJodoeWG2I6RN4yubo4GjkKqW9GLK0/edit";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-4 rounded-lg w-11/12 h-5/6 max-w-4xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            data-cursor="block"
          >
            Close
          </button>
        </div>
        <iframe 
          src={resumeUrl}
          className="w-full h-[calc(100%-4rem)]"
          title="My Resume"
        />
      </div>
    </div>
  );
};

export default ResumeModal;