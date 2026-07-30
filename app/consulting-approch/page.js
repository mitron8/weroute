"use client";

import {
  ClipboardCheck,
  ArrowRight,
  Search,
  FileSearch,
  Network,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export default function ConsultingApproachPage() {
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
                <ClipboardCheck size={14} />
                Consulting Approach
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
                Assessment
                <br />

                Before

                <span className="text-[#0d5ea8]">
                  {" "}Execution
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
                At WeRoute, we believe successful
                technology transformation begins with
                understanding the business, identifying
                challenges, and evaluating the current
                environment before recommending solutions.
              </p>

            </div>

            {/* IMAGE */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
                alt="Consulting Workshop"
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

        <div className="mx-auto max-w-5xl px-5 text-center mt-10">

          <span
            className="
            
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#0d5ea8]
            "
          >
            Our Philosophy
          </span>

          <h2
            className="
              mt-1
              text-4xl
              font-black
              leading-tight
              tracking-[-0.04em]
              md:text-6xl
            "
          >
            Understand First.
            <br />
            Execute Second.
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
            Rather than applying technology for the sake of
            technology, our consulting-led methodology ensures
            every recommendation aligns with business objectives,
            operational realities, and long-term growth plans.
          </p>

        </div>

      </section>

      {/* PROCESS */}
      <section className="pb-48">

        <div className="mx-auto max-w-7xl px-6">

          <h2
            className="
              text-center
              text-5xl
              font-black
              tracking-[-0.04em]
            "
          >
            Our 4-Step Approach
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: <Search size={28} />,
                number: "01",
                title: "Discovery",
                desc:
                  "Understand business goals, challenges, risks, and current capabilities.",
              },
              {
                icon: <FileSearch size={28} />,
                number: "02",
                title: "Assessment",
                desc:
                  "Evaluate infrastructure, security posture, operations, and technology gaps.",
              },
              {
                icon: <Network size={28} />,
                number: "03",
                title: "Strategy",
                desc:
                  "Develop a roadmap aligned with business priorities and future objectives.",
              },
              {
                icon: <Rocket size={28} />,
                number: "04",
                title: "Execution",
                desc:
                  "Implement solutions with measurable outcomes and continuous optimization.",
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

                <div className="text-sm font-bold tracking-[0.2em] text-[#0d5ea8]">
                  {item.number}
                </div>

                <div
                  className="
                    mt-5
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

      {/* WHY IT WORKS */}
      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <img
                src="https://images.unsplash.com/photo-1630756539201-f435ba29f1fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Strategy Session"
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
                Why Assessment Matters
              </h2>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-[#052440]/65
                "
              >
                Organizations often invest in technology
                without fully understanding underlying
                challenges. Our assessment-first model
                eliminates uncertainty and improves the
                success rate of every initiative.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Identify hidden operational risks",
                  "Reduce unnecessary technology spending",
                  "Improve implementation success rates",
                  "Align technology with business goals",
                  "Create measurable project outcomes",
                  "Enable long-term scalability",
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
              Start With the Right Assessment
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
              Every successful transformation starts
              with understanding. Let us assess your
              environment and build a roadmap for growth.
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
              Schedule a Consultation

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}