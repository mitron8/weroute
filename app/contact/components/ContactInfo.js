"use client";

import { motion } from 'framer-motion';
import { Phone, MapPin, Globe, Building2 } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      id: 1,
      icon: <Phone className="w-7 h-7" />,
      title: "Phone",
      details: ["8097486432"],
    },
    {
      id: 2,
      icon: <MapPin className="w-7 h-7" />,
      title: "Head Office",
      details: ["Bangalore, India"],
    },
    {
      id: 3,
      icon: <Globe className="w-7 h-7" />,
      title: "Global Presence",
      details: ["Washington, USA", "Sydney, Australia"],
    },
    {
      id: 4,
      icon: <Building2 className="w-7 h-7" />,
      title: "Sister Branch",
      details: ["Weroute Technologies Pvt Ltd", "Delhi, NCR"],
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto px-8 relative z-20 -mt-16 mb-24">
      {contactDetails.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="clay-light bg-white p-8 border border-[#050849]/5 hover:-translate-y-2 hover:border-[#B7F36B] transition-all duration-300 flex flex-col h-full group rounded-[2rem] shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(8,3,87,0.1)]"
        >
          <div className="w-16 h-16 rounded-2xl clay-soft-light bg-[#f7f9fc] text-[#080357] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#B7F36B] group-hover:text-[#080357] transition-all duration-300">
            {item.icon}
          </div>
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">{item.title}</h4>
          <div className="flex-grow flex flex-col justify-start">
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-[#080357] text-lg font-semibold leading-relaxed">
                {detail}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
