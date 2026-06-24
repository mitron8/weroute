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
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyNetworkTransformation() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,36,64,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Animated Glow Orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full bg-[#080357]/5 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -left-[10%] h-[400px] w-[400px] rounded-full bg-[#A7BF73]/10 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-flex rounded-full border border-[#052440]/10 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#052440] shadow-sm">
            Network Modernization
          </span>

          <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#080357] md:text-6xl lg:text-7xl lg:leading-[0.95] lg:tracking-[-0.04em]">
            Why Network <br className="hidden md:block" />
            Transformation
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              {" "}
              Matters
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#052440]/70 sm:text-xl sm:leading-9">
            Most networks were designed for an office that no longer exists.
            Hybrid work, cloud-first applications, and distributed teams have
            quietly broken assumptions that legacy network architecture was
            built on, and most enterprises are still running on yesterday's
            blueprint.
          </p>
        </motion.div>

        {/* Philosophy Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white p-10 shadow-[0_20px_60px_rgba(5,36,64,0.05)] sm:p-14 lg:p-16"
        >
          {/* Subtle inner gradient line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#080357] via-[#A7BF73] to-transparent opacity-50" />
          
          <p className="text-3xl font-semibold leading-snug tracking-[-0.03em] text-[#080357] lg:text-4xl lg:leading-tight">
            A network should be an operating advantage, <br className="hidden lg:block"/>
            <span className="text-[#A7BF73]">not an operational burden.</span>
          </p>
        </motion.div>

        {/* Challenge Grid */}
        {/* Challenge Grid */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  className="mt-16"
>
  {/* First 4 Cards */}
  <div className="grid gap-6 lg:grid-cols-12">
    {challenges.slice(0, 4).map((item, index) => (
      <motion.div
        key={item.title}
        variants={cardVariants}
        whileHover={{ y: -8 }}
        className={`
          group relative overflow-hidden rounded-[32px] border border-[#052440]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-[0_20px_40px_rgba(5,36,64,0.08)]
          ${
            index === 0
              ? "lg:col-span-7"
              : index === 1
              ? "lg:col-span-5"
              : index === 2
              ? "lg:col-span-5"
              : "lg:col-span-7"
          }
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f8] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10">
          <span className="inline-block text-sm font-black tracking-[0.25em] text-[#052440]/30 transition-colors duration-300 group-hover:text-[#A7BF73]">
            {item.n}
          </span>

          <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight text-[#052440] sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-5 text-base leading-relaxed text-[#052440]/65 sm:text-lg">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Featured Closing Card */}
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -6 }}
    className="group relative mt-6 overflow-hidden rounded-[40px] bg-[#080357] p-10 lg:p-14"
  >
    {/* Glow */}
    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A7BF73]/20 blur-3xl" />

    <div className="absolute bottom-0 right-0 h-full w-[45%] bg-gradient-to-l from-[#A7BF73]/10 to-transparent" />

    <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full">
        <span className="inline-block  text-sm font-black tracking-[0.3em] text-[#A7BF73]">
          05
        </span>

        <h3 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
          Efficiency Became the New Battleground
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-white/75 lg:text-xl">
          Enterprises are not just asking if the network works. They are
          asking what it costs to run, troubleshoot, and scale every single
          month.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-px w-20 bg-white/20" />
        <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold tracking-[0.15em] text-[#A7BF73] uppercase backdrop-blur">
          Network Efficiency
        </div>
      </div>
    </div>
  </motion.div>
</motion.div>
      </div>
    </section>
  );
}