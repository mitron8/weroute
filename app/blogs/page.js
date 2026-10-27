"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Award,
  ChevronRight,
  SlidersHorizontal,
  X
} from "lucide-react";
import { blogsData, BLOG_CATEGORIES } from "@/data/blogsData";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return blogsData.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        (article.seo?.primaryKeywords &&
          article.seo.primaryKeywords.some((k) => k.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = blogsData.find((a) => a.featured) || blogsData[0];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#050849] selection:bg-blue-600 selection:text-white">
      {/* COMPACT & SLEEK HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 sm:pb-10 bg-gradient-to-b from-[#050849]/4 via-[#f8fafc]/50 to-[#f8fafc]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header Title & Subtitle */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 shadow-2xs backdrop-blur-xs">
              <BookOpen size={12} className="text-blue-600" />
              <span>Insights & Architecture Playbooks</span>
            </div>

            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#050849] sm:text-3xl lg:text-[40px] lg:leading-[1.15]">
              Enterprise Engineering <br className="hidden sm:inline" />
              <span className="text-blue-700">& Production Insights</span>
            </h1>

            <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#050849]/70 font-normal max-w-xl">
              Architectural playbooks, real-world case studies, and engineering benchmarks on modernizing cloud, networking, cybersecurity, and AI.
            </p>
          </div>

          {/* COMPACT SEARCH & CATEGORY BAR */}
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#050849]/10 bg-white p-3 shadow-xs md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#050849]/40"
              />
              <input
                type="text"
                placeholder="Search topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200/90 bg-slate-50/70 py-2 pl-9 pr-8 text-xs sm:text-sm text-[#050849] outline-none transition-all placeholder:text-[#050849]/40 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#050849]/40 hover:text-[#050849]"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Pills (Horizontal scrollable on mobile) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#050849] text-white shadow-xs"
                      : "text-[#050849]/70 hover:bg-slate-100 hover:text-[#050849]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFINED & SLEEK FEATURED CASE STUDY CARD (Shown when > 2 articles exist) */}
      {!searchQuery && selectedCategory === "All" && blogsData.length > 2 && featuredArticle && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10">
          <Link
            href={`/blogs/${featuredArticle.slug}`}
            className="group block relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#050849]/12 bg-white shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl"
          >
            <div className="grid lg:grid-cols-12 lg:items-center">
              
              {/* IMAGE (5 cols) */}
              <div className="relative h-52 sm:h-64 lg:h-full lg:col-span-5 overflow-hidden bg-white border-b lg:border-b-0 lg:border-r border-[#050849]/10 flex items-center justify-center p-2 sm:p-3">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-[#050849]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-2xs">
                    Featured Case Study
                  </span>
                  <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs">
                    -75% Response Time
                  </span>
                </div>
              </div>

              {/* CONTENT (7 cols) */}
              <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7 lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#050849]/60">
                    <span className="rounded-md bg-blue-50 px-2.5 py-0.5 font-bold text-blue-700 border border-blue-200/60 text-[11px]">
                      {featuredArticle.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar size={12} className="text-blue-600" />
                      {featuredArticle.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock size={12} className="text-blue-600" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="mt-2.5 text-lg sm:text-xl lg:text-[22px] font-bold leading-snug text-[#050849] transition-colors group-hover:text-blue-700">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#050849]/70 line-clamp-2 sm:line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Compact Tech Pill Strip */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                    {["Google Chronicle SIEM", "SOAR Automation", "Trend Micro XDR", "MITRE ATT&CK"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-[#050849]/80 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                  <span className="text-[11px] font-medium text-[#050849]/50">
                    By {featuredArticle.author}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700">
                    <span>Read Full Case Study</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </section>
      )}

      {/* PROPORTIONED ARTICLES GRID */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-6 flex items-center justify-between border-b border-[#050849]/10 pb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-[#050849]">
              {selectedCategory === "All" ? "All Technical Articles" : `${selectedCategory} Articles`}
            </h3>
            <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-[11px] font-bold text-[#050849]/70">
              {filteredArticles.length}
            </span>
          </div>

          <span className="text-xs text-[#050849]/50">
            Updated weekly
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#050849]/20 bg-white p-12 text-center">
            <BookOpen size={36} className="mx-auto text-[#050849]/30" />
            <h4 className="mt-3 text-base font-bold text-[#050849]">No articles found</h4>
            <p className="mt-1 text-xs text-[#050849]/60">
              Try adjusting your search query or reset the category filter.
            </p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 rounded-lg bg-[#050849] px-4 py-1.5 text-xs font-semibold text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${filteredArticles.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blogs/${article.slug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#050849]/10 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-lg"
              >
                <div>
                  {/* COMPACT CARD IMAGE (h-44 / 176px) */}
                  <div className="relative h-44 w-full overflow-hidden bg-white border-b border-[#050849]/8 flex items-center justify-center p-2">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-[#050849] shadow-2xs backdrop-blur-xs">
                      {article.category}
                    </div>
                    {article.featured && (
                      <div className="absolute top-2.5 right-2.5 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-2xs">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* CARD BODY */}
                  <div className="p-4 sm:p-5">
                    {/* Timestamp */}
                    <div className="flex items-center gap-2 text-[11px] font-medium text-[#050849]/50">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="mt-2 text-[15px] font-bold leading-snug text-[#050849] transition-colors group-hover:text-blue-700 line-clamp-2">
                      {article.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="mt-1.5 text-xs leading-relaxed text-[#050849]/65 line-clamp-2 font-normal">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="border-t border-slate-100 px-4 py-3 sm:px-5 flex items-center justify-between text-[11px] font-semibold text-[#050849]">
                  <span className="text-[#050849]/45 truncate max-w-[140px]">
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1 text-blue-700 group-hover:translate-x-0.5 transition-transform font-bold shrink-0">
                    Read article <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* COMPACT ENTERPRISE CTA BANNER */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-[#050849] px-6 py-5 sm:px-8 sm:py-6 text-white shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="max-w-xl">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
              Ready to modernize your infrastructure or SOC operations?
            </h3>
            <p className="mt-1 text-xs text-white/70 leading-relaxed">
              Connect directly with WeRoute enterprise architects to assess your estate and plan your roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#B7F36B] px-4 py-2.5 text-xs font-bold text-[#080357] transition-all hover:bg-white cursor-pointer"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/15 transition-colors"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
