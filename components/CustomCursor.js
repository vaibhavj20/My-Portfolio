"use client";

import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (
        e.target &&
        e.target.classList &&
        e.target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (
        e.target &&
        e.target.classList &&
        e.target.classList.contains("hover-target")
      ) {
        setIsHovering(false);
      }
    };

    document.body.classList.add("cursor-none");
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.body.classList.remove("cursor-none");
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovering ? "cursor-hover" : "cursor-dot"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
