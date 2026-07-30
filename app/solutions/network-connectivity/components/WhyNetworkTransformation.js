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
            Network Modernization
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[#050849] sm:text-5xl lg:text-6xl">
            Why Network <br className="hidden md:block" />
            Transformation
            <span className="bg-gradient-to-r from-[#050849] to-[#98c93c] bg-clip-text text-transparent">
              {" "}
              Matters
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-[#4c658a] sm:text-lg sm:leading-8">
            Most networks were designed for an office that no longer exists.
            Hybrid work, cloud-first applications, and distributed teams have
            quietly broken assumptions that legacy network architecture was
            built on, and most enterprises are still running on yesterday&apos;s
            blueprint.
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
            const isFullWidth = index === 4;

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
                    : "lg:col-span-12"
                } ${isFullWidth ? "lg:p-10" : ""}`}
              >
                {/* Subtle Background Watermark Number */}
                <span className="pointer-events-none absolute right-6 top-4 select-none font-mono text-[64px] font-black leading-none text-[#050849]/[0.03] transition-colors group-hover:text-[#050849]/[0.06]">
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm font-mono text-sm font-bold text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c] group-hover:text-[#050849]">
                      {item.n}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849] transition-colors sm:text-3xl">
                      {item.title}
                    </h3>

                    {!isFullWidth && (
                      <p className="mt-4 text-sm font-medium leading-relaxed text-[#4c658a] sm:text-base">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {/* Right Section */}
                  {isFullWidth && (
                    <div className="mt-4 flex-1 lg:mt-0 lg:border-l lg:border-[#050849]/10 lg:pl-12">
                      <p className="text-base font-medium leading-relaxed text-[#4c658a] sm:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  )}
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
              &ldquo;A network should be an operating advantage,{" "}
              <span className="text-[#98c93c]">
                not an operational burden.
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