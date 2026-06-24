"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NetworkCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#080357]
        py-36
        text-white
      "
    >
      {/* GRID */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
      />

      {/* GLOWS */}
      <div
        className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B7F36B]/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          right-[-10%]
          bottom-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            rounded-[48px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            backdrop-blur-xl
            md:p-16
            lg:p-20
          "
        >
          {/* Badge */}
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-white/70
            "
          >
            Ready To Modernize
          </span>

          {/* Heading */}
          <h2
            className="
              mt-8
              max-w-5xl
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-6xl
              lg:text-8xl
            "
          >
            Stop Managing
            <br />

            Complexity.
            <br />

            <span className="text-[#B7F36B]">
              Start Removing It.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-white/65
            "
          >
            Partner with a team that designs network
            architecture around reliability, visibility,
            and growth, not just uptime reports.
          </p>

          {/* Actions */}
          <div
            className="
              mt-12
              flex
              flex-wrap
              gap-5
            "
          >
            <a
              href="/contact"
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-8
                py-4
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Request Consultation

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* Metrics */}
          <div
            className="
              mt-20
              grid
              gap-8
              border-t
              border-white/10
              pt-10
              md:grid-cols-3
            "
          >
            <div>
              <h3
                className="
                  text-4xl
                  font-bold
                  tracking-[-0.04em]
                "
              >
                40+
              </h3>

              <p
                className="
                  mt-3
                  text-white/50
                "
              >
                Enterprise Projects Delivered
              </p>
            </div>

            <div>
              <h3
                className="
                  text-4xl
                  font-bold
                  tracking-[-0.04em]
                "
              >
                99.9%
              </h3>

              <p
                className="
                  mt-3
                  text-white/50
                "
              >
                System Reliability
              </p>
            </div>

            <div>
              <h3
                className="
                  text-4xl
                  font-bold
                  tracking-[-0.04em]
                "
              >
                Global
              </h3>

              <p
                className="
                  mt-3
                  text-white/50
                "
              >
                Enterprise Delivery Capability
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}