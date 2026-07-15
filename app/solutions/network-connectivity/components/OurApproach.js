"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Architecture First",
    description:
      "We design the network architecture before selecting a single piece of technology, so every decision serves the bigger picture, not just this quarter.",
  },
  {
    number: "02",
    title: "Outcome Driven",
    description:
      "Uptime, visibility, and cost reduction are not nice-to-haves. They are the targets we design against from day one of every engagement.",
  },
  {
    number: "03",
    title: "Security by Design",
    description:
      "Network security is not bolted on after deployment. It is built into the architecture from the very first design decision we make.",
  },
  {
    number: "04",
    title: "Built for Scale",
    description:
      "Whether you have 5 sites or 500, the architecture is designed to grow with you, not require a rebuild every time you expand.",
  },
];

export default function OurApproach() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        py-32
      "
    >
      {/* Background Subtle Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(5,36,64,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.035)_1px,transparent_1px)]
          bg-[size:72px_72px]
          [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]
        "
      />

      {/* Ambient Top-Right Glow */}
      <div
        className="
          absolute
          right-[-5%]
          top-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-gradient-to-br
          from-[#080357]/10
          to-transparent
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#052440]/10
              bg-white
              px-4
              py-1.5
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#080357]
              shadow-sm
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#080357]" />
            Our Approach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              mt-6
              text-4xl
              font-black
              leading-[0.98]
              tracking-tight
              text-[#080357]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Strategy Before
            <br />
            Technology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              mt-8
              text-lg
              leading-relaxed
              text-[#052440]/70
              sm:text-xl
            "
          >
            At WeRoute, we don&apos;t start with hardware or vendor
            catalogs. Every network engagement begins with
            understanding what your business actually needs the
            network to do. Only then do we architect solutions
            backwards to meet those needs.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-[28px]
                border
                border-[#052440]/10
                bg-white
                p-8
                shadow-[0_4px_20px_rgba(5,36,64,0.03)]
                transition-shadow
                duration-300
                hover:shadow-[0_15px_35px_rgba(5,36,64,0.08)]
              "
            >
              {/* Subtle Top Accent Line on Hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#080357] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Number Badge & Step Connector */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#080357]/[0.04]
                      text-2xl
                      font-black
                      tracking-tight
                      text-[#080357]
                      transition-colors
                      duration-300
                      group-hover:bg-[#080357]
                      group-hover:text-white
                    "
                  >
                    {pillar.number}
                  </span>

                  <span className="text-xs font-semibold tracking-widest text-[#052440]/30 uppercase">
                    Step {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    tracking-tight
                    text-[#052440]
                  "
                >
                  {pillar.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-[#052440]/65
                  "
                >
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Decorative Indicator */}
              <div className="mt-8 flex items-center gap-1.5 pt-4 border-t border-[#052440]/5">
                <div className="h-1 w-6 rounded-full bg-[#080357]/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#080357]" />
                <div className="h-1 w-1 rounded-full bg-[#080357]/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[32px]
            bg-[#080357]
            p-8
            text-white
            shadow-xl
            shadow-[#080357]/10
            sm:p-12
            lg:p-14
          "
        >
          {/* Background Glow inside banner */}
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-400 to-indigo-600" />

          <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <p
              className="
                max-w-3xl
                text-2xl
                font-medium
                leading-relaxed
                tracking-tight
                text-white/90
                sm:text-3xl
              "
            >
              &ldquo;Great networks are not built by buying more technology.
              They are built by aligning technology with business
              outcomes from the very beginning.&rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-white/30 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                WeRoute Philosophy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}