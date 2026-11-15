"use client";

import React from "react";

const features = [
  {
    number: "01",
    title: "Creative & Innovative",
    desc: "Fresh ideas and creative solutions that help your brand stand out.",
    badge: "BRAND EXCELLENCE",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "All-in-One Digital Platform",
    desc: "Services, courses, tools and resources — all in one place.",
    badge: "COMPLETE ECOSYSTEM",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Modern Technology",
    desc: "Using modern digital technologies and smart solutions.",
    badge: "NEXT-GEN TECH",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Focused on Growth",
    desc: "Helping creators, entrepreneurs and businesses move forward.",
    badge: "FUTURE SCALE",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative bg-[#050706] text-white py-24 lg:py-28 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* Subtle Ambient Background Glows & Grid */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[380px] bg-lime-400/[0.07] blur-[150px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(163, 230, 53, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(163, 230, 53, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 90%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/35 bg-lime-400/[0.08] px-4 py-1.5 mb-5 shadow-[0_0_20px_rgba(163,230,53,0.12)]">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
              THE METRIXA ADVANTAGE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(163,230,53,0.35)]">
              MetriXa?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-bold text-lime-300/95 mb-4">
            More Than Just Digital Services. Your Partner in Digital Growth.
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            At MetriXa, we bring creativity, technology and innovation together to help individuals and businesses succeed in the digital world.
          </p>
        </div>

        {/* 2x2 Bento Feature Grid (Stacks vertically on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {features.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-3xl border border-lime-400/20 bg-zinc-950/80 p-8 sm:p-9 backdrop-blur-xl transition-all duration-300 hover:border-lime-400/75 hover:bg-[#08100a]/95 shadow-[0_10px_35px_rgba(0,0,0,0.65),inset_0_0_20px_rgba(163,230,53,0.03)] hover:shadow-[0_20px_50px_rgba(163,230,53,0.16),inset_0_0_25px_rgba(163,230,53,0.08)] hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Ambient Corner Glow on Hover */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 bg-lime-400/10 blur-3xl rounded-full group-hover:bg-lime-400/25 transition-all duration-500" />

              {/* Top Row: Icon Box + Bento Number & Badge */}
              <div className="relative z-10 flex items-center justify-between mb-7">
                <div className="h-14 w-14 rounded-2xl border border-lime-400/35 bg-lime-400/10 flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.15)] group-hover:scale-110 group-hover:border-lime-400 group-hover:bg-lime-400/20 transition-all duration-300">
                  {item.icon}
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-extrabold tracking-widest text-zinc-400 group-hover:border-lime-400/40 group-hover:text-lime-300 transition-colors">
                    {item.badge}
                  </span>
                  <span className="font-mono text-2xl font-black text-lime-400/25 group-hover:text-lime-400/70 transition-colors">
                    {item.number}
                  </span>
                </div>
              </div>

              {/* Content Row: Title & Description */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-lime-400 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 group-hover:text-zinc-300 leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Bottom Neon Accent Line */}
              <div className="mt-7 h-[2px] w-12 bg-lime-400/30 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-lime-400 group-hover:to-transparent transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}