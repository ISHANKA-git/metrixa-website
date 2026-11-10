export const siteConfig = {
  name: "MetriXa",
  title: "MetriXa | Digital Solutions & AI Automation",
  description:
    "MetriXa is a full-service digital solutions and AI automation agency for small businesses, startups, and growing companies in Sri Lanka and internationally.",
  /**
   * Digits only, with country code and no + or spaces.
   * Sri Lankan numbers start with 94. Example: "94771234567"
   */
  whatsappNumber: "",
  location: "Sri Lanka",
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#why", label: "Why MetriXa" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
] as const;

export type ServiceIcon =
  | "palette"
  | "share"
  | "landing"
  | "globe"
  | "calendar"
  | "bot"
  | "whatsapp"
  | "workflow";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    title: "Logo & Brand Identity",
    description:
      "A logo, colours, and type direction so your business looks consistent on a card, a post, and a website.",
    icon: "palette",
  },
  {
    title: "Social Media Design",
    description:
      "Post and story layouts you can reuse, with a look that matches the rest of your brand.",
    icon: "share",
  },
  {
    title: "Landing Pages",
    description:
      "A single focused page for a launch, offer, or campaign, built to read clearly on a phone.",
    icon: "landing",
  },
  {
    title: "Business Websites",
    description:
      "A practical website that explains what you do, who you help, and how to get in touch.",
    icon: "globe",
  },
  {
    title: "Booking Systems & CRM",
    description:
      "A way for customers to book, and a simple place to keep enquiries and follow-ups together.",
    icon: "calendar",
  },
  {
    title: "AI Chatbots",
    description:
      "A chatbot for common questions, such as hours, prices, and how to book, written in plain language.",
    icon: "bot",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Auto-replies and simple WhatsApp flows so new enquiries are not left waiting for a manual reply.",
    icon: "whatsapp",
  },
  {
    title: "Workflow Automation",
    description:
      "Connect the steps you repeat, such as a form, a message, and a task, so less of it is done by hand.",
    icon: "workflow",
  },
];

export type Package = {
  name: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    name: "Brand Starter",
    summary: "For a business that needs a consistent look before it publishes more.",
    includes: [
      "Logo concept and a small set of variations",
      "Colour and type direction",
      "Social post templates you can reuse",
      "Short brand notes for future design work",
    ],
  },
  {
    name: "Web Starter",
    summary: "For a business that needs one clear page online.",
    featured: true,
    includes: [
      "One-page website or landing page",
      "Layout that works on mobile and desktop",
      "Contact or enquiry section",
      "Basic on-page title and description",
    ],
  },
  {
    name: "Automation Starter",
    summary: "For a business that wants fewer repetitive messages.",
    includes: [
      "WhatsApp enquiry auto-reply",
      "A simple chatbot for common questions",
      "One workflow, such as a follow-up after a form",
      "A short handover so your team can use it",
    ],
  },
];

export const reasons = [
  {
    title: "Design and automation together",
    description:
      "Branding, websites, and everyday automations can be planned as one project instead of three separate vendors.",
  },
  {
    title: "Shaped for smaller teams",
    description:
      "Work is scoped for small businesses, startups, and growing companies, with a starting point that can stay small.",
  },
  {
    title: "Practical use of AI",
    description:
      "Chatbots and automations are suggested when they save a real step, and they are explained in everyday language.",
  },
  {
    title: "Sri Lanka and international",
    description:
      "MetriXa works with businesses in Sri Lanka and with clients in other countries.",
  },
  {
    title: "A clear first step",
    description:
      "Starter packages show what an early project can include. The final scope is agreed before work begins.",
  },
  {
    title: "Demos are labelled as demos",
    description:
      "Sample projects on this site are concepts. They show the kind of work MetriXa can build, not past client results.",
  },
] as const;

export type DemoProject = {
  title: string;
  kind: string;
  description: string;
  shows: string;
};

export const demoProjects: DemoProject[] = [
  {
    title: "Neighbourhood cafe page",
    kind: "Business website concept",
    description:
      "A sample one-page site for a fictional cafe, with hours, a short menu, and a table enquiry form.",
    shows: "Shows a simple business website structure.",
  },
  {
    title: "Studio landing page",
    kind: "Landing page concept",
    description:
      "A sample page for a fictional service studio, focused on one offer and a single enquiry action.",
    shows: "Shows a focused landing page layout.",
  },
  {
    title: "Shop brand kit",
    kind: "Brand identity concept",
    description:
      "Logo, colour, and social post layouts for a fictional neighbourhood shop. The business is not a real client.",
    shows: "Shows a starter brand system.",
  },
  {
    title: "Appointment booking screen",
    kind: "Booking concept",
    description:
      "A sample booking screen where a visitor picks a service and a time. It is not connected to a live calendar.",
    shows: "Shows a booking flow layout.",
  },
  {
    title: "Enquiry chatbot",
    kind: "AI chatbot concept",
    description:
      "A sample chat that answers opening hours and how to book. It does not give professional or medical advice.",
    shows: "Shows a short question-and-answer chat.",
  },
  {
    title: "Lead follow-up flow",
    kind: "Workflow concept",
    description:
      "A sample sequence: form submitted, WhatsApp message sent, task created. It is a diagram, not a live system.",
    shows: "Shows how one workflow can be mapped.",
  },
];

export const contactServices = [
  "Not sure yet",
  ...services.map((service) => service.title),
  "Starter package",
] as const;

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    return null;
  }

  return `https://wa.me/${number}?text=${text}`;
}

export const defaultWhatsappMessage =
  "Hello MetriXa, I would like to talk about a project.";
