import React from "react";

export default function VendorAgnostic() {
  const features = [
    {
      title: "Interoperability",
      desc: "Design systems that communicate seamlessly across different platforms, multi-cloud environments, and third-party APIs.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "No Vendor Lock-in",
      desc: "Maintain the ultimate freedom to migrate, swap out components, or change providers as your business evolves.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Best-in-Class Tools",
      desc: "Leverage the absolute right tool for the job by combining specialized solutions rather than settling for a rigid, monolithic suite.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Open Standards",
      desc: "Adopt widely supported open-source frameworks and protocols to guarantee long-term community support and cost efficiency.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
  ];

  const metrics = [
    { value: "100%", label: "Portability" },
    { value: "Zero", label: "Lock-in" },
    { value: "Multi", label: "Cloud Ready" },
    { value: "Open", label: "API First" },
  ];

  const benefits = [
    "Freedom to migrate between cloud providers easily",
    "Increased negotiation power with software vendors",
    "Future-proofed architecture that adapts to market changes",
    "Reduced licensing costs and mitigation of technical debt",
    "Seamless integration with your existing legacy systems",
    "Ability to leverage community-driven open-source innovations",
  ];

  return (
    <section className="py-28 bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#080357]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#080357]">
            Tech Independence
          </span>

          <h2 className="mt-8 text-5xl font-black leading-none tracking-[-0.05em] md:text-6xl text-[#080357]">
            Vendor-Agnostic & <span className="text-[#1a36e8]">Open</span>
            <br />
            Built for Outcomes
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#080357]/65">
            We select technologies based on your unique business needs, not restrictive vendor ecosystems. By prioritizing open standards and interoperability, we ensure your architecture remains flexible, portable, and fiercely independent.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-[32px] border border-[#080357]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#080357] text-white transition-colors duration-300 group-hover:bg-[#1a36e8]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#080357]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-[#080357]/60">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-28 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side - Dark Card */}
          <div>
            <div className="rounded-[40px] bg-[#080357] p-10 text-white shadow-xl shadow-[#080357]/15">
              <span className="uppercase tracking-[0.25em] text-white/50 text-sm font-semibold">
                Architecture Metrics
              </span>

              <div className="mt-10 grid grid-cols-2 gap-5">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
                  >
                    <div className="text-3xl font-black">{item.value}</div>
                    <div className="mt-2 text-white/60 text-sm font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-[#080357]">
              Why Independence Matters
            </h3>

            <p className="mt-8 text-lg leading-8 text-[#080357]/65">
              Being locked into a single vendor's ecosystem stifles innovation and inflates costs over time. An agnostic approach guarantees that your technology serves your business strategy—not the other way around.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a36e8]/10">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#1a36e8]" />
                  </div>
                  <span className="text-[#080357] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}