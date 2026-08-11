"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";



export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/10 transition-all">
      <div className="max-w-[1240px] mx-auto px-6 h-[78px] flex items-center justify-between gap-6">
        {/* Brand Logo Header */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="SMSCloudHub"
            width={280}
            height={140}
            priority
            className="h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Primary Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/awards"
            className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-colors"
          >
            Awards
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black flex items-center gap-1.5 transition-colors">
              Services
              <svg
                className={`w-2.5 h-2.5 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180 text-[#22D3EE]" : ""
                }`}
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {activeDropdown === "services" && (
              <>
                {/* Invisible hover bridge — prevents dropdown from closing when moving mouse from button to panel */}
                <div className="absolute top-full left-0 w-full h-3" />
                <div className="absolute top-[calc(100%+8px)] left-0 w-[800px] bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 grid grid-cols-4 gap-4 shadow-2xl backdrop-blur-xl z-50">
                  <div className="space-y-3">
                    <h5 className="font-mono text-[11px] tracking-widest text-[#22D3EE] uppercase font-bold">
                      Enterprise
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/services/whatsapp-business" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          WhatsApp Business
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/a2p-sms" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          A2P SMS
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/voice-otp" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          Voice
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cpaas-api" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          CPaaS
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/virtual-did" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          VN / TFN / DID
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/rcs" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          RCS
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/2way-sms" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          2-Way SMS
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/missed-call" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          Missed Call
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-mono text-[11px] tracking-widest text-[#22D3EE] uppercase font-bold">
                      Operator
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/services/a2p-sms" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          A2P SMS
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/managed-services" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          Managed Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/smsc-firewall" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          SMSC Firewall
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cpaas-platform" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          Carrier Grade Platform
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/hlr" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          HLR Lookup
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/0hop-connectivity" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          0Hop Connectivity
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/vas-solutions" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          VAS Solutions
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-mono text-[11px] tracking-widest text-[#22D3EE] uppercase font-bold">
                      Carrier
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/services/a2p-sms" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          A2P SMS
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/virtual-did" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          VN / DID
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/number-lookup" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          Number Lookup
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/a2p-hubbing" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          A2P SMS Hubbing
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/sip-trunk-voice" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          SIP Trunk Voice
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-mono text-[11px] tracking-widest text-[#22D3EE] uppercase font-bold">
                      Technology
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/services/cpaas-platform" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          Messaging Platform
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cloudskool" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          CloudSkool++
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cpaas-platform" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          CPaaS Platform
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cloud-contact-center" className="block p-1.5 -mx-1.5 rounded-lg text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE] transition-colors">
                          CloudContactCenter
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>

          <Link
            href="/why-us"
            className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-colors"
          >
            Why Us
          </Link>
          <Link
            href="/testimonials"
            className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/sms-compliances"
            className="btn btn-primary group"
          >
            SMS COMPLIANCES
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-[#0F1B2E] text-white hover:border-[#22D3EE] transition-colors"
            aria-label="Toggle Navigation"
          >
            <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
              {mobileNavOpen ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileNavOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0A1220]/95 backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <Link
            href="#top"
            onClick={() => setMobileNavOpen(false)}
            className="block py-2 text-base font-medium text-white border-b border-white/5"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileNavOpen(false)}
            className="block py-2 text-base font-medium text-white border-b border-white/5"
          >
            About Us
          </Link>
          
          <div className="pt-2">
            <span className="font-mono text-xs text-[#22D3EE] uppercase tracking-wider font-bold">
              Services & Products
            </span>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <Link href="#services" onClick={() => setMobileNavOpen(false)} className="p-2 rounded bg-white/5 text-[#8DA0C0]">
                A2P SMS
              </Link>
              <Link href="#services" onClick={() => setMobileNavOpen(false)} className="p-2 rounded bg-white/5 text-[#8DA0C0]">
                WhatsApp API
              </Link>
              <Link href="#services" onClick={() => setMobileNavOpen(false)} className="p-2 rounded bg-white/5 text-[#8DA0C0]">
                Voice Termination
              </Link>
              <Link href="#services" onClick={() => setMobileNavOpen(false)} className="p-2 rounded bg-white/5 text-[#8DA0C0]">
                CPaaS APIs
              </Link>
              <Link href="#reliability" onClick={() => setMobileNavOpen(false)} className="p-2 rounded bg-white/5 text-[#8DA0C0]">
                SMS Firewall
              </Link>
              <Link href="#route" onClick={() => setMobileNavOpen(false)} className="p-2 rounded bg-white/5 text-[#8DA0C0]">
                0Hop Route
              </Link>
            </div>
          </div>

          <Link
            href="#contact"
            onClick={() => setMobileNavOpen(false)}
            className="block py-2 text-base font-medium text-white border-b border-white/5"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
