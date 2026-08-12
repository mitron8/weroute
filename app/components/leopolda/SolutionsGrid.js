"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const SOLUTIONS = [
  {
    title: "Networking",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    link: "/solutions/networking"
  },
  {
    title: "Cloud Native",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "/solutions/cloud"
  },
  {
    title: "Cybersecurity",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    link: "/solutions/cyber"
  },
  {
    title: "Observability",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "/solutions/observability"
  }
];

export default function SolutionsGridLeopolda() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="w-full bg-transparent pb-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-20">
        
        {SOLUTIONS.map((sol, i) => (
          <motion.div
            key={i}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring", 
              stiffness: 50, 
              damping: 20,
              delay: i * 0.15 
            }}
            className="w-full h-full"
          >
            <Link href={sol.link} className="group relative block overflow-hidden rounded-[2rem] h-[400px] lg:h-[600px] clay-soft-dark">
              <div className="w-full h-full">
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20" />
              </div>
              
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white text-[24px] md:text-[32px] font-bold uppercase tracking-tight">
                  {sol.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
