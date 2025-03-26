import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
