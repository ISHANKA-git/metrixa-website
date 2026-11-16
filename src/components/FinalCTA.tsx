"use client";

import React from "react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-[#050706] text-white py-20 lg:py-28 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* Glowing Bento CTA Container */}
        <div className="relative rounded-[32px] border border-lime-400/35 bg-gradient-to-b from-[#0b140d] via-[#070b08] to-[#050706] px-6 py-16 sm:px-14 sm:py-20 text-center overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_50px_rgba(163,230,53,0.12)]">
          
          {/* Background Perspective Cyber Grid & Radial Spotlight */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {/* Top Center Neon Spotlight */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-lime-400/20 blur-[120px] rounded-full" />
            {/* Bottom Subtle Glow */}
            <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-emerald-500/15 blur-[110px] rounded-full" />

            {/* Subtle Tech Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(163, 230, 53, 0.25) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(163, 230, 53, 0.25) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse 75% 70% at 50% 50%, black 20%, transparent 90%)",
                WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 50%, black 20%, transparent 90%)",
              }}
            />
          </div>

          {/* Decorative Top Neon Line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-80" />

          {/* Main CTA Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(163,230,53,0.2)]">
              <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                START YOUR DIGITAL JOURNEY
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-[54px] font-black tracking-tight text-white leading-[1.1] mb-6">
              Ready to Build{" "}
              <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(163,230,53,0.4)]">
                Something Amazing?
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you want to grow your business, develop new skills or explore powerful digital tools, your journey starts with MetriXa.
            </p>

            {/* Primary CTA Button -> Linked to /contact */}
            <div className="flex items-center justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-9 py-4 sm:py-4.5 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 transition-all duration-300 shadow-[0_0_35px_rgba(163,230,53,0.55)] hover:shadow-[0_0_50px_rgba(163,230,53,0.9)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>GET STARTED WITH METRIXA</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}