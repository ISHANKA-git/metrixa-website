"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

type StoreTab = "all" | "digital-tools" | "digital-products" | "templates" | "creative-resources";

interface StoreItem {
  id: string;
  category: Exclude<StoreTab, "all">;
  categoryLabel: string;
  badge: string;
  title: string;
  sinhala: string;
  desc: string;
  highlights: string[];
  status: "AVAILABLE" | "COMING SOON";
  popular?: boolean;
}

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

const storeCatalogueItems: StoreItem[] = [
  // 1. DIGITAL TOOLS (Available Now)
  {
    id: "quillbot-pro",
    category: "digital-tools",
    categoryLabel: "Digital Tools",
    badge: "AI WRITING TOOL",
    title: "QuillBot Pro",
    sinhala: "AI ලිවීමේ සහ Paraphrasing මෙවලම",
    desc: "Unlimited paraphrasing, advanced grammar checking, plagiarism detection, and AI summarization for flawless writing.",
    highlights: ["Unlimited Paraphraser Words", "All Writing Modes Unlocked", "Plagiarism & Grammar Pro"],
    status: "AVAILABLE",
  },
  {
    id: "capcut-pro",
    category: "digital-tools",
    categoryLabel: "Digital Tools",
    badge: "BEST SELLER • VIDEO AI",
    title: "CapCut Pro",
    sinhala: "වෘත්තීයමය වීඩියෝ සහ Reels සංස්කරණයට",
    desc: "Unlock all premium transitions, AI auto-captions, background removal, and 4K 60fps watermark-free exports.",
    highlights: ["All Pro Effects & Transitions", "AI Auto-Captions & BG Remove", "4K 60fps Export (Mobile/PC)"],
    status: "AVAILABLE",
    popular: true,
  },
  {
    id: "figma-pro",
    category: "digital-tools",
    categoryLabel: "Digital Tools",
    badge: "UI/UX SOFTWARE",
    title: "Figma Professional",
    sinhala: "වෙබ් සහ ඇප් UI/UX නිර්මාණකරුවන්ට",
    desc: "Full professional workspace with unlimited files, shared team libraries, advanced prototyping, and Dev Mode.",
    highlights: ["Unlimited Projects & History", "Shared Design Libraries", "Advanced Prototyping & Dev Mode"],
    status: "AVAILABLE",
  },

  // 2. DIGITAL PRODUCTS
  {
    id: "creator-growth-ebook",
    category: "digital-products",
    categoryLabel: "Digital Products",
    badge: "E-BOOK & GUIDE",
    title: "Small Business & Creator Digital Playbook",
    sinhala: "ඩිජිටල් ව්‍යාපාර සහ Content නිර්මාණ අත්පොත",
    desc: "Step-by-step downloadable e-book and growth blueprint for building and monetizing your brand online.",
    highlights: ["PDF Instant Download", "AI Prompt Library Included", "Social Growth Checklists"],
    status: "COMING SOON",
  },

  // 3. TEMPLATES
  {
    id: "canva-social-pack",
    category: "templates",
    categoryLabel: "Templates",
    badge: "CANVA & SOCIAL",
    title: "Ultimate Social Media & Canva Template Bundle",
    sinhala: "Canva සහ Social Media පෝස්ට් ටෙම්ප්ලේට් එකතුව",
    desc: "100% customizable Canva, Facebook, Instagram, and YouTube cover/post templates for modern businesses.",
    highlights: ["One-Click Canva Edit", "FB/IG Posts & Story Layouts", "Modern Website Section Wireframes"],
    status: "COMING SOON",
  },

  // 4. CREATIVE RESOURCES
  {
    id: "pro-design-assets",
    category: "creative-resources",
    categoryLabel: "Creative Resources",
    badge: "FONTS & GRAPHICS",
    title: "MetriXa Creator Asset Vault (Fonts & Vectors)",
    sinhala: "Fonts, Graphics සහ Design Assets එකතුව",
    desc: "Premium collection of Sinhala/English display fonts, glowing vector elements, gradients, and graphic overlays.",
    highlights: ["Curated Sinhala & English Fonts", "High-Res PNG & SVG Vectors", "Commercial-Ready Overlays"],
    status: "COMING SOON",
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
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth">
      <Navbar />

      {/* Custom Keyframe Animations for Cyberpunk Vector Art */}
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
        {/* ===================================================== */}
        {/* 1. DIGITAL STORE HERO SECTION                         */}
        {/* ===================================================== */}
        <section className="relative py-12 lg:py-16 px-6 sm:px-10 lg:px-12 overflow-hidden">
          {/* Ambient Cyberpunk Background */}
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
              {/* Left 7 Cols: Exact Requested Copy */}
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                    METRIXA DIGITAL MARKETPLACE
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
                  Discover Our{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(163,230,53,0.35)]">
                    Digital Store
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl font-bold text-lime-300/95 mb-4">
                  Powerful Tools. Premium Resources. Unlimited Possibilities.
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mb-8">
                  Explore digital tools, creative templates and premium resources designed to help you work smarter and create better.
                </p>

                {/* Quick Jump Category Pills */}
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

              {/* Right 5 Cols: Animated 4-Pillar Digital Store Hub Vector Art */}
              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-72 w-full rounded-[28px] border border-lime-400/30 bg-gradient-to-b from-[#0b150d]/90 to-[#050706] p-4 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(163,230,53,0.12)]">
                  <div className="st-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                  <svg viewBox="0 0 380 240" className="w-full h-full max-w-[350px]" fill="none">
                    {/* Orbit Rings */}
                    <circle
                      cx="190"
                      cy="120"
                      r="94"
                      stroke="#a3e635"
                      strokeOpacity="0.2"
                      strokeWidth="1.2"
                      strokeDasharray="6 6"
                      className="st-dash"
                    />
                    <circle cx="190" cy="120" r="62" stroke="#34d399" strokeOpacity="0.25" strokeWidth="1.2" />

                    {/* Connecting Energy Streams */}
                    <path
                      d="M90 62 L146 98 M290 62 L234 98 M90 178 L146 142 M290 178 L234 142"
                      stroke="#a3e635"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      className="st-dash"
                    />

                    {/* Center Store Core */}
                    <g className="st-float">
                      <polygon
                        points="190,72 234,96 234,144 190,168 146,144 146,96"
                        fill="#09130c"
                        stroke="#a3e635"
                        strokeWidth="2.4"
                      />
                      <text x="159" y="116" fill="#ecfccb" fontSize="11" fontWeight="900" fontFamily="monospace">
                        METRIXA
                      </text>
                      <text x="167" y="132" fill="#a3e635" fontSize="10" fontWeight="900" fontFamily="monospace">
                        STORE
                      </text>
                    </g>

                    {/* Node 1 (Top Left): Digital Tools */}
                    <g className="st-float-delay">
                      <rect x="18" y="32" width="90" height="44" rx="10" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="28" y="52" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        AI &amp; TOOLS
                      </text>
                      <text x="28" y="66" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        SOFTWARE
                      </text>
                    </g>

                    {/* Node 2 (Top Right): Digital Products */}
                    <g className="st-pulse">
                      <rect x="272" y="32" width="90" height="44" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="284" y="52" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        E-BOOKS
                      </text>
                      <text x="284" y="66" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        PRODUCTS
                      </text>
                    </g>

                    {/* Node 3 (Bottom Left): Templates */}
                    <g className="st-pulse">
                      <rect x="18" y="164" width="90" height="44" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="28" y="184" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        TEMPLATES
                      </text>
                      <text x="28" y="198" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        CANVA &amp; WEB
                      </text>
                    </g>

                    {/* Node 4 (Bottom Right): Creative Resources */}
                    <g className="st-float-delay">
                      <rect x="272" y="164" width="90" height="44" rx="10" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="282" y="184" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        RESOURCES
                      </text>
                      <text x="282" y="198" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        FONTS &amp; ART
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 2. THE 4 MAIN DIGITAL STORE PILLARS (2x2 BENTO GRID)  */}
        {/* ===================================================== */}
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
                  <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-lime-400/10 blur-3xl rounded-full group-hover:bg-lime-400/25 transition-all" />

                  <div>
                    {/* Top Row: Number & Badge */}
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

                    {/* Animated Cyberpunk Vector Art for Each of the 4 Categories */}
                    <div className="relative h-36 w-full rounded-2xl border border-lime-400/20 bg-[#040705] mb-6 flex items-center justify-center overflow-hidden p-3">
                      <div className="st-scan pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                      {/* 01. Digital Tools Vector */}
                      {cat.id === "digital-tools" && (
                        <svg viewBox="0 0 340 130" className="w-full h-full max-w-[310px]" fill="none">
                          <path d="M95 65 L130 65 M210 65 L245 65" stroke="#a3e635" strokeWidth="2" strokeDasharray="4 4" className="st-dash" />
                          <g className="st-float">
                            <rect x="25" y="30" width="70" height="70" rx="12" fill="#09130c" stroke="#bef264" strokeWidth="1.8" />
                            <text x="38" y="63" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">QUILL</text>
                            <text x="43" y="77" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">AI PRO</text>
                          </g>
                          <g className="st-pulse">
                            <rect x="130" y="22" width="80" height="86" rx="14" fill="#0c1c11" stroke="#a3e635" strokeWidth="2.2" />
                            <text x="145" y="62" fill="#ecfccb" fontSize="11" fontWeight="900" fontFamily="monospace">CAPCUT</text>
                            <text x="148" y="78" fill="#a3e635" fontSize="9" fontWeight="bold" fontFamily="monospace">4K PRO</text>
                          </g>
                          <g className="st-float-delay">
                            <rect x="245" y="30" width="70" height="70" rx="12" fill="#09130c" stroke="#34d399" strokeWidth="1.8" />
                            <text x="260" y="63" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">FIGMA</text>
                            <text x="262" y="77" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">UI PRO</text>
                          </g>
                        </svg>
                      )}

                      {/* 02. Digital Products (E-books & Downloads) Vector */}
                      {cat.id === "digital-products" && (
                        <svg viewBox="0 0 340 130" className="w-full h-full max-w-[310px]" fill="none">
                          <g className="st-float">
                            <rect x="115" y="16" width="110" height="98" rx="10" fill="#09130c" stroke="#a3e635" strokeWidth="2" />
                            <line x1="132" y1="38" x2="208" y2="38" stroke="#bef264" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="132" y1="52" x2="195" y2="52" stroke="#a3e635" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                            <rect x="132" y="68" width="76" height="28" rx="6" fill="#a3e635" fillOpacity="0.18" stroke="#a3e635" />
                            <text x="146" y="86" fill="#ecfccb" fontSize="9.5" fontWeight="900" fontFamily="monospace">E-BOOK PDF</text>
                          </g>
                          <g className="st-pulse">
                            <circle cx="62" cy="65" r="24" fill="#0b1710" stroke="#bef264" strokeWidth="1.6" />
                            <path d="M62 53 V73 M54 66 L62 74 L70 66" stroke="#a3e635" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <g className="st-float-delay">
                            <rect x="246" y="42" width="72" height="46" rx="8" fill="#0b1710" stroke="#34d399" strokeWidth="1.6" />
                            <text x="257" y="63" fill="#ffffff" fontSize="8.5" fontWeight="900" fontFamily="monospace">INSTANT</text>
                            <text x="255" y="76" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">DOWNLOAD</text>
                          </g>
                        </svg>
                      )}

                      {/* 03. Templates (Canva, Social Media & Website) Vector */}
                      {cat.id === "templates" && (
                        <svg viewBox="0 0 340 130" className="w-full h-full max-w-[310px]" fill="none">
                          <g className="st-float">
                            <rect x="95" y="18" width="150" height="94" rx="10" fill="#09130c" stroke="#a3e635" strokeWidth="2" />
                            <line x1="95" y1="36" x2="245" y2="36" stroke="#a3e635" strokeOpacity="0.5" />
                            <rect x="108" y="46" width="56" height="52" rx="6" fill="#a3e635" fillOpacity="0.18" stroke="#bef264" />
                            <rect x="174" y="46" width="58" height="22" rx="4" fill="#34d399" fillOpacity="0.2" stroke="#34d399" />
                            <rect x="174" y="76" width="58" height="22" rx="4" fill="#a3e635" fillOpacity="0.12" stroke="#a3e635" />
                          </g>
                          <g className="st-float-delay">
                            <rect x="22" y="38" width="58" height="54" rx="8" fill="#0b1710" stroke="#bef264" strokeWidth="1.6" />
                            <text x="32" y="64" fill="#ecfccb" fontSize="9" fontWeight="900" fontFamily="monospace">CANVA</text>
                            <text x="34" y="77" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">PACKS</text>
                          </g>
                          <g className="st-pulse">
                            <rect x="260" y="38" width="58" height="54" rx="8" fill="#0b1710" stroke="#34d399" strokeWidth="1.6" />
                            <text x="270" y="64" fill="#ecfccb" fontSize="9" fontWeight="900" fontFamily="monospace">WEB UI</text>
                            <text x="272" y="77" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">KITS</text>
                          </g>
                        </svg>
                      )}

                      {/* 04. Creative Resources (Fonts, Graphics & Design Assets) Vector */}
                      {cat.id === "creative-resources" && (
                        <svg viewBox="0 0 340 130" className="w-full h-full max-w-[310px]" fill="none">
                          {/* Typography Aa Card */}
                          <g className="st-float">
                            <rect x="32" y="24" width="82" height="82" rx="12" fill="#09130c" stroke="#bef264" strokeWidth="2" />
                            <text x="48" y="72" fill="#ecfccb" fontSize="28" fontWeight="900" fontFamily="serif">Aa</text>
                            <text x="48" y="94" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">PRO FONTS</text>
                          </g>
                          {/* Vector Pen Curve & Nodes */}
                          <g className="st-pulse">
                            <rect x="130" y="24" width="84" height="82" rx="12" fill="#0c1c11" stroke="#a3e635" strokeWidth="2" />
                            <path d="M146 82 Q172 32 198 82" stroke="#bef264" strokeWidth="2.2" fill="none" />
                            <circle cx="172" cy="56" r="4" fill="#ecfccb" />
                            <rect x="143" y="79" width="6" height="6" fill="#a3e635" />
                            <rect x="195" y="79" width="6" height="6" fill="#a3e635" />
                            <text x="148" y="96" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">VECTORS</text>
                          </g>
                          {/* Graphics & Layers */}
                          <g className="st-float-delay">
                            <rect x="230" y="24" width="82" height="82" rx="12" fill="#09130c" stroke="#34d399" strokeWidth="1.8" />
                            <polygon points="271,40 292,74 250,74" fill="#a3e635" fillOpacity="0.25" stroke="#bef264" strokeWidth="1.6" />
                            <text x="249" y="94" fill="#a3e635" fontSize="8" fontWeight="bold" fontFamily="monospace">ASSETS</text>
                          </g>
                        </svg>
                      )}
                    </div>

                    {/* Title, Sinhala Subtitle & Description */}
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

                  {/* Bottom Tags */}
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

        {/* ===================================================== */}
        {/* 3. FILTERABLE STORE CATALOGUE                         */}
        {/* ===================================================== */}
        <section id="store-catalogue" className="scroll-mt-28 relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            {/* Filter Header & Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-12">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-1">
                  BROWSE STORE ITEMS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Featured <span className="text-lime-400">Tools &amp; Resources</span>
                </h2>
              </div>

              {/* 5 Filter Buttons */}
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
                      className={`rounded-full px-4 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                        active
                          ? "bg-lime-400 text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.5)]"
                          : "border border-white/10 bg-zinc-950 text-zinc-300 hover:border-lime-400/50 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Catalogue Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className={`group relative rounded-3xl p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                    item.popular
                      ? "border-2 border-lime-400 bg-gradient-to-b from-[#0d1910] to-[#070b08] shadow-[0_20px_55px_rgba(163,230,53,0.18)]"
                      : "border border-white/10 bg-zinc-950/85 hover:border-lime-400/60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="rounded-full border border-lime-400/35 bg-lime-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-lime-400">
                        {item.badge}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase ${
                          item.status === "AVAILABLE"
                            ? "bg-lime-400 text-zinc-950"
                            : "border border-white/15 bg-white/5 text-zinc-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-500 mb-1">
                      {item.categoryLabel}
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-lime-400/90 mt-1 mb-3">
                      {item.sinhala}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2 border-t border-white/10 pt-4 mb-7">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                          <span className="text-lime-400 font-black">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/contact?store=${item.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 text-xs font-black uppercase tracking-wider transition-all ${
                      item.status === "AVAILABLE"
                        ? "bg-gradient-to-b from-lime-300 to-lime-500 text-zinc-950 shadow-[0_0_25px_rgba(163,230,53,0.45)] hover:shadow-[0_0_40px_rgba(163,230,53,0.85)]"
                        : "border border-lime-400/35 bg-lime-400/10 text-lime-400 hover:bg-lime-400 hover:text-zinc-950"
                    }`}
                  >
                    <span>
                      {item.status === "AVAILABLE" ? `Get ${item.title}` : "Request Early Access"}
                    </span>
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