import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WhatsApp for Business | SMSCloudHub",
  description: "SMSCloud Hub is an ISV Partner of Meta for the most accepted messaging channel – WhatsApp for Business.",
};

export default function WhatsAppPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">• Enterprise</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">WhatsApp <span className="text-[#22D3EE]">for Business</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">SMSCloud Hub is an ISV Partner of Meta for the most accepted messaging channel – WhatsApp for Business. We provide the onboarding and deployment services with or without chatbots and WhatsApp Message API.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Get Started →</Link>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Service Highlights</h2>
              <ul className="space-y-4">
                {[
                  "Official ISV Partner of Meta",
                  "End-to-end onboarding and deployment services",
                  "Chatbot integration available",
                  "Direct integration with WhatsApp Message API"
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F1B2E] border border-white/10 rounded-xl p-8 flex flex-col justify-center text-center">
               <div className="text-4xl mb-4">💬</div>
               <h3 className="text-xl font-bold mb-2">Engage Customers where they are</h3>
               <p className="text-[#8DA0C0] text-sm">Leverage the world's most popular messaging app to build trust, boost engagement, and deliver seamless conversational experiences.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
