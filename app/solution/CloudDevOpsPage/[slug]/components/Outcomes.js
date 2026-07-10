'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const IconRenderer = ({ name }) => {
  const Icon = Icons[name];
  return Icon ? <Icon className="w-5 h-5 text-[#A3D133]" /> : <Icons.CheckCircle className="w-5 h-5 text-[#A3D133]" />;
};

export default function Outcomes({ data }) {
  if (!data) return null;

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#070B19]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            {data.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#121936] p-6 rounded-xl border border-gray-800/60 hover:border-[#A3D133]/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#A3D133]/10 p-2 rounded-md">
                  <IconRenderer name={card.icon} />
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}