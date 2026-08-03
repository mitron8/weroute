"use client"
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function UseCasesSection({ data }) {
  if (!data || !data.cards) return null;

  // Safe icon rendering
  const renderIcon = (iconName, className) => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return <LucideIcons.CheckCircle className={className || "w-10 h-10 text-[#052440]"} />;
    return <IconComponent className={className || "w-10 h-10 text-[#052440]"} />;
  };

  const total = data.cards.length;

  const getBentoLayout = (index, total) => {
    const base = "flex flex-col p-8 md:p-10 hover:border-[#B7F36B]/50 hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative";
    
    if (total === 5) {
      const layouts = [
        { span: "md:col-span-12 lg:col-span-8", bg: "clay-dark bg-[#052440] border border-transparent", text: "text-white", desc: "text-gray-300", iconStyle: "bg-white/10 text-[#B7F36B]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-[#B7F36B] border border-[#050849]/5", text: "text-[#052440]", desc: "text-[#052440]/80", iconStyle: "bg-white/40 text-[#052440]" },
      ];
      // Note: for 5 cards, 8+4=12, 4+4+4=12. Total 24.
      return { className: `${base} ${layouts[index].span} ${layouts[index].bg}`, styles: layouts[index] };
    }

    if (total === 4) {
      const layouts = [
        { span: "md:col-span-12 lg:col-span-8", bg: "clay-dark bg-[#052440] border border-transparent", text: "text-white", desc: "text-gray-300", iconStyle: "bg-white/10 text-[#B7F36B]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-12 lg:col-span-8", bg: "clay-light bg-[#B7F36B] border border-[#050849]/5", text: "text-[#052440]", desc: "text-[#052440]/80", iconStyle: "bg-white/40 text-[#052440]" },
      ];
      // 8+4=12, 4+8=12. Total 24.
      return { className: `${base} ${layouts[index].span} ${layouts[index].bg}`, styles: layouts[index] };
    }

    if (total === 6) {
      const layouts = [
        { span: "md:col-span-12 lg:col-span-8", bg: "clay-dark bg-[#052440] border border-transparent", text: "text-white", desc: "text-gray-300", iconStyle: "bg-white/10 text-[#B7F36B]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-6 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-12 lg:col-span-4", bg: "clay-light bg-white border border-[#050849]/5", text: "text-[#052440]", desc: "text-gray-600", iconStyle: "bg-gray-50 text-[#052440]" },
        { span: "md:col-span-12 lg:col-span-12", bg: "clay-light bg-[#B7F36B] border border-[#050849]/5", text: "text-[#052440]", desc: "text-[#052440]/80", iconStyle: "bg-white/40 text-[#052440]" },
      ];
      // 8+4=12, 4+4+4=12, 12=12. Total 36.
      return { className: `${base} ${layouts[index].span} ${layouts[index].bg}`, styles: layouts[index] };
    }

    // Default fallback layout for any other number (uses standard symmetrical filling)
    const getGridSpan = (total, idx) => {
      if (total === 1) return "md:col-span-12 lg:col-span-12";
      if (total === 2) return "md:col-span-6 lg:col-span-6";
      if (total === 3) return "md:col-span-12 lg:col-span-4";
      if (total === 7) {
        if (idx < 3) return "md:col-span-12 lg:col-span-4";
        return "md:col-span-6 lg:col-span-3";
      }
      if (total === 8) return "md:col-span-6 lg:col-span-3";
      return "md:col-span-12 lg:col-span-4";
    };

    const isDark = index % 4 === 0;
    const isAccent = index % 4 === 3;
    
    let bg = "clay-light bg-white border border-[#050849]/5";
    let text = "text-[#052440]";
    let desc = "text-gray-600";
    let iconStyle = "bg-gray-50 text-[#052440]";

    if (isDark) {
      bg = "clay-dark bg-[#052440] border border-transparent"; text = "text-white"; desc = "text-gray-300"; iconStyle = "bg-white/10 text-[#B7F36B]";
    } else if (isAccent) {
      bg = "clay-light bg-[#B7F36B] border border-[#050849]/5"; text = "text-[#052440]"; desc = "text-[#052440]/80"; iconStyle = "bg-white/40 text-[#052440]";
    }

    const span = getGridSpan(total, index);
    
    return { 
      className: `${base} ${span} ${bg}`, 
      styles: { text, desc, iconStyle } 
    };
  };

  return (
    <section className="w-full bg-[#F8F9FA] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#052440] tracking-tight"
          >
            {data.title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#B7F36B] mx-auto mt-6 rounded-full origin-left"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-fr">
          {data.cards.map((card, index) => {
            const { className, styles } = getBentoLayout(index, total);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={className}
              >
                {/* Decorative glowing orb on dark cards */}
                {styles.text === "text-white" && (
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#B7F36B] opacity-10 rounded-full blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity" />
                )}

                {/* Minimal Icon Wrapper */}
                <div className={`mb-8 p-4 rounded-2xl w-fit ${styles.iconStyle} group-hover:scale-110 transition-transform duration-300`}>
                  {renderIcon(card.icon, "w-8 h-8")}
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 ${styles.text}`}>
                  {card.title}
                </h3>
                <p className={`text-base md:text-lg leading-relaxed font-light ${styles.desc}`}>
                  {card.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}