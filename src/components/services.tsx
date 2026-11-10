import {
  Bot,
  CalendarCheck,
  Globe,
  MessageCircle,
  Palette,
  PanelsTopLeft,
  Share2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { services, type ServiceIcon } from "@/lib/site";

const icons: Record<ServiceIcon, LucideIcon> = {
  palette: Palette,
  share: Share2,
  landing: PanelsTopLeft,
  globe: Globe,
  calendar: CalendarCheck,
  bot: Bot,
  whatsapp: MessageCircle,
  workflow: Workflow,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#f6f5f8] py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What MetriXa can help you set up"
          description="Eight services, from a first logo to a website and the messages that follow an enquiry. You can start with one."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <li
                key={service.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-700">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-zinc-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
