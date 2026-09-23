"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Building2,
  ArrowRight
} from 'lucide-react';
import WaterRippleCanvas from './WaterRippleCanvas';

export default function Footer() {
  const footerRef = useRef(null);

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative overflow-hidden border-t border-white/10 bg-[#080357] pt-20 pb-8 text-white selection:bg-[#B7F36B] selection:text-[#080357]"
    >
      {/* REACTIVE WATER RIPPLE CANVAS */}
      <WaterRippleCanvas />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-[-10%] top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#B7F36B]/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >
        {/* MAIN NAVIGATION GRID: 5 COLUMNS */}
        <div className="grid gap-12 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 border-b border-white/10">
          {/* COLUMN 1: Brand & Overview (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-4">
            <div>
              <Link href="/" className="inline-block">
                <img
                  className="h-14 w-auto object-contain"
                  src="/images/logo/weroute.png"
                  alt="WeRoute Enterprise Technology"
                />
              </Link>

              <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-sm font-light">
                WeRoute is an enterprise technology consulting, engineering, and operations company. We help organizations design, modernize, secure, integrate, and operate critical technology environments end to end.
              </p>

              {/* Quality Indicators */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="clay-badge text-[11px] font-mono px-3 py-1 bg-white/[0.05] border border-white/10 text-white/80">
                  24x7 Operations
                </span>
                <span className="clay-badge text-[11px] font-mono px-3 py-1 bg-white/[0.05] border border-white/10 text-white/80">
                  Vendor-Agnostic
                </span>
                <span className="clay-badge text-[11px] font-mono px-3 py-1 bg-white/[0.05] border border-white/10 text-white/80">
                  Zero Lock-in
                </span>
              </div>
            </div>

            {/* Social Icons (Clean Inline SVGs) */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WeRoute LinkedIn"
                className="clay-badge flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.05] text-white/75 transition-all duration-300 hover:bg-[#B7F36B] hover:text-[#080357] hover:border-[#B7F36B]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WeRoute X"
                className="clay-badge flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.05] text-white/75 transition-all duration-300 hover:bg-[#B7F36B] hover:text-[#080357] hover:border-[#B7F36B]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="mailto:contact@weroute.com"
                aria-label="Email WeRoute"
                className="clay-badge flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.05] text-white/75 transition-all duration-300 hover:bg-[#B7F36B] hover:text-[#080357] hover:border-[#B7F36B]"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Solutions (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7F36B]">
              Solutions
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/solutions/network-connectivity"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Network &amp; Connectivity
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/cloud-and-devOps"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Cloud &amp; DevOps
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/cybersecurity"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/AI-Intelligent-Automation"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/softwareDigitalEngineering"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Digital Engineering
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 uppercase tracking-wider hover:text-[#B7F36B] transition-colors"
                >
                  <span>All Solutions</span>
                  <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Services (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7F36B]">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/services/consulting-advisory"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Consulting &amp; Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/professional-services"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Professional Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-services"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Managed Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-application-staffing"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Software &amp; AI Dev
                </Link>
              </li>
              <li>
                <Link
                  href="/services/manpower-staffing-services"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Technology Staffing
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 uppercase tracking-wider hover:text-[#B7F36B] transition-colors"
                >
                  <span>All Services</span>
                  <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Company (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7F36B]">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company-overview"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Company Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/our-mission"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/our-vision"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/why-weroute"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Why WeRoute
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Blogs &amp; Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/65 transition-colors duration-200 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: Global Contact Info (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7F36B]">
              Global Offices
            </h4>

            <div className="mt-5 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-[#B7F36B] shrink-0" />
                <div>
                  <span className="block font-bold uppercase tracking-wider text-white/50 text-[10px]">Direct Call</span>
                  <a href="tel:+918097486432" className="text-white/85 hover:text-white transition-colors">
                    +91 80974 86432
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#B7F36B] shrink-0" />
                <div>
                  <span className="block font-bold uppercase tracking-wider text-white/50 text-[10px]">Head Office</span>
                  <span className="text-white/85">Bangalore, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={16} className="mt-0.5 text-[#B7F36B] shrink-0" />
                <div>
                  <span className="block font-bold uppercase tracking-wider text-white/50 text-[10px]">International</span>
                  <span className="text-white/85">Washington, USA<br/>Sydney, Australia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 size={16} className="mt-0.5 text-[#B7F36B] shrink-0" />
                <div>
                  <span className="block font-bold uppercase tracking-wider text-white/50 text-[10px]">Sister Branch</span>
                  <span className="text-white/85">Delhi NCR, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT & OPERATIONAL STATUS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/50">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse" />
            <span className="text-white/70 font-medium">
              Global Operations Active • 99.9% Production Reliability
            </span>
          </div>

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} WeRoute Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-white/60">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}