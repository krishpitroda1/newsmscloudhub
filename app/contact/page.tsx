"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const volumes = [
  "< 100K msg/month",
  "100K – 1M msg/month",
  "1M – 10M msg/month",
  "10M – 100M msg/month",
  "> 100M msg/month",
];

const channels = ["A2P SMS", "WhatsApp Business", "Voice OTP", "CPaaS API", "SMSC Firewall / Operator", "Other"];

const offices = [
  {
    city: "Ahmedabad",
    country: "India 🇮🇳",
    type: "Head Office",
    address: "B-614, World Trade Tower, Off SG Highway, Makarba, Ahmedabad – 380051, Gujarat",
    phone: "(+91) 99244 94266",
    email: "info@smscloudhub.com",
  },
];

const faqs = [
  {
    q: "How quickly can I go live?",
    a: "Most customers go live within 24–48 hours of signing. Our onboarding team handles SS7 provisioning, API key issuance, and end-to-end test validation.",
  },
  {
    q: "Do you offer a trial or PoC?",
    a: "Yes. We offer a sandbox environment and a paid proof-of-concept at favourable test rates so you can validate delivery quality against your current provider before committing.",
  },
  {
    q: "What is your minimum monthly commitment?",
    a: "There is no minimum for API customers. Operator and carrier interconnects are contracted on a bilateral basis. Speak to our sales team for pricing.",
  },
  {
    q: "Do you support SMPP and HTTP APIs simultaneously?",
    a: "Yes. Our platform supports SMPP v3.4, HTTP REST, and HTTPS delivery via a single unified account. Both protocols can be active at the same time.",
  },
  {
    q: "How do you handle DND and local compliance?",
    a: "We integrate with national DND registries (including India's TRAI NDNC), support TCPA-aware routing for North America, and apply GDPR-compliant data retention policies globally.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    volume: "",
    channel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">

        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden pt-28 pb-16 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-3xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">
              • Contact Sales
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Let's build your<br />
              <span className="text-[#22D3EE]">direct route.</span>
            </h1>
            <p className="text-lg text-[#8DA0C0] max-w-xl mx-auto">
              Tell us about your traffic. Our team will respond within 4 business hours with a tailored routing plan and pricing.
            </p>
          </div>
        </section>

        {/* ─── Form + Office ─── */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* Lead Form */}
            <div className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold mb-3">Message received!</h2>
                  <p className="text-[#8DA0C0]">Our sales team will reach out within 4 business hours. Check your inbox at <strong>{form.email}</strong>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold mb-6">Request a Demo or Pricing</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                      { id: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
                      { id: "email", label: "Business Email", type: "email", placeholder: "jane@acmecorp.com" },
                      { id: "phone", label: "Phone (optional)", type: "tel", placeholder: "+1 555 000 0000" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="block text-xs font-semibold text-[#8DA0C0] mb-1.5 uppercase tracking-wider">
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          name={f.id}
                          type={f.type}
                          required={f.id !== "phone"}
                          placeholder={f.placeholder}
                          value={form[f.id as keyof typeof form]}
                          onChange={handleChange}
                          className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F3F8FF] placeholder:text-white/20 focus:border-[#22D3EE]/60 focus:outline-none transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="volume" className="block text-xs font-semibold text-[#8DA0C0] mb-1.5 uppercase tracking-wider">Monthly Volume</label>
                      <select
                        id="volume"
                        name="volume"
                        required
                        value={form.volume}
                        onChange={handleChange}
                        className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F3F8FF] focus:border-[#22D3EE]/60 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Select volume</option>
                        {volumes.map((v) => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="channel" className="block text-xs font-semibold text-[#8DA0C0] mb-1.5 uppercase tracking-wider">Primary Channel</label>
                      <select
                        id="channel"
                        name="channel"
                        required
                        value={form.channel}
                        onChange={handleChange}
                        className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F3F8FF] focus:border-[#22D3EE]/60 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Select channel</option>
                        {channels.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#8DA0C0] mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your use case, target countries, or current provider challenges..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F3F8FF] placeholder:text-white/20 focus:border-[#22D3EE]/60 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-xl hover:bg-white transition-colors text-sm"
                  >
                    Send Request →
                  </button>
                  <p className="text-center text-[#8DA0C0] text-xs">We respond within 4 business hours. No spam, ever.</p>
                </form>
              )}
            </div>

            {/* Office + Direct Contact */}
            <div className="space-y-6">
              {offices.map((o) => (
                <div key={o.city} className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{o.city}</h3>
                    <span className="text-[10px] font-mono text-[#22D3EE] border border-[#22D3EE]/30 rounded-full px-2.5 py-0.5 uppercase tracking-widest">{o.type}</span>
                  </div>
                  <p className="text-[#8DA0C0] text-sm leading-relaxed">{o.address}</p>
                  <div className="space-y-1.5 pt-1">
                    <a href={`tel:${o.phone}`} className="flex items-center gap-2 text-sm text-[#F3F8FF] hover:text-[#22D3EE] transition-colors">
                      <span>📞</span> {o.phone}
                    </a>
                    <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-sm text-[#F3F8FF] hover:text-[#22D3EE] transition-colors">
                      <span>✉️</span> {o.email}
                    </a>
                  </div>
                </div>
              ))}

              <div className="bg-[#0F1B2E] border border-[#22D3EE]/20 rounded-2xl p-6 space-y-2">
                <p className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest">Response SLA</p>
                <p className="text-2xl font-bold">≤ 4 business hours</p>
                <p className="text-[#8DA0C0] text-sm">For enterprise, operator, and carrier inquiries. NOC support is 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 px-6 border-t border-white/5 bg-[#0F1B2E]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-[#8DA0C0] text-sm leading-relaxed">{faq.a}</p>
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
