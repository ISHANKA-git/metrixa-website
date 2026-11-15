"use client";

import React, { useState, useRef } from "react";

const navCategories = [
  {
    id: "digital-tools",
    name: "Digital Tools",
    sinhalaSubtitle: "ඩිජිටල් මෙවලම්",
    items: [
      { title: "QuillBot Pro", desc: "Premium AI writing & paraphrasing tool", tag: "Hot" },
      { title: "CapCut Pro", desc: "Advanced video editing & pro effects", tag: "Popular" },
      { title: "Figma Pro", desc: "Professional UI/UX design workspace", tag: "Pro" },
    ],
  },
  {
    id: "small-business",
    name: "Small Business",
    sinhalaSubtitle: "පොඩි බිස්නස්කාරයෝ",
    items: [
      { title: "Logo for Business", desc: "Unique & modern brand identity design", tag: "Brand" },
      { title: "Cover Pages", desc: "Eye-catching social media banners & covers", tag: "Social" },
      { title: "Small Business Web", desc: "Fast, mobile-friendly starter websites", tag: "Best Value" },
    ],
  },
  {
    id: "pro-services",
    name: "Pro Services",
    sinhalaSubtitle: "ව්‍යාපාරික සේවාවන් (ළඟදීම)",
    badge: "SOON",
    items: [
      { title: "Booking Systems", desc: "Automated online appointment scheduling", tag: "Soon" },
      { title: "Business Dashboards", desc: "Custom analytics & management panels", tag: "Soon" },
      { title: "AI Chatbots", desc: "24/7 intelligent customer support bots", tag: "Soon" },
      { title: "WhatsApp Automation", desc: "Auto-replies, broadcasts & lead capture", tag: "Soon" },
      { title: "Workflow Automation", desc: "Connect apps & automate daily tasks", tag: "Soon" },
    ],
  },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveId(id);
  };

  const closeMenuWithDelay = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveId(null);
    }, 180);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      {/* Pure CSS Hover Backup + Smooth Transitions */}
      <style>{`
        .nav-trigger-wrap .nav-dropdown-box {
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, 8px);
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
          pointer-events: none;
        }
        .nav-trigger-wrap:hover .nav-dropdown-box,
        .nav-trigger-wrap.is-open .nav-dropdown-box {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translate(-50%, 0px) !important;
          pointer-events: auto !important;
        }
        .nav-trigger-wrap:hover .nav-title-text,
        .nav-trigger-wrap.is-open .nav-title-text {
          color: #a3e635 !important;
          text-shadow: 0 0 10px rgba(163, 230, 53, 0.85);
        }
        .nav-trigger-wrap:hover .nav-arrow-icon,
        .nav-trigger-wrap.is-open .nav-arrow-icon {
          transform: rotate(180deg);
          color: #a3e635 !important;
        }
      `}</style>

      {/* Cyberpunk Glows (Behind Navbar) */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-44 -z-10">
        <div className="absolute -top-16 right-[8%] w-[500px] h-[240px] bg-lime-400/20 blur-[100px] rounded-full" />
        <div className="absolute -top-20 left-[8%] w-[300px] h-[180px] bg-lime-400/10 blur-[90px] rounded-full" />
      </div>

      {/* Main Navbar Bar */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 h-24 flex items-center justify-between">
        {/* Left: Hexagon Logo + MetriXa */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative flex items-center justify-center h-12 w-11 bg-lime-400 p-0.5 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] shadow-[0_0_20px_rgba(163,230,53,0.5)] group-hover:scale-105 transition-transform">
            <img
              src="/logo.jpg"
              alt="MetriXa Logo"
              className="h-full w-full object-cover scale-125 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
            />
          </div>
          <span className="font-sans text-[22px] font-black tracking-wide text-white leading-none">
            Metri<span className="text-lime-400">Xa</span>
          </span>
        </a>

        {/* Right: Cyberpunk Pill Capsule */}
        <nav className="hidden md:flex items-center h-[54px] rounded-full border border-lime-400/40 bg-zinc-950/95 pl-7 pr-1.5 shadow-[0_0_35px_rgba(163,230,53,0.2)]">
          <div className="flex items-center gap-7 pr-6">
            {navCategories.map((cat) => {
              const isOpen = activeId === cat.id;

              return (
                <div
                  key={cat.id}
                  className={`nav-trigger-wrap relative py-4 ${isOpen ? "is-open" : ""}`}
                  onMouseEnter={() => openMenu(cat.id)}
                  onMouseMove={() => openMenu(cat.id)}
                  onPointerEnter={() => openMenu(cat.id)}
                  onMouseLeave={closeMenuWithDelay}
                >
                  {/* Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setActiveId(isOpen ? null : cat.id)}
                    className="nav-title-text flex items-center gap-1.5 text-sm font-bold text-zinc-200 transition-all cursor-pointer select-none focus:outline-none"
                  >
                    <span>{cat.name}</span>

                    {cat.badge && (
                      <span className="rounded-full bg-lime-400/15 border border-lime-400/50 px-1.5 py-0.5 text-[9px] font-black tracking-wider text-lime-400">
                        {cat.badge}
                      </span>
                    )}

                    <span className="nav-arrow-icon text-[10px] text-zinc-400 transition-transform duration-200">
                      ▼
                    </span>
                  </button>

                  {/* Individual Dropdown Panel Centered Directly Under Each Item */}
                  <div
                    className="nav-dropdown-box absolute left-1/2 top-full pt-4 w-[330px] z-[99999]"
                    onMouseEnter={() => openMenu(cat.id)}
                    onMouseLeave={closeMenuWithDelay}
                  >
                    <div className="rounded-2xl border-2 border-lime-400 bg-[#070b08] p-4 shadow-[0_25px_70px_rgba(0,0,0,0.98),0_0_35px_rgba(163,230,53,0.4)]">
                      {/* Sinhala Subtitle Header */}
                      <div className="mb-3 flex items-center justify-between rounded-xl border border-lime-400/40 bg-lime-400/15 px-3.5 py-2 text-xs font-extrabold text-lime-400">
                        <span>✨ {cat.sinhalaSubtitle}</span>
                        <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                      </div>

                      {/* Sub-services Items */}
                      <div className="flex flex-col gap-2">
                        {cat.items.map((item) => (
                          <a
                            key={item.title}
                            href={`#${cat.id}`}
                            onClick={() => setActiveId(null)}
                            className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 hover:border-lime-400 hover:bg-lime-400/15 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-white group-hover:text-lime-400">
                                {item.title}
                              </span>
                              {item.tag && (
                                <span className="rounded-md border border-lime-400/40 bg-lime-400/20 px-2 py-0.5 text-[10px] font-extrabold text-lime-400">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <span className="mt-1 text-xs text-zinc-400">
                              {item.desc}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Added About Us Link */}
            <a
              href="#about"
              onMouseEnter={() => setActiveId(null)}
              className="text-sm font-bold text-zinc-200 hover:text-lime-400 hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.85)] transition-all py-4"
            >
              About Us
            </a>
          </div>

          {/* Updated CTA Button: Contact Us */}
          <a
            href="#contact"
            onMouseEnter={() => setActiveId(null)}
            className="inline-flex items-center justify-center h-[42px] rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-6 text-[13.5px] font-black text-zinc-950 tracking-tight transition-all shadow-[0_0_25px_rgba(163,230,53,0.6)] hover:shadow-[0_0_35px_rgba(163,230,53,0.9)]"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-lime-400/40 bg-zinc-950 text-lime-400"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-6 mt-2 rounded-2xl border-2 border-lime-400/50 bg-[#070b08] p-5 flex flex-col gap-3 shadow-2xl">
          {navCategories.map((cat) => (
            <div key={cat.id} className="border-b border-white/10 pb-2.5">
              <div className="text-xs font-extrabold text-lime-400 mb-1">
                {cat.name} — {cat.sinhalaSubtitle}
              </div>
              <div className="flex flex-col gap-1 pl-2">
                {cat.items.map((item) => (
                  <a
                    key={item.title}
                    href={`#${cat.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-zinc-200 py-1 hover:text-lime-400"
                  >
                    • {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold text-zinc-200 hover:text-lime-400 py-1"
          >
            About Us
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-1 flex items-center justify-center h-11 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 text-sm font-black text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.5)]"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}