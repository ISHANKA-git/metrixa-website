"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

type PriceFilter = "all" | "free" | "paid";

interface Category {
  id: string;
  name: string;
  sinhala: string;
  icon: string;
}

const categories: Category[] = [
  { id: "all", name: "All Tracks", sinhala: "සියලුම අංශ", icon: "⚡" },
  { id: "web-dev", name: "Web & Tech", sinhala: "වෙබ් නිර්මාණ", icon: "💻" },
  { id: "design", name: "Creative Design", sinhala: "ග්‍රැෆික් සහ UI", icon: "🎨" },
  { id: "video", name: "Video & Reels", sinhala: "වීඩියෝ සංස්කරණය", icon: "🎬" },
  { id: "ai-auto", name: "AI & Automation", sinhala: "AI තාක්ෂණය", icon: "🤖" },
  { id: "business", name: "Digital Business", sinhala: "ඩිජිටල් ව්‍යාපාර", icon: "🚀" },
];

const upcomingPlaceholders = [
  {
    slot: "SLOT #01",
    tier: "FREE",
    tierLabel: "Free Starter Guide",
    category: "Community Track",
  },
  {
    slot: "SLOT #02",
    tier: "PAID",
    tierLabel: "Pro Masterclass",
    category: "Career Track",
  },
  {
    slot: "SLOT #03",
    tier: "FREE / PAID",
    tierLabel: "Practical Workshop",
    category: "Hands-On Lab",
  },
];

export default function CoursesPage() {
  const [selectedPrice, setSelectedPrice] = useState<PriceFilter>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeCategoryObj =
    categories.find((c) => c.id === selectedCategory) || categories[0];

  return (
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth">
      <Navbar />

      {/* Custom Keyframes for Cyberpunk Academy Vector Art */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; transform: scale(0.97); }
          50% { opacity: 0.9; transform: scale(1.03); }
        }
        @keyframes dashStream {
          to { stroke-dashoffset: -40; }
        }
        @keyframes scanBeam {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .acad-float { animation: floatSlow 4.5s ease-in-out infinite; }
        .acad-float-delay { animation: floatSlow 5s ease-in-out 1.5s infinite; }
        .acad-pulse { animation: pulseGlow 3.5s ease-in-out infinite; }
        .acad-dash { animation: dashStream 2.5s linear infinite; }
        .acad-scan { animation: scanBeam 4s linear infinite; }
      `}</style>

      <main className="pt-28">
        {/* ===================================================== */}
        {/* 1. ACADEMY HERO BANNER WITH ANIMATED VECTOR ART       */}
        {/* ===================================================== */}
        <section className="relative py-12 lg:py-16 px-6 sm:px-10 lg:px-12 overflow-hidden">
          {/* Background Ambient Glows & Cyber Grid */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/3 w-[550px] h-[340px] bg-lime-400/12 blur-[150px] rounded-full" />
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
              {/* Left 7 Cols: Hero Copy */}
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                    METRIXA SKILL ACADEMY
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
                  Learn Practical Skills.{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
                    Build Real Projects.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mb-8">
                  නවීන ඩිජිටල් ලෝකය ජයගැනීමට අවශ්‍ය Creative Design, Web Development, Video Editing සහ AI තාක්ෂණය මුල සිට සරලව ඉගෙන ගැනීමට සැකසූ{" "}
                  <span className="text-lime-400 font-semibold">Free</span> සහ{" "}
                  <span className="text-white font-semibold">Paid Pro</span> පාඨමාලා එකතුව.
                </p>

                {/* Quick Highlights Strip */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-2xl border border-lime-400/30 bg-zinc-950/80 px-4 py-2.5 flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
                    <span className="text-xs font-bold text-zinc-200">
                      Free Community Courses
                    </span>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/30 bg-zinc-950/80 px-4 py-2.5 flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-zinc-200">
                      Paid Pro Masterclasses
                    </span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-2.5 flex items-center gap-2.5">
                    <span className="text-lime-400 text-xs">★</span>
                    <span className="text-xs font-bold text-zinc-300">
                      Sinhala &amp; English Medium
                    </span>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Animated Cyberpunk Academy Vector Art */}
              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-72 w-full rounded-[28px] border border-lime-400/30 bg-gradient-to-b from-[#0b150d]/90 to-[#050706] p-4 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(163,230,53,0.12)]">
                  <div className="acad-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                  <svg viewBox="0 0 380 240" className="w-full h-full max-w-[350px]" fill="none">
                    {/* Orbit Rings */}
                    <circle
                      cx="190"
                      cy="120"
                      r="92"
                      stroke="#a3e635"
                      strokeOpacity="0.2"
                      strokeWidth="1.2"
                      strokeDasharray="6 6"
                      className="acad-dash"
                    />
                    <circle cx="190" cy="120" r="64" stroke="#34d399" strokeOpacity="0.25" strokeWidth="1.2" />

                    {/* Data Lines */}
                    <path
                      d="M85 65 L145 100 M295 65 L235 100 M85 175 L145 140 M295 175 L235 140"
                      stroke="#a3e635"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      className="acad-dash"
                    />

                    {/* Center Academy Hub */}
                    <g className="acad-float">
                      <rect x="138" y="76" width="104" height="88" rx="16" fill="#09130c" stroke="#a3e635" strokeWidth="2.2" />
                      {/* Graduation Cap Vector */}
                      <polygon
                        points="190,92 222,106 190,120 158,106"
                        fill="#a3e635"
                        fillOpacity="0.25"
                        stroke="#bef264"
                        strokeWidth="1.8"
                      />
                      <path d="M170 113 V127 C170 133 210 133 210 127 V113" stroke="#a3e635" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="218" y1="108" x2="218" y2="126" stroke="#ecfccb" strokeWidth="1.8" strokeLinecap="round" />
                      <text x="157" y="150" fill="#ecfccb" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                        ACADEMY HUB
                      </text>
                    </g>

                    {/* Top Left Badge: FREE Tier */}
                    <g className="acad-float-delay">
                      <rect x="24" y="36" width="76" height="42" rx="9" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="44" y="55" fill="#bef264" fontSize="10" fontWeight="900" fontFamily="monospace">
                        FREE
                      </text>
                      <text x="34" y="69" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        OPEN ACCESS
                      </text>
                    </g>

                    {/* Top Right Badge: PAID PRO Tier */}
                    <g className="acad-pulse">
                      <rect x="280" y="36" width="76" height="42" rx="9" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="292" y="55" fill="#ecfccb" fontSize="10" fontWeight="900" fontFamily="monospace">
                        PRO PAID
                      </text>
                      <text x="290" y="69" fill="#34d399" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        MASTERCLASS
                      </text>
                    </g>

                    {/* Bottom Left Badge: Video Lessons */}
                    <g className="acad-pulse">
                      <rect x="24" y="160" width="76" height="42" rx="9" fill="#0b1710" stroke="#a3e635" strokeWidth="1.6" />
                      <polygon points="44,175 44,187 55,181" fill="#a3e635" />
                      <text x="60" y="184" fill="#ffffff" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                        HD LABS
                      </text>
                    </g>

                    {/* Bottom Right Badge: Certificates & Projects */}
                    <g className="acad-float-delay">
                      <rect x="280" y="160" width="76" height="42" rx="9" fill="#0b1710" stroke="#a3e635" strokeWidth="1.6" />
                      <text x="291" y="180" fill="#bef264" fontSize="8.5" fontWeight="900" fontFamily="monospace">
                        PROJECTS
                      </text>
                      <text x="292" y="193" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        PRACTICAL
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 2. COURSE CATALOGUE CONTROL BAR (FREE / PAID & CATS)  */}
        {/* ===================================================== */}
        <section id="catalogue" className="relative py-10 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            {/* Control Panel Box */}
            <div className="rounded-3xl border border-lime-400/25 bg-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.7)]">
              
              {/* Top Row: Title + Free / Paid Segmented Toggle + Search */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-lime-400 block mb-1">
                    BROWSE DIRECTORY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    Course <span className="text-lime-400">Catalogue</span>
                  </h2>
                </div>

                {/* FREE / PAID / ALL Segmented Switch */}
                <div className="inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-lime-400/30 bg-[#050706] p-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedPrice("all")}
                    className={`rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      selectedPrice === "all"
                        ? "bg-lime-400 text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.5)]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    All Courses (0)
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPrice("free")}
                    className={`rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                      selectedPrice === "free"
                        ? "bg-lime-400 text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.5)]"
                        : "text-zinc-300 hover:text-lime-400"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-lime-400" />
                    <span>Free Courses • නොමිලේ (0)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPrice("paid")}
                    className={`rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                      selectedPrice === "paid"
                        ? "bg-gradient-to-r from-lime-300 to-emerald-400 text-zinc-950 shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                        : "text-zinc-300 hover:text-emerald-400"
                    }`}
                  >
                    <span>💎</span>
                    <span>Paid Pro • ප්‍රීමියම් (0)</span>
                  </button>
                </div>

                {/* Search Input */}
                <div className="relative w-full lg:w-64">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses..."
                    className="w-full rounded-2xl border border-white/15 bg-[#050706] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <span className="
                    pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-sm
                  ">
                    🔍
                  </span>
                </div>
              </div>

              {/* Bottom Row: Category Filter Pills */}
              <div className="pt-6">
                <div className="text-xs font-bold text-zinc-400 mb-3 flex items-center justify-between">
                  <span>Filter by Skill Track (අංශය තෝරන්න):</span>
                  <span className="text-[11px] text-lime-400 font-mono">
                    Active: {activeCategoryObj.name} ({selectedPrice.toUpperCase()})
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`group rounded-2xl border p-3.5 text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isActive
                            ? "border-lime-400 bg-lime-400/15 shadow-[0_0_25px_rgba(163,230,53,0.2)]"
                            : "border-white/10 bg-[#070b08] hover:border-lime-400/40 hover:bg-white/[0.03]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">{cat.icon}</span>
                          <span
                            className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] font-bold ${
                              isActive
                                ? "bg-lime-400 text-zinc-950"
                                : "bg-white/5 text-zinc-500"
                            }`}
                          >
                            0
                          </span>
                        </div>
                        <div>
                          <div
                            className={`text-xs font-black ${
                              isActive ? "text-lime-300" : "text-white group-hover:text-lime-400"
                            }`}
                          >
                            {cat.name}
                          </div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">
                            {cat.sinhala}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* 3. EMPTY CATALOGUE STATE (NO COURSES ADDED YET)   */}
            {/* ================================================= */}
            <div className="mt-10 rounded-[32px] border-2 border-dashed border-lime-400/35 bg-gradient-to-b from-[#09120b]/90 to-[#050706] p-8 sm:p-14 text-center relative overflow-hidden">
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[240px] bg-lime-400/10 blur-[120px] rounded-full" />

              <div className="relative z-10 max-w-xl mx-auto">
                {/* Status Icon */}
                <div className="mx-auto mb-5 h-16 w-16 rounded-2xl border border-lime-400/40 bg-lime-400/10 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.25)]">
                  <span className="text-2xl">{activeCategoryObj.icon}</span>
                </div>

                {/* Dynamic Filter Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/35 bg-lime-400/10 px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-lime-400 mb-4">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                  <span>
                    {selectedPrice === "all"
                      ? "ALL FREE & PAID TRACKS"
                      : selectedPrice === "free"
                      ? "FREE COMMUNITY TRACK"
                      : "PAID PRO MASTERCLASS TRACK"}{" "}
                    • {activeCategoryObj.name}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white mb-3">
                  No Courses Published Yet
                </h3>

                <p className="text-sm sm:text-base font-bold text-lime-300/90 mb-3">
                  දැනට මෙම කාණ්ඩය යටතේ පාඨමාලා ඇතුළත් කර නොමැත — ළඟදීම බලාපොරොත්තු වන්න!
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8">
                  We are currently recording and preparing high-impact{" "}
                  <strong className="text-zinc-200">Free</strong> and{" "}
                  <strong className="text-zinc-200">Paid Pro</strong> courses for{" "}
                  <span className="text-lime-400 font-semibold">
                    {activeCategoryObj.name}
                  </span>
                  . Join the early-access waitlist to get notified the moment our first batch goes live.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact?interest=courses-waitlist"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[0_0_25px_rgba(163,230,53,0.5)]"
                  >
                    <span>🔔 Notify Me When Courses Launch</span>
                  </Link>

                  {(selectedPrice !== "all" || selectedCategory !== "all" || searchQuery !== "") && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPrice("all");
                        setSelectedCategory("all");
                        setSearchQuery("");
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:border-lime-400/50 px-6 py-3.5 text-xs font-bold text-zinc-300 hover:text-white transition-all cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              </div>

              {/* =============================================== */}
              {/* 3 RESERVED CATALOGUE SLOT SKELETONS             */}
              {/* =============================================== */}
              <div className="relative z-10 mt-12 pt-10 border-t border-white/10">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-zinc-500 mb-6">
                  RESERVED CATALOGUE SLOTS (UPCOMING RELEASES)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  {upcomingPlaceholders.map((slot) => (
                    <div
                      key={slot.slot}
                      className="rounded-2xl border border-white/10 bg-[#050706]/90 p-6 opacity-75 hover:opacity-100 hover:border-lime-400/40 transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-zinc-500">
                          {slot.slot}
                        </span>
                        <span
                          className={`rounded-full px-3 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                            slot.tier === "FREE"
                              ? "border border-lime-400/40 bg-lime-400/15 text-lime-300"
                              : "border border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
                          }`}
                        >
                          {slot.tier}
                        </span>
                      </div>

                      {/* Skeleton Thumbnail Box */}
                      <div className="h-32 w-full rounded-xl border border-dashed border-white/10 bg-white/[0.02] mb-4 flex flex-col items-center justify-center gap-1.5">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-lime-400/70">
                          COMING SOON
                        </span>
                        <span className="text-[11px] text-zinc-500">
                          {slot.tierLabel}
                        </span>
                      </div>

                      {/* Skeleton Lines */}
                      <div className="h-4 w-3/4 rounded bg-white/10 mb-2.5" />
                      <div className="h-3 w-1/2 rounded bg-white/5 mb-5" />

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                        <span>{slot.category}</span>
                        <span className="text-lime-400/70 font-bold">In Production</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* 4. FREE VS PAID PRO LEARNING COMPARISON               */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                TWO LEARNING TIERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Free Courses vs. <span className="text-lime-400">Paid Pro Tracks</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Free Courses Card */}
              <div className="rounded-3xl border border-lime-400/30 bg-zinc-950/80 p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-lime-400/15 border border-lime-400/40 px-3.5 py-1 text-xs font-black text-lime-300 mb-4">
                  <span>🌱 FREE COURSES (නොමිලේ)</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                   Open Community Learning
                </h3>
                <p className="text-sm text-zinc-400 mb-6">
                  ආධුනිකයන්ට මූලික දැනුම ලබා ගැනීමට සහ අලුත් තාක්ෂණයන් හඳුනා ගැනීමට සම්පූර්ණයෙන්ම නොමිලේ ලබා දෙන පාඨමාලා.
                </p>
                <ul className="space-y-2.5 text-sm text-zinc-300">
                  <li className="flex items-center gap-2.5">
                    <span className="text-lime-400 font-black">✓</span>
                    <span>100% Free Access for Everyone</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-lime-400 font-black">✓</span>
                    <span>Beginner-Friendly Step-by-Step Guides</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-lime-400 font-black">✓</span>
                    <span>Essential Digital &amp; Creative Fundamentals</span>
                  </li>
                </ul>
              </div>

              {/* Paid Pro Courses Card */}
              <div className="rounded-3xl border-2 border-lime-400/60 bg-gradient-to-b from-[#0c180f] to-[#070b08] p-8 shadow-[0_15px_50px_rgba(163,230,53,0.12)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-3.5 py-1 text-xs font-black text-zinc-950 mb-4">
                  <span>💎 PAID PRO COURSES (ප්‍රීමියම්)</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  Advanced Career &amp; Business Tracks
                </h3>
                <p className="text-sm text-zinc-400 mb-6">
                  සැබෑ ව්‍යාපෘති (Real-world Projects), Source Files සහ විශේෂඥ මඟපෙන්වීම යටතේ වෘත්තීය මට්ටමට පුහුණු කරන ප්‍රීමියම් පාඨමාලා.
                </p>
                <ul className="space-y-2.5 text-sm text-zinc-200">
                  <li className="flex items-center gap-2.5">
                    <span className="text-lime-400 font-black">✓</span>
                    <span>Complete End-to-End Real-World Projects</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-lime-400 font-black">✓</span>
                    <span>Downloadable Templates, Code &amp; Assets</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-lime-400 font-black">✓</span>
                    <span>Direct Mentor Support &amp; Completion Certificate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}