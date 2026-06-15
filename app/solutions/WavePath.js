"use client";

import React, { useRef, useEffect } from "react";

export default function WavePath({ className = "", strokeWidth = 1.5, ...props }) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
    
    // Recalculate wave width if the window resizes
    const handleResize = () => setPath(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const setPath = (progress) => {
    if (pathRef.current && containerRef.current) {
      // Dynamically get the width of the parent container
      const width = containerRef.current.getBoundingClientRect().width;
      pathRef.current.setAttributeNS(
        null,
        "d",
        `M0 100 Q${width * x} ${100 + progress * 0.6}, ${width} 100`
      );
    }
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    if (containerRef.current) {
      const pathBound = containerRef.current.getBoundingClientRect();
      // Calculate where on the line the mouse is interacting
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
    }
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div
      ref={containerRef}
      className={` flex justify-center items-center relative h-[20px] w-[100%] ${className}`}
      {...props}
    >
      {/* Invisible Interaction Layer: 
        Catches the mouse movements over the line without blocking background clicks 
      */}
      <div
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
        className="absolute -top-[50px] z-10 h-[100px] w-full cursor-pointer"
      />
      
      {/* The SVG Canvas: 
        Pointer events are disabled so it doesn't interfere with the invisible layer above 
      */}
      <svg className="pointer-events-none absolute -top-[100px] h-[200px] w-full">
        <path
          ref={pathRef}
          className="fill-none stroke-current"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
}