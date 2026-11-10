"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="#contact">Contact Us</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/10 bg-zinc-950 md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-base text-zinc-100 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <ButtonLink href="#contact" onClick={closeMenu}>
                Contact Us
              </ButtonLink>
            </div>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
