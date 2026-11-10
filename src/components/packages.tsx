import { Check } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { packages } from "@/lib/site";

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Starter packages"
          title="A clear first project for a small business"
          description="These packages are starting points, not a fixed price list. Scope and cost are agreed with you before any work begins."
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <li
              key={item.name}
              className={`flex flex-col rounded-3xl border p-6 sm:p-7 ${
                item.featured
                  ? "border-zinc-950 bg-zinc-950 text-white"
                  : "border-zinc-200 bg-[#f6f5f8] text-zinc-950"
              }`}
            >
              {item.featured ? (
                <p className="text-xs font-semibold tracking-[0.16em] text-violet-300 uppercase">
                  A practical starting point
                </p>
              ) : (
                <p className="text-xs font-semibold tracking-[0.16em] text-violet-700 uppercase">
                  Starter
                </p>
              )}
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {item.name}
              </h3>
              <p
                className={`mt-3 text-sm leading-6 ${
                  item.featured ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {item.summary}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-6">
                    <Check
                      aria-hidden="true"
                      size={16}
                      className={`mt-1 shrink-0 ${
                        item.featured ? "text-violet-300" : "text-violet-700"
                      }`}
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href="#contact"
                  variant={item.featured ? "primary" : "secondary-light"}
                >
                  Ask about this package
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
