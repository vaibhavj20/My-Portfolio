"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

const ProjectsGrid = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter categories
  const categories = ["All", "DevOps", "Frontend"];

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${activeFilter === cat
              ? "bg-maincolor text-black shadow-[0_0_20px_rgba(var(--maincolor-rgb),0.3)]"
              : "bg-transparent text-white/70 border border-white/10 hover:border-maincolor/50 hover:text-maincolor"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg opacity-0 border border-maincolor group-hover:opacity-80 transition-all duration-300" />
                <div className="relative h-[360px] w-full overflow-hidden rounded-lg bg-[#1d1d1d]">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between px-2">
                <div>
                  <h3 className="text-xl font-medium text-white group-hover:text-maincolor transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-maincolor group-hover:border-maincolor transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:text-black transition-all duration-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Message when no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/40 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
