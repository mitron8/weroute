"use client";

import Image from "next/image";
import {
  Globe,
  ArrowRight,
  Network,
  Shield,
  Cloud,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

export default function VisionPage() {
  return (
    <main className="bg-[#f7f9fc] text-[#052440]">

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-28">

        {/* Background */}
        <div className="absolute inset-0">

          <div
            className="
              absolute inset-0
              bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)]
              bg-[size:80px_80px]
            "
          />

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
                <Globe size={14} />
                Our Vision
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
                Simplifying
                <br />

                Complex IT

                <span className="text-[#0d5ea8]">
                  {" "}Worldwide
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
                Our vision is to remove complexity from enterprise
                technology and create a future where organizations
                can innovate, scale, and transform with confidence.
              </p>

            </div>

            {/* IMAGE */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1727434032792-c7ef921ae086?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Global Technology"
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

      {/* VISION STATEMENT */}
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
            Vision Statement
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
            Making Enterprise Technology
            <br />
            Simpler, Smarter & More Accessible
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
            We envision a world where organizations spend less
            time managing technology complexity and more time
            creating value, driving innovation, and serving
            their customers.
          </p>

        </div>

      </section>

      {/* THREE PILLARS */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-3">

            {[
              {
                icon: <Network size={28} />,
                title: "Connected Enterprises",
                desc:
                  "Creating seamless connectivity between people, systems, applications, and data.",
              },
              {
                icon: <Cloud size={28} />,
                title: "Cloud-Native Future",
                desc:
                  "Helping organizations embrace scalable and resilient digital ecosystems.",
              },
              {
                icon: <BrainCircuit size={28} />,
                title: "AI-Powered Innovation",
                desc:
                  "Making intelligent technologies accessible and impactful for every enterprise.",
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

      {/* FUTURE SECTION */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop"
                alt="Future Technology"
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
                Building the
                Future of IT
              </h2>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-[#052440]/65
                "
              >
                Technology should accelerate business,
                not slow it down.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-[#052440]/65
                "
              >
                Our vision is centered on delivering
                simplified architectures, intelligent
                automation, secure digital foundations,
                and globally connected infrastructure.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Simplify enterprise operations",
                  "Accelerate digital transformation",
                  "Enable global scalability",
                  "Drive innovation through AI",
                  "Create resilient technology ecosystems",
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
              Join Us in Shaping
              the Future
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
              Together, we can simplify complexity,
              unlock innovation, and build technology
              ecosystems that empower organizations worldwide.
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
              Explore Our Solutions

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}