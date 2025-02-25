"use client";
import Image from "next/image";
import { Award } from "lucide-react";
import { Globe } from "lucide-react";

const Education = () => {
  return (
    <>
      <div id="education" className="relative font-sora p-4 lg:p-10 mt-14">
        <div className="text-center mb-20">
          <div className="absolute top-20 left-[320px] w-20 h-20 bg-maincolor opacity-20 rounded-full blur-2xl" />
          <h2 className="text-[12px] text-white/80 uppercase tracking-[0.2em] mb-5">
            MY EXPERIENCE & EDUCATION
          </h2>
          <div className="text-2xl lg:text-4xl font-medium">
            <span className="pb-2 block">
              Knowledge is <span className="text-maincolor">Power</span>,
            </span>
            <span>
              <span className="text-maincolor">Experience </span>is the Key
            </span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/30 text-lg font-medium">01</span>
            <h2 className=" text-lg text-white/30 uppercase tracking-[0.2em] font-medium">
              EXPERIENCE
            </h2>
          </div>

          <div className="bg-[#1d1d1d] p-8 rounded-lg transition-all duration-300 relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/noise1.png"
                alt="Background"
                fill
                className="object-fit opacity-[0.8]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-maincolor/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-[1]" />
            <div className="relative z-10 flex flex-col space-y-6">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-maincolor mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-medium">Frontend Developer</h2>
                  <p className="text-maincolor">ByteUp AI</p>
                </div>
              </div>
              <p className="text-white/80 ml-9">Aug 2024 – Present</p>
              <ul className="text-white/80 ml-9 list-disc space-y-3 pl-4 text-base">
                <li>
                  Leading the development of an AI-powered chatbot product
                  website using Next.js, implementing SEO best practices and
                  modern web technologies.
                </li>
                <li>
                  Building responsive client websites with React.js, Tailwind
                  CSS, and GSAP, ensuring seamless user experiences and optimal
                  performance.
                </li>
                <li>
                  Collaborating with the development team on various projects,
                  contributing to code reviews, and maintaining high-quality
                  standards through Git version control.
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] h-[0.5px] bg-maincolor opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/30 text-lg font-medium">02</span>
            <h2 className="text-lg text-white/30 uppercase tracking-[0.2em] font-medium">
              EDUCATION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Education Box */}
            <div className="bg-[#1d1d1d] p-8 rounded-lg transition-all duration-300 relative group overflow-hidden border border-white/5">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/noise1.png"
                  alt="Background"
                  fill
                  className="object-cover opacity-[0.8]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-maincolor/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-[1]" />
              <div className="relative z-10 flex flex-col space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-maincolor mt-1 flex-shrink-0" />
                  <h2 className="text-xl font-medium">
                    Bachelor&apos;s in Information Technology
                  </h2>
                </div>
                <p className="text-white/80 ml-9 text-base">
                  Sandip Institute of Technology and Research Centre (SITRC),
                  Nashik, Maharashtra
                </p>
                <p className="text-white/80 ml-9">2019 – 2023 | CGPA: 8.49</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] h-[0.5px] bg-maincolor opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Second Education Box */}
            <div className="bg-[#1d1d1d] p-8 rounded-lg transition-all duration-300 relative group overflow-hidden border border-white/5">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/noise1.png"
                  alt="Background"
                  fill
                  className="object-cover opacity-[0.8]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-maincolor/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-[1]" />
              <div className="relative z-10 flex flex-col space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-maincolor mt-1 flex-shrink-0" />
                  <h2 className="text-xl font-medium">
                    Higher Secondary School
                  </h2>
                </div>
                <p className="text-white/80 ml-9 text-base">
                  New English School and Junior College of Chandori, Nashik
                </p>
                <p className="text-white/80 ml-9">2019 | 68.46%</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] h-[0.5px] bg-maincolor opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* HR line */}

      <hr className="border-t border-white/10 my-16" />
    </>
  );
};

export default Education;
