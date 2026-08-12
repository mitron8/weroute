"use client";

import { motion } from "framer-motion";

export default function PreFooterLeopolda() {
  return (
    <section className="w-full relative h-[30vh] md:h-[40vh] lg:h-[50vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="WeRoute Landscape"
          className="w-full h-full object-cover filter grayscale opacity-90"
        />
        {/* Subtle overlay to blend nicely with the dark footer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050849]/50 to-transparent mix-blend-multiply" />
      </motion.div>
    </section>
  );
}
