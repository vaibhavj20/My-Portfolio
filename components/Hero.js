"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="hero" className="relative font-sora">
      {/* Background shape with responsive clip-path */}
      <div className="absolute inset-0">
        <div className="w-full h-full lg:h-[610px] bg-transparent relative overflow-hidden rounded-md">
          <div className="absolute inset-0 bg-[#1d1d1d] clip-path-hero-desktop lg:clip-path-hero-mobile" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between px-4 sm:px-6 py-12 sm:py-16 lg:p-10 min-w-0">
        {/* Decorative blur dot */}
        <div className="hidden lg:block absolute top-80 right-1/4 w-20 h-20 bg-maincolor opacity-40 rounded-full blur-3xl" />

        {/* Left Section — Profile card */}
        <div className="flex flex-col items-center space-y-6 w-full lg:w-[400px] border border-white/5 rounded-md p-4 lg:p-8 bg-[#1d1d1d] lg:mt-[30px] mb-8 lg:mb-0">
          <div className="relative w-[200px] sm:w-[250px] lg:w-[285px] h-56 sm:h-64 min-w-0">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-center mb-2">
              Vaibhav Jamdhade
            </h2>
            <p className="text-white/80 text-[12px] text-center">
              AVAILABLE FOR FREELANCE
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-2">
            <a
              href="https://www.linkedin.com/in/vaibhav-jamdhade-06535521b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vaibhavj20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/vaibhavj_20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/4 lg:pl-16 xl:pl-20 text-center lg:text-left min-w-0">
          <div className="mb-8 sm:mb-12 mt-4 lg:mt-8 font-medium space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-maincolor">Vaibhav Jamdhade</span>,
            </h1>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              Frontend Developer
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              <span className="text-white/40">&amp;</span>{" "}
              {/* Decorative bordered box with corner dots */}
              <span className="relative inline-block">
                {/* Border box */}
                <span className="absolute inset-0 border border-white/20 rounded-sm pointer-events-none" />
                {/* Corner dots */}
                <span className="absolute -top-[3px] -left-[3px] w-[6px] h-[6px] bg-white rounded-full" />
                <span className="absolute -top-[3px] -right-[3px] w-[6px] h-[6px] bg-white rounded-full" />
                <span className="absolute -bottom-[3px] -left-[3px] w-[6px] h-[6px] bg-white rounded-full" />
                <span className="absolute -bottom-[3px] -right-[3px] w-[6px] h-[6px] bg-white rounded-full" />
                {/* Text with padding so it doesn't touch the border */}
                <span className="relative px-3 py-1">DevOps Engineer</span>
              </span>
            </h1>

            <p className="pt-2 text-white/60 text-sm sm:text-base font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              DevOps fresher with hands-on knowledge of cloud-native tech, CI/CD pipelines,
              Kubernetes &amp; IaC — combined with frontend expertise in React &amp; Next.js to
              build scalable, reliable applications end-to-end.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start items-center space-x-4 lg:space-x-6 hover-target">
            <Link
              href="#"
              className="px-4 py-2.5 sm:px-6 sm:py-3 border border-white rounded-lg hover:bg-white hover:text-black transition-colors text-sm sm:text-base"
            >
              Download CV
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2.5 sm:px-6 sm:py-3 bg-maincolor text-black rounded-lg hover:bg-opacity-90 transition-colors text-sm sm:text-base cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .clip-path-hero-desktop {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 87%,
              38% 87%,
              31% 100%,
              0 100%
            );
          }
        }

        @media (max-width: 1023px) {
          .clip-path-hero-mobile {
            clip-path: inset(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
