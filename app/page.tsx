import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductsShowcase from "@/components/ProductsShowcase";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import GrowthHighlight from "@/components/GrowthHighlight";
import Testimonials from "@/components/Testimonials";
import BusinessPartners from "@/components/BusinessPartners";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ProductsShowcase />
        <Features />
        <Testimonials />
        <BusinessPartners />
        <Benefits />
        <TrustBar />
        <GrowthHighlight />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
