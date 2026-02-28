"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Background from "../components/Backgorund";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Main from "@/components/Main";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";

function HomeContent() {
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams();
    const scrollTo = searchParams.get("to");

    useEffect(() => {
        if (!isLoading && scrollTo) {
            // Wait for the slide-up transition (1000ms) + small safety buffer
            const timer = setTimeout(() => {
                const element = document.getElementById(scrollTo);
                if (element) {
                    element.scrollIntoView({ behavior: "auto", block: "start" });
                }
            }, 1050);
            return () => clearTimeout(timer);
        }
    }, [isLoading, scrollTo]);

    return (
        <>
            {isLoading && <Loader setIsLoading={setIsLoading} />}
            <main
                className={`relative min-h-screen w-full transition-transform duration-1000 ease-in-out ${isLoading ? "translate-y-[100vh]" : "translate-y-0"
                    }`}
            >
                <Background />
                <div className="relative px-5 sm:px-10 md:px-20 lg:px-20 xl:px-20 2xl:px-48">
                    <Navbar />
                    <Hero />
                    <div className="">
                        <Main />
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default function HomeClient() {
    return (
        <Suspense fallback={<div className="bg-[#131313] min-h-screen" />}>
            <HomeContent />
        </Suspense>
    );
}
