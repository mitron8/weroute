import React from "react";

export default function ScalableSystems() {
  const features = [
    {
      title: "Cloud-Native Design",
      desc: "Leverage microservices, containerization, and serverless architectures for limitless scalability and flexibility.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "High Availability",
      desc: "Ensure continuous operations with fault-tolerant systems, automated failovers, and multi-region redundancy.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Performance Tuning",
      desc: "Deliver lightning-fast experiences through optimized caching, database indexing, and efficient code execution.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Automated Scaling",
      desc: "Dynamically adjust computing resources in real-time based on traffic demands to optimize both performance and costs.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      )
    },
  ];

  const metrics = [
    { value: "99.99%", label: "Uptime Target" },
    { value: "<50ms", label: "Average Latency" },
    { value: "10x", label: "Traffic Scaling" },
    { value: "Zero", label: "Downtime Deploys" },
  ];

  const benefits = [
    "Future-proof infrastructure architecture",
    "Seamless handling of unexpected traffic spikes",
    "Optimized cloud resource spending",
    "Global content delivery and edge computing",
    "Automated disaster recovery pipelines",
    "Microservices and API-first integrations",
  ];

  return (
    <section className="py-28 bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#052440]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#052440]">
            Enterprise Architecture
          </span>

          <h2 className="mt-8 text-5xl font-black leading-none tracking-[-0.05em] md:text-6xl text-[#052440]">
            Scalable Systems &<span className="text-[#0d5ea8]"> Performance</span>
            <br />
            Built for Growth
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#052440]/65">
            Future-proof your technology stack with cloud-native architectures that dynamically scale with your business. We engineer resilient, high-performance systems designed to handle complex workloads seamlessly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-[32px] border border-[#052440]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#052440] text-white transition-colors duration-300 group-hover:bg-[#0d5ea8]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#052440]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-[#052440]/60">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-28 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side - Dark Card */}
          <div>
            <div className="rounded-[40px] bg-[#052440] p-10 text-white shadow-xl shadow-[#052440]/10">
              <span className="uppercase tracking-[0.25em] text-white/50 text-sm font-semibold">
                Performance Metrics
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
            <h3 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-[#052440]">
              Why Scalability Matters
            </h3>

            <p className="mt-8 text-lg leading-8 text-[#052440]/65">
              A rigid infrastructure limits growth. By decoupling services and automating resource allocation, your applications remain fast, reliable, and cost-efficient regardless of user demand.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d5ea8]/10">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#0d5ea8]" />
                  </div>
                  <span className="text-[#052440] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}