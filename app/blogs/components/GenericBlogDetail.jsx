"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Share2,
  Check,
  CheckCircle2,
  BookOpen
} from "lucide-react";
import BlogFaqAccordion from "./BlogFaqAccordion";

export default function GenericBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="relative min-h-screen bg-[#f8fafc] text-[#050849] pt-28 pb-24">
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#050849]/60 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <ChevronRight size={13} />
          <span className="text-blue-700">{blog.category}</span>
        </nav>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 border border-blue-200">
            {blog.badge || "Engineering Deep Dive"}
          </span>
          <span className="rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {blog.tagline || blog.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#050849] sm:text-4xl lg:text-5xl">
          {blog.title}
        </h1>

        <p className="mt-4 text-lg text-[#050849]/70 leading-relaxed">
          {blog.subtitle || blog.excerpt}
        </p>

        {/* Meta Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#050849]/10 py-4 text-xs font-medium text-[#050849]/70">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#050849]">{blog.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={13} className="text-blue-600" />
              {blog.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} className="text-blue-600" />
              {blog.readTime}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#050849]/15 bg-white px-3 py-1 font-semibold text-[#050849] shadow-xs hover:bg-[#050849]/5"
          >
            {copied ? <Check size={13} className="text-emerald-600" /> : <Share2 size={13} />}
            <span>{copied ? "Copied" : "Share"}</span>
          </button>
        </div>

        {/* At A Glance */}
        {blog.atAGlance && (
          <div className="my-8 rounded-3xl border border-[#050849]/15 bg-white p-6 shadow-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700">At a Glance</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-[#050849]/50 block">Client</span>
                <p className="font-semibold text-[#050849] mt-1">{blog.atAGlance.client}</p>
              </div>
              <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-800/70 block">Problem</span>
                <p className="font-semibold text-[#050849] mt-1">{blog.atAGlance.problem}</p>
              </div>
              <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-800/70 block">Stack</span>
                <p className="font-semibold text-[#050849] mt-1">{blog.atAGlance.stack}</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <span className="font-bold text-emerald-800/70 block">Result</span>
                <p className="font-bold text-emerald-700 mt-1">{blog.atAGlance.result}</p>
              </div>
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        {blog.metrics && (
          <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {blog.metrics.map((m, idx) => (
              <div key={idx} className="rounded-2xl border border-[#050849]/10 bg-white p-4 text-center shadow-2xs">
                <div className="text-2xl font-black text-blue-700">{m.value}</div>
                <div className="text-xs font-bold text-[#050849] mt-1">{m.label}</div>
                <div className="text-[11px] text-[#050849]/60 mt-0.5">{m.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* Content Body */}
        <div className="mt-8 space-y-6 text-base leading-relaxed text-[#050849]/85">
          <p>{blog.excerpt}</p>
          <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50/50 p-4 text-sm text-[#050849]">
            WeRoute is an enterprise technology engineering partner specializing in architecture, integration, and managed operational execution.
          </div>
        </div>

        {/* FAQs if present */}
        {blog.faqs && blog.faqs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#050849] mb-4">Frequently Asked Questions</h3>
            <BlogFaqAccordion faqs={blog.faqs} />
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-3xl bg-[#050849] p-8 text-white text-center">
          <h3 className="text-2xl font-bold">Ready to modernize your infrastructure?</h3>
          <p className="mt-2 text-sm text-white/70">
            Speak directly with our principal architects and engineering specialists.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-500 transition-colors"
          >
            <span>Schedule Architecture Review</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
