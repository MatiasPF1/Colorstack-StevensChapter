"use client";
import Link from "next/link"; 
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Navbar Container 
    <nav className="relative flex justify-center md:justify-between items-center gap-4 h-20 px-4 md:px-8 max-w-[1400px] mx-auto w-full">

      {/*Left Section: Stevens Name */}
      <Link href="/" className="text-[1.40em] md:translate-x-50 md:text-[1.70em] font-bold tracking-[0.02em] text-[#c41230] transition-all duration-200 hover:-translate-y-1 inline-block">
        ColorStack @ Stevens
      </Link>

      {/* Only for Mobile: Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50 relative"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#c41230] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#c41230] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#c41230] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Right Section: Navigation Links */}
        <ul className={`flex items-center gap-[2.5em] -translate-x-30 text-[1em] list-none ${isMenuOpen ? 'flex' : 'hidden md:flex'} md:static absolute top-20 w-full md:w-auto flex-col md:flex-row bg-[#f7f7f7a0] md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-40`}>

        <li>
          <Link href="/" className=" text-[1.00em] no-underline text-[#222629] font-medium transition-all duration-200 hover:text-[#c41230] hover:-translate-y-1 inline-block">
            Home 
          </Link>
        </li>

         <li>
          <Link href="/E-Board_Components" className=" text-[1.00em] no-underline text-[#222629] font-medium transition-all duration-200 hover:text-[#c41230] hover:-translate-y-1 inline-block">
            E-Board
          </Link>
        </li>

        <li>
          <Link href="/Resources_Components" className=" text-[1.00em] no-underline text-[#222629] font-medium transition-all duration-200 hover:text-[#c41230] hover:-translate-y-1 inline-block">
            Resources 
          </Link>
        </li>

      </ul>
    </nav>
  );
}
