import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { reasons } from "@/lib/site";

export function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-20 bg-[#f6f5f8] py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why MetriXa"
          title="Straightforward work for growing businesses"
          description="The reasons below describe how MetriXa is set up. They are not performance claims or client results."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="font-display text-2xl text-violet-700 italic">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {reason.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
