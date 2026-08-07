"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CircuitBackground({ className = "" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60 select-none ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Circuit Line Gradient */}
          <linearGradient id="circuit-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#050849" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#4c658a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#050849" stopOpacity="0.2" />
          </linearGradient>

          {/* Pulse Glow Gradient Blue 1 */}
          <linearGradient id="pulse-grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
          </linearGradient>

          {/* Pulse Glow Gradient Blue 2 */}
          <linearGradient id="pulse-grad-indigo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter for data packets */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- CIRCUIT PATH TRACES --- */}
        <g stroke="url(#circuit-line-grad)" strokeWidth="2" fill="none">
          <path d="M -50 140 L 280 140 L 380 240 L 720 240 L 840 360 L 1300 360 L 1650 360" />
          <path d="M -50 480 L 180 480 L 300 360 L 600 360 L 720 520 L 1150 520 L 1300 360 L 1650 360" />
          <path d="M -50 780 L 350 780 L 480 640 L 880 640 L 1000 780 L 1650 780" />
          <path d="M 380 -50 L 380 240 L 480 340 L 480 640" />
          <path d="M 840 -50 L 840 200 L 720 360 L 720 520 L 880 640 L 880 950" />
          <path d="M 1300 -50 L 1300 220 L 1440 360 L 1440 650 L 1300 780 L 1300 950" />
        </g>

        {/* --- SOLID CONTINUOUS CIRCUIT LINES UNDERLAY --- */}
        <g stroke="#050849" strokeOpacity="0.18" strokeWidth="1.5" fill="none">
          <path d="M -50 140 L 280 140 L 380 240 L 720 240 L 840 360 L 1300 360 L 1650 360" />
          <path d="M -50 480 L 180 480 L 300 360 L 600 360 L 720 520 L 1150 520 L 1300 360 L 1650 360" />
          <path d="M -50 780 L 350 780 L 480 640 L 880 640 L 1000 780 L 1650 780" />
          <path d="M 380 -50 L 380 240 L 480 340 L 480 640" />
          <path d="M 840 -50 L 840 200 L 720 360 L 720 520 L 880 640 L 880 950" />
          <path d="M 1300 -50 L 1300 220 L 1440 360 L 1440 650 L 1300 780 L 1300 950" />
        </g>

        {/* --- CIRCUIT NODES & TERMINAL JUNCTIONS --- */}
        <g fill="#050849" stroke="#00d2ff" strokeWidth="2">
          <circle cx="280" cy="140" r="5" />
          <circle cx="380" cy="240" r="5.5" />
          <circle cx="720" cy="240" r="5" />
          <circle cx="840" cy="360" r="6" />
          <circle cx="300" cy="360" r="5" />
          <circle cx="600" cy="360" r="5.5" />
          <circle cx="720" cy="520" r="5" />
          <circle cx="1150" cy="520" r="6" />
          <circle cx="350" cy="780" r="5.5" />
          <circle cx="480" cy="640" r="5" />
          <circle cx="880" cy="640" r="6" />
          <circle cx="480" cy="340" r="5" />
          <circle cx="1440" cy="360" r="5" />
        </g>

        {/* --- ANIMATED DATA FLOW PULSES --- */}
        <motion.path
          d="M -50 140 L 280 140 L 380 240 L 720 240 L 840 360 L 1300 360 L 1650 360"
          fill="none"
          stroke="url(#pulse-grad-cyan)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ strokeDasharray: "120 1200", strokeDashoffset: 1320 }}
          animate={{ strokeDashoffset: -1320 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M -50 480 L 180 480 L 300 360 L 600 360 L 720 520 L 1150 520 L 1300 360 L 1650 360"
          fill="none"
          stroke="url(#pulse-grad-indigo)"
          strokeWidth="4.5"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ strokeDasharray: "140 1400", strokeDashoffset: 1540 }}
          animate={{ strokeDashoffset: -1540 }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />

        <motion.path
          d="M -50 780 L 350 780 L 480 640 L 880 640 L 1000 780 L 1650 780"
          fill="none"
          stroke="url(#pulse-grad-cyan)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ strokeDasharray: "130 1300", strokeDashoffset: 1430 }}
          animate={{ strokeDashoffset: -1430 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 0.8 }}
        />

        {/* --- INTERACTIVE PULSING JUNCTION NODES --- */}
        {[
          { cx: 380, cy: 240, delay: 0 },
          { cx: 840, cy: 360, delay: 1.8 },
          { cx: 600, cy: 360, delay: 0.9 },
          { cx: 720, cy: 520, delay: 2.5 },
          { cx: 880, cy: 640, delay: 3.2 },
          { cx: 1440, cy: 360, delay: 1.2 },
        ].map((node, idx) => (
          <g key={idx}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="7"
              fill="#00d2ff"
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
            />
            <circle cx={node.cx} cy={node.cy} r="3" fill="#050849" />
          </g>
        ))}
      </svg>
    </div>
  );
}
