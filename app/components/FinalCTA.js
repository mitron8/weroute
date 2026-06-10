"use client";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        py-32
        text-[#052440]
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* GRID */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#052440]/5
            blur-3xl
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* MAIN CARD */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-[#052440]/10
            bg-white/90
            px-8
            py-20
            shadow-[0_20px_80px_rgba(5,36,64,0.06)]
            backdrop-blur-2xl
            md:px-16
            lg:px-24
          "
        >

          {/* TOP */}
          <div
            className="
              flex
              flex-col
              gap-16
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* LEFT */}
            <div className="max-w-3xl">

              {/* BADGE */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#052440]/10
                  bg-[#052440]/5
                  px-5
                  py-2.5
                "
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#052440]
                    text-white
                  "
                >
                  <Sparkles size={15} />
                </div>

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#052440]
                  "
                >
                  Start Your Transformation
                </span>

              </div>

              {/* HEADING */}
              <h2
                className="
                  mt-10
                  text-4xl
                  font-black
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#052440]
                  md:text-5xl
                  lg:text-7xl
                "
              >
                Build Smarter,
                <br />

                Scale Faster.

              </h2>

              {/* TEXT */}
              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-8
                  text-[#052440]/60
                "
              >
                From cloud infrastructure and
                cybersecurity to AI-powered
                automation, WeRoute helps
                enterprises modernize operations
                with scalable and resilient
                technology ecosystems.
              </p>

            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                flex-col
                gap-5
                lg:min-w-[320px]
              "
            >

              {/* PRIMARY BUTTON */}
              <a
                href="#"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  bg-[#052440]
                  px-7
                  py-5
                  text-white
                  shadow-[0_15px_40px_rgba(5,36,64,0.18)]
                  transition-all
                  duration-300
                  hover:translate-y-[-2px]
                "
              >

                <div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-white/50
                    "
                  >
                    Consultation
                  </div>

                  <div
                    className="
                      mt-2
                      text-lg
                      font-semibold
                    "
                  >
                    Talk to an Expert
                  </div>

                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={20} />
                </div>

              </a>

              {/* SECONDARY BUTTON */}
              <a
                href="#services"
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-[#052440]/10
                  bg-[#052440]/5
                  px-7
                  py-5
                  transition-all
                  duration-300
                  hover:bg-[#052440]/8
                "
              >

                <div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-[#052440]/40
                    "
                  >
                    Solutions
                  </div>

                  <div
                    className="
                      mt-2
                      text-lg
                      font-semibold
                      text-[#052440]
                    "
                  >
                    Explore Services
                  </div>

                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#052440]/10
                    text-[#052440]
                  "
                >
                  <ArrowRight size={20} />
                </div>

              </a>

            </div>

          </div>

          {/* STATS */}
          <div
            className="
              mt-20
              grid
              gap-6
              border-t
              border-[#052440]/10
              pt-10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {[
              ["150+", "Enterprise Clients"],
              ["99.99%", "Infrastructure Uptime"],
              ["24/7", "Operational Support"],
              ["40+", "Technology Experts"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="
                  rounded-2xl
                  border
                  border-[#052440]/10
                  bg-[#052440]/[0.03]
                  p-6
                "
              >

                <div
                  className="
                    text-4xl
                    font-black
                    tracking-[-0.04em]
                    text-[#052440]
                  "
                >
                  {num}
                </div>

                <div
                  className="
                    mt-3
                    text-sm
                    font-medium
                    text-[#052440]/55
                  "
                >
                  {label}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}