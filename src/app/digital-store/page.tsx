"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { storeCatalogueItems, StoreTab } from "@/data/storeItems";

const categoryBento = [
  {
    id: "digital-tools" as StoreTab,
    number: "01",
    title: "Digital Tools",
    subtitle: "Software සහ AI Tools",
    desc: "Premium AI writing, 4K video editing, and professional UI/UX design software to supercharge your daily workflow.",
    examples: ["QuillBot Pro", "CapCut Pro", "Figma Pro", "AI Productivity Tools"],
    badge: "INSTANT ACCESS",
  },
  {
    id: "digital-products" as StoreTab,
    number: "02",
    title: "Digital Products",
    subtitle: "E-books සහ Downloadable Products",
    desc: "Actionable guides, e-books, notion planners, and downloadable digital toolkits built for creators and entrepreneurs.",
    examples: ["Digital Business E-Books", "Creator Checklists", "Prompt Guides", "Actionable Playbooks"],
    badge: "DOWNLOADABLE",
  },
  {
    id: "templates" as StoreTab,
    number: "03",
    title: "Templates",
    subtitle: "Canva, Social Media සහ Website Templates",
    desc: "Ready-to-edit templates that save hours of work and give your brand a consistent, high-converting visual identity.",
    examples: ["Canva Brand Templates", "Social Media Post Packs", "Next.js / Web UI Templates", "Thumbnail Kits"],
    badge: "READY TO USE",
  },
  {
    id: "creative-resources" as StoreTab,
    number: "04",
    title: "Creative Resources",
    subtitle: "Fonts, Graphics සහ Design Assets",
    desc: "Curated typography, custom vector graphics, overlays, icons, and high-resolution design assets for standout projects.",
    examples: ["Sinhala & English Font Packs", "Cyberpunk & Modern Vectors", "3D Icons & Overlays", "Texture & Gradient Kits"],
    badge: "DESIGN ASSETS",
  },
];

export default function DigitalStorePage() {
  const [activeTab, setActiveTab] = useState<StoreTab>("all");

  const filteredItems =
    activeTab === "all"
      ? storeCatalogueItems
      : storeCatalogueItems.filter((item) => item.category === activeTab);

  const handleCategoryClick = (tab: StoreTab) => {
    setActiveTab(tab);
    const el = document.getElementById("store-catalogue");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth overflow-x-hidden">
      <Navbar />

      <style>{`
        @keyframes storeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes storePulse {
          0%, 100% { opacity: 0.35; transform: scale(0.96); }
          50% { opacity: 0.95; transform: scale(1.04); }
        }
        @keyframes dashStream {
          to { stroke-dashoffset: -40; }
        }
        @keyframes scanBeam {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.65; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .st-float { animation: storeFloat 4.2s ease-in-out infinite; }
        .st-float-delay { animation: storeFloat 4.8s ease-in-out 1.4s infinite; }
        .st-pulse { animation: storePulse 3.2s ease-in-out infinite; }
        .st-dash { animation: dashStream 2.2s linear infinite; }
        .st-scan { animation: scanBeam 3.8s linear infinite; }
      `}</style>

      <main className="pt-28">
        {/* 1. DIGITAL STORE HERO SECTION */}
        <section className="relative py-12 lg:py-16 px-6 sm:px-10 lg:px-12 overflow-hidden">
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
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                    METRIXA DIGITAL MARKETPLACE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
                  Discover Our{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(163,230,53,0.35)]">
                    Digital Store
                  </span>
                </h1>

                <p className="text-lg sm:text-xl font-bold text-lime-300/95 mb-4">
                  Powerful Tools. Premium Resources. Unlimited Possibilities.
                </p>

                <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mb-8">
                  Explore digital tools, creative templates and premium resources designed to help you work smarter and create better.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleCategoryClick("digital-tools")}
                    className="rounded-full bg-gradient-to-b from-lime-300 to-lime-500 px-6 py-3 text-xs sm:text-sm font-black text-zinc-950 shadow-[0_0_25px_rgba(163,230,53,0.5)] hover:shadow-[0_0_35px_rgba(163,230,53,0.85)] transition-all cursor-pointer"
                  >
                    Explore Digital Tools →
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick("all")}
                    className="rounded-full border border-white/15 bg-white/[0.03] hover:border-lime-400/60 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer"
                  >
                    Browse All 4 Categories
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-72 w-full rounded-[28px] border border-lime-400/30 bg-gradient-to-b from-[#0b150d]/90 to-[#050706] p-4 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(163,230,53,0.12)]">
                  <div className="st-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                  <svg viewBox="0 0 380 240" className="w-full h-full max-w-[350px]" fill="none">
                    <circle cx="190" cy="120" r="94" stroke="#a3e635" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="6 6" className="st-dash" />
                    <circle cx="190" cy="120" r="62" stroke="#34d399" strokeOpacity="0.25" strokeWidth="1.2" />
                    <path d="M90 62 L146 98 M290 62 L234 98 M90 178 L146 142 M290 178 L234 142" stroke="#a3e635" strokeWidth="2" strokeDasharray="5 5" className="st-dash" />

                    <g className="st-float">
                      <polygon points="190,72 234,96 234,144 190,168 146,144 146,96" fill="#09130c" stroke="#a3e635" strokeWidth="2.4" />
                      <text x="159" y="116" fill="#ecfccb" fontSize="11" fontWeight="900" fontFamily="monospace">METRIXA</text>
                      <text x="167" y="132" fill="#a3e635" fontSize="10" fontWeight="900" fontFamily="monospace">STORE</text>
                    </g>

                    <g className="st-float-delay">
                      <rect x="18" y="32" width="90" height="44" rx="10" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="28" y="52" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">AI &amp; TOOLS</text>
                      <text x="28" y="66" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">SOFTWARE</text>
                    </g>

                    <g className="st-pulse">
                      <rect x="272" y="32" width="90" height="44" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="284" y="52" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">E-BOOKS</text>
                      <text x="284" y="66" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">PRODUCTS</text>
                    </g>

                    <g className="st-pulse">
                      <rect x="18" y="164" width="90" height="44" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="28" y="184" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">TEMPLATES</text>
                      <text x="28" y="198" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">CANVA &amp; WEB</text>
                    </g>

                    <g className="st-float-delay">
                      <rect x="272" y="164" width="90" height="44" rx="10" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="282" y="184" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">RESOURCES</text>
                      <text x="282" y="198" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">FONTS &amp; ART</text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE 4 MAIN DIGITAL STORE PILLARS */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                  WHAT WE OFFER IN OUR STORE
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  4 Core <span className="text-lime-400">Resource Categories</span>
                </h2>
              </div>
              <p className="text-sm text-zinc-400 max-w-md">
                Click on any category card below to filter the store catalogue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {categoryBento.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="group relative rounded-[30px] border border-lime-400/25 bg-zinc-950/85 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-lime-400 hover:shadow-[0_20px_50px_rgba(163,230,53,0.16)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-lime-400/40 bg-lime-400/15 font-mono text-xs font-black text-lime-400">
                          {cat.number}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-lime-300">
                          {cat.badge}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-lime-400 group-hover:translate-x-1 transition-all">
                        Explore →
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-lime-400/90 mt-1 mb-3">
                      {cat.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span
                        key={ex}
                        className="rounded-lg border border-lime-400/25 bg-lime-400/[0.07] px-2.5 py-1 text-[11px] font-bold text-zinc-200"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BROWSE STORE ITEMS (TALL VERTICAL 1:1 IMAGE CARDS) */}
        <section id="store-catalogue" className="scroll-mt-28 relative py-14 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-1">
                  BROWSE STORE ITEMS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Featured <span className="text-lime-400">Tools &amp; Resources</span>
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: "All Items" },
                  { id: "digital-tools", label: "Digital Tools" },
                  { id: "digital-products", label: "Digital Products" },
                  { id: "templates", label: "Templates" },
                  { id: "creative-resources", label: "Creative Resources" },
                ].map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as StoreTab)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                        active
                          ? "bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.5)]"
                          : "border border-white/10 bg-zinc-950 text-zinc-300 hover:border-lime-400/50 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TALL VERTICAL MINI CARDS WITH 1:1 SQUARE IMAGE */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="scroll-mt-28 group relative rounded-2xl border border-white/10 bg-zinc-950/90 p-3 sm:p-3.5 hover:border-lime-400 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_40px_rgba(163,230,53,0.2)] hover:-translate-y-1"
                >
                  <div>
                    {/* 1:1 Aspect Square Image Container */}
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 mb-3.5 border border-white/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    </div>

                    {/* Tool Title */}
                    <h3 className="text-sm sm:text-base font-black text-white group-hover:text-lime-400 transition-colors truncate">
                      {item.title}
                    </h3>

                    {/* Warranty Label Pill */}
                    <div className="mt-1.5 inline-flex items-center gap-1 rounded-md border border-lime-400/40 bg-lime-400/10 px-2 py-0.5 text-[10px] font-bold text-lime-300">
                      <span>🛡️</span>
                      <span>{item.warranty}</span>
                    </div>

                    {/* Monthly Price */}
                    <div className="mt-2.5 mb-3.5 flex items-baseline gap-1">
                      <span className="text-lg sm:text-xl font-black text-lime-400">
                        {item.price}
                      </span>
                      <span className="text-[11px] font-semibold text-zinc-400">
                        {item.billing}
                      </span>
                    </div>
                  </div>

                  {/* Get Button -> Auto-selects tool on /contact */}
                  <Link
                    href={`/contact?store=${item.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 py-2.5 px-3 text-xs font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[0_0_15px_rgba(163,230,53,0.35)] hover:shadow-[0_0_25px_rgba(163,230,53,0.75)]"
                  >
                    <span>Get</span>
                    <span>→</span>
                  </Link>
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