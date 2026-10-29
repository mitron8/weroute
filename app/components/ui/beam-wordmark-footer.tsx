"use client"

import * as React from "react"

export type SocialIcon = "x" | "linkedin" | "youtube" | "instagram" | "github" | "dribbble"

export type FooterSocial = {
  label: string
  href?: string
  icon: SocialIcon | React.ReactNode
}

export type FooterLink = { label: string; href?: string }
export type FooterColumn = { title: string; links: FooterLink[] }
export type FooterCredit = { lead?: string; label: string; href?: string; tail?: string }

export type BeamWordmarkFooterProps = {
  brand?: string
  wordmark?: string
  company?: string
  year?: number
  socials?: FooterSocial[]
  credits?: FooterCredit[]
  columns?: FooterColumn[]
  onLinkClick?: (label: string, href?: string) => void
  cut?: number
  background?: string
  ink?: string
  muted?: string
  accent?: string
  wordTop?: string
  wordFoot?: string
  fontSans?: string
  wordWeight?: number
  animate?: boolean
  className?: string
  children?: React.ReactNode
}

const DEFAULT_SOCIALS: FooterSocial[] = [
  { label: "X", href: "https://twitter.com", icon: "x" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
]

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Network & Connectivity", href: "/solutions/network-connectivity" },
      { label: "Cloud & DevOps", href: "/solutions/cloud-and-devOps" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
      { label: "AI & Automation", href: "/solutions/AI-Intelligent-Automation" },
      { label: "Digital Engineering", href: "/solutions/softwareDigitalEngineering" },
      { label: "All Solutions →", href: "/solutions" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Consulting & Advisory", href: "/services/consulting-advisory" },
      { label: "Professional Services", href: "/services/professional-services" },
      { label: "Managed Services", href: "/services/managed-services" },
      { label: "Software & AI Dev", href: "/services/software-ai-development" },
      { label: "Technology Staffing", href: "/services/manpower-staffing-services" },
      { label: "All Services →", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Company Overview", href: "/company-overview" },
      { label: "Our Mission", href: "/our-mission" },
      { label: "Our Vision", href: "/our-vision" },
      { label: "Why WeRoute", href: "/why-weroute" },
      { label: "Blogs & Insights", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

const ICONS: Record<SocialIcon, React.ReactNode> = {
  x: (
    <path
      d="M17.6 3.5h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9-5.2 5.9H3.2l6.7-7.7L2.8 3.5h5.9l4.1 5.4 4.8-5.4Zm-1 15.3h1.6L7.9 5.1H6.2l10.4 13.7Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  ),
  linkedin: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V16M12 16v-5.5M12 13c0-1.6 1-2.6 2.4-2.6s2.1.9 2.1 2.4V16" />
      <circle cx="8" cy="7.7" r=".55" fill="currentColor" />
    </g>
  ),
  youtube: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <rect x="2.75" y="5.5" width="18.5" height="13" rx="4" />
      <path d="M10.2 9.3v5.4l4.6-2.7-4.6-2.7Z" />
    </g>
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="17.1" cy="6.9" r=".6" fill="currentColor" stroke="none" />
    </g>
  ),
  github: (
    <path
      d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  dribbble: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.6 4.2c3.4 4.4 5.4 9.6 6.1 15.6M3.6 10.6c5.6.3 10.4-1 13.9-4.4M5.6 17.6c3.4-4.2 8.6-5.6 14.8-3.6" />
    </g>
  ),
}

const isIconName = (v: unknown): v is SocialIcon => typeof v === "string" && v in ICONS

const Arrow = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2.5 9.5l7-7M4 2.5h5.5V8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CSS = `
  .bwf-root {
    position: relative;
    background: #080357;
    color: #ffffff;
    overflow: hidden;
    isolation: isolate;
    transform: translate3d(0, 0, 0);
  }
  .bwf-rule {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 1px;
    z-index: 10;
    background: linear-gradient(90deg, rgba(183, 243, 107, 0.15), rgba(183, 243, 107, 0.5) 50%, rgba(183, 243, 107, 0.15));
  }
  .bwf-sky {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }
  .bwf-wash {
    position: absolute;
    inset: 0;
    background: radial-gradient(120% 90% at 8% 0%, rgba(183, 243, 107, 0.12), transparent 55%),
                radial-gradient(90% 70% at 92% 8%, rgba(59, 130, 246, 0.15), transparent 60%),
                linear-gradient(180deg, rgba(183, 243, 107, 0.05), transparent 70%);
  }
  .bwf-beam-track {
    position: absolute;
    inset: -30% -50%;
    pointer-events: none;
    will-change: transform;
    animation: bwfBeamDrift 16s ease-in-out infinite alternate;
    transform: translate3d(0, 0, 0);
  }
  @keyframes bwfBeamDrift {
    0% { transform: translate3d(-18%, 0, 0); }
    100% { transform: translate3d(18%, 0, 0); }
  }
  .bwf-beam-shaft {
    position: absolute;
    inset: 0;
    background: linear-gradient(118deg, transparent 40%, rgba(183, 243, 107, 0.06) 46%, rgba(183, 243, 107, 0.28) 50%, rgba(183, 243, 107, 0.06) 54%, transparent 60%);
    filter: blur(32px);
    transform: translate3d(0, 0, 0);
  }
  .bwf-mouse-glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: var(--bwf-glow-op, 0);
    transition: opacity 0.3s ease;
    background: radial-gradient(circle 350px at var(--bwf-mx, 50%) var(--bwf-my, 50%), rgba(183, 243, 107, 0.16), transparent 70%);
    transform: translate3d(0, 0, 0);
  }
  .bwf-grid {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
    padding: clamp(48px, 6vw, 84px) clamp(20px, 4vw, 64px) 0;
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.9fr) minmax(0, 0.9fr) minmax(0, 0.9fr) minmax(0, 1.1fr);
    column-gap: clamp(20px, 3vw, 44px);
    row-gap: 40px;
  }
  @media (max-width: 1024px) {
    .bwf-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 36px;
    }
    .bwf-col-brand {
      grid-column: 1 / -1;
    }
  }
  @media (max-width: 640px) {
    .bwf-grid {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 32px;
    }
  }
  .bwf-heading {
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    color: #B7F36B;
    padding-bottom: 14px;
    position: relative;
    display: block;
  }
  .bwf-heading::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(183, 243, 107, 0.55), rgba(183, 243, 107, 0.15));
  }
  .bwf-social-btn {
    position: relative;
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: all 0.25s ease;
  }
  .bwf-social-btn:hover {
    color: #080357;
    background: #B7F36B;
    border-color: #B7F36B;
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 8px 20px -4px rgba(183, 243, 107, 0.5);
  }
  .bwf-nav-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 0;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.72);
    transition: color 0.2s ease, transform 0.25s ease;
  }
  .bwf-nav-link:hover {
    color: #B7F36B;
    transform: translate3d(4px, 0, 0);
  }
  .bwf-word-section {
    position: relative;
    z-index: 2;
    overflow: hidden;
    margin-top: clamp(28px, 5vw, 64px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .bwf-word-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 64px);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    user-select: none;
    -webkit-user-select: none;
  }
  .bwf-char-box {
    display: inline-block;
    cursor: pointer;
    font-size: clamp(68px, 17.2vw, 235px);
    font-weight: 850;
    line-height: 0.82;
    letter-spacing: -0.04em;
    font-family: inherit;
    background: linear-gradient(180deg, #446cf6 0%, #1c369e 45%, #050b28 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.25, 1.2), filter 0.25s ease;
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }
  .bwf-char-box:hover {
    transform: translate3d(0, -8px, 0);
    filter: brightness(1.5) drop-shadow(0 0 16px rgba(183, 243, 107, 0.45));
  }
  .bwf-char-box.is-hop {
    animation: bwfHop 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  @keyframes bwfHop {
    0% { transform: translate3d(0, 0, 0) scale(1, 1); }
    18% { transform: translate3d(0, 3px, 0) scale(1.05, 0.92); }
    45% { transform: translate3d(0, -18px, 0) scale(0.96, 1.06); }
    70% { transform: translate3d(0, 2px, 0) scale(1.02, 0.98); }
    100% { transform: translate3d(0, -8px, 0) scale(1, 1); }
  }
  .bwf-word-fade-bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 28%;
    pointer-events: none;
    background: linear-gradient(180deg, transparent, #080357);
  }
  @media (prefers-reduced-motion: reduce) {
    .bwf-beam-track { animation: none !important; }
    .bwf-char-box { transition: none !important; animation: none !important; }
  }
`

export default function BeamWordmarkFooter({
  brand = "WeRoute",
  wordmark = "WEROUTE",
  company = "WeRoute Technologies",
  year = new Date().getFullYear(),
  socials = DEFAULT_SOCIALS,
  credits,
  columns = DEFAULT_COLUMNS,
  onLinkClick,
  className = "",
  children,
}: BeamWordmarkFooterProps) {
  const word = (wordmark ?? brand).trim() || brand
  const letters = React.useMemo(() => Array.from(word), [word])
  const rootRef = React.useRef<HTMLElement>(null)
  const rectRef = React.useRef<{ left: number; top: number; width: number; height: number } | null>(null)

  const handlePointerEnter = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    rectRef.current = { left: r.left, top: r.top, width: r.width, height: r.height }
    if (rootRef.current) {
      rootRef.current.style.setProperty("--bwf-glow-op", "1")
    }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!rootRef.current) return
    const r = rectRef.current ?? e.currentTarget.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    rootRef.current.style.setProperty("--bwf-mx", `${x}px`)
    rootRef.current.style.setProperty("--bwf-my", `${y}px`)
  }

  const handlePointerLeave = () => {
    if (rootRef.current) {
      rootRef.current.style.setProperty("--bwf-glow-op", "0")
    }
  }

  const hop = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = e.currentTarget
    el.classList.remove("is-hop")
    void el.offsetWidth
    el.classList.add("is-hop")
  }

  return (
    <footer
      id="footer"
      ref={rootRef}
      className={`bwf-root ${className || ""}`}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <style>{CSS}</style>

      {/* Top Hairline Accent Rule */}
      <div className="bwf-rule" aria-hidden="true" />

      {/* Background Animated Atmosphere (100% GPU Hardware Composited) */}
      <div className="bwf-sky" aria-hidden="true">
        <div className="bwf-wash" />
        <div className="bwf-beam-track">
          <div className="bwf-beam-shaft" />
        </div>
        <div className="bwf-mouse-glow" />
      </div>

      {children ? (
        <div className="relative z-10">{children}</div>
      ) : (
        <div className="bwf-grid">
          {/* Column 1: Brand & Overview */}
          <div className="bwf-col-brand">
            <a href="/" className="inline-block mb-4">
              <img
                src="/images/logo/weroute.png"
                alt="WeRoute Enterprise Technology"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm leading-relaxed text-white/70 max-w-sm mb-5 font-normal">
              WeRoute is an enterprise technology consulting, engineering, and operations company. We help organizations design, modernize, secure, integrate, and operate critical technology environments end to end.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                24x7 Operations
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                Vendor-Agnostic
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                Zero Lock-in
              </span>
            </div>

            {socials.length > 0 && (
              <div className="flex items-center gap-3">
                {socials.map((s, i) => (
                  <a
                    key={s.label + i}
                    className="bwf-social-btn"
                    href={s.href || "#"}
                    aria-label={s.label}
                    {...(s.href && /^https?:/.test(s.href) ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      {isIconName(s.icon) ? ICONS[s.icon] : s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Columns */}
          {columns.map((col, ci) => (
            <nav key={col.title + ci} aria-label={col.title}>
              <span className="bwf-heading">{col.title}</span>
              <ul className="mt-3.5 space-y-1">
                {col.links.map((l, li) => (
                  <li key={l.label + li}>
                    <a className="bwf-nav-link" href={l.href || "#"}>
                      <span>{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Column 5: Global Offices */}
          <div>
            <span className="bwf-heading">Global Offices</span>
            <div className="mt-3.5 space-y-3 text-xs text-white/75">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#B7F36B]">Direct Call</span>
                <a href="tel:+918097486432" className="text-white hover:text-[#B7F36B] transition-colors">
                  +91 80974 86432
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#B7F36B]">Head Office</span>
                <span className="text-white/85">Bangalore, India</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#B7F36B]">International</span>
                <span className="text-white/85">Washington, USA • Sydney, Australia</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#B7F36B]">Sister Branch</span>
                <span className="text-white/85">Delhi NCR, India</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GIANT RESPONSIVE WORDMARK (100% Fluid & Hardware-Accelerated) */}
      <div className="bwf-word-section" aria-hidden="true">
        <div className="bwf-word-container">
          {letters.map((char, i) => (
            <span
              key={i}
              className="bwf-char-box"
              onClick={hop}
              onAnimationEnd={(e) => e.currentTarget.classList.remove("is-hop")}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <div className="bwf-word-fade-bottom" />
      </div>

      {/* Bottom Operational Status Bar */}
      <div className="relative z-10 px-6 sm:px-12 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse" />
          <span className="text-white/80 font-medium">
            Global Operations Active • 99.9% Production Reliability
          </span>
        </div>
        <p className="text-center sm:text-right">
          © {year} WeRoute Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
