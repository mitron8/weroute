"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ onDone }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // 1.5s display duration so the user can clearly see and appreciate the loading screen
    const timer = setTimeout(() => {
      setHide(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleExitComplete = () => {
    if (onDone) onDone();
  };

  const words = ["Beyond", "Boundaries,", "Bridging", "Connectivity"];

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {!hide && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.45,
              ease: "easeInOut",
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#080357]
            pointer-events-auto
          "
        >
          {/* AMBIENT BACKGROUND GLOW */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                className="h-16 md:h-20 px-6 object-contain"
                src="/images/logo/weroute.png"
                alt="WeRoute"
              />
            </motion.div>

            {/* WORDS */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="
                    text-lg
                    font-light
                    tracking-[-0.02em]
                    text-white/90
                    sm:text-2xl
                    lg:text-3xl
                  "
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* PROGRESS BAR */}
            <div className="relative mt-8 h-[2px] w-[200px] sm:w-[240px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-[#B7F36B]
                  via-blue-400
                  to-cyan-300
                "
              />
            </div>

            {/* TAGLINE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50"
            >
              Enterprise Technology · Reimagined
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}