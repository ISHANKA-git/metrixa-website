"use client";

import React from "react";
import Link from "next/link";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Courses", href: "/courses" },
  { name: "Digital Store", href: "/digital-store" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#040605] text-white border-t border-lime-400/20 pt-16 pb-10 px-6 sm:px-10 lg:px-12 overflow-hidden">
      {/* Subtle Bottom Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-lime-400/10 blur-[130px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* COLUMN 1: Brand (Logo + Short Description) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="relative flex items-center justify-center h-11 w-10 bg-lime-400 p-0.5 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] shadow-[0_0_20px_rgba(163,230,53,0.45)]">
                <img
                  src="/logo.jpg"
                  alt="MetriXa Logo"
                  className="h-full w-full object-cover scale-125 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
                />
              </div>
              <span className="font-sans text-2xl font-black tracking-wide text-white leading-none">
                Metri<span className="text-lime-400">Xa</span>
              </span>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              Your all-in-one digital partner combining creative design, smart business solutions, online courses, and premium digital tools to help you build, create, and grow.
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-lime-400">
              <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
              <span>DESIGN. CREATE. LEARN. GROW.</span>
            </div>
          </div>

          {/* COLUMN 2: Explore */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime-400 mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-lime-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-lime-400/0 group-hover:bg-lime-400 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime-400 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-lime-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-lime-400/0 group-hover:bg-lime-400 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Connect (Social Media Links + Email) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime-400 mb-5">
              Connect
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Have a project in mind or need digital tools? Reach out to our team anytime.
            </p>

            {/* Email Link */}
            <a
              href="mailto:hello@metrixa.com"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-lime-400/50 hover:bg-lime-400/10 px-4 py-2.5 text-xs sm:text-sm font-bold text-zinc-200 hover:text-lime-400 transition-all mb-6"
            >
              <span className="text-lime-400">✉</span>
              <span>hello@metrixa.com</span>
            </a>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="h-10 w-10 rounded-xl border border-white/10 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-zinc-950 hover:bg-lime-400 hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 MetriXa. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-lime-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-lime-400 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}