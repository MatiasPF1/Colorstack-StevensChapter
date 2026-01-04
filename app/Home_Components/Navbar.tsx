import Link from "next/link"; 

export default function Navbar() {
  return (
    // Navbar Container 
    <nav className="flex justify-center items-center gap-[40em] h-25 px-[4em] ">

      {/*Left Section: Stevens Name */}
      <Link href="/" className="text-[2.1em] font-bold tracking-[0.02em] text-[#c41230] transition-all duration-200 hover:-translate-y-1 inline-block">
        ColorStack @ Stevens
      </Link>


      {/* Right Section: Navigation Links */}
        <ul className="flex items-center gap-[2.5em] text-[1em] list-none">
        <li>
          <Link href="/" className=" text-[1.25em] no-underline text-[#222629] font-medium transition-all duration-200 hover:text-[#c41230] hover:-translate-y-1 inline-block">
            Home 
          </Link>
        </li>
        <li>
          <Link href="/about" className=" text-[1.25em] no-underline text-[#222629] font-medium transition-all duration-200 hover:text-[#c41230] hover:-translate-y-1 inline-block">
            Resources 
          </Link>
        </li>
        <li>
          <Link href="/events" className=" text-[1.25em] no-underline text-[#222629] font-medium transition-all duration-200 hover:text-[#c41230] hover:-translate-y-1 inline-block">
            E-Board
          </Link>
        </li>
        <li>
          <Link href="/contact" className=" text-[1.25em] no-underline text-[#222629] font-medium transition-all duration-200 hover:text-[#c41230] hover:-translate-y-1 inline-block">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
