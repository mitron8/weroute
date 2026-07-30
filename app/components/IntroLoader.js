"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "./Logo";

export default function IntroLoader({ onDone }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const words = [
    "Beyond",
    "Boundaries,",
    "Bridging",
    "Connectivity",
  ];

  return (
    <AnimatePresence mode="wait" onExitComplete={onDone}>

      {!hide && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: {
              duration: 0.8,
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
          "
        >

          {/* BACKGROUND */}
          <div className="absolute inset-0">

            {/* GLOW */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/10
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
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

                      <img className="h-20 px-15" src={'/images/logo/weroute.png'}/>


            </motion.div>

            {/* TEXT */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
              "
            >

              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 25,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: 0.4 + i * 0.12,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    text-2xl
                    font-light
                    tracking-[-0.04em]
                    text-white/85
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  {word}
                </motion.span>
              ))}

            </div>

            {/* LOADING BAR */}
            <div
              className="
                relative
                mt-14
                h-[2px]
                w-[220px]
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
                  duration: 2.2,
                  ease: "easeInOut",
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
                delay: 1.2,
                duration: 0.8,
              }}
              className="
                mt-8
                text-[11px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-white/35
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