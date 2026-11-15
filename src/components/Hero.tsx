"use client";

import React, { useState, useRef } from "react";

const mainEntryCards = [
  {
    id: "services",
    title: "Services",
    subtitle: "Creative & Business Solutions",
    desc: "Custom brand logos, social media covers, high-converting small business websites, and smart automation.",
    href: "#services",
    tag: "BUILD & SCALE",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "courses",
    title: "Courses",
    subtitle: "Learn & Develop Skills",
    desc: "Practical, industry-ready online courses designed to help creators, freelancers, and entrepreneurs master digital skills.",
    href: "#courses",
    tag: "SKILL UP",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: "digital-store",
    title: "Digital Store",
    subtitle: "Tools & Digital Products",
    desc: "Instant access to premium creative tools including QuillBot Pro, CapCut Pro, Figma Pro, and ready-to-use digital assets.",
    href: "#digital-tools",
    tag: "INSTANT ACCESS",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

// Very subtle ambient particles (Replaces heavy Matrix code rain)
const subtleParticles = [
  { top: "14%", left: "8%", size: "3px", duration: "7s", delay: "0s" },
  { top: "28%", left: "42%", size: "2px", duration: "9s", delay: "-2s" },
  { top: "68%", left: "12%", size: "2.5px", duration: "8s", delay: "-4s" },
  { top: "82%", left: "35%", size: "2px", duration: "10s", delay: "-1s" },
  { top: "18%", left: "88%", size: "3px", duration: "7.5s", delay: "-3s" },
  { top: "55%", left: "92%", size: "2px", duration: "8.5s", delay: "-5s" },
  { top: "40%", left: "60%", size: "2.5px", duration: "6.5s", delay: "-2.5s" },
  { top: "75%", left: "78%", size: "3px", duration: "9.5s", delay: "-1.5s" },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#050706] text-white pt-28 overflow-hidden select-none"
    >
      {/* Smooth Animations & 3D Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.25; }
          50% { transform: translateY(-18px); opacity: 0.65; }
        }
        @keyframes cardFloatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.04); }
        }
        .animate-fade-up-1 { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-up-2 { opacity: 0; animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.12s forwards; }
        .animate-fade-up-3 { opacity: 0; animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.24s forwards; }
        .animate-fade-up-4 { opacity: 0; animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.36s forwards; }
        .animate-fade-up-5 { opacity: 0; animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.48s forwards; }
        .float-card-1 { animation: cardFloatSlow 5s ease-in-out infinite; }
        .float-card-2 { animation: cardFloatSlow 6s ease-in-out 1.2s infinite; }
        .float-card-3 { animation: cardFloatSlow 5.5s ease-in-out 2.4s infinite; }
      `}</style>

      {/* ========================================================= */}
      {/* 1. SUBTLE CHARCOAL TECH GRID & MINIMAL PARTICLE FIELD     */}
      {/* ========================================================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Ultra-clean dark charcoal radial vignette */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(163, 230, 53, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(163, 230, 53, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 75% 65% at 60% 40%, black 20%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 60% 40%, black 20%, transparent 90%)",
          }}
        />

        {/* Soft Ambient Neon Green Glows (With subtle mouse parallax) */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * -30}px, ${mousePos.y * -30}px, 0)`,
            transition: "transform 0.4s ease-out",
          }}
          className="absolute top-[15%] right-[10%] w-[520px] h-[520px] bg-lime-400/12 blur-[150px] rounded-full"
        />
        <div
          style={{
            transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
            transition: "transform 0.4s ease-out",
          }}
          className="absolute bottom-[25%] left-[5%] w-[420px] h-[320px] bg-emerald-500/8 blur-[140px] rounded-full"
        />

        {/* Very Subtle Matrix / Cyber Particles */}
        {subtleParticles.map((p, i) => (
          <span
            key={i}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `subtleFloat ${p.duration} ease-in-out ${p.delay} infinite`,
            }}
            className="absolute rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635]"
          />
        ))}
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN HERO CONTAINER (Left Text + Right 3D X Visual)    */}
      {/* ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-8 pb-20 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: FINAL HERO COPY & CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Eyebrow Text */}
            <div className="animate-fade-up-1 inline-flex items-center gap-2.5 rounded-full border border-lime-400/35 bg-lime-400/[0.08] px-4 py-1.5 backdrop-blur-md shadow-[0_0_25px_rgba(163,230,53,0.15)] mb-7">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] uppercase text-lime-400">
                YOUR ALL-IN-ONE DIGITAL PARTNER
              </span>
            </div>

            {/* Option A Main Headline */}
            <h1 className="animate-fade-up-2 text-4xl sm:text-6xl xl:text-[64px] font-black tracking-tight text-white leading-[1.08] mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(163,230,53,0.35)]">
                Build, Create &amp; Grow.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up-3 max-w-xl text-zinc-300/90 text-base sm:text-lg leading-relaxed mb-9 font-normal select-text">
              From creative design and powerful digital tools to professional online courses and smart business solutions — everything you need to succeed in the digital world starts here.
            </p>

            {/* Two Primary & Secondary CTAs with Smooth Hover Effects */}
            <div className="animate-fade-up-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 px-8 py-4 text-sm font-black text-zinc-950 transition-all duration-300 shadow-[0_0_30px_rgba(163,230,53,0.45)] hover:shadow-[0_0_45px_rgba(163,230,53,0.85)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Services</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>

              <a
                href="#digital-tools"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-lime-400/60 hover:bg-lime-400/[0.08] px-8 py-4 text-sm font-bold text-white transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_25px_rgba(163,230,53,0.2)] hover:-translate-y-0.5"
              >
                <span>Explore Digital Store</span>
                <span className="text-lime-400 transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>

            {/* Bottom Label */}
            <div className="animate-fade-up-5 flex items-center gap-3 text-xs font-extrabold tracking-[0.28em] text-zinc-500 uppercase">
              <span className="h-px w-8 bg-lime-400/40" />
              <span>DESIGN. <span className="text-zinc-300">CREATE.</span> LEARN. <span className="text-lime-400">GROW.</span></span>
            </div>
          </div>

          {/* RIGHT COLUMN: GLOWING 3D "X" SYMBOL & FLOATING GLASSMORPHISM CARDS */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[480px]">
            {/* Interactive Parallax Container */}
            <div
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 14}deg) rotateX(${mousePos.y * -14}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className="relative w-full max-w-[440px] aspect-square flex items-center justify-center"
            >
              {/* Ambient Core Glow behind the 3D X */}
              <div className="absolute w-64 h-64 rounded-full bg-lime-400/25 blur-[75px] pointer-events-none" />

              {/* Outer Cyber Tech Rings */}
              <div
                style={{ animation: "ringPulse 5s ease-in-out infinite" }}
                className="absolute w-[330px] h-[330px] sm:w-[370px] sm:h-[370px] rounded-full border border-lime-400/15"
              />
              <div className="absolute w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-lime-400/25 rotate-45" />

              {/* 3D METRIXA "X" SCULPTURE */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                {/* Back 3D Depth Shadow Layer of X */}
                <div
                  style={{
                    transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, -20px)`,
                  }}
                  className="absolute inset-0 flex items-center justify-center opacity-40"
                >
                  <div className="absolute w-14 h-56 sm:h-64 rotate-45 rounded-2xl bg-lime-950 border border-lime-400/40" />
                  <div className="absolute w-14 h-56 sm:h-64 -rotate-45 rounded-2xl bg-lime-950 border border-lime-400/40" />
                </div>

                {/* First Arm of 3D X (45 deg) */}
                <div className="absolute w-14 sm:w-16 h-56 sm:h-64 rotate-45 rounded-2xl bg-gradient-to-b from-lime-300/25 via-[#0b130e] to-lime-400/30 border border-lime-400/70 shadow-[0_0_40px_rgba(163,230,53,0.35),inset_0_0_20px_rgba(163,230,53,0.25)] backdrop-blur-xl overflow-hidden">
                  {/* Inner glowing circuit line */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-lime-300/40 to-transparent" />
                  <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-lime-300 via-lime-400/40 to-lime-300" />
                </div>

                {/* Second Arm of 3D X (-45 deg) */}
                <div className="absolute w-14 sm:w-16 h-56 sm:h-64 -rotate-45 rounded-2xl bg-gradient-to-b from-lime-400/30 via-[#09100b] to-emerald-400/25 border border-lime-400/80 shadow-[0_0_50px_rgba(163,230,53,0.45),inset_0_0_22px_rgba(163,230,53,0.3)] backdrop-blur-xl overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-lime-300/40 to-transparent" />
                  <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-lime-300 via-lime-400/40 to-lime-300" />
                </div>

                {/* Center Glowing Core Nexus */}
                <div className="relative z-10 w-16 h-16 rounded-2xl rotate-45 border-2 border-lime-300 bg-[#070b08]/95 flex items-center justify-center shadow-[0_0_35px_rgba(163,230,53,0.85)]">
                  <span className="-rotate-45 font-sans text-lg font-black tracking-tighter text-white">
                    M<span className="text-lime-400">X</span>
                  </span>
                </div>
              </div>

              {/* FLOATING GLASSMORPHISM CARD 1: Creative & Web (Top Left) */}
              <div
                style={{
                  transform: `translate3d(${mousePos.x * 22}px, ${mousePos.y * 22}px, 30px)`,
                  transition: "transform 0.2s ease-out",
                }}
                className="absolute top-4 left-0 sm:-left-4 z-20"
              >
                <div className="float-card-1 rounded-2xl border border-white/15 bg-zinc-950/75 px-4 py-3 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(163,230,53,0.12)] flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-lime-400/15 border border-lime-400/40 flex items-center justify-center text-lime-400 font-bold text-sm">
                    ✦
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white">Creative &amp; Web</div>
                    <div className="text-[10px] text-lime-400 font-semibold">Logos • Covers • Sites</div>
                  </div>
                </div>
              </div>

              {/* FLOATING GLASSMORPHISM CARD 2: Digital Store (Top Right) */}
              <div
                style={{
                  transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * 18}px, 40px)`,
                  transition: "transform 0.2s ease-out",
                }}
                className="absolute top-12 right-0 sm:-right-4 z-20"
              >
                <div className="float-card-2 rounded-2xl border border-lime-400/35 bg-zinc-950/80 px-4 py-3 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(163,230,53,0.18)] flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-lime-400/20 border border-lime-400/50 flex items-center justify-center text-lime-300 font-bold text-sm">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white">Digital Store</div>
                    <div className="text-[10px] text-zinc-300">CapCut • Figma • QuillBot</div>
                  </div>
                </div>
              </div>

              {/* FLOATING GLASSMORPHISM CARD 3: Pro Academy & AI (Bottom) */}
              <div
                style={{
                  transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * -22}px, 35px)`,
                  transition: "transform 0.2s ease-out",
                }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-max"
              >
                <div className="float-card-3 rounded-2xl border border-white/15 bg-zinc-950/80 px-5 py-3 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(163,230,53,0.15)] flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-lime-400 animate-ping" />
                  <div>
                    <div className="text-xs font-extrabold text-white">
                      Skill Courses &amp; Smart Automation
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      Learn, Build &amp; Scale with MetriXa
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Divider Line between Hero and Entry Cards */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* 3. IMMEDIATE POST-HERO SECTION: 3 MAIN ENTRY CARDS        */}
      {/* ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16 lg:py-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
              CORE ECOSYSTEM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Explore What Metri<span className="text-lime-400">Xa</span> Offers
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Choose a path below to start building your brand, upgrading your tools, or mastering new digital skills.
          </p>
        </div>

        {/* 3 Entry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mainEntryCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group relative rounded-3xl border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-xl transition-all duration-300 hover:border-lime-400/70 hover:bg-[#09110b]/90 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(163,230,53,0.18)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top-right card glow on hover */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 bg-lime-400/10 blur-2xl rounded-full group-hover:bg-lime-400/25 transition-all" />

              <div>
                {/* Top Icon & Tag Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl border border-lime-400/30 bg-lime-400/10 flex items-center justify-center group-hover:scale-110 group-hover:border-lime-400 transition-all shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                    {card.icon}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-extrabold tracking-wider text-zinc-300 group-hover:border-lime-400/40 group-hover:text-lime-400 transition-colors">
                    {card.tag}
                  </span>
                </div>

                {/* Main Title & Subtitle */}
                <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm font-bold text-lime-400/90 mt-1">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-400 mt-3.5 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Explore Link */}
              <div className="mt-7 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-zinc-300 group-hover:text-lime-400 transition-colors">
                <span>Explore {card.title}</span>
                <span className="text-base transform group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}