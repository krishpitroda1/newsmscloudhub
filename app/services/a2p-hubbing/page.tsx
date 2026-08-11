import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A2P SMS Hubbing for Carriers | SMSCloudHub",
  description: "Carrier-grade A2P SMS hubbing services. Connect your SMSC to 495+ direct operator routes globally with full DLR transparency and bilateral revenue sharing.",
};

export default function A2PHubbingPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">• Carrier</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">A2P SMS <span className="text-[#22D3EE]">Hubbing</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">Connect your SMSC to our hub and gain immediate access to 495+ direct operator routes across 193 countries. No need for bilateral negotiations with every destination operator — we've already done it. Full DLR reporting, revenue share, and transparent per-route pricing.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Connect Your SMSC →</Link>
          </div>
        </section>
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Hubbing Benefits</h2>
              <ul className="space-y-4">
                {["Instant access to 495+ direct telco connections","Single SMPP link to our hub replaces 100s of bilateral agreements","Per-route DLR receipts in real time","Revenue share on traffic delivered via your routes","Bilateral sender ID enforcement for your national market","Grey route filtering applied to all inbound traffic","Monthly route quality report per operator","Dedicated carrier liaison manager"].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Hub Metrics</h2>
              {[{label:"Connected operators",value:"495+"},{label:"Countries",value:"193+"},{label:"Monthly messages through hub",value:"1B+"},{label:"DLR accuracy",value:"98.87%"},{label:"Hub uptime SLA",value:"99.95%"}].map(m => (
                <div key={m.label} className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-[#8DA0C0] text-sm">{m.label}</span>
                  <span className="text-[#22D3EE] font-mono font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-6 border-t border-white/5 text-center bg-[#0F1B2E]">
          <h2 className="text-2xl font-bold mb-3">One connection. 193 countries.</h2>
          <p className="text-[#8DA0C0] mb-6">Our carrier team will complete the SMPP interconnect and route provisioning within 72 hours.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Start Hubbing Negotiation →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
