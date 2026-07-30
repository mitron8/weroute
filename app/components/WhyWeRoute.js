"use client";

import { WHY } from "./data";

export default function WhyWeRoute() {
  return (
    <section
      id="why"
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
            top-0
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

        {/* SECTION HEADER */}
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
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
            Why WeRoute
          </span>

          {/* HEADING */}
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
            Why Enterprises
            <br />

            Choose

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
              WeRoute
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[#052440]/65
            "
          >
            Modern enterprise challenges require more than tools.
            We deliver scalable architecture, consulting-led
            execution, and long-term operational excellence.
          </p>

        </div>

        {/* GRID */}
        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {WHY.map((c, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border border-[#052440]/10
                bg-white/85
                p-8
                shadow-[0_10px_40px_rgba(5,36,64,0.05)]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-3
                hover:border-[#052440]/20
                hover:shadow-[0_20px_60px_rgba(5,36,64,0.08)]
              "
            >

              {/* HOVER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#052440]/5
                  via-transparent
                  to-[#0d5ea8]/5
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">

                {/* NUMBER */}
                <div
                  className="
                    text-sm
                    font-bold
                    tracking-[0.22em]
                    text-[#0d5ea8]
                  "
                >
                  {c.n}
                </div>

                {/* ICON */}
                <div
                  className="
                    mt-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border border-[#052440]/10
                    bg-[#080357]
                    text-white
                    transition-all duration-500
                    group-hover:scale-110
                  "
                >
                  {c.icon}
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
                  {c.t}
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
                  {c.b}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}