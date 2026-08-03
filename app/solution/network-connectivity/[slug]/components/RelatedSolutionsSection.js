"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RelatedSolutionsSection({ data }) {
  if (!data || !data.links) return null;

  return (
    <section className="w-full bg-[#F8F9FA] py-24 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-[#052440] mb-6"
        >
          {data.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-12"
        >
          {data.intro}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {data.links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={link.href}
                className="group flex items-center gap-2 px-6 py-3 clay-light bg-[#f7f9fc] border border-[#050849]/5 rounded-full text-[#052440] font-medium hover:border-[#B7F36B] hover:-translate-y-1 transition-all duration-300"
              >
                {link.label}
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#B7F36B] group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}