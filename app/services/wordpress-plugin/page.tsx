"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WordPressPluginPage() {
  const [activeTab, setActiveTab] = useState<"settings" | "woocommerce" | "logs">("settings");

  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        {/* ─── 1. HERO SECTION ─── */}
        <section className="relative overflow-hidden pt-28 pb-20 px-6 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.12),transparent)] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm hover:text-[#22D3EE] transition-colors mb-2"
              >
                ← All Services
              </Link>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-4">
                  Integrations → WordPress
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white">
                  Connect Your <br className="hidden sm:inline" />
                  <span className="text-[#22D3EE] drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    WordPress Website
                  </span>{" "}
                  with SMS Cloud Hub
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#8DA0C0] leading-relaxed max-w-xl">
                Easily integrate your WordPress website with SMS Cloud Hub using our dedicated plugin. Send automated SMS notifications for orders, registrations, OTP verification, and customer updates — directly from your WordPress dashboard.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="/sms-cloud-hub-wordpress-plugin.zip"
                  download="sms-cloud-hub-wordpress-plugin.zip"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#22D3EE] text-[#04141A] font-extrabold text-base rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Download Plugin</span>
                </a>
                <a
                  href="#setup-guide"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/5 hover:border-[#22D3EE] text-white font-bold hover:text-[#22D3EE] transition-all"
                >
                  See How It Works ↓
                </a>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-gradient-to-br from-[#0F1B2E] to-[#0A1220] border border-[#22D3EE]/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(34,211,238,0.15)]">
                {/* Header graphic badges */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#21759B]/20 border border-[#21759B]/50 flex items-center justify-center text-[#21759B] font-extrabold text-xl">
                      W
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#8DA0C0]">INTEGRATION</p>
                      <p className="text-sm font-bold text-white">WordPress + SMS Cloud Hub</p>
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#25D366] animate-pulse" />
                </div>

                {/* Cloud & Smartphone Graphic */}
                <div className="py-8 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-[#22D3EE]/10 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 15a4 4 0 004 4h11a3 3 0 000-6 5 5 0 00-9.9-1A4 4 0 003 15z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* SMS Mockup bubble */}
                  <div className="bg-[#04141A] border border-[#22D3EE]/40 rounded-2xl p-4 text-left shadow-lg space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#22D3EE]">
                      <span className="font-bold">• SMS Cloud Hub</span>
                      <span>Just now</span>
                    </div>
                    <p className="text-xs text-[#F3F8FF] leading-relaxed">
                      NEW: Order #4812 confirmed! Your shipment is on its way. [WordPress SMS Integration]
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8DA0C0] font-mono">
                  <span>Version 1.0.4</span>
                  <span className="text-[#22D3EE] font-bold">100% Tested</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. STATS BAR ─── */}
        <section className="py-14 px-6 border-b border-white/5 bg-[#0F1B2E]">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5 Min", label: "Setup Time" },
              { value: "99.9%", label: "Delivery Rate" },
              { value: "0", label: "Coding Required" },
              { value: "24/7", label: "SMS Delivery" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#0A1220]/60 border border-white/5">
                <p className="text-3xl sm:text-4xl font-extrabold font-mono text-[#22D3EE] mb-1">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-[#8DA0C0] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. WHY INTEGRATE SECTION ─── */}
        <section className="py-20 px-6 border-b border-white/5">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Why Integrate SMS Cloud Hub with WordPress?
              </h2>
              <p className="text-base text-[#8DA0C0] leading-relaxed">
                WordPress powers millions of websites worldwide. With SMS Cloud Hub integration, businesses can add powerful SMS communication features to their website in just a few minutes — no developer needed.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                {
                  icon: "📦",
                  title: "Easy Plugin Install",
                  desc: "Simple 1-click installation directly from your WordPress dashboard.",
                },
                {
                  icon: "⚡",
                  title: "Real-Time Delivery",
                  desc: "Instant sub-2-second SMS notifications powered by SMS Cloud Hub direct routes.",
                },
                {
                  icon: "🛒",
                  title: "WooCommerce Ready",
                  desc: "Deep automated integration for order updates, shipping, and abandoned carts.",
                },
                {
                  icon: "🎨",
                  title: "Custom Templates",
                  desc: "Dynamic message templates with custom placeholders for personalized SMS.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#0F1B2E] border border-white/10 hover:border-[#22D3EE]/40 rounded-2xl p-6 transition-all space-y-3"
                >
                  <div className="text-3xl">{card.icon}</div>
                  <h3 className="font-bold text-lg text-white">{card.title}</h3>
                  <p className="text-xs text-[#8DA0C0] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. KEY FEATURES SECTION ─── */}
        <section className="py-20 px-6 border-b border-white/5 bg-[#0F1B2E]">
          <div className="max-w-6xl mx-auto space-y-12 text-center">
            <div className="max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Key Features of the WordPress Plugin
              </h2>
              <p className="text-base text-[#8DA0C0]">
                Everything you need to automate SMS communication directly from your WordPress website.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: "⚡",
                  title: "Automated SMS Notifications",
                  desc: "Trigger SMS messages automatically on key events — orders, registrations, OTP, and more.",
                },
                {
                  icon: "🛒",
                  title: "WooCommerce Integration",
                  desc: "Send order confirmations, shipping updates, and delivery alerts for your WooCommerce store.",
                },
                {
                  icon: "🔐",
                  title: "OTP Verification",
                  desc: "Secure user accounts with SMS-based OTP for registration and login flows.",
                },
                {
                  icon: "✏️",
                  title: "Custom SMS Templates",
                  desc: "Create and manage personalized message templates for every event type.",
                },
                {
                  icon: "🔗",
                  title: "Simple API Integration",
                  desc: "Connect to SMS Cloud Hub via secure API — no complex setup required.",
                },
                {
                  icon: "📊",
                  title: "Delivery Logs & Analytics",
                  desc: "Monitor every message sent with detailed delivery status and timestamps.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A1220] border border-white/10 hover:border-[#22D3EE]/50 rounded-2xl p-7 space-y-4 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/30 flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm text-[#8DA0C0] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. PLUGIN SETUP GUIDE ─── */}
        <section id="setup-guide" className="py-20 px-6 border-b border-white/5 scroll-mt-24">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Plugin Setup Guide
              </h2>
              <p className="text-base text-[#8DA0C0]">
                Setting up the SMS Cloud Hub WordPress plugin is quick and simple. Get started in under 5 minutes.
              </p>
            </div>

            <div className="space-y-6 text-left relative before:absolute before:left-6 sm:before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#22D3EE]/30">
              {[
                {
                  step: 1,
                  title: "Download & Install Plugin",
                  desc: "Download the SMS Cloud Hub WordPress Plugin zip file and upload it from your WordPress admin dashboard under Plugins → Add New → Upload Plugin.",
                },
                {
                  step: 2,
                  title: "Activate the Plugin",
                  desc: "Go to Plugins → Installed Plugins and click 'Activate' next to SMS Cloud Hub to enable plugin functionality.",
                },
                {
                  step: 3,
                  title: "Enter API Credentials",
                  desc: "Navigate to SMS Cloud Hub settings page in WordPress and input your API Key, Secret, and Sender ID from your account portal.",
                },
                {
                  step: 4,
                  title: "Configure SMS Triggers",
                  desc: "Select which actions (WooCommerce orders, user registration, OTP log-ins) trigger automated SMS messages.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="flex items-start gap-4 sm:gap-6 bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 relative z-10 hover:border-[#22D3EE]/40 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#22D3EE] text-[#04141A] font-mono font-extrabold text-lg flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    {s.step}
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{s.title}</h3>
                    <p className="text-sm text-[#8DA0C0] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. PLUGIN INTERFACE PREVIEW ─── */}
        <section className="py-20 px-6 border-b border-white/5 bg-[#0F1B2E]">
          <div className="max-w-5xl mx-auto space-y-10 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Plugin Interface Preview
              </h2>
              <p className="text-base text-[#8DA0C0]">
                Simple and intuitive plugin interface designed for WordPress users. Configure SMS automation in minutes.
              </p>
            </div>

            {/* Tab Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "settings"
                    ? "bg-[#22D3EE] text-[#04141A] shadow-[0_0_20px_rgba(34,211,238,0.4)] font-bold"
                    : "bg-[#0A1220] text-[#8DA0C0] border border-white/10 hover:text-white"
                }`}
              >
                WordPress Plugin Settings Page
              </button>
              <button
                onClick={() => setActiveTab("woocommerce")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "woocommerce"
                    ? "bg-[#22D3EE] text-[#04141A] shadow-[0_0_20px_rgba(34,211,238,0.4)] font-bold"
                    : "bg-[#0A1220] text-[#8DA0C0] border border-white/10 hover:text-white"
                }`}
              >
                WooCommerce SMS Notification Settings
              </button>
              <button
                onClick={() => setActiveTab("logs")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "logs"
                    ? "bg-[#22D3EE] text-[#04141A] shadow-[0_0_20px_rgba(34,211,238,0.4)] font-bold"
                    : "bg-[#0A1220] text-[#8DA0C0] border border-white/10 hover:text-white"
                }`}
              >
                SMS Delivery Logs
              </button>
            </div>

            {/* Tab Mockup Display */}
            <div className="bg-[#0A1220] border border-white/10 rounded-3xl p-6 sm:p-8 text-left shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-[#8DA0C0] ml-2">WordPress Admin → SMS Cloud Hub</span>
                </div>
                <span className="text-xs font-mono text-[#22D3EE]">● Connected to API</span>
              </div>

              {activeTab === "settings" && (
                <div className="space-y-5 font-sans">
                  <h3 className="text-lg font-bold text-white">General API Configuration</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#8DA0C0]">API Key</label>
                      <input
                        readOnly
                        value="sch_live_84920492041940"
                        className="w-full bg-[#0F1B2E] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-[#22D3EE] font-mono"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#8DA0C0]">Sender ID</label>
                      <input
                        readOnly
                        value="SMSCLOUD"
                        className="w-full bg-[#0F1B2E] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#8DA0C0]">Default Country Dial Code</label>
                    <input
                      readOnly
                      value="+1 (United States) / Auto-detect"
                      className="w-full bg-[#0F1B2E] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono"
                    />
                  </div>
                </div>
              )}

              {activeTab === "woocommerce" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">WooCommerce Event Triggers</h3>
                  <div className="space-y-3">
                    {[
                      { event: "New Order Placed", template: "Hi {customer_name}, thanks for order #{order_id}! Total: ${order_total}." },
                      { event: "Order Shipped", template: "Good news {customer_name}! Order #{order_id} has shipped via {courier}." },
                      { event: "OTP Registration", template: "Your SMS Cloud Hub verification code is: {otp_code}. Valid for 5 mins." },
                    ].map((row, i) => (
                      <div key={i} className="p-4 rounded-xl bg-[#0F1B2E] border border-white/5 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#22D3EE]">{row.event}</span>
                          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">ACTIVE</span>
                        </div>
                        <p className="text-xs font-mono text-[#8DA0C0]">{row.template}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "logs" && (
                <div className="space-y-4 overflow-x-auto">
                  <h3 className="text-lg font-bold text-white">Recent SMS Dispatch Logs</h3>
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 text-[#8DA0C0]">
                        <th className="pb-2">Time</th>
                        <th className="pb-2">Recipient</th>
                        <th className="pb-2">Event</th>
                        <th className="pb-2">Status</th>
                        <th className="pb-2">Latency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[#F3F8FF]">
                      <tr>
                        <td className="py-2.5 text-[#8DA0C0]">16:42:01</td>
                        <td>+1 (555) 234-8901</td>
                        <td>Order #4812</td>
                        <td className="text-emerald-400 font-bold">DELIVERED</td>
                        <td>0.8s</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-[#8DA0C0]">16:40:15</td>
                        <td>+44 7700 900077</td>
                        <td>OTP Auth</td>
                        <td className="text-emerald-400 font-bold">DELIVERED</td>
                        <td>0.6s</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-[#8DA0C0]">16:35:50</td>
                        <td>+91 98765 43210</td>
                        <td>Order #4811</td>
                        <td className="text-emerald-400 font-bold">DELIVERED</td>
                        <td>1.1s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── 7. FINAL DOWNLOAD CTA BANNER ─── */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#22D3EE]/20 via-[#0F1B2E] to-[#0A1220] border border-[#22D3EE]/40 rounded-3xl p-10 text-center space-y-6 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Automate SMS on Your WordPress Site?
            </h2>
            <p className="text-base text-[#8DA0C0] max-w-xl mx-auto leading-relaxed">
              Download the official SMS Cloud Hub WordPress plugin zip package and start sending instant automated SMS notifications today.
            </p>
            <div className="pt-2">
              <a
                href="/sms-cloud-hub-wordpress-plugin.zip"
                download="sms-cloud-hub-wordpress-plugin.zip"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#22D3EE] text-[#04141A] font-extrabold text-lg rounded-full hover:bg-white hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition-all transform hover:-translate-y-1 cursor-pointer active:scale-95"
              >
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Download Plugin Zip</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
