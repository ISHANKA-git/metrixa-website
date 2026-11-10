import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { navLinks, services, siteConfig } from "@/lib/site";

export function Footer() {

  return (
    <footer className="border-t border-white/10 bg-black text-zinc-300">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6">
            Full-service digital solutions and AI automation for small
            businesses, startups, and growing companies.
          </p>
          <p className="mt-3 text-sm text-zinc-400">Sri Lanka · International</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>
                <a href="#services" className="text-sm hover:text-white">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#contact" className="hover:text-white">
                Contact form
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li className="text-zinc-400">Based in Sri Lanka</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {siteConfig.copyrightYear} MetriXa. All rights reserved.</p>
          <p>Demo projects on this site are concepts, not client case studies.</p>
        </Container>
      </div>
    </footer>
  );
}
