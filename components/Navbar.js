"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      {/* Mobile Full-Screen Overlay — z-[60] so it covers everything */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1d1d1d] z-[60] flex flex-col items-center justify-center space-y-7">
          {/* Single close button inside overlay */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-white text-2xl p-2"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          {/* Section nav links--- */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl text-white hover:text-maincolor transition-colors tracking-widest uppercase"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-xl text-white hover:text-maincolor transition-colors tracking-widest uppercase text-center"
          >
            Experience &amp; Education
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-xl text-white hover:text-maincolor transition-colors tracking-widest uppercase"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-xl text-white hover:text-maincolor transition-colors tracking-widest uppercase"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-xl text-white hover:text-maincolor transition-colors tracking-widest uppercase"
          >
            Contact
          </button>

          {/* Divider */}
          <div className="w-16 h-px bg-white/20" />

          {/* Social icons */}
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
        </div>
      )}

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

          {/* Mobile top bar — only logo + hamburger, NO X here */}
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
