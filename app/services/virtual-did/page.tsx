import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VN / TFN / DID | SMSCloudHub",
  description: "A virtual number is a telephone number assigned to an account and then routed through the internet to a physical phone line.",
};

export default function VirtualDidPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">• Enterprise / Carrier</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">VN / TFN / <span className="text-[#22D3EE]">DID</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">A virtual number is a telephone number assigned to an account and then routed through the internet to a physical phone line. Manage calls efficiently without exposing individual phone numbers.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Provision Numbers →</Link>
          </div>
        </section>
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Virtual Numbers?</h2>
              <ul className="space-y-4">
                {[
                  "Route calls through the internet to a physical phone line",
                  "Have multiple lines for a business seamlessly",
                  "Manage calls made to different departments or locations",
                  "Keep individual phone numbers private",
                  "Toll-Free Numbers (TFN) allow customers to reach you without long distance charges",
                  "Increase customer satisfaction and loyalty with TFNs"
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F1B2E] border border-white/10 rounded-xl p-8 flex flex-col justify-center text-center">
               <div className="text-4xl mb-4">🌍</div>
               <h3 className="text-xl font-bold mb-2">Global Presence</h3>
               <p className="text-[#8DA0C0] text-sm">Provide your business with a local feel anywhere in the world by using regional virtual numbers, making it easier for customers to connect with you.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
