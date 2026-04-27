import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductsShowcase from "@/components/ProductsShowcase";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import GrowthHighlight from "@/components/GrowthHighlight";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <ProductsShowcase />
        <HowItWorks />
        <Benefits />
        <TrustBar />
        <GrowthHighlight />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
