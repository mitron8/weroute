"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    n: "01",
    title: "Hybrid Work Changed the Rules",
    desc: "Employees now connect from homes, co-working spaces, and airports. Networks built for one office location were never meant to handle this.",
  },
  {
    n: "02",
    title: "Cloud Adoption Outpaced the Network",
    desc: "Applications moved to the cloud years ago. Many enterprise networks are still routing traffic like it is 2015 and adding latency nobody asked for.",
  },
  {
    n: "03",
    title: "User Experience Became Non-Negotiable",
    desc: "A slow connection used to be an IT ticket. Now it is a reason customers and employees walk away. Network performance is business performance.",
  },
  {
    n: "04",
    title: "Complexity Crept In Quietly",
    desc: "Every new site, vendor, and tool adds a layer. Most networks did not get complex overnight. They got complex one decision at a time.",
  },
  {
    n: "05",
    title: "Efficiency Became the New Battleground",
    desc: "Enterprises are not just asking if the network works. They are asking what it costs to run, troubleshoot, and scale every single month.",
  },
];

// Staggered animation variants for the grid container
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

// Safe card variants (No CSS blur to prevent Safari/mobile GPU freezes)
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
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28 text-[#080357]">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,36,64,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.035)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Glow Orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[5%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[#080357]/5 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -left-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-[#A7BF73]/10 blur-[100px]"
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
          <span className="inline-flex items-center gap-2 rounded-full border border-[#052440]/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#080357] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#080357]" />
            Network Modernization
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#080357] sm:text-5xl lg:text-6xl">
            Why Network <br className="hidden md:block" />
            Transformation
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              {" "}
              Matters
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#052440]/70 sm:text-lg sm:leading-8">
            Most networks were designed for an office that no longer exists.
            Hybrid work, cloud-first applications, and distributed teams have
            quietly broken assumptions that legacy network architecture was
            built on, and most enterprises are still running on yesterday&apos;s
            blueprint.
          </p>
        </motion.div>

        {/* Challenge Grid (All 5 Cards Unified in Style) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 lg:grid-cols-12"
        >
          {challenges.map((item, index) => {
            const isFullWidth = index === 4;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[28px] border border-[#052440]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#080357]/30 hover:shadow-xl hover:shadow-[#080357]/5 ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-12"
                } ${isFullWidth ? "lg:p-10" : ""}`}
              >
                {/* Top Hover Accent Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[#080357] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Subtle Background Watermark Number */}
                <span className="pointer-events-none absolute right-6 top-4 select-none font-mono text-[64px] font-black leading-none text-[#080357]/[0.03] transition-colors group-hover:text-[#080357]/[0.06]">
                  {item.n}
                </span>

                <div
                  className={`relative z-10 flex h-full flex-col justify-between ${
                    isFullWidth
                      ? "lg:flex-row lg:items-center lg:justify-between lg:gap-12"
                      : "gap-8"
                  }`}
                >
                  {/* Left / Top Section */}
                  <div className={isFullWidth ? "lg:max-w-xl" : ""}>
                    {/* Interactive Number Badge */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#052440]/10 bg-[#080357]/[0.03] font-mono text-sm font-bold text-[#080357] transition-colors duration-300 group-hover:border-[#080357] group-hover:bg-[#080357] group-hover:text-white">
                      {item.n}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#052440] transition-colors group-hover:text-[#080357] sm:text-3xl">
                      {item.title}
                    </h3>

                    {!isFullWidth && (
                      <p className="mt-4 text-sm leading-relaxed text-[#052440]/65 sm:text-base">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {/* Right Section (Only rendered on Card 05 for desktop balance) */}
                  {isFullWidth && (
                    <div className="mt-4 flex-1 lg:mt-0 lg:border-l lg:border-[#052440]/10 lg:pl-12">
                      <p className="text-base leading-relaxed text-[#052440]/65 sm:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philosophy Block (Moved to bottom as an Executive Closing Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-16 overflow-hidden rounded-[32px] bg-[#080357] p-8 text-white shadow-xl shadow-[#080357]/10 sm:p-12 lg:p-14"
        >
          {/* Background Ambient Glow Inside Banner */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#A7BF73]/20 blur-2xl" />
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#A7BF73] to-blue-500" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <p className="max-w-3xl text-xl font-medium leading-relaxed tracking-tight text-white/90 sm:text-2xl lg:text-3xl">
              &ldquo;A network should be an operating advantage,{" "}
              <span className="text-[#A7BF73]">
                not an operational burden.
              </span>
              &rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-white/30 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Core Philosophy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}