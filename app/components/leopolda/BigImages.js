"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BigImagesLeopolda() {
  return (
    <section className="w-full bg-white pb-24 lg:pb-40 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        
        {/* Image 1 */}
        <Link href="/services/consulting-advisory" className="group relative block overflow-hidden rounded-[2rem] h-[500px] lg:h-[700px] clay-light">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              alt="Consulting"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50" />
          </motion.div>
          
          <div className="absolute inset-0 p-12 flex items-end">
            <h3 className="text-white text-[32px] md:text-[45px] font-bold leading-tight uppercase tracking-tight">
              Consulting & <br /> Advisory
            </h3>
          </div>
        </Link>

        {/* Image 2 */}
        <Link href="/services/managed-services" className="group relative block overflow-hidden rounded-[2rem] h-[500px] lg:h-[700px] clay-light">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
              alt="Managed Services"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50" />
          </motion.div>
          
          <div className="absolute inset-0 p-12 flex items-end">
            <h3 className="text-white text-[32px] md:text-[45px] font-bold leading-tight uppercase tracking-tight">
              Managed <br /> Operations
            </h3>
          </div>
        </Link>

      </div>
    </section>
  );
}
