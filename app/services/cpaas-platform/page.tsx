import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CPaaS Platform | SMSCloudHub",
  description: "White-label and co-branded CPaaS platform for operators and resellers. Launch your own messaging business on SMSCloudHub's carrier-grade infrastructure.",
};

export default function CPaaSPlatformPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/5 text-purple-400 text-xs font-mono tracking-widest uppercase mb-6">• Technology</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">CPaaS <span className="text-[#22D3EE]">Platform</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">Launch your own communications platform without building from scratch. SMSCloudHub's white-label CPaaS platform lets operators and resellers brand, package, and sell messaging services on our carrier-grade infrastructure — fully managed, fully yours.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Request Platform Demo →</Link>
          </div>
        </section>
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Platform Capabilities</h2>
              <ul className="space-y-4">
                {["Full white-label branding (your logo, domain, colours)","Multi-tenant architecture — manage sub-accounts by customer","Built-in billing engine with custom pricing per customer","SMS, WhatsApp, Voice, and Verify channels included","Customer-facing API portal with your branding","Admin dashboard with per-customer analytics","Reseller margin controls & auto-invoicing","Dedicated infrastructure or shared cloud deployment"].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Who It's For</h2>
              <div className="space-y-4">
                {[{icon:"📡",title:"Mobile Operators",desc:"Monetise your subscriber network with a branded CPaaS offering without platform investment."},
                  {icon:"🏢",title:"ISPs & Cloud Providers",desc:"Bundle messaging into your existing connectivity products for added ARR."},
                  {icon:"🤝",title:"Channel Resellers",desc:"White-label our platform and sell SMS, WhatsApp, and Voice to your SMB customers."}].map(w => (
                  <div key={w.title} className="bg-[#0F1B2E] border border-white/10 rounded-xl p-5 flex gap-3">
                    <span className="text-xl">{w.icon}</span>
                    <div>
                      <p className="font-bold text-sm mb-1">{w.title}</p>
                      <p className="text-[#8DA0C0] text-xs">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 border-t border-white/5 text-center bg-[#0F1B2E]">
          <h2 className="text-2xl font-bold mb-3">Your brand. Our infrastructure.</h2>
          <p className="text-[#8DA0C0] mb-6">Go to market with your own CPaaS product in under 30 days.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Schedule Platform Demo →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
