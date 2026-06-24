"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    value: "01",
    title: "Improved Reliability",
    description:
      "Networks that stay up so your business never has to explain why it went down.",
  },
  {
    value: "02",
    title: "Faster Issue Resolution",
    description:
      "Problems get caught and fixed in minutes, not after a customer complains about it.",
  },
  {
    value: "03",
    title: "Better User Experience",
    description:
      "Employees and customers recognize a network that simply works, every single time.",
  },
  {
    value: "04",
    title: "Lower Operational Overhead",
    description:
      "Less time firefighting configurations, more time spent on work that actually matters.",
  },
  {
    value: "05",
    title: "Increased Network Visibility",
    description:
      "Full visibility across every site, so nothing stays hidden until it reaches the breaking point.",
  },
  {
    value: "06",
    title: "Scalable Infrastructure",
    description:
      "A network that grows with you instead of becoming next year's emergency project.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#080357]
        py-32
        text-white
      "
    >
      {/* Grid */}
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
          top-[-10%]
          right-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B7F36B]/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
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
          <div className="max-w-3xl">
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
              Business Outcomes
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
                lg:text-7xl
              "
            >
              Results That
              <br />

              Matter To
              <span className="text-[#B7F36B]">
                {" "}
                Business
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-xl
              text-lg
              leading-9
              text-white/60
            "
          >
            Technology only matters when it improves business
            performance. Every network engagement is designed
            around measurable outcomes that create long-term value.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div
          className="
            mt-24
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
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
                delay: index * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white/[0.05]
              "
            >
              {/* Background Number */}
              <span
                className="
                  absolute
                  right-6
                  top-6
                  text-[70px]
                  font-black
                  leading-none
                  text-white/[0.04]
                "
              >
                {item.value}
              </span>

              {/* Number */}
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#B7F36B]
                  text-[#080357]
                  font-bold
                "
              >
                {item.value}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-8
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-[-0.03em]
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-white/60
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statement */}
        <div
          className="
            mt-24
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            backdrop-blur-xl
          "
        >
          <p
            className="
              max-w-5xl
              text-3xl
              font-semibold
              leading-relaxed
              tracking-[-0.03em]
              text-white
            "
          >
            The strongest networks are often the least noticeable.
            They simply allow employees, customers, and applications
            to perform without interruption.
          </p>
        </div>
      </div>
    </section>
  );
}