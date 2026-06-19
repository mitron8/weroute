"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ data }) {
  const [active, setActive] = useState(null);

  if (!data?.length) return null;

  return (
    <section className="mt-24">

      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#052440]/40">
          FAQs
        </span>

        <h2 className="mt-5 text-5xl font-black text-[#052440]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-5">

        {data.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[28px] border border-[#052440]/10 bg-white"
          >
            <button
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <h3 className="text-lg font-bold text-[#052440]">
                {item.question}
              </h3>

              {active === index ? (
                <Minus size={20} />
              ) : (
                <Plus size={20} />
              )}
            </button>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#052440]/10 px-6 py-5">
                    <p className="leading-8 text-[#052440]/65">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>

    </section>
  );
}