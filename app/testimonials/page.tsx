import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials — What Our Clients Say | SMSCloudHub",
  description:
    "Read what enterprises, operators, and developers across 193 countries say about SMSCloudHub's direct-route messaging reliability, speed, and support.",
};

const testimonials = [
  {
    quote: "We moved our OTP traffic from a major European aggregator to SMSCloudHub and saw delivery rates jump from 91% to 98.6% within the first week. The latency improvement was equally dramatic — our customer drop-off during login fell by 22%.",
    name: "Antonio Catanzariti",
    role: "VP Engineering, FinTech Platform",
    region: "🇮🇹 Italy",
    metric: "+22% fewer login drop-offs",
  },
  {
    quote: "After years of dealing with grey-route contamination through our previous aggregator, SMSCloudHub's SMSC firewall simply eliminated the problem. We now have full visibility into every message that touches our network.",
    name: "Erasmus Okrut",
    role: "Head of Interconnect, Mobile Operator",
    region: "🇩🇪 Germany",
    metric: "Grey route traffic eliminated",
  },
  {
    quote: "The onboarding took less than 48 hours. Their team was available at every step, the API documentation was the clearest I've seen in this industry, and the test environment matched production perfectly.",
    name: "Maryana Nasr",
    role: "CTO, Digital Commerce Platform",
    region: "🇱🇧 Lebanon",
    metric: "< 48h to production",
  },
  {
    quote: "We evaluated Monty Mobile and GMS before choosing SMSCloudHub. The pricing was more transparent, the route quality was higher on our top 20 markets, and they actually answered our escalations within 10 minutes.",
    name: "Hugo Rebeiro",
    role: "Director, Carrier Relations",
    region: "🇧🇷 Brazil",
    metric: "Higher quality on top 20 markets",
  },
  {
    quote: "Our WhatsApp Business API messages went from a 6-hour review cycle with our previous provider to real-time delivery with SMSCloudHub. The multi-channel unified API saved our engineering team weeks of integration work.",
    name: "Praveen Singh",
    role: "Product Manager, E-commerce Marketplace",
    region: "🇮🇳 India",
    metric: "Real-time vs 6-hour delivery",
  },
  {
    quote: "As a carrier in Southeast Asia, we needed a hubbing partner with real SS7 direct routes — not resold capacity. SMSCloudHub had direct connections with 12 of our key bilateral partners. No other provider came close.",
    name: "Nurul Amin Hassan",
    role: "GM, International SMS, Tier-2 Carrier",
    region: "🇲🇾 Malaysia",
    metric: "12 direct bilateral routes matched",
  },
  {
    quote: "The real-time DLR dashboard is the best I've used in 15 years of SMS industry experience. We can see per-operator delivery rates, latency percentiles, and error distributions — all live. That's a genuine differentiator.",
    name: "Sophie Marchand",
    role: "Network Operations Director",
    region: "🇫🇷 France",
    metric: "Best-in-class observability",
  },
  {
    quote: "We send over 50 million messages per month across MENA. SMSCloudHub handles our entire A2P volume and has not missed a single SLA credit in 18 months of partnership. That reliability is rare in this business.",
    name: "Khalid Al-Rashidi",
    role: "Head of Digital, Retail Bank",
    region: "🇸🇦 Saudi Arabia",
    metric: "0 SLA breaches in 18 months",
  },
];

const verticals = [
  { name: "Banking & Finance", icon: "🏦", desc: "OTP, balance alerts, fraud notifications" },
  { name: "E-commerce", icon: "🛒", desc: "Order updates, delivery tracking, promotions" },
  { name: "Healthcare", icon: "🏥", desc: "Appointment reminders, prescription alerts" },
  { name: "OTT & Media", icon: "📱", desc: "User verification, re-engagement campaigns" },
  { name: "Logistics", icon: "🚚", desc: "Shipment status, driver coordination" },
  { name: "Telecom & Carriers", icon: "📡", desc: "A2P hubbing, firewall, VAS monetisation" },
];

const npsStats = [
  { value: "72", label: "Net Promoter Score", sub: "Industry average: 38" },
  { value: "95.84%", label: "Client satisfaction", sub: "From post-onboarding survey" },
  { value: "93%", label: "Renewal rate", sub: "Year-on-year contract renewals" },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">

        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-3xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">
              • Client Voices
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Numbers tell half the story.<br />
              <span className="text-[#22D3EE]">Our clients tell the rest.</span>
            </h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl mx-auto leading-relaxed">
              From fintech OTPs to carrier interconnects — here's what the enterprises, operators, and developers who run on our network have to say.
            </p>
          </div>
        </section>

        {/* ─── NPS Stats ─── */}
        <section className="py-14 px-6 border-t border-white/5 bg-[#0F1B2E]">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
            {npsStats.map((n) => (
              <div key={n.label}>
                <p className="text-5xl font-mono font-extrabold text-[#22D3EE] mb-1">{n.value}</p>
                <p className="font-semibold mb-0.5">{n.label}</p>
                <p className="text-xs text-[#8DA0C0]">{n.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Testimonial Grid ─── */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-7 flex flex-col gap-4 hover:border-[#22D3EE]/30 transition-colors">
                <div className="inline-block px-3 py-1 rounded-full bg-[#22D3EE]/10 text-[#22D3EE] text-xs font-mono font-bold w-fit">
                  {t.metric}
                </div>
                <p className="text-[#F3F8FF] text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-[#8DA0C0] text-xs">{t.role}</p>
                  </div>
                  <span className="text-base">{t.region}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Verticals ─── */}
        <section className="py-20 px-6 border-t border-white/5 bg-[#0F1B2E]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Industries we serve</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {verticals.map((v) => (
                <div key={v.name} className="flex items-start gap-4 bg-[#0A1220] border border-white/10 rounded-xl p-5 hover:border-[#22D3EE]/30 transition-colors">
                  <span className="text-2xl">{v.icon}</span>
                  <div>
                    <p className="font-semibold mb-0.5">{v.name}</p>
                    <p className="text-[#8DA0C0] text-xs">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-6 border-t border-white/5 text-center">
          <h2 className="text-3xl font-bold mb-4">Join 495+ operators who chose the direct route</h2>
          <p className="text-[#8DA0C0] mb-8">Let's run a proof-of-concept on your traffic. No commitment, full visibility.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors"
          >
            Start Your PoC →
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
