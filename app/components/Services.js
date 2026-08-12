"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SVCS } from "./data";

export default function Services() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;

    const amount = 420;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        py-28
        text-[#052440]
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
            bg-[#052440]/5
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
            items-start
            justify-between
            gap-10
            lg:flex-row
            lg:items-end
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
              Services
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
                lg:text-[44px]
              "
            >
              Services
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
                We Offer
              </span>

            </h2>

            {/* DESC */}
            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-[#052440]/65
              "
            >
              End-to-end enterprise technology
              services designed to modernize,
              secure and optimize digital
              infrastructure.
            </p>

          </motion.div>

          {/* ARROWS */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => scroll("left")}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border border-[#052440]/10
                bg-white/80
                text-[#052440]
                shadow-sm
                transition-all duration-300
                hover:bg-[#0E1A59]
                hover:text-white
              "
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border border-[#052440]/10
                bg-[#0E1A59]
                text-white
                shadow-sm
                transition-all duration-300
                hover:scale-105
              "
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>

        {/* CAROUSEL */}
        <div
          ref={sliderRef}
          className="
            mt-20
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            pb-4
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {SVCS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="
                group
                relative
                min-w-[380px]
                overflow-hidden
                rounded-[34px]
                border border-[#052440]/10
                bg-white/85
                shadow-[0_10px_40px_rgba(5,36,64,0.05)]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_80px_rgba(5,36,64,0.08)]
              "
            >

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">

                <img
                  src={images[i % images.length]}
                  alt={s.t}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#052440]/90
                    via-[#052440]/20
                    to-transparent
                  "
                />

                {/* NUMBER */}
                <div
                  className="
                    absolute
                    left-6
                    top-6
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-4
                    py-2
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-white
                    backdrop-blur-xl
                  "
                >
                  {s.n}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* ICON */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border border-[#052440]/10
                    bg-[#0E1A59]
                    text-white
                    transition-all duration-500
                    group-hover:scale-110
                  "
                >
                  {s.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    leading-snug
                    text-[#052440]
                  "
                >
                  {s.t}
                </h3>

                {/* TEXT */}
                <p
                  className="
                    mt-5
                    text-base
                    leading-7
                    text-[#052440]/60
                  "
                >
                  {s.b}
                </p>

                {/* TAGS */}
                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  {s.tags.map((tg, idx) => (
                    <span
                      key={idx}
                      className="
                        rounded-full
                        border border-[#052440]/10
                        bg-[#052440]/5
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-[#052440]/70
                      "
                    >
                      {tg}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}