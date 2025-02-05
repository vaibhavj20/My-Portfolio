// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import Image from "next/image";

// const PortfolioSection = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "GeekFolio Portfolio",
//       category: "Branding",
//       image: "/images/project1.jpg",
//     },
//     {
//       id: 2,
//       title: "Luxury Modern Website",
//       category: "Branding",
//       image: "/images/project1.jpg",
//     },
//     {
//       id: 3,
//       title: "Creative Design System",
//       category: "Development",
//       image: "/images/project1.jpg",
//     },
//     {
//       id: 4,
//       title: "Digital Marketing Hub",
//       category: "Marketing",
//       image: "/images/project1.jpg",
//     },
//   ];

//   return (
//     <section className="relative font-sora p-4 lg:p-10 mt-14">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-16">
//         <div>
//           <h3 className="text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
//             OUR PORTFOLIO
//           </h3>
//           <h2 className="text-2xl lg:text-4xl font-medium">
//             Look at my work &<br />
//             experience <span className="text-[#CCFF02]">my style</span>
//           </h2>
//         </div>
//         <button className="hidden md:flex items-center gap-2  transition-all duration-300 text-sm">
//           View All Works
//           <ArrowUpRight className="w-6 h-6 stroke-[1]" />
//         </button>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project) => (
//           <div key={project.id} className="group cursor-pointer">
//             {/* Image Container with Hover Border */}
//             <div className="relative">
//               <div className="absolute -inset-1 rounded-lg opacity-0 border border-[#CCFF02] group-hover:opacity-80 transition-all duration-300" />
//               <div className="relative h-[360px] w-full overflow-hidden rounded-lg bg-[#1d1d1d]">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* Content Below Image */}
//             <div className="mt-6 flex items-center justify-between">
//               <div>
//                 <span className="inline-block px-3 py-0.5 text-xs border border-white/20 rounded-full mb-3 text-white group-hover:bg-[#CCFF02] group-hover:text-black group-hover:border-[#CCFF02] transition-all duration-300">
//                   {project.category}
//                 </span>
//                 <h3 className="text-lg font-medium text-white">
//                   {project.title}
//                 </h3>
//               </div>
//               <ArrowUpRight className="w-8 h-8  stroke-[1] group-hover:text-[#CCFF02] transition-all duration-300" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PortfolioSection = () => {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "GeekFolio Portfolio",
      category: "Branding",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Luxury Modern Website",
      category: "Branding",
      image: "/images/project1.jpg",
    },
    {
      id: 3,
      title: "Creative Design System",
      category: "Development",
      image: "/images/project1.jpg",
    },
    {
      id: 4,
      title: "Digital Marketing Hub",
      category: "Marketing",
      image: "/images/project1.jpg",
    },
  ];

  const handleViewAllWorks = () => {
    router.push("/portfolio");
  };

  return (
    <section className="relative font-sora p-4 lg:p-10 mt-14">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-16">
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
            OUR PORTFOLIO
          </h3>
          <h2 className="text-2xl lg:text-4xl font-medium">
            Look at my work &<br />
            experience <span className="text-[#CCFF02]">my style</span>
          </h2>
        </div>
        <button
          onClick={handleViewAllWorks}
          className="hidden md:flex items-center gap-2 transition-all duration-300 text-sm hover:text-[#CCFF02]"
        >
          View All Works
          <ArrowUpRight className="w-6 h-6 stroke-[1]" />
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            {/* Image Container with Hover Border */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg opacity-0 border border-[#CCFF02] group-hover:opacity-80 transition-all duration-300" />
              <div className="relative h-[360px] w-full overflow-hidden rounded-lg bg-[#1d1d1d]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content Below Image */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <span className="inline-block px-3 py-0.5 text-xs border border-white/20 rounded-full mb-3 text-white group-hover:bg-[#CCFF02] group-hover:text-black group-hover:border-[#CCFF02] transition-all duration-300">
                  {project.category}
                </span>
                <h3 className="text-lg font-medium text-white">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight className="w-8 h-8 stroke-[1] group-hover:text-[#CCFF02] transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
