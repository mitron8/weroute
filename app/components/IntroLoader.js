"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ onDone }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Lock scroll during intro loader to prevent background desync
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.stop();
    }

    // Set duration to a crisp 1.8s for fast, responsive launch feel
    const timer = setTimeout(() => {
      setHide(true);
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
    };
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.start();
    }
    if (onDone) onDone();
  };

  const words = [
    "Beyond",
    "Boundaries,",
    "Bridging",
    "Connectivity",
  ];

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {!hide && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
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
            transform-gpu
          "
        >
          {/* BACKGROUND AMBIENCE */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[400px]
                w-[400px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/15
                blur-3xl
              "
            />
          </div>

          {/* CONTENT */}
          <div
            className="
              relative z-10
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            {/* LOGO */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                className="h-16 md:h-20 px-6 object-contain"
                src="/images/logo/weroute.png"
                alt="WeRoute"
              />
            </motion.div>

            {/* TEXT */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
              "
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2 + i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    text-xl
                    font-light
                    tracking-[-0.03em]
                    text-white/90
                    sm:text-2xl
                    lg:text-3xl
                  "
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* LOADING PROGRESS BAR */}
            <div
              className="
                relative
                mt-10
                h-[2px]
                w-[200px]
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 1.4,
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

            {/* CAPTION */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="
                mt-6
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Enterprise Technology · Reimagined
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}