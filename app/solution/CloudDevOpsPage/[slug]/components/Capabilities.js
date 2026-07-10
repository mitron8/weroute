'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Link from 'next/link';

const IconRenderer = ({ name }) => {
  const Icon = Icons[name];
  return Icon ? <Icon className="w-8 h-8 text-[#A3D133]" /> : <Icons.Zap className="w-8 h-8 text-[#A3D133]" />;
};

export default function Capabilities({ data }) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#070B19]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex md:justify-between md:items-end border-b border-gray-800 pb-8">
          <div className="max-w-2xl">
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
          {data.proofLine && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-0 max-w-sm text-sm text-[#A3D133] border-l-2 border-[#A3D133] pl-4"
            >
              {data.proofLine}
            </motion.div>
          )}
        </div>

        <div className="space-y-6">
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0c122b] border border-gray-800 p-8 rounded-xl flex flex-col md:flex-row gap-6 md:items-center hover:border-gray-600 transition-colors"
            >
              <div className="shrink-0 bg-[#070B19] p-4 rounded-full border border-gray-800">
                <IconRenderer name={card.icon} />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
              </div>
              {card.button && (
                <div className="shrink-0 mt-4 md:mt-0">
                  <Link href={card.button.href} className="text-[#A3D133] hover:text-white flex items-center gap-2 font-medium transition-colors">
                    {card.button.label} <Icons.ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}