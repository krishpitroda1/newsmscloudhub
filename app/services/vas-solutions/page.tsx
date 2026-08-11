import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VAS Solutions — Value Added Services | SMSCloudHub",
  description: "Revenue-generating VAS solutions for mobile operators: content subscriptions, interactive SMS services, USSD menus, and premium-rate messaging monetisation.",
};

export default function VasSolutionsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-mono tracking-widest uppercase mb-6">• Operator</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">VAS <span className="text-[#22D3EE]">Solutions</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">Turn your network into a revenue engine. SMSCloudHub's VAS portfolio helps mobile operators monetise subscriber traffic with content subscriptions, USSD menus, premium-rate messaging, and interactive SMS-based services.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Explore VAS →</Link>
          </div>
        </section>
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">VAS Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[{icon:"📺",title:"Content Subscriptions",desc:"Daily/weekly SMS-based content delivery — news, horoscopes, sports scores, ringtones."},
                {icon:"📲",title:"USSD Menu Services",desc:"Interactive USSD-based menus for balance enquiry, service activation, and micro-payments."},
                {icon:"💰",title:"Premium Rate SMS",desc:"MO-billed and MT-billed premium messaging for competition entries, voting, and donations."},
                {icon:"🗳️",title:"SMS Voting & Polling",desc:"Real-time mass voting and polling campaigns for TV shows, elections, and marketing."},
                {icon:"🎮",title:"SMS Games & Quizzes",desc:"Interactive SMS game engines to drive subscriber engagement and data collection."},
                {icon:"🔔",title:"Alerts & Notification VAS",desc:"Operator-branded emergency alerts, weather, and public information delivery services."}].map(v => (
                <div key={v.title} className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 hover:border-[#22D3EE]/30 transition-colors">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-[#8DA0C0] text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-6 border-t border-white/5 text-center bg-[#0F1B2E]">
          <h2 className="text-2xl font-bold mb-3">Monetise your network traffic</h2>
          <p className="text-[#8DA0C0] mb-6">Our VAS specialists will design a revenue model matched to your subscriber base and market.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Schedule a VAS Review →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
