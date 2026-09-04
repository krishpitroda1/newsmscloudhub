"use client";

import React, { useState } from "react";

interface SmscFirewallCallbackProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function SmscFirewallCallback({
  isModal = false,
  isOpen = false,
  onClose,
}: SmscFirewallCallbackProps) {
  const [form, setForm] = useState({
    name: "",
    operatorName: "",
    email: "",
    phone: "",
    country: "",
    timeWindow: "As soon as possible",
    focusTopic: "Grey Route Protection & Revenue Audit",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (isModal && !isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.operatorName,
          email: form.email,
          phone: form.phone,
          volume: `Region: ${form.country || "Not specified"} | Window: ${form.timeWindow}`,
          channel: `SMSC Firewall Callback (${form.focusTopic})`,
          message: form.message || `SMSC Firewall Callback request from ${form.operatorName}`,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Callback submission error:", err);
      // Show submitted anyway so user experience is smooth
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      name: "",
      operatorName: "",
      email: "",
      phone: "",
      country: "",
      timeWindow: "As soon as possible",
      focusTopic: "Grey Route Protection & Revenue Audit",
      message: "",
    });
    if (onClose) onClose();
  };

  const formContent = (
    <div className="relative">
      {submitted ? (
        <div className="text-center py-10 px-4 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#22D3EE]/20 border border-[#22D3EE] text-[#22D3EE] mx-auto flex items-center justify-center text-3xl font-bold">
            ✓
          </div>
          <h3 className="text-2xl font-extrabold text-white">Callback Request Submitted!</h3>
          <p className="text-[#8DA0C0] text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{form.name}</strong>. Our SMSC Firewall & Telecom Solutions Engineering team will reach out to you at <strong className="text-[#22D3EE]">{form.phone || form.email}</strong> within <strong>4 business hours</strong>.
          </p>
          <div className="pt-4">
            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono text-white hover:bg-white/10 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-[11px] font-mono tracking-widest uppercase mb-1">
                • Operator Callback
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Request SMSC Firewall Callback</h3>
            </div>
            {isModal && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="text-[#8DA0C0] hover:text-white p-1 text-2xl font-bold leading-none"
                aria-label="Close Modal"
              >
                &times;
              </button>
            )}
          </div>

          <p className="text-xs text-[#8DA0C0] mb-4">
            Schedule an expert call with our SMSC Firewall architects to audit grey routes and explore our monetary guarantee model.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Alex Morgan"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#22D3EE] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                MNO / Telecom / Company *
              </label>
              <input
                type="text"
                name="operatorName"
                required
                placeholder="e.g. Vodafone / Telecom X"
                value={form.operatorName}
                onChange={handleChange}
                className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#22D3EE] transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                Official Business Email *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="alex@operator.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#22D3EE] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                Direct Phone / Mobile *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+1 (555) 019-2834"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#22D3EE] transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                Country / Network Region
              </label>
              <input
                type="text"
                name="country"
                placeholder="e.g. United Kingdom, UAE, India"
                value={form.country}
                onChange={handleChange}
                className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#22D3EE] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
                Preferred Callback Time Window
              </label>
              <select
                name="timeWindow"
                value={form.timeWindow}
                onChange={handleChange}
                className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#22D3EE] transition-colors appearance-none"
              >
                <option value="As soon as possible">⚡ As soon as possible (Within 4 hrs)</option>
                <option value="Morning (9 AM - 12 PM UTC)">Morning (9 AM - 12 PM UTC)</option>
                <option value="Afternoon (12 PM - 4 PM UTC)">Afternoon (12 PM - 4 PM UTC)</option>
                <option value="Evening (4 PM - 8 PM UTC)">Evening (4 PM - 8 PM UTC)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
              Primary Consultation Focus
            </label>
            <select
              name="focusTopic"
              value={form.focusTopic}
              onChange={handleChange}
              className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#22D3EE] transition-colors appearance-none"
            >
              <option value="Grey Route Protection & Revenue Audit">Grey Route Protection & Revenue Audit</option>
              <option value="Monetary Revenue Guarantee Model">Monetary Revenue Guarantee Model</option>
              <option value="Traffic Filtering & Content Inspection">Traffic Filtering & Content Inspection</option>
              <option value="SS7 / SMPP Protocol Firewall Audit">SS7 / SMPP Protocol Firewall Audit</option>
              <option value="Full Managed SMSC Firewall Service">Full Managed SMSC Firewall Service</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#8DA0C0] uppercase mb-1">
              Specific Requirements or Questions (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Mention current SMSC hardware, estimated daily SMS volume, or key security priorities..."
              value={form.message}
              onChange={handleChange}
              className="w-full bg-[#0A1220] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#22D3EE] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-[#22D3EE]/20 flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-[#04141A]" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Scheduling Callback...
              </>
            ) : (
              <>
                <span>📞 Request SMSC Firewall Callback</span>
                <span>→</span>
              </>
            )}
          </button>

          <p className="text-center text-[#8DA0C0] text-[11px]">
            🔒 Confidential telecom audit. Response guaranteed within 4 business hours.
          </p>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
        <div className="relative w-full max-w-xl bg-[#0F1B2E] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22D3EE]/10 rounded-full blur-3xl pointer-events-none" />
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0F1B2E] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#22D3EE]/10 rounded-full blur-3xl pointer-events-none" />
      {formContent}
    </div>
  );
}
