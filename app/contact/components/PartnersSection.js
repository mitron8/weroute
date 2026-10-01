"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partnersData = {
  services: [
    {
      name: "Arista Networks",
      logo: "/images/partners/arista-networks.svg"
    },
    {
      name: "Orange Business Solutions",
      logo: "/images/partners/orange-business.svg"
    },
    {
      name: "SISL Infotech",
      logo: "/images/partners/sisl-infotech.png"
    },
    {
      name: "SISL Global",
      logo: "/images/partners/sisl-global.png"
    },
    {
      name: "Starlight Data Solutions",
      logo: "/images/partners/starlight-data-solutions.png"
    },
    {
      name: "Advantiz Technologies",
      logo: "/images/partners/advantiz-technologies.png"
    },
    {
      name: "Coforge",
      logo: "/images/partners/coforge.png"
    }
  ],
  oem: [
    {
      name: "Arista Networks",
      logo: "/images/partners/arista-networks.svg"
    },
    {
      name: "CISCO",
      logo: "/images/partners/cisco.svg"
    },
    {
      name: "Extreme Networks",
      logo: "/images/partners/extreme-networks.png"
    },
    {
      name: "Fortinet",
      logo: "/images/partners/fortinet.svg"
    },
    {
      name: "Zscaler",
      logo: "/images/partners/zscaler.png"
    },
    {
      name: "Sonicwall",
      logo: "/images/partners/sonicwall.svg"
    },
    {
      name: "Sophos",
      logo: "/images/partners/sophos.svg"
    },
    {
      name: "IBM",
      logo: "/images/partners/ibm.svg"
    },
    {
      name: "Nutanix",
      logo: "/images/partners/nutanix.svg"
    },
    {
      name: "HPE",
      logo: "/images/partners/hpe.svg"
    },
    {
      name: "Trend Micro",
      logo: "/images/partners/trend-micro.svg"
    },
    {
      name: "Data Resolve",
      logo: "/images/partners/data-resolve.png"
    },
    {
      name: "Crowd Strike",
      logo: "/images/partners/crowd-strike.svg"
    },
    {
      name: "Cato Networks",
      logo: "/images/partners/cato-networks.svg"
    },
    {
      name: "Scalefusion",
      logo: "/images/partners/scalefusion.svg"
    },
    {
      name: "Karl:VDI",
      logo: "/images/partners/karl-vdi.jpg"
    }
  ],
  distributors: [
    {
      name: "Ingram Micro",
      logo: "/images/partners/ingram-micro.svg"
    },
    {
      name: "Inflow Technologies",
      logo: "/images/partners/inflow-technologies.png"
    },
    {
      name: "Redington",
      logo: "/images/partners/redington.svg"
    }
  ]
};

export default function PartnersSection() {
  const [activeTab, setActiveTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Professional Services & Staff Augmentation' },
    { id: 'oem', label: 'OEM Reseller Partners' },
    { id: 'distributors', label: 'Distributors' }
  ];

  const getPartnerList = () => {
    switch (activeTab) {
      case 'services': return partnersData.services;
      case 'oem': return partnersData.oem;
      case 'distributors': return partnersData.distributors;
      default: return [];
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f8fafc] border border-slate-200 text-[#080357] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              Our Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080357] tracking-tight mb-4">
              Trusted Partners
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
              We collaborate with industry-leading organizations to deliver exceptional technology solutions tailored to your enterprise needs.
            </p>
          </motion.div>
        </div>

        {/* Minimal Segmented Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-slate-100 border border-slate-200/80">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-xl sm:rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePartnerTab"
                      className="absolute inset-0 bg-[#080357] rounded-xl sm:rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Partner Grid with Consistent Container Margins */}
        <div className="min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {getPartnerList().map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col items-center justify-center text-center h-28 hover:-translate-y-1 hover:border-[#080357]/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-full h-12 flex items-center justify-center px-2">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-9 max-w-[80%] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-[#080357] transition-colors duration-200 truncate max-w-full px-1 mt-1">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
