'use client';

import { motion } from 'framer-motion';

export default function Philosophy({ data }) {
  if (!data || !data.quote) return null;

  return (
    <section className="py-20 px-6 bg-[#0a0f25] border-y border-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-light italic text-gray-300 leading-relaxed"
        >
          &ldquo;{data.quote}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}