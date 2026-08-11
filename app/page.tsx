import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsProof from "@/components/StatsProof";
import ServicesChannels from "@/components/ServicesChannels";
import DirectRouteComparison from "@/components/DirectRouteComparison";
import RoleSolutions from "@/components/RoleSolutions";
import CompetitorEdge from "@/components/CompetitorEdge";
import TrustReliability from "@/components/TrustReliability";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1220] text-[#F3F8FF] font-sans selection:bg-[#22D3EE] selection:text-[#04141A]">
      <Header />
      <main id="top">
        <Hero />
        <StatsProof />
        <ServicesChannels />
        <DirectRouteComparison />
        <RoleSolutions />
        <CompetitorEdge />
        <TrustReliability />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
