import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMSC Firewall | SMSCloudHub",
  description: "Protect an SMSC from unauthorized access and potential attacks with our firewall solution featuring monetization and guarantees.",
};

export default function SmscFirewallPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-mono tracking-widest uppercase mb-6">• Operator</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">SMSC <span className="text-[#22D3EE]">Firewall</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">To protect an SMSC from unauthorized access and potential attacks, controlling the flow of data into and out of the SMSC, we provide a robust firewall solution with monetization opportunities and performance guarantees.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Protect Your Network →</Link>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Security & Features</h2>
              <ul className="space-y-4">
                {[
                  "Protects SMSC from unauthorized access and potential attacks",
                  "Controls the flow of data into and out of the SMSC",
                  "Traffic Filtering & Content Inspection",
                  "Authentication, Authorization & Encryption",
                  "Ensures the reliability and security of SMS messages",
                  "Helps prevent potential security breaches"
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Monetization & Guarantee</h2>
              <div className="bg-[#0F1B2E] border border-white/10 rounded-xl p-6">
                <p className="text-[#8DA0C0] text-sm leading-relaxed mb-4">Unlike standard security appliances, our SMSC Firewall is designed not just to protect, but to turn lost revenue from grey routes into realized profit.</p>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-white/10">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Monetary Guarantee</h4>
                    <p className="text-xs text-[#8DA0C0]">We are open to discuss the monetary guarantee for our Firewall through mutual discussion with Operators.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
