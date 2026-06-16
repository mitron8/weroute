import React from "react";
import { servicesData } from "@/data/servicesData"; 

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  // Fallback if the slug doesn't match any data
  if (!service) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f7f9fc]">
        <h1 className="text-3xl font-bold text-[#052440]">Service not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] pb-28 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* 1. Hero Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
  {/* Content */}
  <div className="max-w-4xl">
    <span className="inline-flex mt-10 items-center gap-2 rounded-full border border-[#080357]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#052440]">
      {service.hero.badge}
    </span>

    <h1 className="mt-8 text-5xl font-black leading-none tracking-[-0.05em] text-[#080357] md:text-6xl">
      {service.hero.title}
    </h1>

    <p className="mt-8 max-w-3xl text-lg leading-8 text-[#052440]/65">
      {service.hero.subtitle}
    </p>
  </div>

  {/* Image */}
  <div className="flex justify-center mt-20 lg:justify-end">
    <img
      src={service.hero.image}
      alt="Service"
      className="w-full max-w-md object-contain rounded-2xl"
    />
  </div>
</div>

        {/* 2. Overview & Challenges Split */}
        <div className="mt-20 grid gap-16 rounded-[40px] bg-white p-10 shadow-sm border border-[#052440]/5 lg:grid-cols-2 lg:p-16">
          <div>
            <h2 className="text-3xl font-black text-[#080357]">
              {service.overview.title}
            </h2>
            <p className="mt-6 leading-8 text-[#052440]/65">
              {service.overview.description}
            </p>
            
            {/* Technologies Tags */}
            <div className="mt-10">
              <span className="text-sm font-bold uppercase tracking-wider text-[#052440]/40">
                Core Technologies
              </span>
              <div className="mt-4 flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl bg-[#f7f9fc] px-4 py-2 text-sm font-medium text-[#052440]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#f7f9fc] p-8 md:p-10">
            <h3 className="text-2xl font-bold text-[#080357]">Core Challenges</h3>
            <div className="mt-8 space-y-4">
              {service.challenges.map((challenge) => (
                <div key={challenge} className="flex items-start gap-4">
                  <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0d5ea8]/10">
                    <div className="h-2 w-2 rounded-full bg-[#0d5ea8]" />
                  </div>
                  <span className="text-[#052440]/80 font-medium">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Solutions Grid */}
        <div className="mt-28">
          <h2 className="text-4xl font-black tracking-[-0.04em] text-[#080357]">
            Our Solutions
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.solutions.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[32px] border border-[#080357]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#080357] text-white transition-colors duration-300 group-hover:bg-[#080357]">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#080357]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#080357]/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Process & Benefits Section */}
        <div className="mt-28 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side - Dark Card for Process */}
          <div>
            <div className="rounded-[40px] bg-[#080357] p-10 text-white shadow-xl shadow-[#052440]/10 lg:p-12">
              <span className="uppercase tracking-[0.25em] text-white/50 text-sm font-semibold">
                Delivery Approach
              </span>
              
              <h3 className="mt-4 text-3xl font-black">Our Process</h3>

              <div className="mt-10 space-y-6">
                {service.process.map((step, index) => (
                  <div
                    key={step}
                    className="group flex items-center gap-6 rounded-[24px] bg-white/5 p-5 transition-colors hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d5ea8] font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="text-lg font-medium text-white/90">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-[#052440]">
              Business Benefits
            </h3>

            <p className="mt-8 text-lg leading-8 text-[#052440]/65">
              Transform your operational capabilities and drive measurable business outcomes with our targeted expertise.
            </p>

            <div className="mt-10 space-y-5">
              {service.benefits.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d5ea8]/10">
                    <svg className="h-3.5 w-3.5 text-[#0d5ea8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#052440] font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. CTA Section */}
        <div className="mt-28 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#080357] via-[#A7BF73] to-[#080357] relative">
          {/* Decorative background element */}
          <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center md:py-24 md:px-12">
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {service.cta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              {service.cta.description}
            </p>
            <button className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#052440] transition-transform hover:scale-105 hover:bg-gray-50 active:scale-95">
              {service.cta.button}
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}