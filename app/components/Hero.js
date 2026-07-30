"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";

const WORDS = [
  "Scalable",
  "Intelligent",
  "Secure",
  "Resilient",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        text-white
      "
      style={{
        backgroundImage: "url('/weroutehero.png')",
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080357] to-[#FFFFFD]/10" />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pt-32
          pb-20
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >

          {/* BADGE */}
          <div
            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-5
              py-2.5
              backdrop-blur-xl
            "
          >

            <div className="h-2 w-2 rounded-full bg-[#B7F36B]" />

            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-white/65
              "
            >
              AI-Driven IT Transformation
            </span>

          </div>

          {/* HEADING */}
          <h1
            className="
              text-[36px]
              font-normal
              leading-[1.1]
              tracking-[-0.02em]
              text-white
              sm:text-[46px]
              lg:text-[54px]
            "
          >

            AI-Driven
            <br />

            Optimization
            <br />

            for{" "}

            <span
              className="
                inline-flex
                min-w-[360px]
                text-[#B7F36B]
              "
            >

              <AnimatePresence mode="wait">

                <motion.span
                  key={WORDS[index]}
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  {WORDS[index]}
                </motion.span>

              </AnimatePresence>

            </span>

            <br />

            Enterprise IT

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-9
              text-white/60
              sm:text-xl
              lg:text-[16px]
            "
          >
            WeRoute empowers enterprises with intelligent,
            secure and resilient technology solutions that
            drive operational excellence, scalability and
            AI-powered digital transformation.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-5
            "
          >

            {/* PRIMARY */}
            <a
              href="#"
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-8
                py-4
                text-[15px]
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >

              Explore Solutions

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </a>

            {/* SECONDARY */}
            <a
              href="#"
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                border border-white/15
                bg-white/[0.03]
                px-8
                py-4
                text-[15px]
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/[0.06]
              "
            >

              Talk to an Expert

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </a>

          </div>

          {/* STATS */}
          <div
            className="
              mt-20
              grid
              grid-cols-2
              gap-8
              border-t
              border-white/10
              pt-8
              sm:grid-cols-4
            "
          >

            {[
              ["99.99%", "System Uptime"],
              ["24/7", "Managed Operations"],
              ["500+", "Enterprise Clients"],
              ["Global", "Presence"],
            ].map(([value, label]) => (
              <div key={label}>

                <h3
                  className="
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  {value}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-white/45
                  "
                >
                  {label}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}