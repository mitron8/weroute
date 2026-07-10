'use client';

import { motion } from 'framer-motion';

export default function WhatIs({ data }) {
  const hasComparisonTable = !!data.comparisonTable;
  const hasOperatingModel = !!data.operatingModelTable;

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#0a0f25]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">{data.title}</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
            {data.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Render Comparison Table if it exists */}
        {hasComparisonTable && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl border border-gray-800 bg-[#070B19]"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#121936] border-b border-gray-800 text-gray-200">
                  {data.comparisonTable.headers.map((header, idx) => (
                    <th key={idx} className="p-6 font-semibold w-1/2">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {data.comparisonTable.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#0a1024] transition-colors">
                    <td className="p-6 text-gray-400">{row.traditional}</td>
                    <td className="p-6 text-white font-medium border-l border-gray-800">
                      {row.platform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Render Operating Model Table if it exists */}
        {hasOperatingModel && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl border border-gray-800 bg-[#070B19]"
          >
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-gray-800">
                {data.operatingModelTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#0a1024] transition-colors">
                    <td className="p-6 text-[#A3D133] font-semibold w-1/3 border-r border-gray-800">
                      {row.layer}
                    </td>
                    <td className="p-6 text-gray-300">
                      {row.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </section>
  );
}