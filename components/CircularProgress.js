"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const CircularProgress = ({ isLoading }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(
      Math.max((window.scrollY / totalHeight) * 100, 0),
      100
    );
    setScrollProgress(progress);

    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isLoading && (
        <div
          className={`fixed bottom-8 right-8 flex items-center justify-center z-50 w-10 h-10 cursor-pointer transition-all duration-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            className="w-full h-full -rotate-90 transform"
            viewBox="0 0 100 100"
          >
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-white transition-all duration-300"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={2 * Math.PI * 45 * (1 - scrollProgress / 100)}
            />
          </svg>
          {/* Chevron icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ChevronUp className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
    </>
  );
};

export default CircularProgress;
