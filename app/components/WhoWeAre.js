"use client";

import {
  IcoGlobe,
  IcoTgt,
  IcoShield,
  IcoArr,
} from "./Icons";

export default function WhoWeAre() {
  return (
    <section
      id="who"
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        py-28
        text-[#080357]
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
            bg-[#080357]/5
            blur-3xl
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* TOP LAYOUT */}
        <div
          className="
            grid
            gap-20
            lg:grid-cols-2
          "
        >

          {/* LEFT */}
          <div>

            {/* LABEL */}
            <span
              className="
                inline-block
                rounded-full
                border border-[#052440]/10
                bg-white/80
                px-5 py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#052440]
                shadow-sm
                backdrop-blur-md
              "
            >
              About Us
            </span>

            {/* HEADING */}
            <h2
              className="
                mt-6
                text-3xl
                font-normal
                leading-tight
                text-[#052440]
                md:text-4xl
                lg:text-[44px]
              "
            >
              Technology Built
              <br />

              Around Your

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
                Business Goals
              </span>

            </h2>

            {/* TEXT */}
            <p
              className="
                mt-8
                text-lg
                leading-8
                text-[#052440]/75
              "
            >
              WeRoute is a technology
              consulting and solutions company
              helping enterprises design,
              build, and operate secure,
              scalable, and future-ready
              digital infrastructure.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[#052440]/60
              "
            >
              Our approach is consulting-first
              and outcome-driven. We partner
              with businesses to understand
              their challenges, architect the
              right solutions, and deliver
              them with precision.
            </p>

          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              gap-6
            "
          >

            {[
              {
                n: "01",
                t: "Consulting-Led, Outcome-Driven",
                d: "We begin by understanding business goals before recommending any technology.",
              },
              {
                n: "02",
                t: "Vendor-Agnostic Decisions",
                d: "Architecture that serves the business — not the vendor.",
              },
              {
                n: "03",
                t: "Single Accountability",
                d: "One partner from strategy and design to deployment.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-[#052440]/10
                  bg-white/80
                  p-7
                  shadow-[0_10px_40px_rgba(5,36,64,0.05)]
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#080357]/20
                  hover:shadow-[0_20px_60px_rgba(5,36,64,0.08)]
                "
              >

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#052440]/5
                    to-[#0d5ea8]/5
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative z-10
                    flex items-start gap-5
                  "
                >

                  {/* NUMBER */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border border-[#052440]/10
                      bg-[#0E1A59]
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    {item.n}
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h4
                      className="
                        text-xl
                        font-semibold
                        text-[#052440]
                      "
                    >
                      {item.t}
                    </h4>

                    <p
                      className="
                        mt-3
                        text-base
                        leading-7
                        text-[#052440]/60
                      "
                    >
                      {item.d}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* VISION / MISSION / VALUES */}
        <div
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {[
            {
              icon: <IcoGlobe />,
              title: "Our Vision",
              desc: "To be a trusted global technology partner simplifying enterprise complexity.",
            },
            {
              icon: <IcoTgt />,
              title: "Our Mission",
              desc: "Deliver intelligent, secure, and scalable enterprise ecosystems.",
            },
            {
              icon: <IcoShield />,
              title: "Our Values",
              desc: "Integrity, precision, partnership, and long-term trust.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-[#052440]/10
                bg-white/85
                p-8
                shadow-[0_10px_40px_rgba(5,36,64,0.05)]
                backdrop-blur-2xl
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
                    bg-[#080357]
                    text-white
                  "
                >
                  {card.icon}
                </div>

                {/* TITLE */}
                <h5
                  className="
                    mt-7
                    text-2xl
                    font-bold
                    text-[#052440]
                  "
                >
                  {card.title}
                </h5>

                {/* DESC */}
                <p
                  className="
                    mt-4
                    text-base
                    leading-7
                    text-[#052440]/60
                  "
                >
                  {card.desc}
                </p>

                {/* CTA */}
                <div
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#052440]
                    transition-all duration-300
                    group-hover:gap-4
                  "
                >
                  Learn More

                  <span>
                    <IcoArr />
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}