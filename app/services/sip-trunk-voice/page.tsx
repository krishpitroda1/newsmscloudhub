import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SIP Trunk Voice Termination | SMSCloudHub",
  description: "Carrier-grade SIP trunk services for global A2Z voice termination. Direct SIP peering, competitive per-minute rates, and 99.9% uptime SLA.",
};

export default function SipTrunkPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">• Carrier</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">SIP Trunk <span className="text-[#22D3EE]">Voice</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">High-quality SIP trunking for A2Z global voice termination. Direct SIP peering eliminates intermediary carriers, delivering better call quality, lower per-minute costs, and full CDR transparency for your billing team.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Request SIP Peering →</Link>
          </div>
        </section>
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">SIP Trunk Features</h2>
              <ul className="space-y-4">
                {["SIP 2.0 (RFC 3261) & H.323 support","G.711, G.722, G.729 codec support","Direct peering — no intermediary transit carriers","CLI pass-through and DNIS routing","T.38 fax-over-IP support","Redundant SIP proxy clusters (active/active)","Real-time CDR delivery via API or SFTP","Call recording integration on request"].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Technical Specs</h2>
              {[{label:"Protocol",value:"SIP 2.0 / H.323"},{label:"Codecs",value:"G.711, G.722, G.729"},{label:"Max concurrent calls",value:"Unlimited (burst)"},{label:"Uptime SLA",value:"99.9%"},{label:"CDR granularity",value:"Per-second billing"},{label:"ASR (avg success rate)",value:"> 72%"}].map(m => (
                <div key={m.label} className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-[#8DA0C0] text-sm">{m.label}</span>
                  <span className="text-[#22D3EE] font-mono font-bold text-sm">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-6 border-t border-white/5 text-center bg-[#0F1B2E]">
          <h2 className="text-2xl font-bold mb-3">Better voice quality. Lower per-minute cost.</h2>
          <p className="text-[#8DA0C0] mb-6">Get a rate deck and test CDRs within 24 hours of your enquiry.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Get Rate Deck →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
