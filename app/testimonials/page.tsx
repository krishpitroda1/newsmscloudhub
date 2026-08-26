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
    quote: "SMSCloud Hub has been our trusted partner for wholesale SMS services for a year now. We're happy to have their flawless customer support and be sure that our messaging campaigns run smoothly, making them the obvious choice for the Best Wholesale SMS Provider award.",
    name: "Sertac Vardar",
    role: "Lexico Telecom",
    region: "Wholesale SMS Partner",
    metric: "Best Wholesale SMS Provider",
  },
  {
    quote: "SMSCloud Hub's marketing strategy is a breath of fresh air in today's digital landscape. Their emphasis on organic growth and genuine interactions reflects their dedication to building lasting relationships with their audience. It's evident that they understand the importance of authenticity in marketing, and it's paying off remarkably well for them.",
    name: "One Technologies",
    role: "One Technologies",
    region: "Technology Partner",
    metric: "Authentic Growth & Marketing",
  },
  {
    quote: "SMSCloud Hub is a young and vibrant organization, led by one of the most knowledgeable and experienced leaders in the industry, Mr. Ashish Bavishi. In addition to his deep industry insight, he is also one of the most humble and down-to-earth senior professionals I have had the pleasure of meeting. His leadership has instilled the same values and ideology across the entire team.",
    name: "NexG Enterprise",
    role: "NexG Platforms",
    region: "Enterprise Partner",
    metric: "Visionary Industry Leadership",
  },
  {
    quote: "We've been particularly impressed by SMSCloud Hub's endeavors to give back to the community and effect positive change in society. Their initiatives supporting charitable endeavors, advocating diversity and inclusion, and striving for environmental sustainability highlight their dedication to social responsibility.",
    name: "Anish Thakore",
    role: "Buckbox",
    region: "Corporate Partner",
    metric: "Social Responsibility & CSR",
  },
  {
    quote: "I am extremely satisfied with the high quality and satisfactory results provided by SMSCloud Hub. Their overall support has been exceptional, meeting all the requirements outlined in the Service Level Agreement (SLA). The team has consistently delivered excellent service, going above and beyond to ensure our needs are met. With their reliable platform and attentive support, we have experienced smooth operations and effective communication with our customers.",
    name: "Abrar Tariq",
    role: "Telintel",
    region: "Telecom Carrier",
    metric: "Exceptional SLA & Support",
  },
  {
    quote: "We Tubelight Communication working with SMS Cloud Hub for a long time now, the routes, service and support have been constant and we see working with them successfully in the future as well.",
    name: "Praveen Singh",
    role: "Tubelight Communication",
    region: "Long-term Carrier Partner",
    metric: "Constant Service & Route Quality",
  },
  {
    quote: "I've been using SMSCloud hub for my bulk messaging needs for a while now and I can honestly say that it's the best provider out there. Their pricing is very competitive, their customer service is top-notch, and they are always willing to help out in any way they can. Plus, their software is reliable and easy to use.",
    name: "Ahsan Shaheen",
    role: "Pathfinder Technologies",
    region: "Messaging Client",
    metric: "Top-notch Bulk Messaging",
  },
  {
    quote: "We have been working with SMSCloud Hub since more than a year now and the cooperation with their Commercial Team has been extremely successful. They immediately understand our needs and provide in a short time the optimal solution to our requests both in terms of service quality and costs.",
    name: "Antonio Catanzariti",
    role: "Imerald (FZE)",
    region: "International Partner",
    metric: "Best Asia Provider Award",
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

      </main>
      <Footer />
    </>
  );
}
