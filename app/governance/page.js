"use client";

import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Building2,
  Scale,
} from "lucide-react";

export default function GovernancePage() {
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
                <ShieldCheck size={14} />
                Governance
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
                Scalability,
                <br />

                Structure &
                <span className="text-[#0d5ea8]">
                  {" "}Outcomes
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
                Strong governance creates alignment,
                accountability, and measurable results.
                We help organizations establish frameworks
                that ensure technology investments deliver
                long-term business value.
              </p>

            </div>

            {/* IMAGE */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
                alt="Governance Meeting"
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

      {/* INTRO */}
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
            Governance Framework
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
            Governance That Drives
            Business Success
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
            Effective governance ensures technology,
            operations, and business objectives remain
            aligned while maintaining transparency,
            compliance, and measurable performance.
          </p>

        </div>

      </section>

      {/* PILLARS */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-3">

            {[
              {
                icon: <Building2 size={28} />,
                title: "Structured Decision Making",
                desc:
                  "Clear processes and accountability ensure consistent and informed decisions.",
              },
              {
                icon: <Scale size={28} />,
                title: "Risk & Compliance",
                desc:
                  "Maintain regulatory compliance while reducing operational and security risks.",
              },
              {
                icon: <BarChart3 size={28} />,
                title: "Measurable Outcomes",
                desc:
                  "Track performance through KPIs, metrics, and business-driven objectives.",
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

      {/* BENEFITS */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
                alt="Business Strategy"
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
                Why Governance Matters
              </h2>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-[#052440]/65
                "
              >
                Technology governance is more than oversight.
                It provides the structure needed to manage
                growth, improve accountability, and maximize
                business outcomes.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Improved operational efficiency",
                  "Clear ownership and accountability",
                  "Reduced risk and compliance exposure",
                  "Better technology investment decisions",
                  "Scalable and sustainable growth",
                  "Transparent performance measurement",
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
              Build a Stronger
              Governance Foundation
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
              Create the structure, accountability,
              and visibility required to scale your
              organization with confidence.
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