"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whatYouGet = [
  {
    number: "01",
    title: "Connect & Network",
    sinhala: "ව්‍යාපාරිකයන් සහ නිර්මාණකරුවන් හා සම්බන්ධ වන්න",
    desc: "Connect with small business owners, creators and like-minded people.",
    badge: "NETWORKING",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Share Ideas & Knowledge",
    sinhala: "අදහස් සහ අත්දැකීම් බෙදාගන්න",
    desc: "Share experiences, creative ideas and useful business tips.",
    badge: "COLLABORATION",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Learn & Improve",
    sinhala: "අලුත් ඩිජිටල් කුසලතා දියුණු කරගන්න",
    desc: "Get learning resources, tutorials and digital knowledge.",
    badge: "SKILL GROWTH",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Grow Together",
    sinhala: "එකමුතුවෙන් ඉදිරියටම යන්න",
    desc: "Discover opportunities and get inspiration to grow your projects and businesses.",
    badge: "OPPORTUNITIES",
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const communityCategories = [
  {
    id: "small-biz-hub",
    title: "Small Business Hub",
    sinhala: "පොඩි බිස්නස්කාරයන්ගේ කලාපය",
    desc: "Business ideas, marketing tips, and practical small business discussions.",
    topics: ["Business Ideas", "Marketing Tips", "Brand Strategy"],
    tag: "ENTREPRENEURS",
    icon: "🚀",
  },
  {
    id: "creative-corner",
    title: "Creative Corner",
    sinhala: "නිර්මාණකරුවන්ගේ කලාපය",
    desc: "Graphic design, video editing, Reels creation, and modern visual storytelling.",
    topics: ["Graphic Design", "Video & Reels", "Content Creation"],
    tag: "CREATORS",
    icon: "🎨",
  },
  {
    id: "ai-technology",
    title: "AI & Technology",
    sinhala: "AI සහ නව තාක්ෂණය",
    desc: "AI tools, smart business automation, prompts, and emerging tech trends.",
    topics: ["AI Tools", "Workflow Automation", "Tech Updates"],
    tag: "INNOVATION",
    icon: "🤖",
  },
  {
    id: "learning-dev",
    title: "Learning & Development",
    sinhala: "අධ්‍යාපන සහ කුසලතා සංවර්ධනය",
    desc: "Free guides, courses, step-by-step tutorials, and continuous skill development.",
    topics: ["Tutorials", "Study Resources", "Skill Guides"],
    tag: "EDUCATION",
    icon: "📚",
  },
  {
    id: "showcase-feedback",
    title: "Showcase & Feedback",
    sinhala: "ඔබේ නිර්මාණ ඉදිරිපත් කරන්න",
    desc: "Membersලාගේ projects, designs, websites සහ creations පෙන්වා වටිනා අදහස් ලබාගැනීම.",
    topics: ["Project Launches", "Design Reviews", "Peer Feedback"],
    tag: "SHOWCASE",
    icon: "✨",
  },
];

const joinSteps = [
  {
    step: "01",
    title: "Sign Up",
    sinhala: "Community එකට Join වෙන්න",
    desc: "Join our official Facebook Community Group (100% Free) with one click.",
  },
  {
    step: "02",
    title: "Introduce Yourself",
    sinhala: "ඔබ ගැන හඳුන්වා දෙන්න",
    desc: "Share who you are, your small business, or the creative skills you're building.",
  },
  {
    step: "03",
    title: "Connect & Grow",
    sinhala: "Discussions සහ Activities වලට එකතු වෙන්න",
    desc: "Ask questions, share your work, learn from peers, and grow together with MetriXa.",
  },
];

const membershipComparison = [
  {
    free: "Basic discussions",
    premium: "Exclusive discussions",
  },
  {
    free: "Community networking",
    premium: "Advanced resources",
  },
  {
    free: "General tips",
    premium: "Exclusive tutorials",
  },
  {
    free: "Member showcases",
    premium: "Workshops & live sessions",
  },
  {
    free: "Public learning resources",
    premium: "Premium learning content",
  },
];

const guidelines = [
  {
    rule: "01",
    title: "Respect all members",
    desc: "Treat every creator, beginner, and business owner with kindness and professionalism.",
  },
  {
    rule: "02",
    title: "No spam or unnecessary promotions",
    desc: "Avoid repetitive links or irrelevant ads. Keep self-promotion inside designated showcase threads.",
  },
  {
    rule: "03",
    title: "Share useful and relevant content",
    desc: "Post actionable insights, genuine questions, and value-driven resources.",
  },
  {
    rule: "04",
    title: "No harassment or abusive behavior",
    desc: "Zero tolerance for hate speech, bullying, or disrespectful comments.",
  },
  {
    rule: "05",
    title: "Respect intellectual property",
    desc: "Only share work you own or credit original creators properly.",
  },
];

export default function CommunityPage() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth">
      <Navbar />

      {/* Custom Keyframes for Cyberpunk Network Vector Art */}
      <style>{`
        @keyframes netFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes netPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.95); }
          50% { opacity: 0.95; transform: scale(1.05); }
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -40; }
        }
        @keyframes scanSweep {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .cm-float { animation: netFloat 4.2s ease-in-out infinite; }
        .cm-float-delay { animation: netFloat 4.8s ease-in-out 1.4s infinite; }
        .cm-pulse { animation: netPulse 3.2s ease-in-out infinite; }
        .cm-dash { animation: dashFlow 2.2s linear infinite; }
        .cm-scan { animation: scanSweep 3.8s linear infinite; }
      `}</style>

      <main className="pt-28">
        {/* ===================================================== */}
        {/* 01. COMMUNITY HERO SECTION                            */}
        {/* ===================================================== */}
        <section className="relative py-12 lg:py-20 px-6 sm:px-10 lg:px-12 overflow-hidden">
          {/* Background Ambient Glows & Cyber Grid */}
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
              {/* Left 7 Cols: Hero Content */}
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                    METRIXA COMMUNITY • CONNECT. LEARN. CREATE. GROW.
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
                  Be Part of the{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(163,230,53,0.35)]">
                    MetriXa Community.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mb-4">
                  Connect with creators, entrepreneurs and digital enthusiasts. Share ideas, learn new skills and grow together with MetriXa.
                </p>

                <p className="text-xs sm:text-sm font-bold text-lime-400/90 mb-8">
                  ✨ Small Business Owners, Digital Creators සහ අලුත් දේවල් ඉගෙනගන්න කැමති සියලු දෙනාම එකතු වන නිර්මාණශීලී අවකාශය.
                </p>

                {/* Two Hero Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#join-community"
                    onClick={(e) => scrollToSection(e, "join-community")}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[0_0_30px_rgba(163,230,53,0.5)] hover:shadow-[0_0_45px_rgba(163,230,53,0.85)] hover:-translate-y-0.5"
                  >
                    <span>Join Our Community</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>

                  <a
                    href="#community-categories"
                    onClick={(e) => scrollToSection(e, "community-categories")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] hover:border-lime-400/60 hover:bg-lime-400/10 px-8 py-4 text-xs sm:text-sm font-bold text-white transition-all"
                  >
                    <span>Explore Community</span>
                    <span className="text-lime-400">↓</span>
                  </a>
                </div>
              </div>

              {/* Right 5 Cols: Animated Cyberpunk Social Network Vector Art */}
              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 w-full rounded-[30px] border border-lime-400/30 bg-gradient-to-b from-[#0b150d]/90 to-[#050706] p-4 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_45px_rgba(163,230,53,0.14)]">
                  <div className="cm-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                  <svg viewBox="0 0 380 260" className="w-full h-full max-w-[350px]" fill="none">
                    {/* Outer Network Rings */}
                    <circle
                      cx="190"
                      cy="130"
                      r="102"
                      stroke="#a3e635"
                      strokeOpacity="0.2"
                      strokeWidth="1.2"
                      strokeDasharray="6 6"
                      className="cm-dash"
                    />
                    <circle cx="190" cy="130" r="68" stroke="#34d399" strokeOpacity="0.25" strokeWidth="1.2" />

                    {/* Animated Neural/Member Connection Lines */}
                    <path
                      d="M78 62 L148 106 M302 62 L232 106 M78 198 L148 154 M302 198 L232 154 M190 26 L190 82"
                      stroke="#a3e635"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      className="cm-dash"
                    />

                    {/* Center Core: MetriXa Nexus */}
                    <g className="cm-float">
                      <polygon
                        points="190,82 234,106 234,154 190,178 146,154 146,106"
                        fill="#09140c"
                        stroke="#a3e635"
                        strokeWidth="2.5"
                      />
                      <text x="159" y="126" fill="#ecfccb" fontSize="11" fontWeight="900" fontFamily="monospace">
                        METRIXA
                      </text>
                      <text x="163" y="142" fill="#a3e635" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                        NETWORK
                      </text>
                    </g>

                    {/* Top Center Node: Free Access */}
                    <g className="cm-pulse">
                      <rect x="145" y="10" width="90" height="30" rx="8" fill="#a3e635" />
                      <text x="157" y="29" fill="#050706" fontSize="9" fontWeight="900" fontFamily="monospace">
                        100% FREE HUB
                      </text>
                    </g>

                    {/* Top Left Member Node: Creators */}
                    <g className="cm-float-delay">
                      <rect x="20" y="38" width="84" height="44" rx="10" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="32" y="58" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        CREATORS
                      </text>
                      <text x="32" y="71" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        DESIGN &amp; REELS
                      </text>
                    </g>

                    {/* Top Right Member Node: Founders */}
                    <g className="cm-pulse">
                      <rect x="276" y="38" width="84" height="44" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="288" y="58" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        FOUNDERS
                      </text>
                      <text x="288" y="71" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        SMALL BIZ HUB
                      </text>
                    </g>

                    {/* Bottom Left Member Node: AI & Tech */}
                    <g className="cm-pulse">
                      <rect x="20" y="178" width="84" height="44" rx="10" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="32" y="198" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        AI &amp; TECH
                      </text>
                      <text x="32" y="211" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        AUTOMATION
                      </text>
                    </g>

                    {/* Bottom Right Member Node: Learners */}
                    <g className="cm-float-delay">
                      <rect x="276" y="178" width="84" height="44" rx="10" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="288" y="198" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">
                        LEARNERS
                      </text>
                      <text x="288" y="211" fill="#a3e635" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        SKILL GROWTH
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 02. WHAT YOU'LL GET (4 BENTO CARDS)                   */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                01 • MEMBER BENEFITS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                What You&apos;ll <span className="text-lime-400">Get</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-3">
                Built equally for <strong className="text-zinc-200">Small Business Owners</strong> and{" "}
                <strong className="text-zinc-200">Digital Creators</strong> to collaborate and thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
              {whatYouGet.map((item) => (
                <div
                  key={item.number}
                  className="group relative rounded-3xl border border-lime-400/20 bg-zinc-950/85 p-8 backdrop-blur-xl transition-all duration-300 hover:border-lime-400/75 hover:-translate-y-1 shadow-[0_15px_40px_rgba(0,0,0,0.65)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-13 w-13 rounded-2xl border border-lime-400/35 bg-lime-400/10 flex items-center justify-center group-hover:scale-110 group-hover:border-lime-400 transition-all">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-lime-300">
                        {item.badge}
                      </span>
                      <span className="font-mono text-2xl font-black text-lime-400/30 group-hover:text-lime-400 transition-colors">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-lime-400/90 mt-1 mb-3">
                    {item.sinhala}
                  </p>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 03. COMMUNITY CATEGORIES (5 CORE HUBS)                */}
        {/* ===================================================== */}
        <section id="community-categories" className="scroll-mt-28 relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                  02 • DISCUSSION ZONES
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Community <span className="text-lime-400">Categories</span>
                </h2>
              </div>
              <p className="text-sm text-zinc-400 max-w-md">
                Dedicated spaces tailored for business strategy, creative arts, AI technology, and project feedback.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityCategories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`group relative rounded-3xl border border-lime-400/20 bg-zinc-950/85 p-7 backdrop-blur-xl hover:border-lime-400 transition-all duration-300 flex flex-col justify-between ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/35 bg-lime-400/10 text-2xl">
                        {cat.icon}
                      </span>
                      <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-lime-400">
                        {cat.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-lime-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-bold text-lime-400/90 mt-1 mb-3">
                      {cat.sinhala}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {cat.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-zinc-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 04. HOW TO JOIN & COMMUNITY PLATFORMS (FB + DISCORD)  */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                03 • EASY ONBOARDING
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                How to <span className="text-lime-400">Join</span>
              </h2>
            </div>

            {/* 3 Onboarding Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {joinSteps.map((s) => (
                <div
                  key={s.step}
                  className="relative rounded-3xl border border-white/10 bg-zinc-950/75 p-7 hover:border-lime-400/60 transition-all"
                >
                  <div className="font-mono text-3xl font-black text-lime-400 mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-black text-white">
                    {s.title}
                  </h3>
                  <p className="text-xs font-bold text-lime-400/90 mt-1 mb-3">
                    {s.sinhala}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Platform Hub Cards: Facebook Group (Active) + Discord Server (Coming Soon) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {/* Platform 1: Official Facebook Group (Primary Starting Platform) */}
              <div className="rounded-[30px] border-2 border-lime-400 bg-gradient-to-b from-[#0d1910] to-[#070b08] p-8 shadow-[0_20px_55px_rgba(163,230,53,0.18)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="rounded-full bg-lime-400 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-zinc-950">
                      ★ BEST STARTING OPTION • ACTIVE NOW
                    </span>
                    <span className="text-xs font-bold text-lime-400">100% Free</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    MetriXa Facebook Group
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-lime-300 mb-4">
                    Free community discussions, business tips සහ member interaction.
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    Our primary community hub where small business owners and digital creators connect daily, share ideas, ask questions, and showcase their work.
                  </p>
                </div>

                <a
                  href="#join-community"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 py-4 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[0_0_25px_rgba(163,230,53,0.5)]"
                >
                  <span>Join Facebook Community Group</span>
                  <span>→</span>
                </a>
              </div>

              {/* Platform 2: Official Discord Server (Future Expansion) */}
              <div className="rounded-[30px] border border-white/15 bg-zinc-950/80 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="rounded-full border border-lime-400/40 bg-lime-400/15 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-lime-300">
                      PHASE 2 EXPANSION • COMING SOON
                    </span>
                    <span className="text-xs font-bold text-zinc-400">Creator Channels</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    MetriXa Discord Server
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-emerald-300 mb-4">
                    Advanced channels, live creator discussions සහ future premium community.
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    As our community grows, we will unlock our dedicated Discord server featuring real-time voice rooms, topic-specific channels, and live workshops.
                  </p>
                </div>

                <Link
                  href="/contact?interest=discord-waitlist"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 hover:bg-lime-400 hover:text-zinc-950 py-4 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-lime-400 transition-all"
                >
                  <span>Get Notified When Discord Launches</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 05. COMMUNITY GUIDELINES                              */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                  04 • SAFE &amp; POSITIVE ENVIRONMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Community <span className="text-lime-400">Guidelines</span>
                </h2>
              </div>
              <p className="text-sm text-zinc-400 max-w-md">
                To keep MetriXa valuable and welcoming for everyone, all members follow these 5 core rules.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {guidelines.map((g) => (
                <div
                  key={g.rule}
                  className="rounded-2xl border border-lime-400/20 bg-zinc-950/80 p-6 hover:border-lime-400/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xl font-black text-lime-400">
                        #{g.rule}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-lime-400" />
                    </div>
                    <h3 className="text-base font-black text-white mb-2">
                      {g.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 06. FREE & PREMIUM MEMBERSHIP COMPARISON              */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                05 • MEMBERSHIP TIERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
                Free &amp; Premium <span className="text-lime-400">Membership</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                දැනට සියලුම සාමාජිකයන්ට <strong className="text-lime-400">Free Community Membership</strong> එක සම්පූර්ණයෙන්ම විවෘතයි. Active Members පිරිසක් ගොඩනැගුණු පසු Premium Membership හඳුන්වා දෙනු ලැබේ.
              </p>
            </div>

            {/* Comparison Table Card */}
            <div className="rounded-[30px] border border-lime-400/30 bg-zinc-950/90 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.75)]">
              <div className="grid grid-cols-2 border-b border-white/10 bg-[#08120a]">
                <div className="p-6 sm:p-8 border-r border-white/10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-400 px-3 py-0.5 text-[10px] font-black uppercase text-zinc-950 mb-2">
                    ACTIVE NOW • 100% FREE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Free Community
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Open to all creators &amp; small business owners
                  </p>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 bg-lime-400/15 px-3 py-0.5 text-[10px] font-black uppercase text-lime-300 mb-2">
                    COMING LATER • FUTURE TIER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Premium Community
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Advanced mentorship, workshops &amp; pro resources
                  </p>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-white/10">
                {membershipComparison.map((row, i) => (
                  <div key={i} className="grid grid-cols-2 text-xs sm:text-sm">
                    <div className="p-4 sm:p-5 border-r border-white/10 flex items-center gap-3 text-zinc-200 font-semibold">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400/20 text-lime-400 font-black text-xs">
                        ✓
                      </span>
                      <span>{row.free}</span>
                    </div>

                    <div className="p-4 sm:p-5 flex items-center gap-3 text-zinc-300 font-semibold bg-lime-400/[0.02]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-lime-400/40 bg-lime-400/10 text-lime-300 font-black text-xs">
                        ★
                      </span>
                      <span>{row.premium}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 07. FINAL COMMUNITY CTA ("Your Growth Starts...")     */}
        {/* ===================================================== */}
        <section id="join-community" className="scroll-mt-28 relative py-20 lg:py-24 px-6 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="relative rounded-[34px] border-2 border-lime-400/45 bg-gradient-to-b from-[#0c180f] via-[#070b08] to-[#050706] px-6 py-16 sm:px-14 sm:py-20 text-center overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_55px_rgba(163,230,53,0.16)]">
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-lime-400/20 blur-[120px] rounded-full" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 mb-6">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-lime-400">
                    06 • JOIN METRIXA COMMUNITY
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.1] mb-5">
                  Your Growth Starts With a{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
                    Community.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mx-auto mb-9">
                  Join a growing network of people who create, learn, share and build together.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact?join=community"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-9 py-4 sm:py-4.5 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[0_0_35px_rgba(163,230,53,0.6)] hover:shadow-[0_0_50px_rgba(163,230,53,0.95)] hover:-translate-y-0.5"
                  >
                    <span>Join the Community (Free)</span>
                    <span className="text-base transition-transform group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}