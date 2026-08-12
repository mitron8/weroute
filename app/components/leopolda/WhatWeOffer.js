"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const OFFERINGS = [
  {
    num: "01",
    title: "Network Solutions",
    description: "Secure, scalable and high-performance enterprise connectivity solutions. We design robust architectures that ensure zero downtime, enabling seamless communication across global teams and ensuring your infrastructure is prepared for tomorrow's immense data demands.",
    linkText: "View Details",
    linkUrl: "/solutions/network",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Cybersecurity",
    description: "Advanced threat protection and zero-trust security architecture. In an era of escalating digital threats, our proactive defense mechanisms safeguard your most critical assets, ensuring regulatory compliance and absolute peace of mind across every endpoint.",
    linkText: "View Details",
    linkUrl: "/solutions/cyber",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Cloud Infrastructure",
    description: "Hybrid and multi-cloud environments optimized for scale and resilience. We orchestrate complex cloud migrations and ongoing management, delivering the flexibility your enterprise needs to innovate faster while aggressively optimizing operational costs.",
    linkText: "View Details",
    linkUrl: "/solutions/cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "AI & Automation",
    description: "Intelligent automation and AI-powered operational transformation. Harness the power of machine learning to eliminate redundant tasks, uncover deep data insights, and accelerate your entire business process with unmatched precision and speed.",
    linkText: "View Details",
    linkUrl: "/solutions/ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function WhatWeOfferLeopolda() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="w-full bg-[#fafafa] pt-24 md:pt-32 pb-32 md:pb-48 px-6 md:px-12 border-t border-gray-100 relative">
      
      {/* Title */}
      <div className="text-center mb-16 md:mb-32 sticky top-12 z-0">
        <h2 className="text-[32px] md:text-[45px] lg:text-[55px] font-medium leading-[1.1] text-[#111] uppercase tracking-wide">
          WHAT WE OFFER
        </h2>
      </div>

      {/* Stacked Cards Container */}
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col gap-12 md:gap-0">
        {OFFERINGS.map((offer, index) => {
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="sticky flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-[#fafafa] py-12 mb-12 md:mb-0"
              style={{
                top: `calc(10vh + ${index * 30}px)`, 
                height: 'auto',
                minHeight: '60vh'
              }}
            >
              
              {/* Text Column */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <motion.span 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[60px] md:text-[90px] font-bold text-[#111]/5 leading-none mb-4 -ml-2"
                >
                  {offer.num}
                </motion.span>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[28px] md:text-[36px] font-medium leading-[1.1] text-[#111] uppercase mb-6"
                >
                  {offer.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[16px] md:text-[18px] text-gray-500 font-light leading-[1.7] mb-10 max-w-lg"
                >
                  {offer.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    href={offer.linkUrl}
                    className="group inline-flex items-center gap-4 text-[#111] font-medium uppercase tracking-[0.15em] text-[12px] md:text-[13px]"
                  >
                    <ChevronRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative pb-1">
                      {offer.linkText}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </motion.div>
              </div>

              {/* Image Column */}
              <div className="md:w-1/2 w-full h-full min-h-[300px] md:min-h-[450px] mt-8 md:mt-0">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full rounded-[1.5rem] overflow-hidden min-h-[300px] md:min-h-[450px] clay-soft-light"
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
                  />
                  {/* Subtle overlay to enhance the premium feel */}
                  <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-1000 pointer-events-none" />
                </motion.div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
