"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "HOME", id: "hero" },
    { name: "EXPERIENCE & EDUCATION", id: "education" },
    { name: "SKILLS", id: "skills" },
    { name: "PROJECTS", id: "projects" },
    { name: "CONTACT", id: "contact" },
  ];

  const navigateToSection = (id) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/?to=${id}`);
    }
  };

  // Portal overlay with slide-in from left animation
  const overlay = mobileMenuOpen && mounted
    ? createPortal(
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          animation: "slideInFromLeft 0.35s cubic-bezier(0.4,0,0.2,1) forwards",
        }}
        className="bg-[#1d1d1d] flex flex-col items-center justify-center space-y-7"
      >
        <style>{`
            @keyframes slideInFromLeft {
              from { transform: translateX(-100%); opacity: 0.5; }
              to   { transform: translateX(0);     opacity: 1; }
            }
          `}</style>

        {/* Close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-5 text-white text-2xl p-2"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {/* Nav links */}
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => navigateToSection(link.id)}
            className="text-base text-white hover:text-maincolor transition-colors tracking-widest uppercase text-center px-4"
          >
            {link.name}
          </button>
        ))}

        {/* Divider */}
        <div className="w-16 h-px bg-white/20" />

        {/* Social icons */}
        <div className="flex space-x-4">
          <SocialLink href="https://www.linkedin.com/in/vaibhav-jamdhade-06535521b/" icon={<FaLinkedinIn />} />
          <SocialLink href="https://github.com/vaibhavj20" icon={<FaGithub />} />
          <SocialLink href="https://x.com/vaibhavj_20" icon={<FaTwitter />} />
        </div>

        <a
          href="mailto:vaibhavjamdhade2062001@gmail.com"
          className="text-sm text-white/50 hover:text-maincolor transition-colors"
        >
          vaibhavjamdhade2062001@gmail.com
        </a>
      </div>,
      document.body
    )
    : null;

  return (
    <>
      {overlay}

      {/* Main nav bar */}
      <nav className="relative z-50 py-3 hover-target">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="w-1/4">
              <button onClick={() => navigateToSection("hero")} className="inline-block">
                <Image src="/images/fav2.png" alt="Logo" width={30} height={30} />
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

          {/* Mobile Top Bar */}
          <div className="lg:hidden flex items-center justify-between">
            <Link href="/" className="inline-block">
              <Image src="/images/fav2.png" alt="Logo" width={36} height={36} />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-2xl text-white p-1"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center text-sm border border-white/20 rounded-full hover:bg-white hover:text-[#1d1d1d] transition-colors"
    >
      {icon}
    </a>
  );
}
