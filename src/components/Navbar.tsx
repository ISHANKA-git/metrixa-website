"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubItem {
  title: string;
  desc: string;
  tag?: string;
  href: string;
}

interface NavItem {
  id: string;
  name: string;
  href: string;
  sinhalaSubtitle?: string;
  items?: SubItem[];
}

const navItems: NavItem[] = [
  {
    id: "home",
    name: "Home",
    href: "/",
  },
  {
    id: "services",
    name: "Services",
    href: "/services",
    sinhalaSubtitle: "පොඩි බිස්නස්කාරයෝ & Pro Services",
    items: [
      { title: "Social Media Setup", desc: "FB, IG & TikTok page setup & optimization", tag: "Rs.1000", href: "/services#small-business" },
      { title: "Video & Reel Editing", desc: "Short reels & promotional video editing", tag: "Hot", href: "/services#small-business" },
      { title: "Content Bundles", desc: "Brand post designs + captions & hashtags", tag: "Rs.250", href: "/services#small-business" },
      { title: "Mini Website Creation", desc: "Single-page site + Free domain & hosting", tag: "Rs.5000", href: "/services#small-business" },
      { title: "Digital Starter Pack", desc: "Complete all-in-one small business bundle", tag: "Rs.7500", href: "/services#small-business" },
    ],
  },
  {
    id: "courses",
    name: "Courses",
    href: "/courses",
  },
  {
    id: "digital-store",
    name: "Digital Store",
    href: "/digital-store",
    sinhalaSubtitle: "ඩිජිටල් මෙවලම් (Instant Access)",
    items: [
      { title: "QuillBot Pro", desc: "Premium AI writing & paraphrasing tool", tag: "Hot", href: "/digital-store#quillbot-pro" },
      { title: "CapCut Pro", desc: "Advanced video editing & pro effects", tag: "Popular", href: "/digital-store#capcut-pro" },
      { title: "Figma Pro", desc: "Professional UI/UX design workspace", tag: "Pro", href: "/digital-store#figma-pro" },
    ],
  },
  {
    id: "community",
    name: "Community",
    href: "/community",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    id: "about",
    name: "About Us",
    href: "/about",
  },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 inset-x-0 w-full max-w-[100vw] z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-[#050706]/90 backdrop-blur-2xl border-b border-lime-400/30 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_2px_20px_rgba(163,230,53,0.12)]"
          : "bg-[#050706]/75 backdrop-blur-xl border-b border-white/10"
      }`}
    >
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

      {/* Subtle Bottom Neon Accent Line */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-lime-400/60 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-30"
        }`}
      />

      {/* Cyberpunk Ambient Glows inside Glass Bar */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-16 right-[10%] w-[320px] sm:w-[420px] h-[160px] bg-lime-400/15 blur-[80px] rounded-full" />
        <div className="absolute -top-16 left-[10%] w-[220px] sm:w-[280px] h-[140px] bg-lime-400/10 blur-[70px] rounded-full" />
      </div>

      {/* Main Navbar Container */}
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-3 transition-all duration-300 ${
          isScrolled ? "h-20" : "h-20 sm:h-24"
        }`}
      >
        {/* Left: Hexagon Logo + MetriXa */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative flex items-center justify-center h-11 w-10 sm:h-12 sm:w-11 bg-lime-400 p-0.5 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] shadow-[0_0_20px_rgba(163,230,53,0.5)] group-hover:scale-105 transition-transform">
            <img
              src="/logo.jpg"
              alt="MetriXa Logo"
              className="h-full w-full object-cover scale-125 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
            />
          </div>
          <span className="font-sans text-xl sm:text-[22px] font-black tracking-wide text-white leading-none">
            Metri<span className="text-lime-400">Xa</span>
          </span>
        </Link>

        {/* Right: Cyberpunk Pill Capsule (Desktop) */}
        <nav className="hidden lg:flex items-center h-[54px] rounded-full border border-lime-400/40 bg-zinc-950/90 backdrop-blur-md pl-6 pr-1.5 shadow-[0_0_30px_rgba(163,230,53,0.18),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="flex items-center gap-5 xl:gap-6 pr-5">
            {navItems.map((item) => {
              const hasDropdown = item.items && item.items.length > 0;
              const isOpen = activeId === item.id;
              const isActive = pathname === item.href;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onMouseEnter={() => setActiveId(null)}
                    className={`text-[13.5px] font-bold transition-all py-4 whitespace-nowrap ${
                      isActive
                        ? "text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.85)]"
                        : "text-zinc-200 hover:text-lime-400 hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.85)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <div
                  key={item.id}
                  className={`nav-trigger-wrap relative py-4 ${isOpen ? "is-open" : ""}`}
                  onMouseEnter={() => openMenu(item.id)}
                  onMouseMove={() => openMenu(item.id)}
                  onPointerEnter={() => openMenu(item.id)}
                  onMouseLeave={closeMenuWithDelay}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveId(null)}
                    className={`nav-title-text flex items-center gap-1.5 text-[13.5px] font-bold transition-all cursor-pointer select-none focus:outline-none whitespace-nowrap ${
                      isActive ? "text-lime-400" : "text-zinc-200"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="nav-arrow-icon text-[9px] text-zinc-400 transition-transform duration-200">
                      ▼
                    </span>
                  </Link>

                  {/* Dropdown Panel */}
                  <div
                    className="nav-dropdown-box absolute left-1/2 top-full pt-4 w-[330px] z-[99999]"
                    onMouseEnter={() => openMenu(item.id)}
                    onMouseLeave={closeMenuWithDelay}
                  >
                    <div className="rounded-2xl border-2 border-lime-400 bg-[#070b08]/95 backdrop-blur-2xl p-4 shadow-[0_25px_70px_rgba(0,0,0,0.98),0_0_35px_rgba(163,230,53,0.4)]">
                      {item.sinhalaSubtitle && (
                        <div className="mb-3 flex items-center justify-between rounded-xl border border-lime-400/40 bg-lime-400/15 px-3.5 py-2 text-xs font-extrabold text-lime-400">
                          <span>✨ {item.sinhalaSubtitle}</span>
                          <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                        </div>
                      )}

                      <div className="flex flex-col gap-2">
                        {item.items?.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setActiveId(null)}
                            className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 hover:border-lime-400 hover:bg-lime-400/15 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-white group-hover:text-lime-400">
                                {sub.title}
                              </span>
                              {sub.tag && (
                                <span className="rounded-md border border-lime-400/40 bg-lime-400/20 px-2 py-0.5 text-[10px] font-extrabold text-lime-400">
                                  {sub.tag}
                                </span>
                              )}
                            </div>
                            <span className="mt-1 text-xs text-zinc-400">
                              {sub.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button: Get Started */}
          <Link
            href="/contact"
            onMouseEnter={() => setActiveId(null)}
            className="inline-flex items-center justify-center h-[42px] rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-6 text-[13.5px] font-black text-zinc-950 tracking-tight transition-all shadow-[0_0_25px_rgba(163,230,53,0.6)] hover:shadow-[0_0_35px_rgba(163,230,53,0.9)] whitespace-nowrap"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger Button (Crisp SVG + shrink-0 so it NEVER disappears) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative z-50 shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-full border-2 border-lime-400/60 bg-zinc-950 text-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.35)] active:scale-95 transition-all"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 sm:mx-6 mb-4 rounded-2xl border-2 border-lime-400/60 bg-[#070b08]/98 backdrop-blur-2xl p-5 flex flex-col gap-3 shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.id} className="border-b border-white/10 pb-2.5 last:border-none">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-extrabold block ${
                    isActive ? "text-lime-400" : "text-white hover:text-lime-400"
                  }`}
                >
                  {item.name}
                </Link>
                {item.items && (
                  <div className="flex flex-col gap-1 pl-3 mt-1.5">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-zinc-300 py-1 hover:text-lime-400 flex items-center justify-between"
                      >
                        <span>• {sub.title}</span>
                        {sub.tag && (
                          <span className="text-[10px] font-bold text-lime-400/80">
                            {sub.tag}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-1 flex items-center justify-center h-11 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 text-sm font-black text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.5)]"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}