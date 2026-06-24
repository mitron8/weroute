"use client";

import { motion } from "framer-motion";

const trustCards = [
  {
    number: "01",
    title: "Consulting-Led Engagement",
    description:
      "We start every network engagement with strategy, not a sales pitch for hardware you may not actually need.",
  },
  {
    number: "02",
    title: "Vendor-Agnostic Design",
    description:
      "We recommend technologies based on architectural fit, operational requirements, and long-term scalability, not vendor incentives.",
  },
  {
    number: "03",
    title: "Enterprise Delivery Experience",
    description:
      "With 40+ enterprise projects delivered and 99.9% system reliability, we bring the rigour that complex networks genuinely demand.",
  },
  {
    number: "04",
    title: "Integrated Technology Expertise",
    description:
      "Network, security, and cloud expertise under one roof, so nothing falls through the cracks between vendors.",
  },
  {
    number: "05",
    title: "Long-Term Optimisation",
    description:
      "We do not disappear after deployment. The network keeps getting better long after go-live day.",
  },
];

export default function WhyChooseWeRoute() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        py-32
      "
    >
      {/* GRID */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          left-[-10%]
          bottom-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#080357]/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-4xl">
            <span
              className="
                inline-flex
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
              Why Choose WeRoute
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
              Built Around
              <br />

              Long-Term
              <span
                className="
                  bg-gradient-to-r
                  from-[#080357]
                  to-[#A7BF73]
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Partnership
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-xl
              text-lg
              leading-9
              text-[#052440]/60
            "
          >
            Enterprise networking is not about deploying
            technology. It is about creating an operating
            foundation that supports growth, resilience,
            and continuous optimisation.
          </p>
        </div>

        {/* TRUST GRID */}
        <div
          className="
            mt-24
            grid
            gap-6
            lg:grid-cols-12
          "
        >
          {trustCards.map((item, index) => (
            <motion.div
              key={item.title}
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
              className={`
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-[#052440]/10
                bg-white
                p-8
                shadow-[0_15px_50px_rgba(5,36,64,0.05)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(5,36,64,0.08)]

                ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-4"
                    : index === 3
                    ? "lg:col-span-8"
                    : "lg:col-span-12"
                }
              `}
            >
              {/* Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#052440]/5
                  via-transparent
                  to-[#A7BF73]/5
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  right-8
                  top-8
                  text-[70px]
                  font-black
                  leading-none
                  text-[#052440]/5
                "
              >
                {item.number}
              </span>

              <div className="relative z-10">
                <div
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-[#052440]/10
                    bg-[#052440]/5
                    px-4
                    py-2
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-[#052440]/70
                  "
                >
                  {item.number}
                </div>

                <h3
                  className="
                    mt-8
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-[-0.03em]
                    text-[#052440]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-base
                    leading-8
                    text-[#052440]/60
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST STATEMENT */}
        <div
          className="
            mt-24
            rounded-[40px]
            border
            border-[#052440]/10
            bg-white
            p-12
            shadow-[0_15px_50px_rgba(5,36,64,0.04)]
          "
        >
          <p
            className="
              max-w-5xl
              text-3xl
              font-semibold
              leading-relaxed
              tracking-[-0.03em]
              text-[#080357]
            "
          >
            We believe enterprise networking should be
            measured by business outcomes, not hardware
            inventories. Every engagement is built around
            reliability, visibility, scalability, and
            long-term operational value.
          </p>
        </div>
      </div>
    </section>
  );
}