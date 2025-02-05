"use client";
import { useState, useEffect } from "react";
import Background from "../components/Backgorund";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Main from "@/components/Main";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader setIsLoading={setIsLoading} />}
      <main
        className={`relative min-h-screen w-full transition-transform duration-1000 ease-in-out ${
          isLoading ? "translate-y-[100vh]" : "translate-y-0"
        }`}
      >
        <Background />
        <div className="relative md:px-20 lg:px-52">
          <Navbar />
          <Hero />
          <div className="">
            <Main />
          </div>
        </div>
      </main>
    </>
  );
}
