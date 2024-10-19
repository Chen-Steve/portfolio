"use client";

import { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <CustomCursor />
    </>
  );
}
