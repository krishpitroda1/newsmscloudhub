"use client";

import { useState, FormEvent } from "react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A1220] border-t border-white/10 relative">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0F2530] to-[#0A1220] border border-white/10 rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Contact Information & Info */}
            <div className="space-y-6">
              <span className="eyebrow-pill">
                <span className="dot" /> Fast-Track Route Setup
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to shorten your route to the customer?
              </h2>

              <p className="text-[#8DA0C0] text-lg leading-relaxed">
                Talk to our commercial team about A2P SMS, WhatsApp for Business, Voice, or CPaaS integration. Most enterprise accounts go live within 48 hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3 text-sm text-[#8DA0C0]">
                  <svg className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M7.5 1.5c-2.5 0-4.5 2-4.5 4.5 0 3.4 4.5 7.5 4.5 7.5s4.5-4.1 4.5-7.5c0-2.5-2-4.5-4.5-4.5z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle cx="7.5" cy="6" r="1.4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <div className="space-y-1">
                    <p><strong>USA Office:</strong> 30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
                    <p><strong>India Head Office:</strong> B-614, World Trade Tower, Off S G Highway, Makarba, Ahmedabad – 380051, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-5 h-5 text-[#22D3EE] shrink-0" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M3 2.5h2.2l1 3-1.5 1a9 9 0 004.8 4.8l1-1.5 3 1V13c0 .6-.5 1-1 .9C7 13.4 1.6 8 1.1 2.5 1 2 1.5 1.5 2 1.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href="tel:+919924494266" className="text-white hover:text-[#22D3EE] font-mono font-semibold transition-colors">
                    (+91) 99244 94266
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-5 h-5 text-[#22D3EE] shrink-0" viewBox="0 0 15 15" fill="none">
                    <rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M2 4l5.5 4L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <a href="mailto:info@smscloudhub.com" className="text-white hover:text-[#22D3EE] font-mono transition-colors">
                    info@smscloudhub.com
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#22D3EE]/20 text-[#22D3EE] mx-auto flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-sm text-[#8DA0C0]">
                    Your route request has been received. One of our messaging specialists will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Request Route & Quote
                  </h3>

                  <div>
                    <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                      Primary Service Needed
                    </label>
                    <select className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22D3EE]">
                      <option value="sms">A2P SMS & OTP Routes</option>
                      <option value="whatsapp">WhatsApp Business API</option>
                      <option value="voice">Voice Termination & Cloud Contact Center</option>
                      <option value="cpaas">Programmable CPaaS API</option>
                      <option value="firewall">SMSC Firewall & MNO Monetization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                      Estimated Monthly Volume / Message Count
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 500,000 messages / month"
                      className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn btn-primary py-3.5 text-base font-bold transition-all shadow-lg"
                  >
                    {loading ? "Routing..." : "Get Started Now →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
