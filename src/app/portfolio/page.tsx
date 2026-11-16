"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

type PortfolioCategory = "all" | "websites" | "branding" | "video" | "bundles";

interface ProjectItem {
  id: string;
  category: Exclude<PortfolioCategory, "all">;
  categoryLabel: string;
  clientType: string;
  title: string;
  sinhala: string;
  desc: string;
  deliverables: string[];
  impact: string;
  featured?: boolean;
}

const filterTabs = [
  { id: "all", label: "All Works (6)", icon: "⚡" },
  { id: "websites", label: "Mini Websites", icon: "🌐" },
  { id: "branding", label: "Social & Branding", icon: "🎨" },
  { id: "video", label: "Reels & Promo Video", icon: "🎬" },
  { id: "bundles", label: "Digital Starter Packs", icon: "🚀" },
];

const portfolioProjects: ProjectItem[] = [
  {
    id: "ceylon-brew-starter",
    category: "bundles",
    categoryLabel: "Digital Starter Bundle",
    clientType: "Local Cafe & Roastery",
    title: "Ceylon Brew — Complete Digital Launch",
    sinhala: "සම්පූර්ණ Small Business Digital Starter පැකේජය",
    desc: "Transformed a local coffee brand with a complete digital footprint including a mobile-first mini website, optimized Facebook page, 4 cohesive brand posts, and a viral launch reel.",
    deliverables: [
      "Single-Page Mini Website + WhatsApp Order",
      "FB Page Setup & Google Maps Integration",
      "4 Custom Brand Posts + 15s Launch Reel",
    ],
    impact: "3x Customer Inquiries in Week 1",
    featured: true,
  },
  {
    id: "apex-auto-web",
    category: "websites",
    categoryLabel: "Mini Website Creation",
    clientType: "Auto Detailing Studio",
    title: "Apex Auto Care — Single-Page Booking Web",
    sinhala: "වාහන සේවා ආයතනයක් සඳහා නවීන Mini Website එකක්",
    desc: "High-contrast dark UI single-page website featuring service packages, before/after gallery, one-click WhatsApp booking button, and live Google Maps location pin.",
    deliverables: [
      "Responsive Dark-Mode Single Page UI",
      "Direct WhatsApp Contact & Package Inquiry",
      "Free Domain & Ultra-Fast Cloud Hosting",
    ],
    impact: "100% Mobile Speed Score",
    featured: true,
  },
  {
    id: "luxe-wear-reels",
    category: "video",
    categoryLabel: "Video Content Creation",
    clientType: "Clothing & Streetwear Brand",
    title: "Urban Luxe — 30s Promotional Reel Campaign",
    sinhala: "ඇඟලුම් ව්‍යාපාරයක් සඳහා නිර්මාණය කළ Promotional Reels",
    desc: "Fast-paced 9:16 vertical promotional reel edited using client footage, enhanced with dynamic speed ramps, glowing motion typography, color grading, and trending audio sync.",
    deliverables: [
      "30s High-Retention Promotional Video",
      "Custom Animated Captions & Sound Design",
      "Optimized for TikTok, IG Reels & FB",
    ],
    impact: "High Engagement & Shares",
  },
  {
    id: "green-leaf-social",
    category: "branding",
    categoryLabel: "Social Media Setup & Optimization",
    clientType: "Organic Skincare Store",
    title: "Aura Naturals — Multi-Platform Brand Setup",
    sinhala: "FB, Instagram සහ TikTok පිටු වෘත්තීයමය ලෙස සැකසීම",
    desc: "Complete social presence overhaul across Facebook, Instagram, and TikTok with matching profile logos, high-converting cover banners, keyword-optimized bios, and CTA buttons.",
    deliverables: [
      "Facebook, Instagram & TikTok Optimization",
      "Custom Profile & Responsive Cover Banners",
      "Bio Copywriting & Automated CTA Setup",
    ],
    impact: " Instant Brand Credibility",
  },
  {
    id: "fitpulse-content-bundle",
    category: "branding",
    categoryLabel: "Social Media Content Bundle",
    clientType: "Fitness & Personal Trainer",
    title: "FitPulse Studio — Cohesive Brand Grid Pack",
    sinhala: "එකම Brand Style එකකින් හැදූ Social Media Posts එකතුව",
    desc: "A series of bold, high-contrast social media post designs maintaining strict brand color consistency, paired with persuasive captions and targeted niche hashtags.",
    deliverables: [
      "Custom Post Designs (Consistent Neon Theme)",
      "Engaging Captions & Researched #Hashtags",
      "Ready-to-Publish High-DPI Formats",
    ],
    impact: "Consistent Visual Identity",
  },
  {
    id: "techgear-mini-web",
    category: "websites",
    categoryLabel: "Mini Website Creation",
    clientType: "PC & Mobile Accessories Shop",
    title: "NovaTech Hub — Product Showcase Mini Site",
    sinhala: "පරිගණක සහ උපාංග අලෙවිසැලක් සඳහා වෙබ් අඩවියක්",
    desc: "Sleek cyberpunk-inspired product showcase page enabling customers to browse top gadgets and instantly check availability via WhatsApp.",
    deliverables: [
      "Product Catalogue Grid & Intro Section",
      "Instant WhatsApp Order Redirection",
      "Mobile Responsive + Google Maps Pin",
    ],
    impact: "Zero-Friction Ordering",
  },
];

const stats = [
  { value: "100%", label: "Custom Modern Designs", sinhala: "නවීන නිර්මාණ" },
  { value: "24/7", label: "Live Hosted Solutions", sinhala: "නොකඩවා ක්‍රියාත්මකයි" },
  { value: "Fast", label: "Project Turnaround", sinhala: "කඩිනම් සේවාව" },
  { value: "5-Star", label: "Client Satisfaction", sinhala: "විශ්වාසනීය බව" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth">
      <Navbar />

      {/* Custom Keyframes for Cyberpunk Portfolio Vector Art */}
      <style>{`
        @keyframes pfFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes pfPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.96); }
          50% { opacity: 0.95; transform: scale(1.04); }
        }
        @keyframes pfDash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes pfScan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.65; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .pf-float { animation: pfFloat 4.2s ease-in-out infinite; }
        .pf-float-delay { animation: pfFloat 4.8s ease-in-out 1.3s infinite; }
        .pf-pulse { animation: pfPulse 3.2s ease-in-out infinite; }
        .pf-dash { animation: pfDash 2.2s linear infinite; }
        .pf-scan { animation: pfScan 3.8s linear infinite; }
      `}</style>

      <main className="pt-28">
        {/* ===================================================== */}
        {/* 1. PORTFOLIO HERO SECTION WITH ANIMATED VECTOR ART    */}
        {/* ===================================================== */}
        <section className="relative py-12 lg:py-16 px-6 sm:px-10 lg:px-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/3 w-[560px] h-[340px] bg-lime-400/12 blur-[150px] rounded-full" />
            <div className="absolute bottom-10 right-1/4 w-[450px] h-[280px] bg-emerald-500/10 blur-[140px] rounded-full" />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(163, 230, 53, 0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(163, 230, 53, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: "64px 64px",
                maskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 90%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 90%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left 7 Cols: Copy */}
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                    METRIXA PORTFOLIO • OUR CREATIVE WORK
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
                  Crafted With Precision.{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(163,230,53,0.35)]">
                    Built for Impact.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mb-4">
                  Explore how we help small businesses, creators, and modern brands stand out with high-converting Mini Websites, Social Media Branding, and Promotional Video Reels.
                </p>

                <p className="text-xs sm:text-sm font-bold text-lime-400/90 mb-8">
                  ✨ අප විසින් නිර්මාණය කළ වෙබ් අඩවි, සමාජ මාධ්‍ය පිටු, Branding පෝස්ට් සහ Video Reels නිර්මාණ එකතුව.
                </p>

                {/* Quick Stats Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {stats.map((st) => (
                    <div
                      key={st.label}
                      className="rounded-2xl border border-lime-400/25 bg-zinc-950/85 px-4 py-3 backdrop-blur-md"
                    >
                      <div className="text-xl sm:text-2xl font-black text-lime-400">
                        {st.value}
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {st.label}
                      </div>
                      <div className="text-[10px] text-zinc-400">{st.sinhala}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 5 Cols: Animated Cyberpunk Showcase Gallery Vector Art */}
              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-72 w-full rounded-[28px] border border-lime-400/30 bg-gradient-to-b from-[#0b150d]/90 to-[#050706] p-4 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(163,230,53,0.12)]">
                  <div className="pf-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                  <svg viewBox="0 0 380 240" className="w-full h-full max-w-[350px]" fill="none">
                    {/* Connecting Circuit Lines */}
                    <path
                      d="M90 65 L140 95 M290 65 L240 95 M90 175 L140 145 M290 175 L240 145"
                      stroke="#a3e635"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      className="pf-dash"
                    />

                    {/* Center Showcase Browser Frame */}
                    <g className="pf-float">
                      <rect x="115" y="48" width="150" height="144" rx="14" fill="#09130c" stroke="#a3e635" strokeWidth="2.2" />
                      <line x1="115" y1="70" x2="265" y2="70" stroke="#a3e635" strokeOpacity="0.5" />
                      <circle cx="130" cy="59" r="3" fill="#a3e635" />
                      <circle cx="141" cy="59" r="3" fill="#bef264" fillOpacity="0.6" />
                      <circle cx="152" cy="59" r="3" fill="#34d399" fillOpacity="0.4" />

                      <rect x="129" y="82" width="122" height="48" rx="8" fill="#a3e635" fillOpacity="0.16" stroke="#bef264" strokeWidth="1.4" />
                      <text x="148" y="110" fill="#ecfccb" fontSize="11" fontWeight="900" fontFamily="monospace">
                        SHOWCASE UI
                      </text>

                      <rect x="129" y="140" width="56" height="36" rx="6" fill="#a3e635" fillOpacity="0.1" stroke="#a3e635" strokeOpacity="0.6" />
                      <rect x="195" y="140" width="56" height="36" rx="6" fill="#34d399" fillOpacity="0.1" stroke="#34d399" strokeOpacity="0.6" />
                    </g>

                    {/* Floating Badge Top Left: Web */}
                    <g className="pf-float-delay">
                      <rect x="18" y="34" width="76" height="42" rx="9" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="29" y="54" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        MINI WEB
                      </text>
                      <text x="29" y="67" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        RESPONSIVE
                      </text>
                    </g>

                    {/* Floating Badge Top Right: Reels */}
                    <g className="pf-pulse">
                      <rect x="286" y="34" width="76" height="42" rx="9" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="298" y="54" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        HD REELS
                      </text>
                      <text x="298" y="67" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        PROMO EDIT
                      </text>
                    </g>

                    {/* Floating Badge Bottom Left: Branding */}
                    <g className="pf-pulse">
                      <rect x="18" y="164" width="76" height="42" rx="9" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="29" y="184" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        BRANDING
                      </text>
                      <text x="29" y="197" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        POST PACKS
                      </text>
                    </g>

                    {/* Floating Badge Bottom Right: Social Setup */}
                    <g className="pf-float-delay">
                      <rect x="286" y="164" width="76" height="42" rx="9" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="298" y="184" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        FB • IG • TT
                      </text>
                      <text x="298" y="197" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        OPTIMIZED
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 2. FILTERABLE PROJECT SHOWCASE GRID                   */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-12">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-1">
                  FEATURED CASE STUDIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Recent <span className="text-lime-400">Projects &amp; Concepts</span>
                </h2>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {filterTabs.map((tab) => {
                  const isActive = activeCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveCategory(tab.id as PortfolioCategory)}
                      className={`rounded-full px-4 py-2.5 text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? "bg-lime-400 text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.5)]"
                          : "border border-white/10 bg-zinc-950 text-zinc-300 hover:border-lime-400/50 hover:text-white"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className={`group relative rounded-[30px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    proj.featured
                      ? "border-2 border-lime-400/60 bg-gradient-to-b from-[#0c180f] to-[#070b08] shadow-[0_20px_55px_rgba(163,230,53,0.14)]"
                      : "border border-lime-400/20 bg-zinc-950/85 hover:border-lime-400/70"
                  }`}
                >
                  <div>
                    {/* Top Row: Category Badge & Client Type */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                      <span className="rounded-full border border-lime-400/40 bg-lime-400/15 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-lime-300">
                        {proj.categoryLabel}
                      </span>
                      <span className="text-xs font-bold text-zinc-400">
                        {proj.clientType}
                      </span>
                    </div>

                    {/* Animated Vector Project Preview Box */}
                    <div className="relative h-48 w-full rounded-2xl border border-lime-400/25 bg-[#040705] mb-6 flex items-center justify-center overflow-hidden p-4">
                      <div className="pf-scan pointer-events-none absolute inset-x-0 h-14 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                      {/* Dynamic Vector Art based on Project Category */}
                      {proj.category === "bundles" && (
                        <svg viewBox="0 0 340 150" className="w-full h-full max-w-[310px]" fill="none">
                          <path d="M90 75 L130 75 M210 75 L250 75" stroke="#a3e635" strokeWidth="2" strokeDasharray="4 4" className="pf-dash" />
                          <g className="pf-float">
                            <rect x="20" y="32" width="72" height="86" rx="10" fill="#09130c" stroke="#bef264" strokeWidth="1.8" />
                            <text x="31" y="72" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">MINI WEB</text>
                            <text x="31" y="86" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">+ HOSTING</text>
                          </g>
                          <g className="pf-pulse">
                            <polygon points="170,26 212,50 212,100 170,124 128,100 128,50" fill="#0c1c11" stroke="#a3e635" strokeWidth="2.2" />
                            <text x="142" y="72" fill="#ecfccb" fontSize="10.5" fontWeight="900" fontFamily="monospace">STARTER</text>
                            <text x="145" y="87" fill="#a3e635" fontSize="9.5" fontWeight="900" fontFamily="monospace">BUNDLE</text>
                          </g>
                          <g className="pf-float-delay">
                            <rect x="248" y="32" width="72" height="86" rx="10" fill="#09130c" stroke="#34d399" strokeWidth="1.8" />
                            <text x="258" y="66" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">4 POSTS</text>
                            <text x="258" y="80" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">+ 1 REEL</text>
                            <text x="258" y="94" fill="#bef264" fontSize="7.5" fontWeight="bold" fontFamily="monospace">+ FB PAGE</text>
                          </g>
                        </svg>
                      )}

                      {proj.category === "websites" && (
                        <svg viewBox="0 0 340 150" className="w-full h-full max-w-[310px]" fill="none">
                          <g className="pf-float">
                            <rect x="45" y="16" width="250" height="118" rx="12" fill="#09130c" stroke="#a3e635" strokeWidth="2" />
                            <line x1="45" y1="36" x2="295" y2="36" stroke="#a3e635" strokeOpacity="0.5" />
                            <circle cx="60" cy="26" r="3" fill="#a3e635" />
                            <circle cx="71" cy="26" r="3" fill="#bef264" fillOpacity="0.5" />
                            <rect x="60" y="48" width="135" height="42" rx="6" fill="#a3e635" fillOpacity="0.16" stroke="#bef264" />
                            <text x="76" y="73" fill="#ecfccb" fontSize="10" fontWeight="900" fontFamily="monospace">SINGLE-PAGE UI</text>
                            <rect x="205" y="48" width="75" height="42" rx="6" fill="#34d399" fillOpacity="0.15" stroke="#34d399" />
                            <text x="216" y="73" fill="#a3e635" fontSize="9" fontWeight="900" fontFamily="monospace">WHATSAPP</text>
                            <rect x="60" y="98" width="220" height="22" rx="5" fill="#a3e635" fillOpacity="0.1" />
                            <text x="95" y="113" fill="#bef264" fontSize="8.5" fontWeight="bold" fontFamily="monospace">GOOGLE MAPS + MOBILE READY</text>
                          </g>
                        </svg>
                      )}

                      {proj.category === "video" && (
                        <svg viewBox="0 0 340 150" className="w-full h-full max-w-[310px]" fill="none">
                          <g className="pf-float">
                            <rect x="38" y="14" width="72" height="122" rx="12" fill="#09130c" stroke="#bef264" strokeWidth="2" />
                            <circle cx="74" cy="68" r="15" fill="#a3e635" fillOpacity="0.25" stroke="#bef264" strokeWidth="1.6" />
                            <polygon points="71,62 71,74 82,68" fill="#ecfccb" />
                            <text x="53" y="118" fill="#a3e635" fontSize="8.5" fontWeight="900" fontFamily="monospace">9:16 REEL</text>
                          </g>
                          <g className="pf-float-delay">
                            <rect x="130" y="26" width="175" height="98" rx="10" fill="#0b1710" stroke="#a3e635" strokeWidth="1.8" />
                            <rect x="144" y="42" width="65" height="18" rx="4" fill="#a3e635" fillOpacity="0.3" stroke="#a3e635" />
                            <rect x="215" y="42" width="75" height="18" rx="4" fill="#34d399" fillOpacity="0.3" stroke="#34d399" />
                            <rect x="144" y="68" width="146" height="14" rx="4" fill="#bef264" fillOpacity="0.2" />
                            <text x="155" y="106" fill="#ecfccb" fontSize="9.5" fontWeight="900" fontFamily="monospace">PROMO VIDEO EDITING</text>
                          </g>
                        </svg>
                      )}

                      {proj.category === "branding" && (
                        <svg viewBox="0 0 340 150" className="w-full h-full max-w-[310px]" fill="none">
                          <g className="pf-float">
                            <rect x="30" y="24" width="85" height="102" rx="10" fill="#09130c" stroke="#a3e635" strokeWidth="1.8" />
                            <circle cx="72" cy="58" r="16" fill="#a3e635" fillOpacity="0.2" stroke="#bef264" strokeWidth="1.8" />
                            <path d="M66 58 L70 62 L79 53" stroke="#ecfccb" strokeWidth="2" strokeLinecap="round" />
                            <text x="45" y="98" fill="#a3e635" fontSize="8.5" fontWeight="900" fontFamily="monospace">OPTIMIZED</text>
                          </g>
                          <g className="pf-pulse">
                            <rect x="130" y="24" width="85" height="102" rx="10" fill="#0c1c11" stroke="#bef264" strokeWidth="2" />
                            <rect x="142" y="38" width="61" height="44" rx="6" fill="#a3e635" fillOpacity="0.2" stroke="#a3e635" />
                            <text x="145" y="104" fill="#ecfccb" fontSize="8.5" fontWeight="900" fontFamily="monospace">BRAND POST</text>
                          </g>
                          <g className="pf-float-delay">
                            <rect x="230" y="24" width="80" height="102" rx="10" fill="#09130c" stroke="#34d399" strokeWidth="1.8" />
                            <text x="244" y="64" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">#TAGS &amp;</text>
                            <text x="244" y="80" fill="#a3e635" fontSize="9" fontWeight="900" fontFamily="monospace">CAPTIONS</text>
                          </g>
                        </svg>
                      )}
                    </div>

                    {/* Project Title, Sinhala & Description */}
                    <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-bold text-lime-400/90 mt-1 mb-3">
                      {proj.sinhala}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {proj.desc}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                      {proj.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                          <span className="text-lime-400 font-black">✓</span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Impact Badge & CTA Link */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-lime-400/35 bg-lime-400/10 px-3 py-1.5 text-xs font-extrabold text-lime-300">
                      <span>⚡</span>
                      <span>{proj.impact}</span>
                    </span>

                    <Link
                      href={`/contact?project=${proj.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white group-hover:text-lime-400 transition-colors"
                    >
                      <span>Build Similar Project</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}