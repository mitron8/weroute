"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Slow Provisioning",
    desc: "Manual infrastructure setup delays projects and slows the pace of delivery.",
  },
  {
    title: "Environment Inconsistency",
    desc: "Development, staging, and production environments drift apart without a shared standard.",
  },
  {
    title: "Migration Risk",
    desc: "Cloud migrations without a clear architecture increase the risk of costly rework.",
  },
  {
    title: "Limited Visibility",
    desc: "Teams often cannot see across cloud, application, and infrastructure layers in one place.",
  },
  {
    title: "Governance & Compliance Gaps",
    desc: "Inconsistent policies across environments make compliance harder to prove and maintain.",
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
        <div
          className="
            grid
            gap-20
            lg:grid-cols-12
            lg:items-start
          "
        >
          {/* LEFT CONTENT - Pinned Sidebar */}
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
              Cloud Challenges
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
              <span className="text-[#B7F36B]"> We Solve</span>
            </h2>

            <p
              className="
                mt-10
                text-lg
                leading-9
                text-white/65
              "
            >
              Most cloud challenges are not caused by any single
              tool. They come from disconnected strategy across
              teams, inconsistent infrastructure, and limited
              visibility that slows innovation.
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
                Successful cloud adoption is
                <br />
                built on consistency.
              </p>

              <p
                className="
                  mt-4
                  text-white/55
                  leading-8
                "
              >
                Standardized infrastructure,
                automation, and governance
                transform complexity into
                predictable business growth.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT - Scrolling Glassmorphism Cards */}
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
                {/* Background Number Watermark */}
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