import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Offerings from "@/components/sections/Offerings";
import ValueComparison from "@/components/sections/ValueComparison";
import Packages from "@/components/sections/Packages";
import AppPromo from "@/components/sections/AppPromo";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <Offerings />
      <Packages />
      <ValueComparison />
      <AppPromo />
      <Gallery />
      <FAQ />
      <Footer />
    </main>
  );
}
