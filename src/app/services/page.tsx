"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const proAutomationServices = [
  {
    title: "Online Booking Systems",
    sinhala: "ස්වයංක්‍රීය වේලාවන් වෙන්කිරීමේ පද්ධති",
    desc: "Allow your clients to book appointments, consultations, or services online 24/7 with automated reminders.",
    status: "COMING SOON",
  },
  {
    title: "Custom Business Dashboards",
    sinhala: "ව්‍යාපාරික දත්ත සහ කළමනාකරණ පැනල",
    desc: "Track sales, manage orders, and monitor your business metrics in real-time from one centralized dashboard.",
    status: "COMING SOON",
  },
  {
    title: "AI Customer Support Chatbots",
    sinhala: "පැය 24 පුරා ක්‍රියාත්මක AI සහායකයින්",
    desc: "Instant intelligent responses to customer inquiries on your website and social channels, trained on your business data.",
    status: "COMING SOON",
  },
  {
    title: "WhatsApp & Workflow Automation",
    sinhala: "WhatsApp සහ එදිනෙදා වැඩ ස්වයංක්‍රීයකරණය",
    desc: "Automate lead capture, instant WhatsApp replies, invoice generation, and repetitive daily tasks.",
    status: "COMING SOON",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Select Your Package",
    desc: "Choose from our 5 Small Business Starter Packages or request a custom bundle.",
  },
  {
    step: "02",
    title: "Share Your Details",
    desc: "Send us your business info, footage, or branding preferences via WhatsApp or Contact form.",
  },
  {
    step: "03",
    title: "Creation & Review",
    desc: "We craft your pages, reels, posts, or mini website with modern high-impact quality.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    desc: "Go live with a professional digital presence ready to attract customers.",
  },
];

export default function ServicesPage() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth">
      <Navbar />

      {/* Cyberpunk Vector Keyframe Animations */}
      <style>{`
        @keyframes vectorFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes vectorPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.96); }
          50% { opacity: 0.95; transform: scale(1.04); }
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -40; }
        }
        @keyframes scanLine {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.65; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes eqBar1 {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes eqBar2 {
          0%, 100% { transform: scaleY(0.9); }
          50% { transform: scaleY(0.3); }
        }
        .vec-float-slow { animation: vectorFloat 4.2s ease-in-out infinite; }
        .vec-float-delayed { animation: vectorFloat 4.8s ease-in-out 1.4s infinite; }
        .vec-pulse { animation: vectorPulse 3.2s ease-in-out infinite; }
        .vec-dash-flow { animation: dashFlow 2.2s linear infinite; }
        .cyber-scan { animation: scanLine 3.8s linear infinite; }
        .eq-bar-1 { transform-origin: center bottom; animation: eqBar1 1.2s ease-in-out infinite; }
        .eq-bar-2 { transform-origin: center bottom; animation: eqBar2 1.5s ease-in-out infinite; }
      `}</style>

      <main className="pt-28">
        {/* ===================================================== */}
        {/* 1. SPLIT INTERACTIVE SERVICES HERO BANNER             */}
        {/* ===================================================== */}
        <section className="relative py-12 lg:py-16 px-6 sm:px-10 lg:px-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[320px] bg-lime-400/12 blur-[140px] rounded-full" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[320px] bg-emerald-500/10 blur-[140px] rounded-full" />
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
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/35 bg-lime-400/10 px-4 py-1.5 mb-4 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                  METRIXA SERVICE TRACKS
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Two Powerful Tracks to{" "}
                <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
                  Scale Your Business
                </span>
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 mt-3">
                පහත ප්‍රධාන අංශ දෙකෙන් ඔබේ ව්‍යාපාරයට අවශ්‍ය සේවාව මත Click කර කෙලින්ම එම කොටස වෙත පිවිසෙන්න.
              </p>
            </div>

            {/* SPLIT HERO PORTAL CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
              {/* LEFT SPLIT CARD: SMALL BUSINESS STARTER PACKAGES */}
              <a
                href="#small-business"
                onClick={(e) => scrollToSection(e, "small-business")}
                className="group relative rounded-[32px] border-2 border-lime-400/40 bg-gradient-to-b from-[#0b150d]/95 via-[#070b08]/95 to-[#050706] p-7 sm:p-9 backdrop-blur-xl transition-all duration-300 hover:border-lime-400 shadow-[0_20px_60px_rgba(0,0,0,0.75)] hover:shadow-[0_20px_60px_rgba(163,230,53,0.22)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-lime-400/15 blur-3xl rounded-full group-hover:bg-lime-400/30 transition-all duration-500" />

                <div className="relative z-10 flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.5)]">
                    <span>★ 5 STARTER PACKAGES</span>
                  </span>
                  <span className="text-xs font-extrabold text-lime-400 group-hover:translate-x-1 transition-transform">
                    Starting from Rs. 250/= →
                  </span>
                </div>

                {/* Animated Vector Art Stage: Social Setup, Reels, Posts & Mini Web */}
                <div className="relative z-10 my-2 h-52 sm:h-56 w-full rounded-2xl border border-lime-400/20 bg-[#040705]/95 flex items-center justify-center overflow-hidden p-4">
                  <div className="cyber-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                  <svg viewBox="0 0 400 220" className="w-full h-full max-w-[360px]" fill="none">
                    <g opacity="0.18" stroke="#a3e635" strokeWidth="0.7">
                      <line x1="30" y1="35" x2="370" y2="35" />
                      <line x1="30" y1="90" x2="370" y2="90" />
                      <line x1="30" y1="145" x2="370" y2="145" />
                      <line x1="30" y1="195" x2="370" y2="195" />
                    </g>

                    {/* Connecting Energy Streams */}
                    <path
                      d="M110 110 L145 110 M265 85 L298 65 M265 140 L298 155"
                      stroke="#a3e635"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      className="vec-dash-flow"
                    />

                    {/* Center Mini Website + Social Hub */}
                    <g className="vec-float-slow">
                      <rect x="135" y="42" width="135" height="130" rx="12" fill="#09120b" stroke="#a3e635" strokeWidth="2" />
                      <line x1="135" y1="64" x2="270" y2="64" stroke="#a3e635" strokeWidth="1.5" strokeOpacity="0.5" />
                      <circle cx="150" cy="53" r="3" fill="#a3e635" />
                      <circle cx="161" cy="53" r="3" fill="#a3e635" fillOpacity="0.5" />
                      <circle cx="172" cy="53" r="3" fill="#a3e635" fillOpacity="0.25" />

                      <rect x="148" y="76" width="109" height="36" rx="6" fill="#a3e635" fillOpacity="0.15" stroke="#a3e635" strokeWidth="1.2" />
                      <text x="165" y="98" fill="#bef264" fontSize="10" fontWeight="900" fontFamily="monospace">
                        MINI WEBSITE
                      </text>
                      <rect x="148" y="122" width="50" height="34" rx="5" fill="#a3e635" fillOpacity="0.1" stroke="#a3e635" strokeOpacity="0.5" />
                      <rect x="207" y="122" width="50" height="34" rx="5" fill="#a3e635" fillOpacity="0.1" stroke="#a3e635" strokeOpacity="0.5" />
                    </g>

                    {/* Left Floating Reel Video Card */}
                    <g className="vec-float-delayed">
                      <rect x="36" y="52" width="68" height="112" rx="10" fill="#0c1910" stroke="#bef264" strokeWidth="2" />
                      <polygon points="64,95 64,117 82,106" fill="#a3e635" />
                      <text x="48" y="150" fill="#a3e635" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                        REEL EDIT
                      </text>
                    </g>

                    {/* Right Top: Social Setup */}
                    <g className="vec-float-delayed">
                      <rect x="295" y="38" width="76" height="50" rx="9" fill="#0c1910" stroke="#a3e635" strokeWidth="1.8" />
                      <circle cx="315" cy="58" r="8" fill="#a3e635" fillOpacity="0.3" stroke="#bef264" strokeWidth="1.5" />
                      <path d="M312 58 L314 61 L319 55" stroke="#ecfccb" strokeWidth="1.8" strokeLinecap="round" />
                      <text x="303" y="80" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">
                        FB • IG • TT
                      </text>
                    </g>

                    {/* Right Bottom: Post Bundles */}
                    <g className="vec-pulse">
                      <rect x="295" y="124" width="76" height="50" rx="9" fill="#a3e635" fillOpacity="0.14" stroke="#a3e635" strokeWidth="1.6" />
                      <text x="306" y="147" fill="#ecfccb" fontSize="10" fontWeight="900" fontFamily="monospace">
                        #BRAND
                      </text>
                      <text x="306" y="162" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">
                        POST DESIGN
                      </text>
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 mt-4">
                  <p className="text-xs sm:text-sm font-bold text-lime-400 mb-1">
                    ✨ පොඩි බිස්නස්කාරයන්ටම හදපු
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-lime-300 transition-colors mb-2.5">
                    Starter Packages
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    Social Media Setup, Video Reels, Post Bundles, Mini Websites සහ සම්පූර්ණ Digital Starter පැකේජය ඉතාම සාධාරණ මිලකට.
                  </p>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-lg border border-lime-400/30 bg-lime-400/10 px-2.5 py-1 text-[10px] font-bold text-lime-300">
                        Social Setup
                      </span>
                      <span className="rounded-lg border border-lime-400/30 bg-lime-400/10 px-2.5 py-1 text-[10px] font-bold text-lime-300">
                        Reels &amp; Posts
                      </span>
                      <span className="rounded-lg border border-lime-400/30 bg-lime-400/10 px-2.5 py-1 text-[10px] font-bold text-lime-300">
                        Mini Web
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-lime-400 group-hover:translate-y-0.5 transition-transform">
                      <span>පැකේජ 5 බලන්න</span>
                      <span className="text-base">↓</span>
                    </span>
                  </div>
                </div>
              </a>

              {/* RIGHT SPLIT CARD: PRO BUSINESS & AI AUTOMATION */}
              <a
                href="#pro-services"
                onClick={(e) => scrollToSection(e, "pro-services")}
                className="group relative rounded-[32px] border-2 border-emerald-400/30 bg-gradient-to-b from-[#081310]/95 via-[#060a09]/95 to-[#050706] p-7 sm:p-9 backdrop-blur-xl transition-all duration-300 hover:border-lime-400 shadow-[0_20px_60px_rgba(0,0,0,0.75)] hover:shadow-[0_20px_60px_rgba(163,230,53,0.22)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/15 blur-3xl rounded-full group-hover:bg-lime-400/25 transition-all duration-500" />

                <div className="relative z-10 flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/50 bg-lime-400/15 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-lime-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-ping" />
                    <span>NEXT-GEN AUTOMATION • ළඟදීම</span>
                  </span>
                  <span className="text-xs font-extrabold text-zinc-400 group-hover:text-lime-400 group-hover:translate-x-1 transition-all">
                    Explore Roadmap →
                  </span>
                </div>

                {/* Animated Vector Art Stage: AI Neural Network */}
                <div className="relative z-10 my-2 h-52 sm:h-56 w-full rounded-2xl border border-lime-400/20 bg-[#040706]/95 flex items-center justify-center overflow-hidden p-4">
                  <div className="cyber-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent" />

                  <svg viewBox="0 0 400 220" className="w-full h-full max-w-[360px]" fill="none">
                    <circle
                      cx="200"
                      cy="110"
                      r="82"
                      stroke="#a3e635"
                      strokeOpacity="0.18"
                      strokeWidth="1.2"
                      strokeDasharray="6 6"
                      className="vec-dash-flow"
                    />
                    <circle cx="200" cy="110" r="58" stroke="#34d399" strokeOpacity="0.28" strokeWidth="1.2" />

                    <path
                      d="M85 60 L165 95 M85 160 L165 125 M315 60 L235 95 M315 160 L235 125"
                      stroke="#a3e635"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      className="vec-dash-flow"
                    />

                    <g className="vec-float-slow">
                      <rect x="162" y="72" width="76" height="76" rx="18" fill="#0b1911" stroke="#a3e635" strokeWidth="2.2" />
                      <circle cx="200" cy="110" r="20" fill="#a3e635" fillOpacity="0.2" stroke="#bef264" strokeWidth="1.8" />
                      <text x="189" y="115" fill="#ecfccb" fontSize="15" fontWeight="900" fontFamily="monospace">
                        AI
                      </text>
                    </g>

                    <g className="vec-float-delayed">
                      <rect x="32" y="36" width="68" height="44" rx="10" fill="#0b1710" stroke="#a3e635" strokeWidth="1.6" />
                      <circle cx="52" cy="54" r="3" fill="#bef264" />
                      <circle cx="65" cy="54" r="3" fill="#bef264" />
                      <circle cx="78" cy="54" r="3" fill="#bef264" />
                      <text x="41" y="72" fill="#a3e635" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                        CHATBOT
                      </text>
                    </g>

                    <g className="vec-pulse">
                      <rect x="32" y="140" width="68" height="44" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.6" />
                      <path d="M52 156 L63 164 L82 150" stroke="#bef264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="38" y="176" fill="#a3e635" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                        WHATSAPP
                      </text>
                    </g>

                    <g className="vec-pulse">
                      <rect x="300" y="36" width="68" height="44" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.6" />
                      <rect x="318" y="46" width="32" height="16" rx="3" stroke="#bef264" strokeWidth="1.4" />
                      <text x="311" y="73" fill="#a3e635" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                        BOOKING
                      </text>
                    </g>

                    <g className="vec-float-delayed">
                      <rect x="300" y="140" width="68" height="44" rx="10" fill="#0b1710" stroke="#a3e635" strokeWidth="1.6" />
                      <line x1="318" y1="164" x2="318" y2="154" stroke="#bef264" strokeWidth="3" strokeLinecap="round" />
                      <line x1="332" y1="164" x2="332" y2="148" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" />
                      <line x1="346" y1="164" x2="346" y2="151" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
                      <text x="306" y="177" fill="#a3e635" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                        DASHBOARD
                      </text>
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 mt-4">
                  <p className="text-xs sm:text-sm font-bold text-lime-400 mb-1">
                    ⚡ ස්වයංක්‍රීය ව්‍යාපාරික පද්ධති
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-lime-300 transition-colors mb-2.5">
                    Pro Business &amp; AI Automation
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    ඔබේ කාලය ඉතිරි කරන සහ ව්‍යාපාරික කටයුතු පැය 24 පුරා ස්වයංක්‍රීයව මෙහෙයවන Booking Systems, Dashboards, AI Chatbots සහ WhatsApp Automation.
                  </p>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-lg border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold text-zinc-300">
                        AI Chatbots
                      </span>
                      <span className="rounded-lg border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold text-zinc-300">
                        WhatsApp Auto
                      </span>
                      <span className="rounded-lg border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold text-zinc-300">
                        Dashboards
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-lime-400 group-hover:translate-y-0.5 transition-transform">
                      <span>විස්තර බලන්න</span>
                      <span className="text-base">↓</span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 2. පොඩි බිස්නස්කාරයන්ටම හදපු STARTER PACKAGES (5 PACKS) */}
        {/* ===================================================== */}
        <section id="small-business" className="scroll-mt-28 relative py-20 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          {/* Background Center Glow */}
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-lime-400/[0.07] blur-[160px] rounded-full" />

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/35 bg-lime-400/10 px-3.5 py-1 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                    TRANSPARENT &amp; AFFORDABLE PRICING
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  පොඩි බිස්නස්කාරයන්ටම හදපු{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
                    Starter Packages
                  </span>
                </h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-400 max-w-md">
                ඔබේ ව්‍යාපාරය ආරම්භ කිරීමට සහ සමාජ මාධ්‍ය හා අන්තර්ජාලය තුළ වේගයෙන් වර්ධනය කිරීමට සැලසුම් කළ විශේෂ පැකේජ 5.
              </p>
            </div>

            {/* ================================================= */}
            {/* PACKAGES 1 TO 4 (2x2 BENTO GRID)                  */}
            {/* ================================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8">
              
              {/* ----------------------------------------------- */}
              {/* PACKAGE 01: SOCIAL MEDIA SETUP & OPTIMIZATION   */}
              {/* ----------------------------------------------- */}
              <div className="group relative rounded-[30px] border border-lime-400/25 bg-zinc-950/85 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-lime-400 hover:shadow-[0_20px_50px_rgba(163,230,53,0.16)] flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-lime-400/10 blur-3xl rounded-full group-hover:bg-lime-400/25 transition-all" />

                <div>
                  {/* Top Bar: Number, Badge & Price */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/15 font-mono text-xs font-black text-lime-400">
                        01
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-zinc-300">
                        BRAND PRESENCE
                      </span>
                    </div>

                    <div className="rounded-2xl border border-lime-400/50 bg-lime-400/15 px-4 py-1.5 text-right shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-lime-300 block leading-none">
                        FB Page Setup
                      </span>
                      <span className="text-xl font-black text-white">
                        Rs. 1,000<span className="text-lime-400">/=</span>
                      </span>
                    </div>
                  </div>

                  {/* Animated Vector Art 01: Social Media Setup Hub */}
                  <div className="relative h-40 w-full rounded-2xl border border-lime-400/20 bg-[#040705] mb-6 flex items-center justify-center overflow-hidden p-3">
                    <div className="cyber-scan pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />
                    <svg viewBox="0 0 360 140" className="w-full h-full max-w-[330px]" fill="none">
                      {/* Dashed Connectors */}
                      <path
                        d="M95 70 L135 70 M225 55 L265 40 M225 85 L265 100"
                        stroke="#a3e635"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        className="vec-dash-flow"
                      />
                      {/* Center FB Business Profile Card */}
                      <g className="vec-float-slow">
                        <rect x="125" y="22" width="110" height="96" rx="12" fill="#09130c" stroke="#a3e635" strokeWidth="1.8" />
                        <rect x="133" y="30" width="94" height="26" rx="6" fill="#a3e635" fillOpacity="0.2" stroke="#a3e635" strokeWidth="1" />
                        <circle cx="180" cy="56" r="14" fill="#070d09" stroke="#bef264" strokeWidth="2" />
                        <path d="M175 56 L178 60 L186 52" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="152" y1="80" x2="208" y2="80" stroke="#bef264" strokeWidth="2.5" strokeLinecap="round" />
                        <rect x="155" y="92" width="50" height="14" rx="7" fill="#a3e635" />
                        <text x="169" y="102" fill="#050706" fontSize="7.5" fontWeight="900" fontFamily="monospace">
                          CTA BTN
                        </text>
                      </g>
                      {/* Left Badge: Profile & Bio */}
                      <g className="vec-pulse">
                        <rect x="24" y="48" width="70" height="44" rx="9" fill="#0b1710" stroke="#a3e635" strokeWidth="1.5" />
                        <text x="36" y="67" fill="#ecfccb" fontSize="9" fontWeight="900" fontFamily="monospace">
                          FB PAGE
                        </text>
                        <text x="34" y="80" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                          OPTIMIZED
                        </text>
                      </g>
                      {/* Right Top Add-on: Instagram */}
                      <g className="vec-float-delayed">
                        <rect x="262" y="20" width="76" height="40" rx="8" fill="#0b1710" stroke="#bef264" strokeWidth="1.5" />
                        <text x="272" y="38" fill="#ffffff" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                          Instagram
                        </text>
                        <text x="275" y="51" fill="#a3e635" fontSize="8.5" fontWeight="900" fontFamily="monospace">
                          +Rs. 500
                        </text>
                      </g>
                      {/* Right Bottom Add-on: TikTok */}
                      <g className="vec-float-delayed">
                        <rect x="262" y="80" width="76" height="40" rx="8" fill="#0b1710" stroke="#34d399" strokeWidth="1.5" />
                        <text x="280" y="98" fill="#ffffff" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                          TikTok
                        </text>
                        <text x="275" y="111" fill="#a3e635" fontSize="8.5" fontWeight="900" fontFamily="monospace">
                          +Rs. 500
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Title & Details */}
                  <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors mb-2">
                    Social Media Setup &amp; Optimization
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-5">
                    ඔබේ ව්‍යාපාරික සමාජ මාධ්‍ය පිටු වෘත්තීයමය මට්ටමින් නිර්මාණය කර පාරිභෝගිකයන් ආකර්ෂණය වන ලෙස සකස් කිරීම.
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2.5 border-t border-white/10 pt-4 mb-6">
                    <div className="flex items-start gap-2.5 text-sm text-zinc-200">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>
                        <strong>Facebook Page Setup &amp; Optimization</strong> (Rs. 1,000/=)
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>Profile Picture, Cover, Bio, About &amp; CTA Button Setup</span>
                    </div>

                    {/* Platform Add-on Pills */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-zinc-400">Add-on Platforms:</span>
                      <span className="rounded-xl border border-lime-400/40 bg-lime-400/10 px-3 py-1 text-xs font-extrabold text-lime-300">
                        + Instagram (Rs. 500)
                      </span>
                      <span className="rounded-xl border border-lime-400/40 bg-lime-400/10 px-3 py-1 text-xs font-extrabold text-lime-300">
                        + TikTok (Rs. 500)
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact?package=social-media-setup"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 hover:bg-lime-400 hover:text-zinc-950 py-3.5 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-lime-400 transition-all"
                >
                  <span>Order Social Setup</span>
                  <span>→</span>
                </Link>
              </div>

              {/* ----------------------------------------------- */}
              {/* PACKAGE 02: VIDEO CONTENT CREATION              */}
              {/* ----------------------------------------------- */}
              <div className="group relative rounded-[30px] border border-lime-400/25 bg-zinc-950/85 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-lime-400 hover:shadow-[0_20px_50px_rgba(163,230,53,0.16)] flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-lime-400/10 blur-3xl rounded-full group-hover:bg-lime-400/25 transition-all" />

                <div>
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/15 font-mono text-xs font-black text-lime-400">
                        02
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-zinc-300">
                        REELS &amp; PROMO VIDEOS
                      </span>
                    </div>

                    <div className="rounded-2xl border border-lime-400/50 bg-lime-400/15 px-4 py-1.5 text-right shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-lime-300 block leading-none">
                        Starts From
                      </span>
                      <span className="text-xl font-black text-white">
                        Rs. 1,000<span className="text-lime-400">/=</span>
                      </span>
                    </div>
                  </div>

                  {/* Animated Vector Art 02: Video Editing Timeline & 9:16 Reel */}
                  <div className="relative h-40 w-full rounded-2xl border border-lime-400/20 bg-[#040705] mb-6 flex items-center justify-center overflow-hidden p-3">
                    <div className="cyber-scan pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />
                    <svg viewBox="0 0 360 140" className="w-full h-full max-w-[330px]" fill="none">
                      {/* Left 9:16 Vertical Reel Phone Frame */}
                      <g className="vec-float-slow">
                        <rect x="35" y="14" width="66" height="112" rx="10" fill="#09130c" stroke="#a3e635" strokeWidth="2" />
                        <circle cx="68" cy="62" r="14" fill="#a3e635" fillOpacity="0.2" stroke="#bef264" strokeWidth="1.6" />
                        <polygon points="65,56 65,68 75,62" fill="#ecfccb" />
                        <rect x="47" y="92" width="42" height="5" rx="2.5" fill="#a3e635" />
                        <rect x="47" y="102" width="28" height="4" rx="2" fill="#a3e635" fillOpacity="0.5" />
                      </g>

                      {/* Right Video Editing Timeline & Audio Waveforms */}
                      <g className="vec-float-delayed">
                        <rect x="122" y="22" width="212" height="96" rx="10" fill="#09130c" stroke="#a3e635" strokeWidth="1.6" />
                        {/* Track 1: Video Clips */}
                        <rect x="134" y="36" width="55" height="16" rx="4" fill="#a3e635" fillOpacity="0.3" stroke="#a3e635" />
                        <rect x="195" y="36" width="70" height="16" rx="4" fill="#34d399" fillOpacity="0.25" stroke="#34d399" />
                        <rect x="271" y="36" width="50" height="16" rx="4" fill="#a3e635" fillOpacity="0.3" stroke="#a3e635" />

                        {/* Track 2: Animated Audio Equalizer Bars */}
                        <g fill="#bef264">
                          <rect x="142" y="64" width="5" height="22" rx="2" className="eq-bar-1" />
                          <rect x="154" y="60" width="5" height="26" rx="2" className="eq-bar-2" />
                          <rect x="166" y="66" width="5" height="20" rx="2" className="eq-bar-1" />
                          <rect x="178" y="58" width="5" height="28" rx="2" className="eq-bar-2" />
                          <rect x="190" y="64" width="5" height="22" rx="2" className="eq-bar-1" />
                          <rect x="202" y="60" width="5" height="26" rx="2" className="eq-bar-2" />
                          <rect x="214" y="65" width="5" height="21" rx="2" className="eq-bar-1" />
                          <rect x="226" y="58" width="5" height="28" rx="2" className="eq-bar-2" />
                        </g>

                        {/* Duration Badges */}
                        <rect x="248" y="64" width="34" height="20" rx="5" fill="#a3e635" />
                        <text x="255" y="77" fill="#050706" fontSize="9" fontWeight="900" fontFamily="monospace">
                          15s
                        </text>
                        <rect x="288" y="64" width="34" height="20" rx="5" fill="#0b1710" stroke="#a3e635" />
                        <text x="295" y="77" fill="#a3e635" fontSize="9" fontWeight="900" fontFamily="monospace">
                          30s
                        </text>

                        {/* Playhead Scrubber Line */}
                        <line x1="210" y1="22" x2="210" y2="118" stroke="#ecfccb" strokeWidth="2" />
                        <polygon points="205,22 215,22 210,29" fill="#ecfccb" />
                      </g>
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors mb-2">
                    Video Content Creation
                  </h3>

                  {/* Two Sub-Tiers from Note */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4 mb-6">
                    {/* Tier A: Short Reel Editing */}
                    <div className="rounded-2xl border border-lime-400/30 bg-lime-400/[0.05] p-4">
                      <div className="text-sm font-black text-lime-300 mb-1">
                        🎬 Short Reel Editing
                      </div>
                      <p className="text-[11px] text-zinc-400 mb-3 leading-snug">
                        (Customer ලබා දෙන video footage භාවිතයෙන්)
                      </p>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between rounded-lg bg-black/50 px-2.5 py-1.5 border border-white/5">
                          <span className="font-bold text-zinc-300">15 Seconds</span>
                          <span className="font-black text-lime-400">Rs. 1,000/=</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-black/50 px-2.5 py-1.5 border border-white/5">
                          <span className="font-bold text-zinc-300">30 Seconds</span>
                          <span className="font-black text-lime-400">Rs. 1,500/=</span>
                        </div>
                      </div>
                    </div>

                    {/* Tier B: Promotional Video Editing */}
                    <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.05] p-4">
                      <div className="text-sm font-black text-emerald-300 mb-1">
                        🚀 Promotional Video
                      </div>
                      <p className="text-[11px] text-zinc-400 mb-3 leading-snug">
                        (Products &amp; Services සඳහා Promotional videos)
                      </p>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between rounded-lg bg-black/50 px-2.5 py-1.5 border border-white/5">
                          <span className="font-bold text-zinc-300">15 Seconds</span>
                          <span className="font-black text-lime-400">Rs. 2,000/=</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-black/50 px-2.5 py-1.5 border border-white/5">
                          <span className="font-bold text-zinc-300">30 Seconds</span>
                          <span className="font-black text-lime-400">Rs. 3,000/=</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact?package=video-content"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 hover:bg-lime-400 hover:text-zinc-950 py-3.5 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-lime-400 transition-all"
                >
                  <span>Order Video Editing</span>
                  <span>→</span>
                </Link>
              </div>

              {/* ----------------------------------------------- */}
              {/* PACKAGE 03: SOCIAL MEDIA CONTENT BUNDLES        */}
              {/* ----------------------------------------------- */}
              <div className="group relative rounded-[30px] border border-lime-400/25 bg-zinc-950/85 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-lime-400 hover:shadow-[0_20px_50px_rgba(163,230,53,0.16)] flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-lime-400/10 blur-3xl rounded-full group-hover:bg-lime-400/25 transition-all" />

                <div>
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/15 font-mono text-xs font-black text-lime-400">
                        03
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-zinc-300">
                        POST DESIGN &amp; COPY
                      </span>
                    </div>

                    <div className="rounded-2xl border border-lime-400/50 bg-lime-400/15 px-4 py-1.5 text-right shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-lime-300 block leading-none">
                        Per Post Design
                      </span>
                      <span className="text-xl font-black text-white">
                        Rs. 250<span className="text-lime-400">/=</span>
                      </span>
                    </div>
                  </div>

                  {/* Animated Vector Art 03: Social Post Canvas + Brand Palette + #Tags */}
                  <div className="relative h-40 w-full rounded-2xl border border-lime-400/20 bg-[#040705] mb-6 flex items-center justify-center overflow-hidden p-3">
                    <div className="cyber-scan pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />
                    <svg viewBox="0 0 360 140" className="w-full h-full max-w-[330px]" fill="none">
                      {/* Left Brand Color Swatches */}
                      <g className="vec-float-delayed">
                        <rect x="28" y="26" width="64" height="88" rx="10" fill="#09130c" stroke="#a3e635" strokeWidth="1.6" />
                        <circle cx="60" cy="48" r="10" fill="#a3e635" />
                        <circle cx="60" cy="74" r="10" fill="#34d399" />
                        <circle cx="60" cy="98" r="7" fill="#ecfccb" />
                      </g>

                      {/* Center Square Social Post Canvas */}
                      <g className="vec-float-slow">
                        <rect x="118" y="16" width="112" height="108" rx="12" fill="#0b1710" stroke="#bef264" strokeWidth="2" />
                        <rect x="130" y="28" width="88" height="56" rx="8" fill="#a3e635" fillOpacity="0.18" stroke="#a3e635" strokeWidth="1.2" />
                        <polygon points="158,64 172,46 188,64" fill="#bef264" fillOpacity="0.6" />
                        <circle cx="192" cy="42" r="5" fill="#ecfccb" />
                        <line x1="130" y1="96" x2="195" y2="96" stroke="#a3e635" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="130" y1="108" x2="175" y2="108" stroke="#a3e635" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                      </g>

                      {/* Right Floating Caption & #Hashtags Card */}
                      <g className="vec-pulse">
                        <rect x="248" y="32" width="86" height="76" rx="10" fill="#09130c" stroke="#a3e635" strokeWidth="1.6" />
                        <text x="260" y="54" fill="#ecfccb" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                          + CAPTION
                        </text>
                        <rect x="258" y="64" width="66" height="16" rx="4" fill="#a3e635" fillOpacity="0.2" />
                        <text x="264" y="75" fill="#a3e635" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                          #Hashtags
                        </text>
                        <text x="260" y="96" fill="#bef264" fontSize="8" fontWeight="bold" fontFamily="monospace">
                          BRAND STYLE
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Title & Details */}
                  <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors mb-2">
                    Social Media Content Bundles
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-5">
                    ඔබේ ව්‍යාපාරයේ Brand Colors සහ Style එකටම ගැලපෙන ආකර්ෂණීය Social Media Post නිර්මාණය.
                  </p>

                  <div className="space-y-2.5 border-t border-white/10 pt-4 mb-6">
                    <div className="flex items-start gap-2.5 text-sm text-zinc-200">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>
                        <strong>Social Media Post Design</strong> + Engaging Caption &amp; <code className="text-lime-400">#tags</code>
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>Consistent Brand Colors &amp; Visual Style</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>High-Resolution Ready-to-Publish Graphics</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact?package=content-bundles"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 hover:bg-lime-400 hover:text-zinc-950 py-3.5 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-lime-400 transition-all"
                >
                  <span>Order Content Bundle</span>
                  <span>→</span>
                </Link>
              </div>

              {/* ----------------------------------------------- */}
              {/* PACKAGE 04: MINI WEBSITE CREATION               */}
              {/* ----------------------------------------------- */}
              <div className="group relative rounded-[30px] border border-lime-400/25 bg-zinc-950/85 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-lime-400 hover:shadow-[0_20px_50px_rgba(163,230,53,0.16)] flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-lime-400/10 blur-3xl rounded-full group-hover:bg-lime-400/25 transition-all" />

                <div>
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/15 font-mono text-xs font-black text-lime-400">
                        04
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-zinc-300">
                        SINGLE PAGE WEB
                      </span>
                    </div>

                    <div className="rounded-2xl border border-lime-400/50 bg-lime-400/15 px-4 py-1.5 text-right shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-lime-300 block leading-none">
                        Free Domain &amp; Hosting
                      </span>
                      <span className="text-xl font-black text-white">
                        Rs. 5,000<span className="text-lime-400">/=</span>
                      </span>
                    </div>
                  </div>

                  {/* Animated Vector Art 04: Mini Website + WhatsApp + Google Maps Pin */}
                  <div className="relative h-40 w-full rounded-2xl border border-lime-400/20 bg-[#040705] mb-6 flex items-center justify-center overflow-hidden p-3">
                    <div className="cyber-scan pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />
                    <svg viewBox="0 0 360 140" className="w-full h-full max-w-[330px]" fill="none">
                      {/* Center Single-Page Browser Window */}
                      <g className="vec-float-slow">
                        <rect x="95" y="14" width="170" height="112" rx="10" fill="#09130c" stroke="#a3e635" strokeWidth="2" />
                        <line x1="95" y1="32" x2="265" y2="32" stroke="#a3e635" strokeOpacity="0.5" />
                        <circle cx="108" cy="23" r="2.5" fill="#a3e635" />
                        <circle cx="117" cy="23" r="2.5" fill="#a3e635" fillOpacity="0.5" />
                        <rect x="130" y="19" width="90" height="8" rx="4" fill="#a3e635" fillOpacity="0.15" />

                        {/* Sections inside Single Page */}
                        <rect x="108" y="42" width="144" height="24" rx="5" fill="#a3e635" fillOpacity="0.18" stroke="#a3e635" strokeWidth="1" />
                        <text x="142" y="57" fill="#ecfccb" fontSize="8.5" fontWeight="900" fontFamily="monospace">
                          BUSINESS INTRO
                        </text>
                        <rect x="108" y="73" width="68" height="20" rx="4" fill="#a3e635" fillOpacity="0.1" stroke="#a3e635" strokeOpacity="0.5" />
                        <rect x="184" y="73" width="68" height="20" rx="4" fill="#a3e635" fillOpacity="0.1" stroke="#a3e635" strokeOpacity="0.5" />
                        <rect x="108" y="100" width="144" height="16" rx="4" fill="#34d399" fillOpacity="0.2" />
                        <text x="138" y="111" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                          FREE DOMAIN &amp; HOSTING
                        </text>
                      </g>

                      {/* Left Floating Google Maps Location Pin */}
                      <g className="vec-float-delayed">
                        <rect x="20" y="40" width="62" height="62" rx="12" fill="#0b1710" stroke="#bef264" strokeWidth="1.6" />
                        <path
                          d="M51 52 C43 52 37 58 37 66 C37 77 51 90 51 90 C51 90 65 77 65 66 C65 58 59 52 51 52 Z"
                          fill="#a3e635"
                          fillOpacity="0.25"
                          stroke="#bef264"
                          strokeWidth="1.8"
                        />
                        <circle cx="51" cy="65" r="4" fill="#ecfccb" />
                      </g>

                      {/* Right Floating WhatsApp Contact Badge */}
                      <g className="vec-pulse">
                        <rect x="278" y="40" width="62" height="62" rx="12" fill="#0b1710" stroke="#34d399" strokeWidth="1.6" />
                        <circle cx="309" cy="64" r="13" fill="#a3e635" fillOpacity="0.25" stroke="#a3e635" strokeWidth="1.6" />
                        <path d="M303 64 L308 69 L316 59" stroke="#ecfccb" strokeWidth="2" strokeLinecap="round" />
                        <text x="285" y="92" fill="#a3e635" fontSize="7.5" fontWeight="900" fontFamily="monospace">
                          WHATSAPP
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Title & Details */}
                  <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors mb-2">
                    Mini Website Creation
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-5">
                    ඔබේ ව්‍යාපාරයේ සියලුම විස්තර, නිෂ්පාදන, WhatsApp සහ Google Maps ඇතුළත් නවීන Single-Page වෙබ් අඩවියක්.
                  </p>

                  {/* 2-Column Compact Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-white/10 pt-4 mb-6 text-xs sm:text-sm text-zinc-200">
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>Single Page Website</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>Business Intro Section</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>Product / Service Section</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>Contact Details &amp; Links</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>WhatsApp Contact Button</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>Google Maps Location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400 font-black">✓</span>
                      <span>Mobile Responsive Design</span>
                    </div>
                    <div className="flex items-center gap-2 text-lime-300 font-bold">
                      <span className="text-lime-400 font-black">★</span>
                      <span>Free Domain &amp; Free Hosting</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact?package=mini-website"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 hover:bg-lime-400 hover:text-zinc-950 py-3.5 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-lime-400 transition-all"
                >
                  <span>Order Mini Website</span>
                  <span>→</span>
                </Link>
              </div>

            </div>

            {/* ================================================= */}
            {/* PACKAGE 05: SMALL BUSINESS DIGITAL STARTER (HERO) */}
            {/* ================================================= */}
            <div className="group relative rounded-[34px] border-2 border-lime-400 bg-gradient-to-br from-[#0e1d12] via-[#070d09] to-[#050706] p-8 sm:p-10 lg:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_55px_rgba(163,230,53,0.22)] overflow-hidden">
              {/* Top Neon Accent Strip */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent" />
              <div className="pointer-events-none absolute -top-28 right-10 w-80 h-80 bg-lime-400/20 blur-[120px] rounded-full" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left 7 Columns: Content & All-in-One Checklist */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 font-mono text-sm font-black text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.6)]">
                      05
                    </span>
                    <span className="rounded-full bg-lime-400/20 border border-lime-400/50 px-4 py-1 text-xs font-black uppercase tracking-widest text-lime-300">
                      ★ BEST VALUE ALL-IN-ONE BUNDLE
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                    Small Business{" "}
                    <span className="text-lime-400 drop-shadow-[0_0_25px_rgba(163,230,53,0.45)]">
                      Digital Starter
                    </span>
                  </h3>

                  <p className="text-base sm:text-lg text-zinc-300 mb-6 max-w-2xl">
                    A complete digital starting point for your business — වෙබ් අඩවිය, ෆේස්බුක් පිටුව, Branding Posts සහ Business Reel එක යන සියල්ලම එකම පැකේජයකින්!
                  </p>

                  {/* 4 Core Pillars Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    <div className="rounded-2xl border border-lime-400/35 bg-black/50 p-4 flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/15 border border-lime-400/40 text-lime-400 font-black">
                        🌐
                      </span>
                      <div>
                        <div className="text-sm font-black text-white">Mini Business Website</div>
                        <div className="text-xs text-zinc-400">Mobile-friendly + Free Hosting</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-lime-400/35 bg-black/50 p-4 flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/15 border border-lime-400/40 text-lime-400 font-black">
                        📱
                      </span>
                      <div>
                        <div className="text-sm font-black text-white">FB Page Setup &amp; Optimization</div>
                        <div className="text-xs text-zinc-400">Profile, Cover, Bio &amp; CTA Setup</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-lime-400/35 bg-black/50 p-4 flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/15 border border-lime-400/40 text-lime-400 font-black">
                        🎨
                      </span>
                      <div>
                        <div className="text-sm font-black text-white">4 Branding Social Posts</div>
                        <div className="text-xs text-zinc-400">Consistent Brand Colors + Captions</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-lime-400/35 bg-black/50 p-4 flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/15 border border-lime-400/40 text-lime-400 font-black">
                        🎬
                      </span>
                      <div>
                        <div className="text-sm font-black text-white">1 Promotional Business Reel</div>
                        <div className="text-xs text-zinc-400">High-impact short video edit</div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Primary CTA Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
                    <div className="rounded-2xl border-2 border-lime-400 bg-lime-400/15 px-6 py-3 shadow-[0_0_30px_rgba(163,230,53,0.25)]">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-lime-300 block">
                        COMPLETE STARTER BUNDLE
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        Rs. 7,500<span className="text-lime-400">/=</span>
                      </span>
                    </div>

                    <Link
                      href="/contact?package=digital-starter-7500"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-9 py-4.5 text-sm font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[0_0_35px_rgba(163,230,53,0.6)] hover:shadow-[0_0_50px_rgba(163,230,53,0.95)] hover:-translate-y-0.5"
                    >
                      <span>Claim Digital Starter Pack</span>
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>

                {/* Right 5 Columns: Animated All-in-One Launchpad Vector Art */}
                <div className="lg:col-span-5">
                  <div className="relative h-72 sm:h-80 w-full rounded-3xl border border-lime-400/35 bg-[#040705]/95 flex items-center justify-center overflow-hidden p-4 shadow-inner">
                    <div className="cyber-scan pointer-events-none absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-lime-400/15 to-transparent" />

                    <svg viewBox="0 0 360 280" className="w-full h-full max-w-[340px]" fill="none">
                      {/* Glowing Outer Orbit Ring */}
                      <circle
                        cx="180"
                        cy="140"
                        r="105"
                        stroke="#a3e635"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                        className="vec-dash-flow"
                      />
                      <circle cx="180" cy="140" r="72" stroke="#bef264" strokeOpacity="0.3" strokeWidth="1.2" />

                      {/* Connecting Energy Beams */}
                      <path
                        d="M90 70 L145 115 M270 70 L215 115 M90 210 L145 165 M270 210 L215 165"
                        stroke="#a3e635"
                        strokeWidth="2.2"
                        strokeDasharray="5 5"
                        className="vec-dash-flow"
                      />

                      {/* Center Core: Digital Starter Hub */}
                      <g className="vec-float-slow">
                        <polygon
                          points="180,88 226,114 226,166 180,192 134,166 134,114"
                          fill="#0c1c11"
                          stroke="#a3e635"
                          strokeWidth="2.5"
                        />
                        <text x="148" y="136" fill="#ecfccb" fontSize="12" fontWeight="900" fontFamily="monospace">
                          STARTER
                        </text>
                        <text x="152" y="153" fill="#a3e635" fontSize="11" fontWeight="900" fontFamily="monospace">
                          Rs.7500
                        </text>
                      </g>

                      {/* Satellite 1 (Top Left): Mini Website */}
                      <g className="vec-float-delayed">
                        <rect x="24" y="32" width="88" height="46" rx="10" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                        <text x="36" y="53" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                          MINI WEB
                        </text>
                        <text x="36" y="67" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">
                          + FREE HOST
                        </text>
                      </g>

                      {/* Satellite 2 (Top Right): FB Setup */}
                      <g className="vec-pulse">
                        <rect x="248" y="32" width="88" height="46" rx="10" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                        <text x="262" y="53" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                          FB SETUP
                        </text>
                        <text x="262" y="67" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">
                          OPTIMIZED
                        </text>
                      </g>

                      {/* Satellite 3 (Bottom Left): 4 Branding Posts */}
                      <g className="vec-pulse">
                        <rect x="24" y="202" width="88" height="46" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                        <text x="36" y="223" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                          4 POSTS
                        </text>
                        <text x="36" y="237" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">
                          BRAND DESIGN
                        </text>
                      </g>

                      {/* Satellite 4 (Bottom Right): Business Reel */}
                      <g className="vec-float-delayed">
                        <rect x="248" y="202" width="88" height="46" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                        <text x="258" y="223" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                          BIZ REEL
                        </text>
                        <text x="258" y="237" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">
                          VIDEO EDIT
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* 3. PRO BUSINESS & AI AUTOMATION (COMING SOON)         */}
        {/* ===================================================== */}
        <section id="pro-services" className="scroll-mt-28 relative py-20 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-lime-400 mb-4">
                NEXT-GEN SOLUTIONS • ළඟදීම
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Pro Business &amp; <span className="text-lime-400">AI Automation</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">
                Smart systems designed to save time, automate customer interactions, and scale your operations effortlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proAutomationServices.map((srv) => (
                <div
                  key={srv.title}
                  className="group relative rounded-3xl border border-lime-400/20 bg-zinc-950/75 p-7 sm:p-8 backdrop-blur-xl hover:border-lime-400/60 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-lime-400">
                      ✨ {srv.sinhala}
                    </span>
                    <span className="rounded-full border border-lime-400/40 bg-lime-400/15 px-3 py-0.5 text-[10px] font-black tracking-wider text-lime-400">
                      {srv.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-lime-400 transition-colors mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 4. HOW WE WORK (4-STEP PROCESS)                       */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                SIMPLE &amp; TRANSPARENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                How We Bring Your <span className="text-lime-400">Vision to Life</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 hover:border-lime-400/50 transition-all"
                >
                  <div className="font-mono text-3xl font-black text-lime-400 mb-3">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {p.desc}
                  </p>
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