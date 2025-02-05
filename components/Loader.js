import { useEffect, useState } from "react";

export default function Loader({ setIsLoading }) {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Start the overlay animation after 2 seconds
    setTimeout(() => {
      setShowOverlay(true);
      // Set isLoading to false immediately when overlay starts
      setIsLoading(false);
    }, 2000);
  }, [setIsLoading]);

  return (
    <div className="fixed inset-0 z-[99999999999999] flex items-center justify-center overflow-hidden">
      {/* SVG overlay */}
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
          showOverlay ? "translate-y-[-100%]" : "translate-y-[0%]"
        }`}
      >
        <svg
          className="absolute top-0 w-screen h-[110vh] fill-[#131313]"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
      </div>

      {/* Loading text */}
      <div
        className={`relative z-20 transition-opacity duration-500 ${
          showOverlay ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-[17px] font-extralight tracking-[28px] uppercase">
          {["L", "o", "a", "d", "i", "n", "g"].map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-loading"
              style={{
                animationDelay: `${index * 0.1}s`,
                marginRight: "5px", // Added extra spacing between letters
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
