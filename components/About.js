"use client";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="relative font-sora p-4 lg:p-10 mt-14 bg-[#1d1d1d]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Centered heading */}
          <div className="text-center mb-12">
            <h2 className="text-xs text-white/80 uppercase tracking-[0.2em] mb-3">
              ABOUT ME
            </h2>
            <div className="text-2xl lg:text-3xl font-medium">
              Who I Am
              <br />
              <span className="">
                And <span className="text-maincolor">What I Do</span>
              </span>
            </div>
          </div>

          {/* Paragraph below with noise background and border */}
          <div className="relative">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/noise1.png"
                alt="Background Noise"
                fill
                className="object-cover opacity-[0.1]" // Adjust opacity as needed
              />
            </div>
            <div className="relative p-6 lg:p-8 z-10 border border-white/10 rounded-lg">
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Hi, I'm Vaibhav, a passionate Frontend Developer based in
                Nashik. I hold a Bachelor's in Information Technology from
                Sandip Foundation, where I discovered my love for crafting
                beautiful and functional user interfaces.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                As a frontend developer, I thrive on turning creative ideas into
                interactive and responsive web experiences. I enjoy working with
                modern technologies to build intuitive designs that not only
                look great but also provide seamless user experiences.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                My journey in frontend development is fueled by a constant
                desire to learn and innovate. I believe in the power of clean
                code, thoughtful design, and user-centric solutions to make the
                web a better place—one project at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-white/20 my-12" />
      </div>
    </>
  );
};

export default About;
