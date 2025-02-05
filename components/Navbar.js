// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaBehance,
//   FaGithub,
//   FaLinkedinIn,
//   FaDribbble,
//   FaBars,
// } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <nav className="relative z-10 py-3">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           <div className="w-1/3">
//             <Link href="/" className="inline-block">
//               <Image
//                 src="/images/logo-light.png"
//                 alt="Logo"
//                 width={60}
//                 height={60}
//               />
//             </Link>
//           </div>
//           <div className="w-1/3">
//             <div className="flex justify-center space-x-4">
//               <SocialLink href="#" icon={<FaBehance />} />
//               <SocialLink href="#" icon={<FaGithub />} />
//               <SocialLink href="#" icon={<FaLinkedinIn />} />
//               <SocialLink href="#" icon={<FaDribbble />} />
//             </div>
//           </div>
//           <div className="w-1/3 text-right">
//             <a
//               href="mailto:Gavi@website.com"
//               className="text-xs text-white hover:text-maincolor transition-colors"
//             >
//               Gavi@website.com
//             </a>
//           </div>
//         </div>
//         <button className="lg:hidden absolute top-7 right-4 text-2xl text-white">
//           <FaBars />
//         </button>
//       </div>
//     </nav>
//   );
// }

// function SocialLink({ href, icon }) {
//   return (
//     <a
//       href={href}
//       className="w-10 h-10 flex items-center justify-center text-sm border border-white/20 rounded-full hover:bg-white hover:text-[#1d1d1d] transition-colors"
//     >
//       {icon}
//     </a>
//   );
// }

// function NavItem({ href, text }) {
//   return (
//     <li>
//       <a
//         href={href}
//         className="text-xs uppercase tracking-wider hover:text-maincolor transition-colors"
//       >
//         {text}
//       </a>
//     </li>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaDribbble,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="relative z-50 py-3 hover-target">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="w-1/3">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-light.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <div className="w-1/3">
            <div className="flex justify-center space-x-2">
              <SocialLink href="#" icon={<FaBehance />} />
              <SocialLink href="#" icon={<FaGithub />} />
              <SocialLink href="#" icon={<FaLinkedinIn />} />
              <SocialLink href="#" icon={<FaDribbble />} />
            </div>
          </div>
          <div className="w-1/3 text-right">
            <a
              href="mailto:vaibhavjamdhade2062001@gmail.com"
              className="text-xs text-white hover:text-maincolor transition-colors"
            >
              vaibhavjamdhade2062001@gmail.com
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo-light.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-white z-50"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#1d1d1d] z-40 flex flex-col items-center justify-center space-y-8">
            <div className="flex space-x-4 mb-8">
              <SocialLink href="#" icon={<FaBehance />} />
              <SocialLink href="#" icon={<FaGithub />} />
              <SocialLink href="#" icon={<FaLinkedinIn />} />
              <SocialLink href="#" icon={<FaDribbble />} />
            </div>

            <a
              href="mailto:vaibhavjamdhade2062001@gmail.com"
              className="text-lg text-white hover:text-maincolor transition-colors"
            >
              vaibhavjamdhade2062001@gmail.com
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="w-9 h-9 flex items-center justify-center text-sm border border-white/20 rounded-full hover:bg-white hover:text-[#1d1d1d] transition-colors"
    >
      {icon}
    </a>
  );
}
