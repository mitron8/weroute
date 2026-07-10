'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const IconRenderer = ({ name }) => {
  const Icon = Icons[name];
  return Icon ? <Icon className="w-8 h-8 text-[#A3D133]" /> : <Icons.Award className="w-8 h-8 text-[#A3D133]" />;
};

export default function WhyChoose({ data }) {
  if (!data) return null;

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#0a0f25] border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-white"
        >
          {data.title}
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-[#070B19] p-8 rounded-2xl border border-gray-800"
            >
              <div className="shrink-0 text-[#A3D133]">
                <IconRenderer name={card.icon} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}