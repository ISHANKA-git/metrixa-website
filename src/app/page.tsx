import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Packages } from "@/components/packages";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <Packages />
      <WhyChoose />
      <Portfolio />
      <Contact />
    </main>
  );
}
