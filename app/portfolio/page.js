"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Loader from "../../components/Loader";
import Background from "../../components/Backgorund";
import Navbar from "../../components/Navbar";

const PortfolioPage = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    {
      id: 5,
      title: "Modern Web Application",
      category: "Development",
      image: "/images/project1.jpg",
    },
    {
      id: 6,
      title: "Brand Identity Design",
      category: "Branding",
      image: "/images/project1.jpg",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <Loader setIsLoading={setIsLoading} />}
      <main
        className={`relative min-h-screen w-full transition-transform duration-1000 ease-in-out ${
          isLoading ? "translate-y-[100vh]" : "translate-y-0"
        }`}
      >
        <Background />
        <div className="relative md:px-20 lg:px-52 font-sora">
          <Navbar />

          {/* Portfolio Content */}
          <div className="">
            <div className="bg-[#1d1d1d] rounded-lg p-10">
              {/* Portfolio Header */}
              <div className="mb-16 text-center">
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
                  MY WORKS
                </h3>
                <h2 className="text-2xl lg:text-4xl font-medium">
                  Look at my work <span className="text-[#CCFF02]">.</span>
                </h2>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;
