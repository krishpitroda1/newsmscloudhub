import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Number Lookup | SMSCloudHub",
  description: "Check for number status and live connectivity instantly. Eliminate unused & invalid numbers to benefit from low customer complaints and higher ROI.",
};

export default function NumberLookupPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-[#22D3EE]/30 border bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">• Enterprise / Operator</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">Number <span className="text-[#22D3EE]">Lookup</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">With Number Lookup services, Marketing Managers can check for number status and live connectivity instantly. Ensure your campaigns only reach active numbers.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Clean Your Database →</Link>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Service Benefits</h2>
              <ul className="space-y-4">
                {[
                  "Check number status and live connectivity instantly",
                  "Eliminate unused & invalid numbers from databases",
                  "Lower customer complaints by targeting correctly",
                  "Achieve higher Return on Investment (RoI) for campaigns",
                  "Real-time API lookup integration"
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F1B2E] border border-white/10 rounded-xl p-8 flex flex-col justify-center text-center">
               <div className="text-4xl mb-4">🔍</div>
               <h3 className="text-xl font-bold mb-2">Higher ROI</h3>
               <p className="text-[#8DA0C0] text-sm">By cleaning your database before sending, you stop paying for undeliverable messages, directly improving the efficiency and ROI of your marketing spend.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
