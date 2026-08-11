import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CPaaS | SMSCloudHub",
  description: "CPaaS is a cloud-based collaboration platform that aims to make communication easier for businesses, combining many useful features into one place.",
};

export default function CPaaSPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/5 text-purple-400 text-xs font-mono tracking-widest uppercase mb-6">• Enterprise</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">CPaaS <span className="text-[#22D3EE]">Solutions</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">CPaaS is a cloud-based collaboration platform that aims to make communication easier for businesses. It combines many useful features into one place so businesses can stay in touch with their partners, vendors, suppliers and customers on the communication channel they like.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Learn More →</Link>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Platform Capabilities</h2>
              <ul className="space-y-4">
                {[
                  "Use of Email, SMS, Voice, Video, Chatbot & Analytics",
                  "Single platform & single vendor approach",
                  "Can be integrated with existing CRM",
                  "Expert Consulting to the companies building the CPaaS Platform"
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F1B2E] border border-white/10 rounded-xl p-8 flex flex-col justify-center text-center">
               <div className="text-4xl mb-4">⚙️</div>
               <h3 className="text-xl font-bold mb-2">Omnichannel Integration</h3>
               <p className="text-[#8DA0C0] text-sm">Deploy SMS, Voice, and Video via APIs instantly. Consolidate your fragmented communication tools into one unified cloud-based stack.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
