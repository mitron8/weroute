'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

// Helper component to render Lucide icons dynamically from string names
const IconRenderer = ({ name }) => {
  const Icon = Icons[name];
  return Icon ? <Icon className="w-6 h-6 text-[#A3D133]" /> : <Icons.CheckCircle className="w-6 h-6 text-[#A3D133]" />;
};

export default function WhySection({ data }) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#070B19]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            {data.introduction}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0c122b] border border-gray-800/60 p-8 rounded-xl hover:border-[#A3D133]/40 transition-colors duration-300 group"
            >
              <div className="bg-[#121936] w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconRenderer name={card.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}