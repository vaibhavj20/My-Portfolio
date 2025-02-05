// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FaGithub, FaLinkedin, FaBehance, FaDribbble } from "react-icons/fa";
// import Navbar from "./Navbar2";
// import About from "./About";
// import Skills from "./Skills";
// import Education from "./Education";
// import Projects from "./Projects";

// const Main = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <div className="relative font-sora">
//       {/* Background shape with responsive clip-path */}
//       <div className="absolute inset-0">
//         <div className="w-full h-full bg-transparent relative overflow-hidden rounded-lg">
//           {/* Main black shape with consistent gap */}
//           <div className="absolute inset-0 bg-[#1d1d1d] clip-path-below" />
//         </div>
//       </div>

//       {/* Navbar Component */}
//       <Navbar scrollToSection={scrollToSection} />

//       {/* Content */}
//       <div className="">
//         <Education />
//         <About />
//         <Skills />
//         <Projects />
//       </div>

//       <style jsx global>{`
//         .clip-path-below {
//           clip-path: polygon(100% 0, 40% 0, 33% 6%, 0 6%, 0 100%, 100% 100%);
//         }

//         @media (max-width: 1023px) {
//           .clip-path-below {
//             clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
//           }
//         }

//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Main;

"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaBehance, FaDribbble } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar2";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";

const CircularProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(
      Math.max((window.scrollY / totalHeight) * 100, 0),
      100
    );
    setScrollProgress(progress);

    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center justify-center z-[60] w-12 h-12 cursor-pointer transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          className="stroke-white transition-all duration-300"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 45}`}
          strokeDashoffset={2 * Math.PI * 45 * (1 - scrollProgress / 100)}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ChevronUp className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

const Main = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen font-sora">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-transparent">
          <div className="absolute inset-0 bg-[#1d1d1d] clip-path-below" />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar scrollToSection={scrollToSection} />

        <div className="relative">
          <Education />
          <About />
          <Skills />
          <Projects />
        </div>
      </div>

      <style jsx global>{`
        .clip-path-below {
          clip-path: polygon(100% 0, 40% 0, 33% 4%, 0 4%, 0 100%, 100% 100%);
          -webkit-clip-path: polygon(
            100% 0,
            40% 0,
            33% 4%,
            0 4%,
            0 100%,
            100% 100%
          );
        }

        @media (max-width: 1023px) {
          .clip-path-below {
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
            -webkit-clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Main;
