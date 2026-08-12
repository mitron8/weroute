"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroLeopolda() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white flex flex-col justify-center border-b border-gray-100">
      
      {/* Main Content */}
      <div className="relative z-10 w-full px-6 md:px-12 xl:px-24 max-w-[1600px] mx-auto flex flex-col pt-20">
        <div className="flex flex-col text-[#111]">
          
          <div className="overflow-hidden mb-8 md:mb-12 ml-1">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-gray-400 font-bold"
            >
              WeRoute Enterprise
            </motion.span>
          </div>
          
          <h1 className="text-[50px] md:text-[80px] lg:text-[110px] leading-[0.9] tracking-tight uppercase">
            <div className="overflow-hidden pb-2">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block font-medium"
              >
                A UNIQUE DIGITAL
              </motion.span>
            </div>
            
            <div className="overflow-hidden pb-2">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="block font-light text-gray-400 flex items-center gap-6"
              >
                FOUNDATION
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden md:block h-[2px] bg-gray-200 flex-grow origin-left mt-4"
                />
              </motion.span>
            </div>
          </h1>

          <div className="mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-[16px] md:text-[20px] font-medium leading-[1.6] text-gray-500 uppercase tracking-widest max-w-xl"
              >
                For the modern enterprise, where seamless scalability and security come to life.
              </motion.p>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex items-center gap-4 text-[#111] uppercase tracking-[0.2em] text-[12px] font-bold"
            >
              <span className="pb-1 border-b border-[#111]">Scroll</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
