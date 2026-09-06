import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AwardsClient from "@/components/AwardsClient";

export const metadata: Metadata = {
  title: "Awards & Recognition | SMSCloudHub",
  description: "Industry recognition, media features, and accolades won by SMSCloudHub for delivering excellent telecom and CPaaS solutions globally.",
};

export default function AwardsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF] min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-16 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.12),transparent)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6">
              🏆 Global Telco & CPaaS Accolades
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              Industry <span className="text-[#22D3EE]">Recognition</span> & Media
            </h1>
            <p className="text-base sm:text-xl text-[#8DA0C0] leading-relaxed max-w-2xl mx-auto">
              Our commitment to delivering secure, scalable, and Carrier Grade Messaging platforms has earned SMSCloud Hub prestigious awards and media features across the globe.
            </p>
          </div>
        </section>

        {/* Client Awards Interactive Grid & Lightbox */}
        <AwardsClient />
      </main>
      <Footer />
    </>
  );
}
