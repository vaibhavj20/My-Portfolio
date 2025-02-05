"use client";
import Image from "next/image";
import { Award } from "lucide-react";

const Education = () => {
  return (
    <>
      <div id="education" className="relative font-sora p-4 lg:p-10 mt-14">
        <div className="text-center mb-20">
          <h2 className="text-xs text-white/80 uppercase tracking-[0.2em] mb-5">
            MY EDUCATION
          </h2>
          <div className="text-2xl lg:text-4xl font-medium">
            Turn Knowledge
            <br />
            <span className="">
              <span className="text-maincolor"> Into Digital</span> Excellence
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Box 1 */}
          <div className="bg-[#1d1d1d] p-8 rounded-lg transition-all duration-300 relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/noise1.png"
                alt="Background"
                fill
                className="object-cover opacity-[0.8]"
              />
            </div>
            {/* Ultra subtle gradient hover effect */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-maincolor/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-[1]" />
            <div className="relative z-10 flex flex-col space-y-6">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-maincolor mt-1 flex-shrink-0" />
                <h2 className="text-xl font-medium">
                  Bachelor's in Information Technology
                </h2>
              </div>
              <p className="text-white/80 ml-9">
                Sandip Institute of Technology and Research Centre (SITRC),
                Nashik, Maharashtra
              </p>
              <p className="text-white/80 ml-9">2019 – 2023 | CGPA: 8.49</p>
            </div>
            {/* Changed to full-width border that fades in */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] h-[0.5px] bg-maincolor opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Box 2 */}
          <div className="bg-[#1d1d1d] p-8 rounded-lg transition-all duration-300 relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/noise1.png"
                alt="Background"
                fill
                className="object-cover opacity-[0.8]"
              />
            </div>
            {/* Ultra subtle gradient hover effect */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-maincolor/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-[1]" />
            <div className="relative z-10 flex flex-col space-y-6">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-maincolor mt-1 flex-shrink-0" />
                <h2 className="text-xl font-medium">Higher Secondary School</h2>
              </div>
              <p className="text-white/80 ml-9">
                New English School and Junior College of Chandori,Nashik
              </p>
              <p className="text-white/80 ml-9">2019 | 68.46%</p>
            </div>
            {/* Changed to full-width border that fades in */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] h-[0.5px] bg-maincolor opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Bottom Box */}
        <div className="flex justify-center">
          <div className="bg-[#1d1d1d] p-8 rounded-lg transition-all duration-300 relative group overflow-hidden border border-white/5 min-w-[300px] max-w-2xl w-full lg:w-3/4">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/noise1.png"
                alt="Background"
                fill
                className="object-cover opacity-[0.8]"
              />
            </div>
            {/* Ultra subtle gradient hover effect */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-maincolor/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-[1] " />
            <div className="relative z-10 flex flex-col space-y-6 text-center ">
              <div className="flex items-start gap-3 justify-center">
                <Award className="w-6 h-6 text-maincolor mt-1 flex-shrink-0" />
                <h2 className="text-xl font-medium">
                  Secondary School Certificate
                </h2>
              </div>
              <p className="text-white/80">
                New English School, Chandori, Nashik
              </p>
              <p className="text-white/80">2017 | 89.40%</p>
            </div>
            {/* Changed to full-width border that fades in */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] h-[0.5px] bg-maincolor opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
      {/* Updated HR line with more visible border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-white/20 my-12" />
      </div>
    </>
  );
};

export default Education;
