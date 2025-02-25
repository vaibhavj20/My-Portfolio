import Link from "next/link";

const Navbar2 = ({ scrollToSection }) => {
  return (
    <div className="relative z-20">
      <nav className="flex justify-end items-center p-6 lg:p-4">
        <div className="flex space-x-6 text-white text-sm">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-gray-300 transition-colors text-xs tracking-wide cursor-pointer hover-target"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("expedu")}
            className="hover:text-gray-300 transition-colors text-xs tracking-wide hover-target"
          >
            EXPERIENCE & EDUCATION
          </button>
          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors text-xs tracking-wide hover-target"
          >
            SKILLS
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-gray-300 transition-colors text-xs tracking-wide hover-target"
          >
            PORTFOLIO
          </Link>

          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors text-xs tracking-wide hover-target"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
