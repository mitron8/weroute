"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

/**
 * Individual FAQ Item with signature WeRoute claymorphic styling
 */
export function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index = 0,
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`clay-light group relative overflow-hidden rounded-2xl md:rounded-[28px] border border-[#050849]/5 bg-[#f7f9fc] transition-all duration-500 ${
        isOpen ? "border-[#050849]/20 shadow-sm" : ""
      }`}
    >
      {/* Subtle hover gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050849]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header / Click Target */}
      <button
        onClick={onToggle}
        className="relative z-10 flex w-full items-start justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-8 focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <motion.h3
          layout="position"
          className={`mt-1 text-lg font-bold tracking-tight transition-colors duration-300 md:text-xl text-[#050849] ${
            isOpen ? "text-[#050849]" : "group-hover:text-[#050849]"
          }`}
        >
          {question}
        </motion.h3>

        {/* Signature Circular Rotating Plus Button */}
        <motion.div
          layout="position"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-in-out ${
            isOpen
              ? "rotate-45 border-[#98c93c] bg-[#98c93c]/10 text-[#98c93c]"
              : "border-[#050849]/10 bg-transparent text-[#050849]/40 group-hover:border-[#050849]/20 group-hover:bg-[#050849]/5 group-hover:text-[#050849]"
          }`}
        >
          <Plus size={18} strokeWidth={2.5} />
        </motion.div>
      </button>

      {/* Expandable Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 pb-6 md:px-8 md:pb-8"
          >
            <div className="border-t border-[#050849]/10 pt-6">
              <p className="text-base font-normal leading-relaxed text-[#050849]/75 md:text-lg text-justify sm:text-left">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * FAQ Accordion List Component
 */
export function FAQAccordion({
  items = [],
  initialOpenIndex = null,
  allowMultiple = false,
  className = "space-y-4",
}) {
  const [openIndexes, setOpenIndexes] = useState(
    initialOpenIndex !== null ? [initialOpenIndex] : []
  );

  if (!items || items.length === 0) return null;

  const handleToggle = (idx) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(idx) ? [] : [idx]));
    }
  };

  return (
    <div className={className}>
      {items.map((item, index) => {
        const question = item.question || item.q;
        const answer = item.answer || item.a;
        const isOpen = openIndexes.includes(index);

        return (
          <FAQItem
            key={question || index}
            question={question}
            answer={answer}
            isOpen={isOpen}
            onToggle={() => handleToggle(index)}
            index={index}
          />
        );
      })}
    </div>
  );
}

/**
 * Standard Centered Full Section FAQ Component
 */
export default function FAQSection({
  data,
  badge = "Support & Clarity",
  title = "Frequently Asked Questions",
  subtitle = "Find clarity on how our solutions and services are structured, delivered, and integrated into your enterprise environment.",
  className = "",
  initialOpenIndex = null,
}) {
  const rawItems = Array.isArray(data)
    ? data
    : data?.items || data?.faqs || [];

  const sectionTitle =
    typeof data?.title === "string" && data.title.trim().length > 0
      ? data.title
      : title;

  if (!rawItems || rawItems.length === 0) return null;

  return (
    <section className={`relative overflow-hidden bg-[#f7f9fc] py-24 md:py-32 ${className}`}>
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#050849]/[0.02] blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#98c93c]/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-normal leading-tight text-[#050849] md:text-4xl lg:text-[44px] tracking-tight"
          >
            {sectionTitle.includes("Questions") ? (
              <>
                {sectionTitle.replace(/Questions/g, "").trim()}{" "}
                <span className="bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent font-medium">
                  Questions
                </span>
              </>
            ) : (
              sectionTitle
            )}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base md:text-lg leading-relaxed text-[#050849]/65 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Accordion list */}
        <FAQAccordion items={rawItems} initialOpenIndex={initialOpenIndex} />
      </div>
    </section>
  );
}
