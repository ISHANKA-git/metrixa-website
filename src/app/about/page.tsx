"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const ecosystemPillars = [
  {
    number: "01",
    title: "Services",
    sinhala: "නිර්මාණශීලී සහ ව්‍යාපාරික විසඳුම්",
    desc: "From Social Media Setup, Content Bundles, and Promotional Video Reels to Single-Page Mini Websites and future AI Automation.",
    href: "/services",
    cta: "Explore Services",
    badge: "BUILD & SCALE",
  },
  {
    number: "02",
    title: "Courses",
    sinhala: "ප්‍රායෝගික ඩිජිටල් අධ්‍යාපනය",
    desc: "Free community guides and Paid Pro masterclasses designed to help students, freelancers, and entrepreneurs master modern digital skills.",
    href: "/courses",
    cta: "Browse Academy",
    badge: "LEARN SKILLS",
  },
  {
    number: "03",
    title: "Digital Store",
    sinhala: "ප්‍රීමියම් මෘදුකාංග සහ ටෙම්ප්ලේට්",
    desc: "Instant access to industry-leading tools like QuillBot Pro, CapCut Pro, and Figma Pro alongside e-books, templates, and creative assets.",
    href: "/digital-store",
    cta: "Visit Store",
    badge: "WORK SMARTER",
  },
  {
    number: "04",
    title: "Community",
    sinhala: "නිර්මාණකරුවන්ගේ සහ ව්‍යවසායකයන්ගේ එකමුතුව",
    desc: "A thriving network where small business owners and digital creators connect, share ideas, showcase projects, and grow together.",
    href: "/community",
    cta: "Join Community",
    badge: "GROW TOGETHER",
  },
];

const coreValues = [
  {
    title: "Creative Excellence",
    sinhala: "ඉහළම නිර්මාණශීලීත්වය",
    desc: "Every logo, post, video reel, and website is crafted with a modern, high-impact visual identity that stands out.",
    icon: "✦",
  },
  {
    title: "Accessible for Small Businesses",
    sinhala: "සාධාරණ සහ විනිවිද පෙනෙන මිල ගණන්",
    desc: "We believe world-class digital branding shouldn't cost a fortune. Our starter packages are built to fit local business budgets.",
    icon: "⚡",
  },
  {
    title: "Modern Technology",
    sinhala: "නවීනතම තාක්ෂණය සහ AI භාවිතය",
    desc: "We leverage fast cloud infrastructure, responsive web frameworks, and smart AI workflows to keep you ahead.",
    icon: "🤖",
  },
  {
    title: "Long-Term Partnership",
    sinhala: "අඛණ්ඩ සහයෝගීතාවය",
    desc: "We don't just deliver files and disappear — we support your journey through tools, education, and community.",
    icon: "🤝",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth">
      <Navbar />

      {/* Custom Keyframes for Cyberpunk About Vector Art */}
      <style>{`
        @keyframes abFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes abPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.96); }
          50% { opacity: 0.95; transform: scale(1.04); }
        }
        @keyframes abDash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes abScan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.65; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .ab-float { animation: abFloat 4.4s ease-in-out infinite; }
        .ab-float-delay { animation: abFloat 5s ease-in-out 1.4s infinite; }
        .ab-pulse { animation: abPulse 3.4s ease-in-out infinite; }
        .ab-dash { animation: abDash 2.4s linear infinite; }
        .ab-scan { animation: abScan 4s linear infinite; }
      `}</style>

      <main className="pt-28">
        {/* ===================================================== */}
        {/* 1. ABOUT HERO SECTION WITH ANIMATED VECTOR ART        */}
        {/* ===================================================== */}
        <section className="relative py-12 lg:py-20 px-6 sm:px-10 lg:px-12 overflow-hidden">
          {/* Background Ambient Glows & Grid */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/3 w-[580px] h-[360px] bg-lime-400/12 blur-[150px] rounded-full" />
            <div className="absolute bottom-10 right-1/4 w-[460px] h-[280px] bg-emerald-500/10 blur-[140px] rounded-full" />
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
              {/* Left 7 Cols: Story Intro */}
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                    ABOUT METRIXA • WHO WE ARE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
                  Your All-in-One Partner for{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(163,230,53,0.35)]">
                    Digital Growth.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mb-4">
                  MetriXa is a modern creative and technology platform built to bring{" "}
                  <strong className="text-white">digital services, online education, premium creative tools,</strong> and a{" "}
                  <strong className="text-lime-400">collaborative community</strong> under one unified roof.
                </p>

                <p className="text-xs sm:text-sm font-bold text-lime-400/90 mb-8">
                  ✨ නිර්මාණශීලීත්වය, නවීන තාක්ෂණය සහ ප්‍රායෝගික දැනුම එකම තැනකින් ලබා දෙමින් ඔබේ ව්‍යාපාරය හෝ ඩිජිටල් ගමන ඉදිරියටම ගෙන යාම අපගේ අරමුණයි.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/services"
                    className="rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[0_0_30px_rgba(163,230,53,0.5)]"
                  >
                    Explore Our Services →
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/15 bg-white/[0.03] hover:border-lime-400/60 hover:bg-lime-400/10 px-8 py-4 text-xs sm:text-sm font-bold text-white transition-all"
                  >
                    Work With Us
                  </Link>
                </div>
              </div>

              {/* Right 5 Cols: Animated MetriXa "X" Ecosystem Core Vector Art */}
              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 w-full rounded-[30px] border border-lime-400/30 bg-gradient-to-b from-[#0b150d]/90 to-[#050706] p-4 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_45px_rgba(163,230,53,0.14)]">
                  <div className="ab-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                  <svg viewBox="0 0 380 260" className="w-full h-full max-w-[350px]" fill="none">
                    {/* Outer Tech Rings */}
                    <circle
                      cx="190"
                      cy="130"
                      r="104"
                      stroke="#a3e635"
                      strokeOpacity="0.2"
                      strokeWidth="1.2"
                      strokeDasharray="6 6"
                      className="ab-dash"
                    />
                    <circle cx="190" cy="130" r="72" stroke="#34d399" strokeOpacity="0.25" strokeWidth="1.2" />

                    {/* Diagonal X Energy Beams */}
                    <path
                      d="M80 55 L300 205 M300 55 L80 205"
                      stroke="#a3e635"
                      strokeWidth="2.2"
                      strokeDasharray="5 5"
                      className="ab-dash"
                    />

                    {/* Center Hexagon Monolith: MetriXa */}
                    <g className="ab-float">
                      <polygon
                        points="190,76 238,103 238,157 190,184 142,157 142,103"
                        fill="#09140c"
                        stroke="#a3e635"
                        strokeWidth="2.6"
                      />
                      <text x="160" y="127" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="monospace">
                        METRI<tspan fill="#a3e635">XA</tspan>
                      </text>
                      <text x="163" y="144" fill="#bef264" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                        ECOSYSTEM
                      </text>
                    </g>

                    {/* 4 Corner Nodes: Design, Create, Learn, Grow */}
                    <g className="ab-float-delay">
                      <rect x="20" y="28" width="84" height="40" rx="9" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="36" y="52" fill="#ecfccb" fontSize="10" fontWeight="900" fontFamily="monospace">
                        DESIGN.
                      </text>
                    </g>

                    <g className="ab-pulse">
                      <rect x="276" y="28" width="84" height="40" rx="9" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="292" y="52" fill="#ecfccb" fontSize="10" fontWeight="900" fontFamily="monospace">
                        CREATE.
                      </text>
                    </g>

                    <g className="ab-pulse">
                      <rect x="20" y="192" width="84" height="40" rx="9" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="38" y="216" fill="#ecfccb" fontSize="10" fontWeight="900" fontFamily="monospace">
                        LEARN.
                      </text>
                    </g>

                    <g className="ab-float-delay">
                      <rect x="276" y="192" width="84" height="40" rx="9" fill="#0b1710" stroke="#a3e635" strokeWidth="1.8" />
                      <text x="298" y="216" fill="#a3e635" fontSize="10" fontWeight="900" fontFamily="monospace">
                        GROW.
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 2. OUR STORY, MISSION & VISION                        */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
              {/* Left 6 Cols: Why We Built MetriXa */}
              <div className="lg:col-span-6 rounded-[30px] border border-lime-400/25 bg-zinc-950/85 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-3">
                    OUR STORY
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white mb-5">
                    Why We Built <span className="text-lime-400">MetriXa</span>
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                    Many small business owners, freelancers, and aspiring creators struggle because everything they need is scattered across dozens of expensive platforms — one agency for websites, another for social media designs, separate subscriptions for tools, and disconnected groups for learning.
                  </p>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    We created <strong className="text-white">MetriXa</strong> to solve that problem. Whether you need a complete <strong className="text-lime-400">Small Business Starter Package</strong>, instant access to <strong className="text-lime-400">Pro Creative Tools</strong>, practical <strong className="text-lime-400">Skill Courses</strong>, or a supportive <strong className="text-lime-400">Community</strong>, MetriXa brings it all together in one modern platform.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-extrabold uppercase tracking-[0.2em] text-lime-400">
                  <span>DESIGN. CREATE. LEARN. GROW.</span>
                  <span>EST. 2026</span>
                </div>
              </div>

              {/* Right 6 Cols: Mission & Vision Stack */}
              <div className="lg:col-span-6 flex flex-col gap-7">
                {/* Mission Card */}
                <div className="rounded-[30px] border-2 border-lime-400/50 bg-gradient-to-b from-[#0d1910] to-[#070b08] p-8 shadow-[0_15px_45px_rgba(163,230,53,0.12)]">
                  <div className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-zinc-950 mb-4">
                    <span>🎯 OUR MISSION</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    Making Digital Success Accessible to Everyone
                  </h3>
                  <p className="text-xs font-bold text-lime-300 mb-3">
                    සෑම ව්‍යාපාරයකටම සහ නිර්මාණකරුවෙකුටම නවීන ඩිජිටල් තාක්ෂණය සමීප කරවීම.
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    To empower small businesses, creators, and learners with affordable, high-impact digital services, cutting-edge tools, and practical knowledge that drive real-world results.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="rounded-[30px] border border-lime-400/25 bg-zinc-950/85 p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-lime-300 mb-4">
                    <span>🚀 OUR VISION</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    Building the Ultimate Next-Gen Digital Ecosystem
                  </h3>
                  <p className="text-xs font-bold text-emerald-300 mb-3">
                    නිර්මාණශීලීත්වය සහ AI ස්වයංක්‍රීයකරණය එකතු වූ ප්‍රමුඛතම ඩිජිටල් ජාලය ගොඩනැගීම.
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    To become the go-to all-in-one digital hub where thousands of entrepreneurs and digital enthusiasts build brands, master future-ready skills, and scale with AI automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 3. THE 4 PILLARS OF METRIXA ECOSYSTEM                 */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                HOW METRIXA WORKS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                4 Pillars of the <span className="text-lime-400">MetriXa Ecosystem</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-3">
                Everything we build is connected across four core areas to support your complete digital journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {ecosystemPillars.map((pillar) => (
                <Link
                  key={pillar.number}
                  href={pillar.href}
                  className="group relative rounded-3xl border border-lime-400/20 bg-zinc-950/85 p-8 backdrop-blur-xl hover:border-lime-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.65)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/40 bg-lime-400/15 font-mono text-sm font-black text-lime-400">
                        {pillar.number}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-lime-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold text-lime-400/90 mt-1 mb-3">
                      {pillar.sinhala}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-black uppercase tracking-wider text-zinc-300 group-hover:text-lime-400 transition-colors">
                    <span>{pillar.cta}</span>
                    <span className="text-base transition-transform group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 4. OUR CORE VALUES                                    */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                WHAT DRIVES US
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Our Core <span className="text-lime-400">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val) => (
                <div
                  key={val.title}
                  className="rounded-3xl border border-white/10 bg-zinc-950/75 p-7 hover:border-lime-400/50 transition-all"
                >
                  <div className="h-12 w-12 rounded-2xl border border-lime-400/35 bg-lime-400/10 flex items-center justify-center text-xl text-lime-400 mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-black text-white mb-1">
                    {val.title}
                  </h3>
                  <p className="text-[11px] font-bold text-lime-400/90 mb-3">
                    {val.sinhala}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {val.desc}
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