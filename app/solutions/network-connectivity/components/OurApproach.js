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
        bg-[#f7f9fc]
        py-32
      "
    >
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          right-[-10%]
          top-[10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#080357]/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#052440]/10
              bg-white
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#052440]
            "
          >
            Our Approach
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-[#080357]
              md:text-6xl
              lg:text-7xl
            "
          >
            Strategy Before
            <br />

            Technology
          </h2>

          <p
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-[#052440]/65
            "
          >
            At WeRoute, we don't start with hardware or vendor
            catalogs. Every network engagement begins with
            understanding what your business actually needs the
            network to do. Only then do we architect solutions
            backwards to meet those needs.
          </p>
        </div>

        {/* Framework */}
        <div className="mt-24">
          <div
            className="
              relative
              hidden
              lg:block
            "
          >
            {/* Line */}
            <div
              className="
                absolute
                left-0
                right-0
                top-[70px]
                h-px
                bg-gradient-to-r
                from-[#080357]/10
                via-[#080357]/20
                to-[#080357]/10
              "
            />
          </div>

          <div
            className="
              grid
              gap-8
              lg:grid-cols-4
            "
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  delay: index * 0.08,
                }}
                className="
                  relative
                "
              >
                {/* Number Circle */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-[140px]
                    w-[140px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#052440]/10
                    bg-white
                    shadow-[0_15px_50px_rgba(5,36,64,0.05)]
                  "
                >
                  <span
                    className="
                      text-4xl
                      font-black
                      tracking-[-0.05em]
                      text-[#080357]
                    "
                  >
                    {pillar.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3
                    className="
                      text-3xl
                      font-bold
                      leading-tight
                      tracking-[-0.03em]
                      text-[#052440]
                    "
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      text-base
                      leading-8
                      text-[#052440]/60
                    "
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy Statement */}
        <div
          className="
            mt-24
            rounded-[40px]
            border
            border-[#052440]/10
            bg-white
            p-10
            shadow-[0_15px_50px_rgba(5,36,64,0.04)]
          "
        >
          <p
            className="
              max-w-4xl
              text-3xl
              font-semibold
              leading-relaxed
              tracking-[-0.03em]
              text-[#080357]
            "
          >
            Great networks are not built by buying more technology.
            They are built by aligning technology with business
            outcomes from the very beginning.
          </p>
        </div>
      </div>
    </section>
  );
}