import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CloudContactCenter | SMSCloudHub",
  description: "CloudContactCenter is the cloud based call / contact center solution works on, On-Demand contact center in the cloud.",
};

export default function CloudContactCenterPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">• Enterprise / Technology</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">CloudContact<span className="text-[#22D3EE]">Center (CCC)</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">CloudContactCenter is the cloud-based call/contact center solution that works on-demand in the cloud. We eliminate the need for on-premises hardware and software, meaning no limitation on the number of users and no huge CAPEX.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Book a Demo →</Link>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <ul className="space-y-4">
                {[
                  "No on-premises hardware and software required",
                  "No limitation on the number of users",
                  "Integrates various communication channels viz. Voice, email, Live Chat, SMS, Social Media",
                  "IVR self-service over DTMF",
                  "Call recording and Language Selection",
                  "Integration with existing CRM"
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F1B2E] border border-white/10 rounded-xl p-8 flex flex-col justify-center text-center">
               <div className="text-4xl mb-4">📞</div>
               <h3 className="text-xl font-bold mb-2">Omnichannel Contact Center</h3>
               <p className="text-[#8DA0C0] text-sm">Empower your agents to handle interactions across multiple channels seamlessly from a single, cloud-hosted platform with zero physical infrastructure footprint.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
