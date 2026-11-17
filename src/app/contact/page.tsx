"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { storeCatalogueItems, formatStoreOptionLabel } from "@/data/storeItems";

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

// Automatically built from src/data/storeItems.ts
const storeOptions = storeCatalogueItems.map(formatStoreOptionLabel);

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

const packageParamMap: Record<string, string> = {
  "digital-starter-7500": serviceOptions[0],
  "mini-website": serviceOptions[1],
  "social-media-setup": serviceOptions[2],
  "video-content": serviceOptions[3],
  "content-bundles": serviceOptions[5],
};

const faqs = [
  {
    q: "How fast can you deliver a Small Business Starter Package?",
    a: "Social media setups and post designs typically take 1–2 days, while Mini Websites and complete Digital Starter Bundles are delivered within 3–5 business days.",
  },
  {
    q: "How do I receive Digital Store tools like CapCut Pro or QuillBot Pro?",
    a: "Once you send your order via WhatsApp and complete verification, your Pro access credentials or direct email upgrade are activated within minutes with Full Warranty.",
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

function ContactFormSection() {
  const searchParams = useSearchParams();
  const [inquiryType, setInquiryType] = useState<InquiryType>("services");
  const [selectedItem, setSelectedItem] = useState<string>(serviceOptions[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Auto-select Category & Tool/Package based on URL query parameters
  useEffect(() => {
    const storeKey = searchParams.get("store") || searchParams.get("tool");
    const packageKey = searchParams.get("package");
    const interestKey = searchParams.get("interest");
    const joinKey = searchParams.get("join");

    if (storeKey) {
      setInquiryType("store");
      const matchedTool = storeCatalogueItems.find((item) => item.id === storeKey);
      if (matchedTool) {
        setSelectedItem(formatStoreOptionLabel(matchedTool));
      } else if (storeOptions.length > 0) {
        setSelectedItem(storeOptions[0]);
      }
    } else if (packageKey) {
      setInquiryType("services");
      if (packageParamMap[packageKey]) {
        setSelectedItem(packageParamMap[packageKey]);
      } else {
        setSelectedItem(serviceOptions[0]);
      }
    } else if (interestKey === "courses-waitlist") {
      setInquiryType("courses");
      setSelectedItem(courseOptions[0]);
    } else if (joinKey === "community" || interestKey === "discord-waitlist") {
      setInquiryType("community");
      setSelectedItem(
        interestKey === "discord-waitlist" ? communityOptions[1] : communityOptions[0]
      );
    }
  }, [searchParams]);

  const handleTypeChange = (type: InquiryType) => {
    setInquiryType(type);
    if (type === "services") setSelectedItem(serviceOptions[0]);
    if (type === "store") setSelectedItem(storeOptions[0] || "");
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
      `⚡ *NEW METRIXA ORDER / INQUIRY* ⚡`,
      `--------------------------------`,
      `👤 *Name:* ${name || "Not provided"}`,
      `📱 *Phone/WhatsApp:* ${phone || "Not provided"}`,
      `✉️ *Email:* ${email || "Not provided"}`,
      `📂 *Category:* ${inquiryType.toUpperCase()}`,
      `🎯 *Selected Item:* ${selectedItem}`,
      `💬 *Details:* ${message || "Please share payment & activation details."}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
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

        {/* 2. Select Specific Package or Tool (Auto-Selected!) */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300">
              2. Select Package / Product (පැකේජය හෝ මෙවලම)
            </label>
            <span className="rounded-md bg-lime-400/15 border border-lime-400/40 px-2 py-0.5 text-[10px] font-bold text-lime-300">
              ✓ Auto-Selected
            </span>
          </div>
          <select
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
            className="w-full rounded-2xl border-2 border-lime-400/50 bg-[#050706] px-4 py-3.5 text-xs sm:text-sm font-bold text-white focus:border-lime-400 focus:outline-none transition-colors shadow-[0_0_20px_rgba(163,230,53,0.12)]"
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
            placeholder="Tell us about your requirements or any questions you have..."
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
              `MetriXa Order: ${selectedItem}`
            )}&body=${encodeURIComponent(
              `Name: ${name}\nPhone: ${phone}\nSelected: ${selectedItem}\n\nDetails:\n${message}`
            )}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] hover:border-lime-400/60 px-7 py-4 text-xs sm:text-sm font-bold text-white transition-all"
          >
            <span>✉ Send via Email</span>
          </a>
        </div>

        {submitted && (
          <div className="rounded-2xl border border-lime-400/50 bg-lime-400/15 px-4 py-3 text-xs font-bold text-lime-300">
            ✓ Opening WhatsApp with your selected item ({selectedItem})!
          </div>
        )}
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050706] text-white scroll-smooth overflow-x-hidden">
      <Navbar />

      <main className="pt-28">
        {/* 1. CONTACT HERO */}
        <section className="relative py-12 lg:py-16 px-6 sm:px-10 lg:px-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/3 w-[560px] h-[340px] bg-lime-400/12 blur-[150px] rounded-full" />
            <div className="absolute bottom-10 right-1/4 w-[450px] h-[280px] bg-emerald-500/10 blur-[140px] rounded-full" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="max-w-3xl text-left">
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

              <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed">
                Ready to order a Small Business Starter Package, unlock Pro Digital Tools, or join our learning community? Select what you need below and connect with us directly.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FORM + DIRECT CHANNELS */}
        <section className="relative py-12 px-6 sm:px-10 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <Suspense
                fallback={
                  <div className="lg:col-span-8 rounded-[32px] border border-lime-400/20 bg-zinc-950/90 p-10 text-center text-sm text-zinc-400">
                    Loading order configurator...
                  </div>
                }
              >
                <ContactFormSection />
              </Suspense>

              {/* RIGHT 4 COLUMNS */}
              <div className="lg:col-span-4 space-y-6">
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

                {/* Auto-Synced Digital Store Rates Summary */}
                <div className="rounded-[28px] border border-white/10 bg-zinc-950/85 p-7">
                  <h3 className="text-base font-black text-white mb-1">
                    Digital Store Rates
                  </h3>
                  <p className="text-xs text-lime-400 font-bold mb-4">
                    100% Full Warranty Included
                  </p>

                  <div className="space-y-2.5 text-xs">
                    {storeCatalogueItems.map((tool) => (
                      <div
                        key={tool.id}
                        className="flex items-center justify-between py-2 border-b border-white/5 last:border-none"
                      >
                        <span className="text-zinc-300">{tool.title}</span>
                        <span className="font-black text-lime-400">
                          {tool.price} {tool.billing}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAQ */}
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