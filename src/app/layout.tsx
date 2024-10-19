import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven Chen - Portfolio",
  description: "A CS and Stats student at UIUC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-[100dvh] bg-[#F8F7F6] text-foreground dark:bg-gray-800 dark:text-white">
          {children}
        </div>
        <ToastContainer />
        <CustomCursor />
      </body>
    </html>
  );
}
