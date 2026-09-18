"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Tag,
  Share2,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  Network
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Cloud & DevOps",
  "Cybersecurity",
  "AI & Automation",
  "Enterprise Architecture",
  "Network Modernization"
];

const ARTICLES = [
  {
    id: "zero-trust-architecture-guide",
    title: "Architecting Zero Trust in Multi-Cloud Enterprise Environments",
    excerpt: "Why perimeter security is obsolete and how continuous identity verification, micro-segmentation, and policy engines create resilient defenses.",
    category: "Cybersecurity",
    readTime: "6 min read",
    date: "Sep 12, 2026",
    author: "Enterprise Security Team",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "llmops-enterprise-deployment",
    title: "From PoC to Production: Enterprise LLMOps and Model Governance",
    excerpt: "Best practices for deploying generative AI models with strict data privacy, token observability, guardrails, and automated latency benchmarks.",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "Sep 08, 2026",
    author: "AI & Automation Lab",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "cloud-repatriation-hybrid-architecture",
    title: "Cloud Repatriation vs. Multi-Cloud: The Real Economics of Enterprise IT",
    excerpt: "An architecture-first analysis of when private cloud repatriations make financial sense and how to avoid the hidden fees of public cloud lock-in.",
    category: "Cloud & DevOps",
    readTime: "7 min read",
    date: "Aug 29, 2026",
    author: "Cloud Infrastructure Practice",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "sdwan-naas-transformation",
    title: "Modernizing Campus & Branch Networks with NaaS and SASE",
    excerpt: "How unified SD-WAN and Network as a Service deliver predictable SLAs, zero downtime migrations, and global observability for distributed enterprises.",
    category: "Network Modernization",
    readTime: "5 min read",
    date: "Aug 20, 2026",
    author: "Network Engineering Group",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "event-driven-architecture-enterprise",
    title: "Building Resilient Event-Driven Architectures for Real-Time Scale",
    excerpt: "A deep dive into decoupling critical transactional pipelines using Apache Kafka, schema registries, and idempotent processing.",
    category: "Enterprise Architecture",
    readTime: "9 min read",
    date: "Aug 14, 2026",
    author: "Software & Digital Engineering",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "finops-kubernetes-governance",
    title: "Kubernetes Cost Governance: Rightsizing Clusters Without Compromising SLAs",
    excerpt: "Actionable FinOps workflows for allocating container costs, tuning autoscalers, and eliminating overprovisioned cloud spend across teams.",
    category: "Cloud & DevOps",
    readTime: "6 min read",
    date: "Aug 02, 2026",
    author: "DevOps & SRE Practice",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#050849]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-36 pb-20 bg-gradient-to-b from-[#050849]/5 via-transparent to-transparent">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#050849] shadow-xs">
              Insights & Thought Leadership
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#050849] md:text-6xl">
              Enterprise Engineering, <br />
              <span className="text-blue-700">Architecture & Insights</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-[#050849]/70 md:text-xl">
              Deep dives, architectural playbooks, and strategic analysis on modernizing networking, cloud, cybersecurity, and intelligent automation.
            </p>
          </div>

          {/* SEARCH & FILTERS */}
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* SEARCH INPUT */}
            <div className="relative w-full max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#050849]/40"
              />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-[#050849]/10 bg-white py-3.5 pl-12 pr-5 text-sm text-[#050849] shadow-xs outline-none transition-all placeholder:text-[#050849]/40 focus:border-[#050849]/30 focus:ring-4 focus:ring-[#050849]/5"
              />
            </div>

            {/* CATEGORY PILLS */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#050849] text-white shadow-md"
                      : "border border-[#050849]/10 bg-white text-[#050849]/70 hover:bg-[#050849]/5 hover:text-[#050849]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORY (when no search query or 'All') */}
      {!searchQuery && selectedCategory === "All" && featuredArticle && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-16">
          <div className="relative overflow-hidden rounded-[32px] border border-[#050849]/10 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-6 left-6 rounded-full bg-[#050849]/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Featured Story
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 lg:p-12">
                <div>
                  <div className="flex items-center gap-4 text-xs font-medium text-[#050849]/60">
                    <span className="rounded-full bg-[#050849]/5 px-3 py-1 font-semibold text-[#050849]">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold leading-tight text-[#050849] md:text-3xl">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/70">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#050849]/10 pt-6">
                  <span className="text-xs font-semibold text-[#050849]/60">
                    By {featuredArticle.author}
                  </span>
                  <div className="inline-flex items-center gap-2 font-semibold text-[#050849] hover:text-blue-600 transition-colors">
                    <span>Read Full Playbook</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ARTICLES GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-28">
        <div className="mb-8 flex items-center justify-between border-b border-[#050849]/10 pb-4">
          <h3 className="text-xl font-bold text-[#050849]">
            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
          </h3>
          <span className="text-sm font-semibold text-[#050849]/50">
            {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="rounded-3xl border border-[#050849]/10 bg-white p-16 text-center shadow-xs">
            <BookOpen size={48} className="mx-auto text-[#050849]/30" />
            <h4 className="mt-4 text-xl font-bold text-[#050849]">No articles found</h4>
            <p className="mt-2 text-sm text-[#050849]/60">
              Try adjusting your search query or switching to another category.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col overflow-hidden rounded-[26px] border border-[#050849]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* CARD IMAGE */}
                <div className="relative h-52 w-full overflow-hidden bg-[#050849]/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#050849] shadow-xs backdrop-blur-md">
                    {article.category}
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-medium text-[#050849]/50">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {article.readTime}
                      </span>
                    </div>

                    <h4 className="mt-3 text-[18px] font-bold leading-snug text-[#050849] transition-colors group-hover:text-blue-700">
                      {article.title}
                    </h4>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#050849]/65">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#050849]/5 pt-4 text-xs font-semibold text-[#050849]">
                    <span className="text-[#050849]/50">{article.author}</span>
                    <span className="flex items-center gap-1 text-blue-700 group-hover:translate-x-0.5 transition-transform">
                      Read more <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* NEWSLETTER CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24">
        <div className="relative overflow-hidden rounded-[32px] bg-[#050849] px-8 py-14 text-white shadow-2xl md:px-16">
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Stay Informed
            </span>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Get enterprise architecture insights delivered to your inbox.
            </h3>
            <p className="mt-4 text-base text-white/70">
              No marketing fluff. Just technical deep-dives, migration benchmarks, and modern IT frameworks once a month.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col gap-3 sm:flex-row max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your enterprise email"
                className="flex-1 rounded-2xl bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/40 border border-white/15 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-[#050849] transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
