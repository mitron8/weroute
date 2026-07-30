"use client";

import {
  Target,
  ArrowRight,
  Shield,
  Cloud,
  BrainCircuit,
  CheckCircle2,
  Network,
} from "lucide-react";

export default function MissionPage() {
  return (
    <main className="bg-[#f7f9fc] text-[#052440]">

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-28">

        <div className="absolute inset-0">
          <div
            className="
              absolute
              right-0
              top-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#052440]/5
              blur-3xl
            "
          />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-[#052440]/10
                  bg-white
                  px-5 py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
              >
                <Target size={14} />
                Our Mission
              </span>

              <h1
                className="
                  mt-8
                  text-5xl
                  font-black
                  leading-none
                  tracking-[-0.05em]
                  md:text-7xl
                "
              >
                Reliable,
                <br />

                Secure &
                <span className="text-[#0d5ea8]">
                  {" "}Future-Ready
                </span>

              </h1>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-8
                  text-[#052440]/65
                "
              >
                Our mission is to empower organizations
                with technology solutions that are secure,
                scalable, resilient, and aligned with
                long-term business objectives.
              </p>

            </div>

            {/* IMAGE */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop"
                alt="Mission Technology"
                className="
                  h-[400px]
                  w-full
                  rounded-[40px]
                  object-cover
                  shadow-2xl
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* MISSION STATEMENT */}
      <section className="pb-28">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#0d5ea8]
            "
          >
            Mission Statement
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              tracking-[-0.04em]
              md:text-6xl
            "
          >
            Delivering Technology
            <br />
            That Creates Real Business Impact
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-xl
              leading-9
              text-[#052440]/65
            "
          >
            We are committed to helping organizations
            navigate digital transformation through
            secure infrastructure, intelligent automation,
            cloud innovation, and enterprise-grade solutions
            that deliver measurable outcomes.
          </p>

        </div>

      </section>

      {/* CORE PILLARS */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: <Shield size={28} />,
                title: "Security First",
                desc:
                  "Protecting critical systems, data, and operations through enterprise-grade security.",
              },
              {
                icon: <Cloud size={28} />,
                title: "Cloud Innovation",
                desc:
                  "Enabling scalable, agile, and future-ready cloud environments.",
              },
              {
                icon: <Network size={28} />,
                title: "Connectivity",
                desc:
                  "Building reliable and high-performance digital ecosystems.",
              },
              {
                icon: <BrainCircuit size={28} />,
                title: "Intelligent Automation",
                desc:
                  "Using AI and automation to improve efficiency and accelerate growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[32px]
                  border border-[#052440]/10
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#052440]
                    text-white
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-8
                    text-[#052440]/60
                  "
                >
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* OUR COMMITMENT */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
                alt="Business Team"
                className="
                  h-[500px]
                  w-full
                  rounded-[36px]
                  object-cover
                "
              />

            </div>

            <div>

              <h2
                className="
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                "
              >
                Our Commitment
              </h2>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-[#052440]/65
                "
              >
                Every engagement is guided by a commitment
                to reliability, security, innovation, and
                measurable value creation.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Deliver reliable enterprise solutions",
                  "Ensure security at every layer",
                  "Support long-term digital transformation",
                  "Drive measurable business outcomes",
                  "Build scalable technology ecosystems",
                  "Create lasting customer partnerships",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-[#0d5ea8]"
                    />

                    <span>{item}</span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-32">

        <div className="mx-auto max-w-7xl px-6">

          <div
            className="
              rounded-[40px]
              bg-[#052440]
              px-10
              py-20
              text-center
              text-white
            "
          >

            <h2
              className="
                text-5xl
                font-black
                tracking-[-0.04em]
              "
            >
              Technology With Purpose
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                text-white/65
              "
            >
              Our mission is simple: help organizations
              succeed through reliable, secure, and
              future-ready technology solutions.
            </p>

            <button
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-8
                py-4
                font-semibold
                text-[#052440]
              "
            >
              Explore Our Services

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}