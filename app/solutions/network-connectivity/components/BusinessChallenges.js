"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Performance Bottlenecks",
    desc: "Applications lag and nobody can pinpoint why until it has already cost you time and goodwill.",
  },
  {
    title: "Limited Visibility",
    desc: "You cannot fix what you cannot see, and most teams are flying blind across half their network.",
  },
  {
    title: "Multi-Site Complexity",
    desc: "Ten sites, ten configurations, one exhausted IT team trying to keep it all consistent.",
  },
  {
    title: "Poor User Experience",
    desc: "Slow connections do not stay a problem concerning IT for long. They become a business problem rather fast.",
  },
  {
    title: "Operational Inefficiency",
    desc: "Manual fixes for problems that should have been automated years ago, draining hours every week.",
  },
];

export default function BusinessChallenges() {
  return (
    <section
      className="
        relative
        overflow-x-clip
        bg-[#080357]
        py-32
        text-white
      "
    >
      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-[-10%]
          top-[20%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#B7F36B]/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* 1. lg:items-start prevents columns from stretching to equal height
        */}
        <div
          className="
            grid
            gap-20
            lg:grid-cols-12
            lg:items-start
          "
        >
          {/* 2. lg:sticky and lg:top-32 lock the left column in place
               self-start is added as a double-guarantee against stretching
          */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/70
              "
            >
              Enterprise Challenges
            </span>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-white
                md:text-6xl
              "
            >
              Business
              <br />
              Challenges
              <span className="text-[#B7F36B]">
                {" "}
                We Solve
              </span>
            </h2>

            <p
              className="
                mt-10
                text-lg
                leading-9
                text-white/65
              "
            >
              Network problems rarely show up as network
              problems. They show up as missed deadlines,
              frustrated users, and rising costs nobody
              can fully explain or track.
            </p>

            <div
              className="
                mt-16
                border-l
                border-[#B7F36B]/30
                pl-6
              "
            >
              <p
                className="
                  text-2xl
                  font-medium
                  leading-relaxed
                  tracking-[-0.03em]
                  text-white
                "
              >
                The network is rarely the thing people
                complain about.
              </p>

              <p
                className="
                  mt-4
                  text-white/55
                  leading-8
                "
              >
                It is the thing quietly creating every
                complaint.
              </p>
            </div>
          </div>

          {/* RIGHT: This column will scroll naturally past the pinned left column */}
          <div
            className="
              lg:col-span-7
              grid
              gap-6
            "
          >
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:bg-white/[0.06]
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-8
                    top-8
                    text-[60px]
                    font-black
                    leading-none
                    text-white/[0.05]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    relative
                    z-10
                    text-2xl
                    font-bold
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    relative
                    z-10
                    mt-5
                    max-w-xl
                    text-base
                    leading-8
                    text-white/60
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}