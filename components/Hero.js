// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FaGithub, FaLinkedin, FaBehance, FaDribbble } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <div id="hero" className="relative font-sora">
//       {/* Background shape with responsive clip-path */}
//       <div className="absolute inset-0">
//         <div className="w-full h-full lg:h-[610px] bg-transparent relative overflow-hidden rounded-lg">
//           {/* Main black shape with responsive clip-path */}
//           <div className="absolute inset-0 bg-[#1d1d1d] clip-path-hero-desktop lg:clip-path-hero-mobile" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row justify-between py-20 p-4 lg:p-10">
//         {/* Left Section - Responsive Adjustments */}
//         <div className="flex flex-col items-center space-y-6 w-full lg:w-[310px] border border-white/5 rounded-md p-4 lg:p-8 bg-[#1d1d1d] lg:mt-[30px] mb-8 lg:mb-0">
//           <div className="relative w-[250px] lg:w-[285px] h-64">
//             <Image
//               src="/images/profile.jpg"
//               alt="Profile"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div>
//             <h2 className="text-xl font-medium text-center mb-2">
//               Vaibhav Jamdhade
//             </h2>
//             <p className="text-white/80 text-[12px] text-center">
//               AVAILABLE FOR FREELANCE
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="flex space-x-2">
//             <Link
//               href="#"
//               className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target"
//             >
//               <FaBehance />
//             </Link>
//             <Link
//               href="#"
//               className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target"
//             >
//               <FaGithub />
//             </Link>
//             <Link
//               href="#"
//               className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target"
//             >
//               <FaLinkedin />
//             </Link>
//             <Link
//               href="#"
//               className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target"
//             >
//               <FaDribbble />
//             </Link>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-3/4 lg:pl-20 text-start lg:text-left">
//           <div className="space-y-5 mb-12 mt-8 font-medium">
//             <h1 className="text-[1.7rem] lg:text-[3rem] leading-tight">
//               Hi, I'm{" "}
//               <span className="text-maincolor">
//                 Vaibhav Jamdhade<span className="text-white">,</span>
//               </span>
//               <br />
//               Front-End Developer Crafting
//               <br />
//               Modern and User-Friendly Web Experiences.
//             </h1>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center lg:justify-start items-center space-x-4 lg:space-x-6 hover-target">
//             <Link
//               href="#"
//               className="px-4 py-3 lg:px-6 lg:py-3 border border-white rounded-lg hover:bg-white hover:text-black"
//             >
//               Download CV{" "}
//             </Link>
//             <Link
//               href="#"
//               className="px-4 py-3 lg:px-6 lg:py-3 bg-maincolor text-black rounded-lg hover:bg-opacity-90"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @media (min-width: 1024px) {
//           .clip-path-hero-desktop {
//             clip-path: polygon(
//               0 0,
//               100% 0,
//               100% 87%,
//               38% 87%,
//               31% 100%,
//               0 100%
//             );
//           }
//         }

//         @media (max-width: 1023px) {
//           .clip-path-hero-mobile {
//             clip-path: inset(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;
"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaBehance, FaDribbble } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="hero" className="relative font-sora">
      {/* Background shape with responsive clip-path */}
      <div className="absolute inset-0">
        <div className="w-full h-full lg:h-[610px] bg-transparent relative overflow-hidden rounded-md">
          {/* Main black shape with responsive clip-path */}
          <div className="absolute inset-0 bg-[#1d1d1d] clip-path-hero-desktop lg:clip-path-hero-mobile" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between py-20 p-4 lg:p-10 min-w-0">
        <div className="absolute top-80 left-[800px] w-20 h-20 bg-maincolor opacity-40 rounded-full blur-3xl" />
        {/* Left Section - Responsive Adjustments */}
        <div className="flex flex-col items-center space-y-6 w-full lg:w-[310px] border border-white/5 rounded-md p-4 lg:p-8 bg-[#1d1d1d] lg:mt-[30px] mb-8 lg:mb-0">
          <div className="relative w-[250px] lg:w-[285px] h-64 min-w-0">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium text-center mb-2">
              Vaibhav Jamdhade
            </h2>
            <p className="text-white/80 text-[12px] text-center">
              AVAILABLE FOR FREELANCE
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-2">
            <Link
              href="#"
              className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target"
            >
              <FaBehance />
            </Link>
            <Link
              href="#"
              className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target"
            >
              <FaGithub />
            </Link>
            <Link
              href="#"
              className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              className="p-3 border border-white/20 rounded-md hover:bg-white hover:text-[#1d1d1d] hover-target"
            >
              <FaDribbble />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/4 lg:pl-20 text-start lg:text-left min-w-0">
          <div className=" mb-12 mt-8 font-medium">
            <h1 className="text-[1.7rem] lg:text-[3rem] leading-tight whitespace-nowrap">
              Hi, I'm{" "}
              <span className="text-maincolor">
                Vaibhav Jamdhade<span className="text-white">,</span>
              </span>
            </h1>
            <h1 className="text-[1.7rem] lg:text-[3rem] leading-tight">
              Front-End Developer Crafting
              <br />
              Modern and User-Friendly Web Experiences.
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start items-center space-x-4 lg:space-x-6 hover-target">
            <Link
              href="#"
              className="px-4 py-3 lg:px-6 lg:py-3 border border-white rounded-lg hover:bg-white hover:text-black"
            >
              Download CV{" "}
            </Link>
            <Link
              href="#"
              className="px-4 py-3 lg:px-6 lg:py-3 bg-maincolor text-black rounded-lg hover:bg-opacity-90"
            >
              Contact Me
            </Link>
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
