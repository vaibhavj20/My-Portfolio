"use client";

import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import Background from "../../components/Backgorund";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";
import ProjectsGrid from "./ProjectGrid";

const PortfolioPageClient = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // isLoading is handled by the Loader component's duration prop
    }, []);

    return (
        <>
            {isLoading && <Loader setIsLoading={setIsLoading} duration={800} />}
            <main
                className={`relative min-h-screen w-full transition-transform duration-700 ease-in-out ${isLoading ? "translate-y-[100vh]" : "translate-y-0"
                    }`}
            >
                <Background />
                <div className="relative md:px-20 lg:px-52 font-sora selection:bg-maincolor selection:text-black">
                    <Navbar />

                    {/* Portfolio Content */}
                    <div className="pb-20">
                        <div className="bg-[#1d1d1d] rounded-2xl p-6 lg:p-12 border border-white/5 shadow-2xl">
                            {/* Portfolio Header */}
                            <div className="mb-20 text-center relative">
                                {/* Decorative Glow */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-maincolor opacity-10 rounded-full blur-[80px]" />

                                <h3 className="relative z-10 text-xs uppercase tracking-[0.4em] font-bold text-white/40 mb-5">
                                    SELECTED PROJECTS
                                </h3>
                                <h2 className="relative z-10 text-3xl lg:text-5xl font-bold tracking-tight">
                                    Look at my <span className="text-maincolor underline underline-offset-8 decoration-maincolor/20">projects.</span>
                                </h2>
                            </div>

                            {/* Projects Component with Filtering (now handles data internally) */}
                            <ProjectsGrid />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default PortfolioPageClient;
