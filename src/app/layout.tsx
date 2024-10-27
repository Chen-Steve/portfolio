import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const reiswar = localFont({
  src: '../../public/font/NeueMachina-Regular.otf', 
  display: 'swap',
  variable: '--font-reiswar',
});

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
      <body className={reiswar.className}>
        <div className="flex flex-col min-h-[100dvh] bg-[#F8F7F6] text-foreground dark:bg-gray-800 dark:text-white">
          {children}
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
