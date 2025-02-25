// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const navLinks = [
//     { name: "HOME", href: "/" },
//     { name: "EXPERIENCE & EDUCATION", href: "/experience" },
//     { name: "SKILLS", href: "/skills" },
//     { name: "PORTFOLIO", href: "/portfolio" },
//     { name: "CONTACT", href: "/contact" },
//   ];

//   return (
//     <nav className="relative z-50 py-3 hover-target">
//       <div className="container mx-auto px-4">
//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center justify-between">
//           <div className="w-1/4">
//             <Link href="/" className="inline-block">
//               <Image
//                 src="/images/logo-light.png"
//                 alt="Logo"
//                 width={60}
//                 height={60}
//               />
//             </Link>
//           </div>
//           <div className="w-3/4 flex justify-end">
//             <ul className="flex space-x-8">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-white hover:text-maincolor transition-colors font-medium text-xs"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="lg:hidden flex items-center justify-between">
//           <Link href="/" className="inline-block">
//             <Image
//               src="/images/logo-light.png"
//               alt="Logo"
//               width={50}
//               height={50}
//             />
//           </Link>

//           <button
//             onClick={toggleMobileMenu}
//             className="text-2xl text-white z-50"
//           >
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Overlay */}
//         {mobileMenuOpen && (
//           <div className="fixed inset-0 bg-[#1d1d1d] z-40 flex flex-col items-center justify-center">
//             <ul className="flex flex-col items-center space-y-6">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-base text-white hover:text-maincolor transition-colors"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "EXPERIENCE & EDUCATION", id: "experience" },
    { name: "SKILLS", id: "skills" },
    { name: "PORTFOLIO", id: "portfolio" },
    { name: "CONTACT", id: "contact" },
  ];

  const navigateToSection = (id) => {
    setMobileMenuOpen(false);

    if (pathname === "/") {
      // If already on homepage, just scroll to section
      scrollToSection(id);
    } else {
      // If on another page, navigate to homepage with a section hash
      router.push(`/#${id}`);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Check for hash in URL when component mounts or URL changes
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      // Remove the # from the hash to get the ID
      const id = window.location.hash.substring(1);
      // Add a slight delay to ensure the page has fully loaded
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  }, [pathname]);

  return (
    <nav className="relative z-50 py-3 hover-target">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="w-1/4">
            <button
              onClick={() => navigateToSection("home")}
              className="inline-block"
            >
              <Image
                src="/images/logo-light.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </button>
          </div>
          <div className="w-3/4 flex justify-end">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigateToSection(link.id)}
                    className="text-white hover:text-maincolor transition-colors font-medium text-xs"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          <button
            onClick={() => navigateToSection("home")}
            className="inline-block"
          >
            <Image
              src="/images/logo-light.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </button>

          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-white z-50"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#1d1d1d] z-40 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigateToSection(link.id)}
                    className="text-base text-white hover:text-maincolor transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
