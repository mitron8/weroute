"use client";

import { motion } from "framer-motion";
import { CAPS } from "./data";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        py-32
        text-[#0E1A59]
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* GLOW */}
        <div
          className="
            absolute
            left-[-10%]
            top-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#080357]/5
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-10%]
            right-[-10%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#0d5ea8]/5
            blur-3xl
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* LEFT */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >

            {/* BADGE */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border border-[#052440]/10
                bg-white/80
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#052440]
                shadow-sm
                backdrop-blur-md
              "
            >
              Capabilities
            </span>

            {/* TITLE */}
            <h2
              className="
                mt-6
                text-3xl
                font-normal
                leading-tight
                text-[#080357]
                md:text-4xl
                lg:text-[46px]
              "
            >
              Engineering
              <br />

              Capabilities for
              <span
                className="
                  bg-gradient-to-r
                  from-[#080357]
                  to-[#A7BF73]
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Modern IT
              </span>

            </h2>

          </motion.div>

          {/* RIGHT */}
          <p
            className="
              max-w-xl
              text-lg
              leading-8
              text-[#052440]/60
            "
          >
            Advanced enterprise capabilities
            designed to optimize performance,
            security, automation and operational
            scalability across modern infrastructure.
          </p>

        </div>

        {/* NEW UI */}
        <div
          className="
            mt-24
            grid
            gap-6
            lg:grid-cols-12
          "
        >

          {CAPS.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-[#052440]/10
                bg-white/90
                p-8
                shadow-[0_15px_50px_rgba(5,36,64,0.05)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_30px_80px_rgba(5,36,64,0.08)]

                ${
                  i === 0
                    ? "lg:col-span-7 lg:min-h-[420px]"
                    : i === 1
                    ? "lg:col-span-5"
                    : i === 2
                    ? "lg:col-span-4"
                    : i === 3
                    ? "lg:col-span-8"
                    : "lg:col-span-6"
                }
              `}
            >

              {/* GRADIENT */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#052440]/5
                  via-transparent
                  to-[#0d5ea8]/5
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* TOP */}
              <div
                className="
                  relative z-10
                  flex
                  items-start
                  justify-between
                "
              >

                {/* ICON */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0E1A59]
                    text-white
                    shadow-lg
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                >
                  {c.icon}
                </div>

                {/* NUMBER */}
                <span
                  className="
                    text-sm
                    font-bold
                    tracking-[0.25em]
                    text-[#052440]/25
                  "
                >
                  {c.n}
                </span>

              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-14">

                {/* TITLE */}
                <h3
                  className="
                    max-w-md
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-[-0.03em]
                    text-[#052440]
                  "
                >
                  {c.t}
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-6
                    max-w-xl
                    text-base
                    leading-8
                    text-[#052440]/60
                  "
                >
                  {c.b}
                </p>

                {/* TAGS */}
                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  {c.tags.map((tg, idx) => (
                    <span
                      key={idx}
                      className="
                        rounded-full
                        border
                        border-[#052440]/10
                        bg-[#052440]/5
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-[#052440]/70
                      "
                    >
                      {tg}
                    </span>
                  ))}

                </div>

              </div>

              {/* DECORATIVE ELEMENT */}
              <div
                className="
                  absolute
                  bottom-[-40px]
                  right-[-40px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  border
                  border-[#052440]/5
                "
              />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}