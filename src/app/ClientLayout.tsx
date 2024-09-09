"use client";

import { useEffect } from 'react';
import { initCursor, updateCursor, IpadCursorConfig } from 'ipad-cursor';

const cursorConfig: IpadCursorConfig = {
  normalStyle: { 
    background: 'rgba(255, 255, 255, 0.3)',
    border: '2px solid black',
    width: '16px',
    height: '16px',
    radius: '50%',
  },
  textStyle: { 
    background: 'rgba(255, 255, 255, 0.5)',
    border: '2px solid black',
    width: '2px',
    height: '24px',
    radius: '1px',
  },
  blockStyle: { 
    background: 'rgba(255, 255, 255, 0.2)',
    border: '2px solid black',
    radius: 'auto',
  },
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initCursor(cursorConfig);
      updateCursor();
    }
    return () => {
      // Clean up function if needed
    };
  }, []);

  useEffect(() => {
    updateCursor();
  }, [children]);

  return <>{children}</>;
}