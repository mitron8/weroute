"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partnersData = {
  services: [
    "Arista Networks",
    "Orange Business Solutions",
    "SISL Infotech",
    "SISL Global",
    "Starlight Data Solutions",
    "Advantiz Technologies",
    "Coforge"
  ],
  oem: [
    "Arista Networks",
    "CISCO",
    "Extreme Networks",
    "Fortinet",
    "Zscaler",
    "Sonicwall",
    "Sophos",
    "IBM",
    "Nutanix",
    "HPE",
    "Trend Micro",
    "Data Resolve",
    "Crowd Strike",
    "Cato Networks",
    "Scalefusion",
    "Karl:VDI"
  ],
  distributors: [
    "Ingram Micro",
    "Inflow Technologies",
    "Redington"
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
    <section className="py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 border border-[#080357]/10 bg-[#080357]/5 text-[#080357] text-xs font-bold uppercase tracking-wider backdrop-blur-sm rounded-full mb-4">
              Our Network
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#080357] mb-4">Trusted Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We collaborate with industry-leading organizations to deliver exceptional technology solutions tailored to your enterprise needs.
            </p>
          </motion.div>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#080357] rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Partner Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
            >
              {getPartnerList().map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl p-6 flex items-center justify-center text-center h-28 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 group"
                >
                  <span className="font-semibold text-gray-700 group-hover:text-[#080357] transition-colors duration-300">
                    {partner}
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
