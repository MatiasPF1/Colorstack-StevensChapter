import type { Metadata } from "next";  
import { Inter } from "next/font/google"; // Import For the Fonts 
import "./globals.css"; // Global CSS import
import Navbar from "./Home_Components/Navbar";

//1- Font Configuration For the Text

const inter = Inter({ 
  subsets: ["latin"],                //Only Accept Latin Chars 
  display: "swap",                   // Fallback Is shown until Inter Loads, then swaps
  fallback: ["Arial", "sans-serif"], // Options if Inter Fails to Load 
});


//2- Metadata: Title and Description

export const metadata: Metadata = { 
  // Metadata: Title and Description
  title: "ColorStack Stevens Chapter",
  description: "ColorStack Stevens Institute of Technology Chapter", 
};

//3- Root Layout Component


export default function RootLayout({ // Wrapping Layout Component
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning> {/* Apply Google Font to Body(inter)*/}

        <Navbar/>  {/*1st Component of the Website Layout*/}
        {children} {/* Main Content of the Page(page.tsx)*/}
      </body>
    </html>
  );
}
