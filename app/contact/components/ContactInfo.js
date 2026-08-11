"use client";

import { motion } from 'framer-motion';
import { Phone, MapPin, Globe, Building2 } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      id: 1,
      icon: <Phone className="w-6 h-6 text-[#080357]" />,
      title: "Phone",
      details: ["8097486432"],
    },
    {
      id: 2,
      icon: <MapPin className="w-6 h-6 text-[#080357]" />,
      title: "Head Office",
      details: ["Bangalore, India"],
    },
    {
      id: 3,
      icon: <Globe className="w-6 h-6 text-[#080357]" />,
      title: "Global Presence",
      details: ["Washington, USA", "Sydney, Australia"],
    },
    {
      id: 4,
      icon: <Building2 className="w-6 h-6 text-[#080357]" />,
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
          className="clay-light bg-[#f7f9fc] p-6 border border-[#050849]/5 hover:-translate-y-2 hover:border-[#B7F36B]/50 transition-all duration-300 flex flex-col h-full group"
        >
          <div className="w-14 h-14 clay-badge-light bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
          <div className="flex-grow flex flex-col justify-center">
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-gray-600 font-medium">
                {detail}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
