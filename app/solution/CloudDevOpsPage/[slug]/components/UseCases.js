'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const IconRenderer = ({ name }) => {
  const Icon = Icons[name];
  return Icon ? <Icon className="w-6 h-6 text-[#A3D133]" /> : <Icons.Target className="w-6 h-6 text-[#A3D133]" />;
};

export default function UseCases({ data }) {
  if (!data) return null;

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#0a0f25] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">{data.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-0 bg-[#070B19] border border-gray-700 w-12 h-12 rounded-lg flex items-center justify-center">
                <IconRenderer name={card.icon} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}