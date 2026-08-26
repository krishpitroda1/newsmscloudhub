import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A2P SMS | SMSCloudHub",
  description: "As a global Hub we work with more than 300+ Operators & Carriers on 0hop or 1hop to terminate messages in more than 150+ countries.",
};

export default function A2PSmsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">• Enterprise / Operator</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">A2P <span className="text-[#22D3EE]">SMS</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">As a global Hub we work with more than 300+ Operators & Carriers on 0hop or 1hop. We can terminate messages in more than 150+ countries, delivering unparalleled global reach and reliability.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Get Started →</Link>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Capabilities</h2>
              <ul className="space-y-4">
                {[
                  "Global Hub connected to 300+ Operators & Carriers on 0hop or 1hop",
                  "Terminate messages in more than 150+ countries",
                  "Special Rates and effective Routes for Asia, Middle East, Africa and Europe",
                  "Backed up with compliance and registration services",
                  "Fastest Termination with Real Time Delivery Reports",
                  "SMSC capable of 700 TPS with additional burstable capacity of 1000 TPS",
                  "Support for SMPP, HTTP & SS7 protocols"
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Platform Metrics</h2>
              {[
                {label:"Operators & Carriers",value:"300+"},
                {label:"Countries Reached",value:"150+"},
                {label:"Base TPS Capacity",value:"700 TPS"},
                {label:"Burstable TPS Capacity",value:"1,000 TPS"},
                {label:"Protocols",value:"SMPP, HTTP, SS7"}
              ].map(m => (
                <div key={m.label} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-[#8DA0C0] text-sm">{m.label}</span>
                  <span className="text-[#22D3EE] font-mono font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
