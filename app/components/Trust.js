"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "./data";

export default function Trust() {
  return (
    <section
      id="trust"
      className="
        relative
        overflow-hidden
        border-y border-white/5
        bg-[#0E1A59]
        py-20
      "
    >

      {/* TOP CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >

          {/* BADGE */}
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-5
              py-2
              text-[11px]
              font-medium
              uppercase
              tracking-[0.24em]
              text-white/50
              backdrop-blur-xl
            "
          >
            Trusted Enterprise Partners
          </span>

          {/* HEADING */}
          <h2
            className="
              mt-6
              text-4xl
              font-light
              tracking-[-0.05em]
              text-white
              md:text-6xl
            "
          >
            Built with
            <span className="text-[#A7BF73]">
              {" "}industry-leading
            </span>

            <br />

            technology ecosystems.

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-white/45
            "
          >
            Strategic partnerships across cloud,
            cybersecurity, infrastructure,
            networking and AI platforms.
          </p>

        </motion.div>

      </div>

      {/* MARQUEE */}
      <div
        className="
          relative
          mt-16
          overflow-hidden
        "
      >

        {/* FADE LEFT */}
        <div
          className="
            absolute
            left-0
            top-0
            z-10
            h-full
            w-32
            bg-gradient-to-r
            from-[#070459]
            to-transparent
          "
        />

        {/* FADE RIGHT */}
        <div
          className="
            absolute
            right-0
            top-0
            z-10
            h-full
            w-32
            bg-gradient-to-l
            from-[#070459]
            to-transparent
          "
        />

        {/* TRACK */}
        <div
          className="marquee-track flex w-max items-center gap-20"
        >

          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div
              key={i}
              className="
                flex
                items-center
                gap-3
                whitespace-nowrap
              "
            >

              {/* DOT */}
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: partner.color,
                }}
              />

              {/* BRAND NAME */}
              <span
                className="
                  text-2xl
                  font-medium
                  tracking-[-0.03em]
                  text-white/30
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                {partner.name}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* BOTTOM TAGS */}
      <div
        className="
          relative z-10
          mt-16
          flex
          flex-wrap
          items-center
          justify-center
          gap-4
          px-6
        "
      >

        {[
          "Vendor-Agnostic",
          "Cloud Native",
          "AI Infrastructure",
          "Enterprise Security",
          "Scalable Systems",
        ].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-5
              py-3
              text-sm
              font-medium
              text-white/55
              backdrop-blur-xl
            "
          >
            {item}
          </motion.div>
        ))}

      </div>

    </section>
  );
}