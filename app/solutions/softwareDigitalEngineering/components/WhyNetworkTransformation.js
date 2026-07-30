"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    n: "01",
    title: "Aging Systems Slow Initiatives",
    desc: "Aging systems slow down every new initiative built on top of them.",
  },
  {
    n: "02",
    title: "Software Drives Transformation",
    desc: "Digital transformation now runs directly through software, not around it.",
  },
  {
    n: "03",
    title: "APIs Connect Everything",
    desc: "APIs have become the way businesses connect products, partners, and data.",
  },
  {
    n: "04",
    title: "Cloud-Native is the Baseline",
    desc: "Cloud-native application development is now the baseline, not a future initiative.",
  },
  {
    n: "05",
    title: "Adaptability Requires Agile Software",
    desc: "The businesses that adapt fastest are the ones whose software can keep up.",
  },
  {
    n: "06",
    title: "Scale Demands Evolution",
    desc: "Software built for today's scale rarely survives tomorrow's growth unchanged.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyNetworkTransformation() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,8,73,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,8,73,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[5%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[#050849]/5 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-[#f7f9fc] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
            Digital Engineering Services
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[#050849] sm:text-5xl lg:text-6xl">
            Why Digital Engineering <br className="hidden md:block" />
            Transformation
            <span className="bg-gradient-to-r from-[#050849] to-[#98c93c] bg-clip-text text-transparent">
              {" "}
              Matters
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-[#4c658a] sm:text-lg sm:leading-8">
            Software architecture has moved from a technical detail to a strategic business capability. Legacy systems are aging, APIs have become the backbone of how businesses connect, and customers expect faster releases. The way software is engineered now determines how quickly an enterprise can adapt, integrate, and grow.
          </p>
        </motion.div>

        {/* Challenge Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 lg:grid-cols-12"
        >
          {challenges.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={`clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                    ? "lg:col-span-7"
                    : index === 4
                    ? "lg:col-span-6"
                    : "lg:col-span-6"
                }`}
              >
                {/* Subtle Background Watermark Number */}
                <span className="pointer-events-none absolute right-6 top-4 select-none font-mono text-[64px] font-black leading-none text-[#050849]/[0.03] transition-colors group-hover:text-[#050849]/[0.06]">
                  {item.n}
                </span>

                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  {/* Left / Top Section */}
                  <div>
                    {/* Interactive Number Badge */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm font-mono text-sm font-bold text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c] group-hover:text-[#050849]">
                      {item.n}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849] transition-colors sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-relaxed text-[#4c658a] sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philosophy Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="clay-light relative mt-16 overflow-hidden rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 sm:p-12 lg:p-14"
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-[#98c93c]" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <p className="max-w-3xl text-xl font-bold leading-relaxed tracking-tight text-[#050849] sm:text-2xl lg:text-3xl">
              &ldquo;Software should get easier to change over time,{" "}
              <span className="text-[#98c93c]">
                not harder.
              </span>
              &rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-[#050849]/20 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#4c658a]">
                Core Philosophy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}