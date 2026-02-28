"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    Calendar,
    Tag,
    Briefcase,
    Globe,
    CheckCircle2,
} from "lucide-react";
import Background from "../../../components/Backgorund";
import Navbar from "../Navbar";
import Loader from "../../../components/Loader";
import Footer from "../../../components/Footer";
import { projects } from "../../../data/projects";

const ProjectDetailClient = ({ projectId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projects.find((p) => p.id.toString() === projectId);
        setProject(foundProject);
        // isLoading is handled by the Loader component's duration prop
    }, [projectId]);

    if (!project && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212]">
                <h2 className="text-2xl text-white mb-4">Project not found</h2>
                <Link href="/projects" className="text-maincolor hover:underline">Back to Projects</Link>
            </div>
        );
    }

    // Find next project for the navigation
    const currentIndex = project ? projects.findIndex((p) => p.id.toString() === projectId) : -1;
    const nextProject = project ? projects[(currentIndex + 1) % projects.length] : null;

    return (
        <>
            {isLoading && <Loader setIsLoading={setIsLoading} duration={400} />}
            <main
                className={`relative min-h-screen w-full font-sora selection:bg-maincolor selection:text-black transition-transform duration-700 ease-in-out ${isLoading ? "translate-y-[100vh]" : "translate-y-0"
                    }`}
            >
                <Background />
                <div className="relative md:px-20 lg:px-52 font-sora">
                    <Navbar />
                    {project && (
                        <div className="bg-[#1d1d1d] rounded-2xl p-6 lg:p-12 border border-white/5 shadow-2xl overflow-hidden mb-20">
                            {/* Back Button */}
                            <div className="mt-4 mb-10">
                                <Link
                                    href="/projects"
                                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-maincolor transition-all duration-300"
                                >
                                    <div className="p-2 rounded-full border border-white/10 group-hover:border-maincolor transition-colors duration-300">
                                        <ArrowLeft className="w-4 h-4" />
                                    </div>
                                    Back to Projects
                                </Link>
                            </div>

                            {/* Main Project Image */}
                            <div className="relative w-full h-[300px] md:h-[550px] mb-12 lg:mb-20 rounded-xl overflow-hidden border border-white/5 group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                <Image
                                    src={project.mainImage}
                                    alt={project.title}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Info Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
                                {/* Left Side - Project Description & Detailed Points */}
                                <div className="lg:col-span-2 space-y-12">
                                    <div>
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white tracking-tight">
                                            {project.title}
                                        </h1>
                                        <div className="space-y-6 max-w-3xl">
                                            {Array.isArray(project.description) ? (
                                                project.description.map((para, i) => (
                                                    <p key={i} className="text-white/70 text-[15px] sm:text-base leading-relaxed font-light">
                                                        {para}
                                                    </p>
                                                ))
                                            ) : (
                                                <p className="text-white/70 text-[15px] sm:text-base leading-relaxed font-light">
                                                    {project.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Key Achievements/Points */}
                                    {project.points && (
                                        <div className="space-y-6 bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                                            <h3 className="text-lg font-semibold text-maincolor flex items-center gap-3">
                                                <span className="w-1.5 h-6 bg-maincolor rounded-full" />
                                                Key Results & Process
                                            </h3>
                                            <ul className="space-y-5">
                                                {project.points.map((point, index) => (
                                                    <li key={index} className="flex items-start gap-4 group">
                                                        <CheckCircle2 className="w-5 h-5 text-maincolor/60 mt-1 flex-shrink-0 group-hover:text-maincolor transition-colors duration-300" />
                                                        <span className="text-white/80 leading-relaxed text-sm sm:text-[15px]">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-1.5 text-xs bg-[#1d1d1d] border border-white/5 rounded-full text-white/80 hover:bg-maincolor hover:text-black hover:border-maincolor transition-all duration-300 cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Project Info Card */}
                                <div className="h-fit">
                                    <div className="bg-[#1d1d1d] rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
                                        {/* Decorative background glow */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-maincolor opacity-10 rounded-full blur-3xl pointer-events-none" />

                                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8 pb-4 border-b border-white/5">Project Specifications</h3>

                                        <div className="space-y-8">
                                            <div className="flex flex-col gap-2 group">
                                                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-maincolor transition-colors duration-300">
                                                    <Calendar className="w-4 h-4" />
                                                    Completion Date
                                                </p>
                                                <p className="text-[15px] text-white/90 ml-7">{project.date}</p>
                                            </div>

                                            <div className="flex flex-col gap-2 group">
                                                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-maincolor transition-colors duration-300">
                                                    <Tag className="w-4 h-4" />
                                                    Core Category
                                                </p>
                                                <p className="text-[15px] text-white/90 ml-7">{project.category}</p>
                                            </div>

                                            <div className="flex flex-col gap-2 group">
                                                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-maincolor transition-colors duration-300">
                                                    <Briefcase className="w-4 h-4" />
                                                    Collaboration
                                                </p>
                                                <p className="text-[15px] text-white/90 ml-7">{project.client}</p>
                                            </div>

                                            {project.website && (
                                                <div className="flex flex-col gap-2 group">
                                                    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-maincolor transition-colors duration-300">
                                                        <Globe className="w-4 h-4" />
                                                        {project.website.includes("github.com") ? "GitHub Repository" : "Live Preview"}
                                                    </p>
                                                    <a
                                                        href={`https://${project.website}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[15px] ml-7 text-white/90 hover:text-maincolor transition-all duration-300 underline underline-offset-4 decoration-white/10 hover:decoration-maincolor line-clamp-1 break-all"
                                                    >
                                                        {project.website.includes("github.com/")
                                                            ? project.website.split('/').pop()
                                                            : project.website}
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        {/* External Link Button - Only shown if website exists */}
                                        {project.website && (
                                            <a
                                                href={`https://${project.website}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-10 w-full flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-maincolor text-white hover:text-black rounded-xl transition-all duration-300 font-semibold group"
                                            >
                                                {project.website.includes("github.com") ? "Visit GitHub Repo" : "Visit Project Site"}
                                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Gallery Images */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 lg:mb-32">
                                {project.gallery.slice(1).map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden border border-white/5 hover:border-maincolor/30 transition-colors duration-500"
                                    >
                                        <Image
                                            src={image}
                                            alt={`${project.title} showcase ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Next Project Section */}
                            <div className="border-t border-white/5 pt-6 md:pt-12 mt-10 md:mt-20 mb-6 md:mb-10">
                                <Link
                                    href={`/projects/${nextProject.id}`}
                                    className="group flex flex-row justify-between items-center gap-4 p-4 md:p-8 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 border border-transparent hover:border-white/5"
                                >
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Next Project</p>
                                        <h4 className="text-lg md:text-2xl font-semibold text-white group-hover:text-maincolor transition-colors duration-300 tracking-tight">
                                            {nextProject.title}
                                        </h4>
                                    </div>
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-maincolor group-hover:border-maincolor transition-all duration-300 self-end md:self-center">
                                        <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:text-black transition-all duration-300" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </main>
        </>
    );
};

export default ProjectDetailClient;
