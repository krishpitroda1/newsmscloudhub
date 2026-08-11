import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComplianceTable from "@/components/ComplianceTable";

export const metadata: Metadata = {
  title: "Global SMS Features & Regulations | SMSCloudHub",
  description: "Comprehensive guide to global SMS compliances, features, and regulations across all countries and networks. Ensure your A2P traffic is fully compliant.",
};

export default function SMSCompliancesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF] min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.1),transparent)]" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Global SMS Features & <span className="text-[#22D3EE]">Regulations</span>
            </h1>
            <p className="text-xl text-[#8DA0C0] leading-relaxed max-w-3xl mx-auto">
              A comprehensive compliance guide to ensure your A2P messaging traffic adheres to national regulations, Sender ID registration rules, and local network restrictions worldwide.
            </p>
          </div>
        </section>

        {/* Table Section */}
        <section className="pb-24 px-6 relative z-20">
          <ComplianceTable />
        </section>
      </main>
      <Footer />
    </>
  );
}
