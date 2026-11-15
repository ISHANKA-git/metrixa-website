import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050706] text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}