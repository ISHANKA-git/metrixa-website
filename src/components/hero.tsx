import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

const previewItems = [
  "Logo & brand",
  "Business website",
  "WhatsApp reply",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl"
      />
      <Container className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="rise">
          <p className="text-sm font-medium text-violet-300">
            Digital solutions and AI automation
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            A sharper brand, and a simpler way to{" "}
            <span className="font-display text-violet-200 italic">work</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            MetriXa is a full-service studio for small businesses, startups, and
            growing companies. We design brands, build websites, and set up
            practical AI and WhatsApp automation in Sri Lanka and internationally.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">
              Start a conversation
              <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              View services
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {previewItems.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rise rise-delay" aria-hidden="true">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
              <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
                Sample layout
              </p>
              <p className="mt-3 font-display text-3xl text-white italic">
                North & Pine
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                A fictional shop used only to show a brand and page layout.
              </p>
              <div className="mt-5 flex gap-2">
                <span className="h-8 w-8 rounded-full bg-violet-500" />
                <span className="h-8 w-8 rounded-full bg-white" />
                <span className="h-8 w-8 rounded-full bg-zinc-700" />
              </div>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
                <p className="text-xs text-zinc-400">Page section</p>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-4/5 rounded-full bg-white/80" />
                  <div className="h-2 w-full rounded-full bg-white/20" />
                  <div className="h-2 w-2/3 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
                <p className="text-xs text-zinc-400">Sample reply</p>
                <p className="mt-3 rounded-2xl rounded-tl-sm bg-violet-600/90 px-3 py-2 text-sm text-white">
                  Thanks for your message. How can we help?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
