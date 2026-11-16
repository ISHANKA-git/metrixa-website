"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ඔබේ WhatsApp අංකය මෙතැනට දමන්න (Country code 94 සමඟ, + ලකුණ නැතිව)
const WHATSAPP_NUMBER = "94700000000";

type InquiryType = "services" | "store" | "courses" | "community";

const serviceOptions = [
  "05. Small Business Digital Starter (Rs. 7,500/=) — Best Value",
  "04. Mini Website Creation (Rs. 5,000/=)",
  "01. Social Media Setup & Optimization (FB Rs. 1,000/= | +IG/TT Rs. 500)",
  "02. Video Content Creation — Short Reel (15s Rs. 1,000/= | 30s Rs. 1,500/=)",
  "02. Video Content Creation — Promo Video (15s Rs. 2,000/= | 30s Rs. 3,000/=)",
  "03. Social Media Content Bundles (Rs. 250/= per post)",
  "Pro Business & AI Automation (Custom Inquiry)",
];

const storeOptions = [
  "CapCut Pro — Instant Activation",
  "QuillBot Pro — Instant Access",
  "Figma Professional — Direct Email Upgrade",
  "Digital Products / E-Books / Templates",
];

const courseOptions = [
  "Free Community Courses Waitlist",
  "Paid Pro Masterclasses Waitlist",
  "Web, Design, Video or AI Learning Track",
];

const communityOptions = [
  "Join MetriXa Free Community (Facebook Group)",
  "Discord Server Early Access",
  "General Partnership / Other Inquiry",
];

const faqs = [
  {
    q: "How fast can you deliver a Small Business Starter Package?",
    a: "Social media setups and post designs typically take 1–2 days, while Mini Websites and complete Digital Starter Bundles are delivered within 3–5 business days.",
  },
  {
    q: "How do I receive Digital Store tools like CapCut Pro or QuillBot Pro?",
    a: "Once you send your order via WhatsApp and complete verification, your Pro access credentials or direct email upgrade are activated within minutes.",
  },
  {
    q: "Do I have to pay extra for Domain & Hosting in the Mini Website package?",
    a: "No! Our Rs. 5,000/= Mini Website Creation package and Rs. 7,500/= Digital Starter Bundle both include a Free Subdomain/Domain setup and Free Ultra-Fast Cloud Hosting.",
  },
  {
    q: "Can I customize a package for my business?",
    a: "Absolutely. Select your closest option in the form below and mention your custom requirements—we will tailor a plan just for you.",
  },
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("services");
  const [selectedItem, setSelectedItem] = useState<string>(serviceOptions[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleTypeChange = (type: InquiryType) => {
    setInquiryType(type);
    if (type === "services") setSelectedItem(serviceOptions[0]);
    if (type === "store") setSelectedItem(storeOptions[0]);
    if (type === "courses") setSelectedItem(courseOptions[0]);
    if (type === "community") setSelectedItem(communityOptions[0]);
  };

  const currentOptions =
    inquiryType === "services"
      ? serviceOptions
      : inquiryType === "store"
      ? storeOptions
      : inquiryType === "courses"
      ? courseOptions
      : communityOptions;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = [
      `⚡ *NEW METRIXA INQUIRY* ⚡`,
      `--------------------------------`,
      `👤 *Name:* ${name || "Not provided"}`,
      `📱 *Phone/WhatsApp:* ${phone || "Not provided"}`,
      `✉️ *Email:* ${email || "Not provided"}`,
      `📂 *Category:* ${inquiryType.toUpperCase()}`,
      `🎯 *Selected Option:* ${selectedItem}`,
      `💬 *Details:* ${message || "Please share more details."}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth">
      <Navbar />

      {/* Custom Keyframes for Cyberpunk Contact Vector Art */}
      <style>{`
        @keyframes ctFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes ctPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.96); }
          50% { opacity: 0.95; transform: scale(1.04); }
        }
        @keyframes ctDash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes ctScan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.65; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .ct-float { animation: ctFloat 4.2s ease-in-out infinite; }
        .ct-float-delay { animation: ctFloat 4.8s ease-in-out 1.4s infinite; }
        .ct-pulse { animation: ctPulse 3.2s ease-in-out infinite; }
        .ct-dash { animation: ctDash 2.2s linear infinite; }
        .ct-scan { animation: ctScan 3.8s linear infinite; }
      `}</style>

      <main className="pt-28">
        {/* ===================================================== */}
        {/* 1. CONTACT HERO SECTION WITH ANIMATED VECTOR ART      */}
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
                    GET STARTED WITH METRIXA • 24/7 RESPONSE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
                  Let&apos;s Build, Create &amp;{" "}
                  <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(163,230,53,0.35)]">
                    Grow Together.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mb-4">
                  Ready to order a Small Business Starter Package, unlock Pro Digital Tools, or join our learning community? Select what you need below and connect with us directly.
                </p>

                <p className="text-xs sm:text-sm font-bold text-lime-400/90">
                  ✨ ඔබට අවශ්‍ය සේවාව හෝ ඩිජිටල් මෙවලම පහතින් තෝරා තත්පර කිහිපයකින් WhatsApp හෝ Email හරහා අප හා සම්බන්ධ වන්න.
                </p>
              </div>

              {/* Right 5 Cols: Animated Cyberpunk Direct Link Vector Art */}
              <div className="lg:col-span-5">
                <div className="relative h-60 sm:h-64 w-full rounded-[28px] border border-lime-400/30 bg-gradient-to-b from-[#0b150d]/90 to-[#050706] p-4 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(163,230,53,0.12)]">
                  <div className="ct-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" />

                  <svg viewBox="0 0 380 220" className="w-full h-full max-w-[340px]" fill="none">
                    <circle
                      cx="190"
                      cy="110"
                      r="86"
                      stroke="#a3e635"
                      strokeOpacity="0.2"
                      strokeWidth="1.2"
                      strokeDasharray="6 6"
                      className="ct-dash"
                    />
                    <path
                      d="M85 65 L145 98 M295 65 L235 98 M85 155 L145 122 M295 155 L235 122"
                      stroke="#a3e635"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      className="ct-dash"
                    />

                    {/* Center Hub */}
                    <g className="ct-float">
                      <polygon
                        points="190,65 232,89 232,135 190,159 148,135 148,89"
                        fill="#09140c"
                        stroke="#a3e635"
                        strokeWidth="2.4"
                      />
                      <text x="160" y="108" fill="#ecfccb" fontSize="10.5" fontWeight="900" fontFamily="monospace">
                        INSTANT
                      </text>
                      <text x="160" y="124" fill="#a3e635" fontSize="10" fontWeight="900" fontFamily="monospace">
                        CONNECT
                      </text>
                    </g>

                    {/* WhatsApp Node */}
                    <g className="ct-pulse">
                      <rect x="20" y="38" width="84" height="40" rx="9" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="30" y="62" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                        WHATSAPP
                      </text>
                    </g>

                    {/* Email Node */}
                    <g className="ct-float-delay">
                      <rect x="276" y="38" width="84" height="40" rx="9" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="290" y="62" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                        EMAIL 24/7
                      </text>
                    </g>

                    {/* Fast Delivery Node */}
                    <g className="ct-float-delay">
                      <rect x="20" y="142" width="84" height="40" rx="9" fill="#0b1710" stroke="#34d399" strokeWidth="1.8" />
                      <text x="29" y="166" fill="#a3e635" fontSize="9" fontWeight="900" fontFamily="monospace">
                        FAST SETUP
                      </text>
                    </g>

                    {/* Support Node */}
                    <g className="ct-pulse">
                      <rect x="276" y="142" width="84" height="40" rx="9" fill="#0b1710" stroke="#bef264" strokeWidth="1.8" />
                      <text x="288" y="166" fill="#a3e635" fontSize="9" fontWeight="900" fontFamily="monospace">
                        PRO GUIDE
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 2. INTERACTIVE ORDER & CONTACT FORM + DIRECT CHANNELS */}
        {/* ===================================================== */}
        <section className="relative py-12 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT 8 COLUMNS: INTERACTIVE PROJECT / ORDER FORM */}
              <div className="lg:col-span-8 rounded-[32px] border border-lime-400/30 bg-zinc-950/90 p-7 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <div className="mb-8">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime-400 block mb-1">
                    STEP-BY-STEP REQUEST
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    Configure Your <span className="text-lime-400">Order or Inquiry</span>
                  </h2>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  {/* 1. Select Category Type */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-3">
                      1. What are you interested in? (අවශ්‍ය අංශය තෝරන්න)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: "services", label: "Services", icon: "🚀" },
                        { id: "store", label: "Digital Store", icon: "⚡" },
                        { id: "courses", label: "Courses", icon: "🎓" },
                        { id: "community", label: "Community", icon: "🤝" },
                      ].map((tab) => {
                        const active = inquiryType === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => handleTypeChange(tab.id as InquiryType)}
                            className={`rounded-2xl border p-3.5 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                              active
                                ? "border-lime-400 bg-lime-400 text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.45)]"
                                : "border-white/10 bg-[#050706] text-zinc-300 hover:border-lime-400/50"
                            }`}
                          >
                            <span>{tab.icon}</span>
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Select Specific Package or Tool */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2.5">
                      2. Select Package / Product (පැකේජය හෝ මෙවලම තෝරන්න)
                    </label>
                    <select
                      value={selectedItem}
                      onChange={(e) => setSelectedItem(e.target.value)}
                      className="w-full rounded-2xl border border-lime-400/35 bg-[#050706] px-4 py-3.5 text-xs sm:text-sm font-bold text-white focus:border-lime-400 focus:outline-none transition-colors"
                    >
                      {currentOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#070b08] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 3. Name & WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                        Your Name (ඔබේ නම) *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Kasun Perera"
                        className="w-full rounded-2xl border border-white/15 bg-[#050706] px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ex: 077 123 4567"
                        className="w-full rounded-2xl border border-white/15 bg-[#050706] px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* 4. Optional Email */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/15 bg-[#050706] px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                    />
                  </div>

                  {/* 5. Project / Order Notes */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                      Project Details or Message (වැඩිදුර විස්තර)
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your business, brand colors, or any questions you have..."
                      className="w-full rounded-2xl border border-white/15 bg-[#050706] p-4 text-sm text-white placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[0_0_30px_rgba(163,230,53,0.5)] hover:shadow-[0_0_45px_rgba(163,230,53,0.85)] cursor-pointer"
                    >
                      <span>💬 Send Order via WhatsApp</span>
                      <span>→</span>
                    </button>

                    <a
                      href={`mailto:hello@metrixa.com?subject=${encodeURIComponent(
                        `MetriXa Inquiry: ${selectedItem}`
                      )}&body=${encodeURIComponent(
                        `Name: ${name}\nPhone: ${phone}\nPackage/Tool: ${selectedItem}\n\nDetails:\n${message}`
                      )}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] hover:border-lime-400/60 px-7 py-4 text-xs sm:text-sm font-bold text-white transition-all"
                    >
                      <span>✉ Send via Email</span>
                    </a>
                  </div>

                  {submitted && (
                    <div className="rounded-2xl border border-lime-400/50 bg-lime-400/15 px-4 py-3 text-xs font-bold text-lime-300">
                      ✓ Opening WhatsApp with your formatted order details! If it didn&apos;t open automatically, you can also reach us via email at hello@metrixa.com.
                    </div>
                  )}
                </form>
              </div>

              {/* RIGHT 4 COLUMNS: DIRECT CONTACT CARDS & PRICE SUMMARY */}
              <div className="lg:col-span-4 space-y-6">
                {/* Direct Contact Card */}
                <div className="rounded-[28px] border border-lime-400/30 bg-gradient-to-b from-[#0c180f] to-[#070b08] p-7 shadow-[0_15px_45px_rgba(163,230,53,0.12)]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-400 px-3 py-0.5 text-[10px] font-black uppercase text-zinc-950 mb-4">
                    FASTEST CHANNEL
                  </span>
                  <h3 className="text-xl font-black text-white mb-2">
                    Direct WhatsApp &amp; Email
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                    Need a quick quote or instant tool activation? Reach out directly to our team anytime.
                  </p>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full rounded-2xl border border-lime-400/40 bg-black/50 hover:bg-lime-400 hover:text-zinc-950 p-4 flex items-center justify-between transition-all group"
                    >
                      <div>
                        <div className="text-[11px] font-bold text-lime-400 group-hover:text-zinc-900">
                          WHATSAPP CHAT
                        </div>
                        <div className="text-sm font-black text-white group-hover:text-zinc-950">
                          Instant Support &amp; Orders
                        </div>
                      </div>
                      <span className="text-lg font-black text-lime-400 group-hover:text-zinc-950">
                        →
                      </span>
                    </a>

                    <a
                      href="mailto:hello@metrixa.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/50 hover:border-lime-400/50 p-4 flex items-center justify-between transition-all"
                    >
                      <div>
                        <div className="text-[11px] font-bold text-zinc-400">
                          OFFICIAL EMAIL
                        </div>
                        <div className="text-sm font-black text-white">
                          hello@metrixa.com
                        </div>
                      </div>
                      <span className="text-lime-400 font-black">✉</span>
                    </a>
                  </div>
                </div>

                {/* Quick Starter Price Cheat-Sheet */}
                <div className="rounded-[28px] border border-white/10 bg-zinc-950/85 p-7">
                  <h3 className="text-base font-black text-white mb-1">
                    Starter Package Rates
                  </h3>
                  <p className="text-xs text-lime-400 font-bold mb-4">
                    පොඩි බිස්නස්කාරයන්ටම හදපු මිල ගණන්
                  </p>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-zinc-300">FB Page Setup</span>
                      <span className="font-black text-lime-400">Rs. 1,000/=</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-zinc-300">Short Reel Editing (15s/30s)</span>
                      <span className="font-black text-lime-400">Rs. 1,000 - 1,500</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-zinc-300">Promo Video (15s/30s)</span>
                      <span className="font-black text-lime-400">Rs. 2,000 - 3,000</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-zinc-300">Social Post + Caption</span>
                      <span className="font-black text-lime-400">Rs. 250/=</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-zinc-300">Mini Website (Free Host)</span>
                      <span className="font-black text-lime-400">Rs. 5,000/=</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-bold text-white">Digital Starter All-in-One</span>
                      <span className="rounded-lg bg-lime-400 px-2 py-0.5 font-black text-zinc-950">
                        Rs. 7,500/=
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ)                   */}
        {/* ===================================================== */}
        <section className="relative py-16 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-lime-400 block mb-2">
                GOT QUESTIONS?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Frequently Asked <span className="text-lime-400">Questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-lime-400/20 bg-zinc-950/80 p-7 hover:border-lime-400/60 transition-all"
                >
                  <h3 className="text-base sm:text-lg font-black text-white mb-2.5">
                    {f.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}