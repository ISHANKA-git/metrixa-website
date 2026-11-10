import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { demoProjects } from "@/lib/site";

const swatches = [
  "from-zinc-900 to-violet-800",
  "from-violet-700 to-zinc-900",
  "from-zinc-800 to-zinc-950",
  "from-violet-900 to-zinc-800",
  "from-zinc-950 to-violet-700",
  "from-zinc-700 to-zinc-950",
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Demo projects, clearly labelled"
          description="These are sample concepts. They show the type of page, brand, or flow MetriXa can design. They are not completed client work and they do not report results."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((project, index) => (
            <li
              key={project.title}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-[#f6f5f8]"
            >
              <div
                className={`relative h-40 bg-gradient-to-br ${swatches[index]} p-5`}
                aria-hidden="true"
              >
                <div className="absolute inset-x-5 bottom-5 space-y-2">
                  <div className="h-2 w-2/3 rounded-full bg-white/80" />
                  <div className="h-2 w-full rounded-full bg-white/25" />
                  <div className="h-2 w-1/2 rounded-full bg-white/25" />
                </div>
              </div>
              <div className="p-5">
                <p className="inline-flex rounded-full bg-violet-100 px-2.5 py-1 text-xs font-semibold text-violet-800">
                  Demo project
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-950">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-violet-800">
                  {project.kind}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {project.description}
                </p>
                <p className="mt-3 text-sm text-zinc-500">{project.shows}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
