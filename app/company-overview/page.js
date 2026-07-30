

import {
  ArrowRight,
  Shield,
  Network,
  Cloud,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

export default function CompanyOverview() {
  return (
    <main className="bg-[#f7f9fc] text-[#080357]">

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-28">

        <div className="absolute inset-0">          <div
            className="
              absolute
              right-0
              top-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#080357]/5
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
                  rounded-full
                  border border-[#080357]/10
                  bg-white
                  px-5 py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Company Overview
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
                Enterprise
                <br />

                Technology

                <span className="text-[#0d5ea8]">
                  {" "}Partner
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
                WeRoute helps organizations
                design, secure, modernize,
                and operate enterprise technology
                ecosystems that scale with business growth.
              </p>

              <div className="mt-10 flex gap-4">

                <button
                  className="
                    rounded-2xl
                    bg-[#052440]
                    px-7 py-4
                    font-semibold
                    text-white
                  "
                >
                  Contact Us
                </button>

                <button
                  className="
                    rounded-2xl
                    border border-[#052440]/10
                    bg-white
                    px-7 py-4
                    font-semibold
                  "
                >
                  Explore Services
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
                alt="Enterprise Office"
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

      {/* COMPANY INTRO */}
      <section className="py-28">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <h2 className="text-5xl font-black tracking-[-0.04em]">
            Who We Are
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
            WeRoute is a technology consulting
            and implementation partner helping
            enterprises navigate digital transformation,
            cloud adoption, cybersecurity, networking,
            automation, and AI initiatives.
          </p>

        </div>

      </section>

      {/* WHAT WE DO */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-5xl font-black tracking-[-0.04em] text-center">
            What We Do
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: <Network />,
                title: "Network Solutions",
              },
              {
                icon: <Shield />,
                title: "Cybersecurity",
              },
              {
                icon: <Cloud />,
                title: "Cloud Infrastructure",
              },
              {
                icon: <BrainCircuit />,
                title: "AI & Automation",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[30px]
                  border border-[#052440]/10
                  bg-white
                  p-8
                  shadow-sm
                "
              >

                <div
                  className="
                    flex h-14 w-14
                    items-center justify-center
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
                    text-xl
                    font-bold
                  "
                >
                  {item.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div
            className="
              rounded-[40px]
              bg-[#052440]
              px-10
              py-16
              text-white
            "
          >

            <div className="grid gap-10 md:grid-cols-4">

              {[
                ["150+", "Clients"],
                ["99.99%", "Uptime"],
                ["40+", "Experts"],
                ["24/7", "Support"],
              ].map(([n, t]) => (
                <div key={t}>

                  <div className="text-5xl font-black">
                    {n}
                  </div>

                  <div className="mt-3 text-white/60">
                    {t}
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* APPROACH */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            Our Approach
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {[
              "Assess & Understand",
              "Design & Architect",
              "Implement & Optimize",
            ].map((step, i) => (
              <div
                key={step}
                className="
                  rounded-[32px]
                  border border-[#052440]/10
                  bg-white
                  p-8
                "
              >

                <div className="text-[#0d5ea8] font-bold">
                  0{i + 1}
                </div>

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-bold
                  "
                >
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TRUST */}
      <section className="pb-28">

        <div className="mx-auto max-w-6xl px-6">

          <div
            className="
              rounded-[40px]
              border border-[#052440]/10
              bg-white
              p-12
            "
          >

            <h2 className="text-4xl font-black">
              Why Enterprises Trust WeRoute
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Consulting-first approach",
                "Vendor-agnostic recommendations",
                "Enterprise-grade security",
                "End-to-end accountability",
                "Scalable architecture",
                "Long-term partnership mindset",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#0d5ea8]"
                  />

                  {item}
                </div>
              ))}

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
              Let's Build What's Next
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
              Partner with WeRoute to design,
              secure, and scale your technology ecosystem.
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
              Talk to an Expert

              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}