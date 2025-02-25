"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ProjectsGrid = ({ projects }) => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique technology categories for the filter tabs
  const allTechnologies = ["All", "React/NextJS", "HTML/CSS/JS"];

  // Filter projects based on selected filter
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setActiveFilter(tech)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === tech
                ? "bg-[#CCFF02] text-black"
                : "bg-transparent text-white border border-white/20 hover:border-[#CCFF02] hover:text-[#CCFF02]"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
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

            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block px-3 py-0.5 text-xs border border-white/20 rounded-full text-white group-hover:bg-[#CCFF02] group-hover:text-black group-hover:border-[#CCFF02] transition-all duration-300">
                    {project.category}
                  </span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-0.5 text-xs border border-white/20 rounded-full text-white group-hover:bg-[#CCFF02] group-hover:text-black group-hover:border-[#CCFF02] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-medium text-white">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight className="w-8 h-8 stroke-[1] group-hover:text-[#CCFF02] transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Message when no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/80">No projects found for this filter.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
