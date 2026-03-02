"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter, usePathname } from "next/navigation";
import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (id) => {
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
  const overlay =
    mobileMenuOpen && mounted
      ? createPortal(
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            animation:
              "slideInFromLeft 0.35s cubic-bezier(0.4,0,0.2,1) forwards",
          }}
          className="bg-[#1d1d1d] flex flex-col items-center justify-center space-y-7"
        >
          <style>{`
            @keyframes slideInFromLeft {
              from { transform: translateX(-100%); opacity: 0.5; }
              to   { transform: translateX(0);     opacity: 1; }
            }
          `}</style>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-white text-2xl p-2"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <button
            onClick={() => handleNavClick("hero")}
            className="text-base text-white hover:text-maincolor transition-colors tracking-widest uppercase"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("education")}
            className="text-base text-white hover:text-maincolor transition-colors tracking-widest uppercase text-center"
          >
            Experience &amp; Education
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className="text-base text-white hover:text-maincolor transition-colors tracking-widest uppercase"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="text-base text-white hover:text-maincolor transition-colors tracking-widest uppercase"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-base text-white hover:text-maincolor transition-colors tracking-widest uppercase"
          >
            Contact
          </button>

          <div className="w-16 h-px bg-white/20" />

          <div className="flex space-x-4">
            <SocialLink
              href="https://www.linkedin.com/in/vaibhav-jamdhade-06535521b/"
              icon={<FaLinkedinIn />}
            />
            <SocialLink
              href="https://github.com/vaibhavj20"
              icon={<FaGithub />}
            />
            <SocialLink
              href="https://x.com/vaibhavj_20"
              icon={<FaTwitter />}
            />
          </div>

          <a
            href="mailto:vaibhavjamdhade2062001@gmail.com"
            className="text-sm text-white/50 hover:text-maincolor transition-colors"
          >
            vaibhavjamdhade2062001@gmail.com
          </a>
        </div>,
        document.body,
      )
      : null;

  return (
    <>
      {overlay}

      {/* Main nav bar */}
      <nav className="relative z-50 py-3 hover-target">
        <div className="container mx-auto px-4">
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="w-1/3">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/fav2.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center space-x-2">
                <SocialLink
                  href="https://www.linkedin.com/in/vaibhav-jamdhade-06535521b/"
                  icon={<FaLinkedinIn />}
                />
                <SocialLink
                  href="https://github.com/vaibhavj20"
                  icon={<FaGithub />}
                />
                <SocialLink
                  href="https://x.com/vaibhavj_20"
                  icon={<FaTwitter />}
                />
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

          {/* Mobile top bar */}
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
