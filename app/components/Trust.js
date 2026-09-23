"use client";

import { motion } from "framer-motion";
import { FolderCheck, Factory, Layers } from "lucide-react";

const proofCards = [
  {
    icon: FolderCheck,
    title: "Enterprise Projects Delivered",
    highlight: "40+ Projects",
    desc: "40+ enterprise technology projects delivered across networking, cloud, security, software, and automation.",
    tags: ["Networking", "Cloud", "Security", "Automation"],
    image: "/images/enterprise-projects-delivered.png"
  },
  {
    icon: Factory,
    title: "Industries Served",
    highlight: "8 Sectors",
    desc: "Financial services, healthcare, manufacturing, telecommunications, retail, logistics, energy, and technology.",
    tags: ["Financial Services", "Healthcare", "Manufacturing", "Telecom", "Retail", "Logistics", "Energy"],
    image: "/images/industries-served.png"
  },
  {
    icon: Layers,
    title: "Technology Domains",
    highlight: "Full Lifecycle",
    desc: "Networking, cloud, cybersecurity, AI and automation, software engineering, and managed operations.",
    tags: ["Networking", "Cloud", "Cybersecurity", "AI & Automation", "Software", "Managed Ops"],
    image: "/images/technology-domains.png"
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 md:py-28 text-[#052440]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#052440]/5 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#080357]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Claymorphic Badge */}
          <span className="clay-badge-light inline-flex items-center border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
            Enterprise Track Record
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-[#080357] md:text-5xl leading-tight">
            Trusted Across{" "}
            <span className="bg-gradient-to-r from-[#080357] via-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              Enterprise Technology Ecosystems
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#052440]/75 font-normal">
            WeRoute delivers enterprise technology services across financial services, healthcare, manufacturing, telecommunications, retail, logistics, and energy, working with the platforms enterprise teams already run.
          </p>
        </motion.div>

        {/* 3 Proof Cards in Claymorphism */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="clay-light group relative flex flex-col justify-between overflow-hidden bg-[#f7f9fc] border border-[#052440]/5 p-6 sm:p-7 transition-all duration-300 hover:border-[#052440]/15 hover:-translate-y-1.5 hover:shadow-[10px_10px_20px_rgba(5,36,64,0.08)]"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6 bg-slate-200">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#080357]/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Icon Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="clay-badge-light flex h-11 w-11 items-center justify-center bg-[#080357] text-[#B7F36B] shadow-md backdrop-blur-md">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Floating Highlight Pill */}
                    <div className="absolute top-3 right-3">
                      <span className="clay-badge-light px-3 py-1 text-xs font-mono font-bold tracking-wider text-[#080357] bg-white/95 backdrop-blur-md border border-[#052440]/10 shadow-sm">
                        {card.highlight}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#080357] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#052440]/75">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#052440]/10">
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="clay-badge-light text-[11px] font-medium px-3 py-1 bg-white text-[#052440]/80 border border-[#052440]/10 shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Capabilities Tags */}
        <div className="relative z-10 mt-14 flex flex-wrap items-center justify-center gap-3">
          {[
            "Vendor-Agnostic by Design",
            "Production-Grade Architectures",
            "Zero-Trust Security Controls",
            "Multi-Cloud & Hybrid Native",
            "Governed Automation",
          ].map((item) => (
            <div
              key={item}
              className="clay-badge-light border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2.5 text-xs font-medium text-[#052440]/80 hover:text-[#080357] transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}