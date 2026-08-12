"use client";

import { motion } from "framer-motion";
import { ChevronRight, MapPin, Layers, LayoutGrid, Hammer } from "lucide-react";
import Link from "next/link";

const STRENGTHS = [
  {
    icon: <MapPin size={24} strokeWidth={1} />,
    title: "STRATEGIC ARCHITECTURE",
    delay: 0.1,
  },
  {
    icon: <Layers size={24} strokeWidth={1} />,
    title: "SEAMLESS EXECUTION",
    delay: 0.2,
  },
  {
    icon: <LayoutGrid size={24} strokeWidth={1} />,
    title: "VERSATILITY",
    delay: 0.3,
  },
  {
    icon: <Hammer size={24} strokeWidth={1} />,
    title: "SECURE BY DESIGN",
    delay: 0.4,
  },
];

export default function WhyWeRouteLeopolda() {
  return (
    <section className="w-full bg-white py-24 lg:py-40 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Title */}
        <div className="lg:w-[40%] flex justify-center lg:justify-end pr-0 lg:pr-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[40px] md:text-[50px] font-medium leading-[1.1] text-[#111] uppercase tracking-wide text-center lg:text-left"
          >
            WHY <br />
            WEROUTE
          </motion.h2>
        </div>

        {/* Right Column: Content */}
        <div className="lg:w-[60%] flex flex-col pt-2">
          
          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12px] md:text-[13px] leading-[1.8] text-gray-500 font-medium tracking-[0.05em] uppercase max-w-2xl mb-16"
          >
            MORE THAN JUST AN IT PROVIDER, WEROUTE IS THE ARCHITECTURAL BACKBONE FOR MODERN ENTERPRISES. WE COMBINE STRATEGIC CONSULTING, ROBUST NETWORKING, AND INTELLIGENT CYBERSECURITY INTO ONE COHESIVE DELIVERY MODEL THAT SCALES WITH YOUR AMBITION.
          </motion.p>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 mb-16">
            {STRENGTHS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + item.delay, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-6 group"
              >
                {/* Icon Container */}
                <div className="text-[#359a63] w-12 h-12 flex items-center justify-center border border-[#359a63]/20 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-[#111] text-[13px] font-medium uppercase tracking-widest leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Discover More Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link 
              href="/about"
              className="group inline-flex items-center gap-4 text-[#111] font-medium uppercase tracking-[0.15em] text-[12px] md:text-[13px]"
            >
              <ChevronRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              <span className="relative pb-1">
                DISCOVER MORE
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
