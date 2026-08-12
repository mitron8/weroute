"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CapabilitiesLeopolda() {
  return (
    <section className="w-full bg-white py-24 lg:py-40 px-6 lg:px-12 border-t border-[#050849]/5">
      
      {/* Top Text Row */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24">
        
        {/* Col 1: Title */}
        <div className="lg:w-1/3">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[36px] md:text-[50px] font-medium leading-[1.1] text-[#111] uppercase tracking-wide"
          >
            THE <br />
            SERVICES
          </motion.h2>
        </div>

        {/* Col 2: Description */}
        <div className="lg:w-1/3 lg:pt-2">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[14px] md:text-[15px] leading-[1.6] text-gray-500 font-light tracking-wide uppercase"
          >
            Spanning global data centers and localized edge infrastructure, WeRoute delivers comprehensive consulting and managed services tailored for high-stakes enterprise environments. We build systems that last.
          </motion.p>
        </div>

        {/* Col 3: Link */}
        <div className="lg:w-1/3 flex items-start justify-start lg:justify-end pt-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link 
              href="/services"
              className="group flex items-center gap-4 text-[#111] font-medium uppercase tracking-[0.15em] text-[12px] md:text-[13px]"
            >
              <ChevronRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              <span className="relative pb-1">
                VIRTUAL TOUR
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Bottom Large Image */}
      <div className="max-w-[1000px] mx-auto h-[400px] md:h-[600px] overflow-hidden bg-[#fafafa] rounded-[1.5rem] clay-soft-light">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Data Center Interior"
            className="w-full h-full object-cover filter grayscale"
          />
        </motion.div>
      </div>

    </section>
  );
}
