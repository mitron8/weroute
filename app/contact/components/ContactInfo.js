"use client";

import { motion } from 'framer-motion';
import { Phone, MapPin, Globe, Building2 } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      id: 1,
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["8097486432"],
      href: "tel:8097486432",
    },
    {
      id: 2,
      icon: <MapPin className="w-5 h-5" />,
      title: "Head Office",
      details: ["Bangalore, India"],
      href: null,
    },
    {
      id: 3,
      icon: <Globe className="w-5 h-5" />,
      title: "Global Presence",
      details: ["Washington, USA", "Sydney, Australia"],
      href: null,
    },
    {
      id: 4,
      icon: <Building2 className="w-5 h-5" />,
      title: "Sister Branch",
      details: ["Weroute Technologies Pvt Ltd", "Delhi, NCR"],
      href: null,
    }
  ];

  return (
    <section className="py-16 bg-[#f8fafc] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => {
            const Wrapper = item.href ? 'a' : 'div';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Wrapper
                  href={item.href || undefined}
                  className={`h-full flex flex-col p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#080357]/20 hover:shadow-md transition-all duration-300 block ${
                    item.href ? 'hover:-translate-y-0.5 cursor-pointer' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#080357] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {item.title}
                  </h4>
                  <div className="flex-grow flex flex-col justify-start">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-[#080357] text-base sm:text-lg font-semibold leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
