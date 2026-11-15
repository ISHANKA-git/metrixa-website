import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060809] text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}