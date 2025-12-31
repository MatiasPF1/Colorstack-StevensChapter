import Link from "next/link"; 

export default function Navbar() {
  return (
    // Navbar Container 
    <nav className="flex justify-center items-center gap-[35em] h-30 px-[4em] ">

      {/*Left Section: Stevens Name */}
      <Link href="/" className="text-[2em] font-bold tracking-[0.02em] text-[#c41230]">
        ColorStack @ Stevens
      </Link>


      {/* Right Section: Navigation Links */}
        <ul className="flex items-center gap-[2.5em] text-[1em] list-none">
        <li>
          <Link href="/" className=" text-[1.35em] no-underline text-[#222629] font-medium transition-colors duration-200 hover:text-[#c41230]">
            Home 
          </Link>
        </li>
        <li>
          <Link href="/about" className=" text-[1.35em] no-underline text-[#222629] font-medium transition-colors duration-200 hover:text-[#c41230]">
            Resources 
          </Link>
        </li>
        <li>
          <Link href="/events" className=" text-[1.35em] no-underline text-[#222629] font-medium transition-colors duration-200 hover:text-[#c41230]">
            E-Board
          </Link>
        </li>
        <li>
          <Link href="/contact" className=" text-[1.35em] no-underline text-[#222629] font-medium transition-colors duration-200 hover:text-[#c41230]">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
