import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { projects } from "../data/projects";
import { Reveal } from "./Reveal";

const PortfolioSection = () => {
  const router = useRouter();

  // Display only the first 4 projects (2 DevOps, 2 Frontend as per our data/projects.js order)
  const displayProjects = projects.slice(0, 4);

  const handleViewAllWorks = () => {
    router.push("/projects");
  };

  return (
    <>
      <section id="projects" className="relative font-sora p-4 lg:p-10 mt-14">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <div className="absolute top-20 left-10 w-20 h-20 bg-maincolor opacity-20 rounded-full blur-[35px]" />
            <Reveal width="100%">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
                MY PROJECTS
              </h3>
            </Reveal>
            <Reveal width="100%">
              <h2 className="text-2xl lg:text-4xl font-medium">
                <span className="block mb-2">Look at my <span className="text-maincolor">DevOps</span> &</span>
                <span className="text-maincolor">Frontend</span> projects
              </h2>
            </Reveal>
          </div>
          <button
            onClick={handleViewAllWorks}
            className="hidden md:flex items-center gap-2 transition-all duration-300 text-sm hover:text-maincolor"
          >
            View All Works
            <ArrowUpRight className="w-6 h-6 stroke-[1]" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, idx) => (
            <Reveal key={project.id} width="100%" delay={0.1 * idx}>
              <Link href={`/projects/${project.id}`}>
                <div className="group cursor-pointer">
                  {/* Image Container with Hover Border */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg opacity-0 border border-maincolor group-hover:opacity-80 transition-all duration-300" />
                    <div className="relative h-[360px] w-full overflow-hidden rounded-lg bg-[#1d1d1d]">

                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content Below Image */}
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <span className="inline-block px-3 py-0.5 text-xs border border-white/20 rounded-full mb-3 text-white group-hover:bg-maincolor group-hover:text-black group-hover:border-maincolor transition-all duration-300">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-medium text-white group-hover:text-maincolor transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-8 h-8 stroke-[1] group-hover:text-maincolor transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      {/* HR line */}
      <hr className="border-t border-white/10 my-6 sm:my-16" />
    </>
  );
};

export default PortfolioSection;
