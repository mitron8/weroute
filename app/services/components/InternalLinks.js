"use client";

import Link from 'next/link';

export default function InternalLinks() {
  const links = [
    { name: 'Managed Services', href: '/services/managed-services' },
    { name: 'Professional Services', href: '/services/professional-services' },
    { name: 'Consulting & Advisory', href: '/services/consulting-advisory' },
    { name: 'Staffing', href: '/services/staffing' },
    { name: 'Software & AI Development', href: '/services/software-ai-development' },
    { name: 'Solutions', href: '/solutions' },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-[1500px] px-8">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Internal Links:</span>
          {links.map((link, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-8">
              <Link 
                href={link.href}
                className="text-[15px] font-semibold text-[#080357]/70 hover:text-blue-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
              {index < links.length - 1 && (
                <span className="hidden md:inline-block text-gray-300">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
