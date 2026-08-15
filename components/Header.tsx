"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceCategories = [
  {
    title: "Enterprise",
    badge: "Enterprise",
    items: [
      { name: "WhatsApp Business", href: "/services/whatsapp-business", desc: "Verified BSP API & Chatbots" },
      { name: "A2P SMS & OTP", href: "/services/a2p-sms", desc: "Sub-2s latency global routes" },
      { name: "Digital Marketing", href: "/services/digital-marketing", desc: "Digital Transformation & campaigns" },
      { name: "Voice & Voice OTP", href: "/services/voice-otp", desc: "TTS & SIP termination" },
      { name: "CPaaS REST APIs", href: "/services/cpaas-api", desc: "Unified developer REST API" },
      { name: "VN / TFN / DID", href: "/services/virtual-did", desc: "Virtual phone numbers & DIDs" },
      { name: "RCS Messaging", href: "/services/rcs", desc: "Rich interactive messaging" },
      { name: "2-Way SMS", href: "/services/2way-sms", desc: "Inbound & outbound 2-way" },
      { name: "Missed Call", href: "/services/missed-call", desc: "Instant missed-call alerts" },
    ],
  },
  {
    title: "Carrier",
    badge: "Carrier",
    items: [
      { name: "A2P SMS Hubbing", href: "/services/a2p-hubbing", desc: "Wholesale SMS traffic" },
      { name: "SIP Trunk Voice", href: "/services/sip-trunk-voice", desc: "Global voice termination" },
      { name: "Number Lookup", href: "/services/number-lookup", desc: "Network validation API" },
    ],
  },
  {
    title: "MNO & MVNO",
    badge: "MNO & MVNO",
    items: [
      { name: "SMSC Firewall", href: "/services/smsc-firewall", desc: "Grey route & fraud protection" },
      { name: "0Hop Connectivity", href: "/services/0hop-connectivity", desc: "Direct SS7 & SMPP peering" },
      { name: "Managed Services", href: "/services/managed-services", desc: "Turnkey messaging ops" },
      { name: "Carrier Grade Platform", href: "/services/cpaas-platform", desc: "High-throughput node" },
      { name: "HLR Lookup", href: "/services/hlr", desc: "Real-time subscriber check" },
      { name: "VAS Solutions", href: "/services/vas-solutions", desc: "Value-added telecom tech" },
    ],
  },
  {
    title: "Technology",
    badge: "Technology",
    items: [
      { name: "CloudSkool++", href: "/services/cloudskool", desc: "Educational tech & SMS" },
      { name: "CloudContactCenter", href: "/services/cloud-contact-center", desc: "Omnichannel contact platform" },
    ],
  },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const closeMobileMenu = () => {
    setMobileNavOpen(false);
    setMobileServicesOpen(false);
  };

  const isServicePage = pathname.startsWith("/services");

  return (
    <header className={`sticky top-0 z-[100] border-b border-white/10 transition-colors ${
      mobileNavOpen ? "bg-[#070E1B]" : "bg-[#0A1220]/95 backdrop-blur-md"
    }`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[72px] sm:h-[78px] flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Logo Header */}
        <Link href="/" onClick={closeMobileMenu} className="flex items-center group shrink-0">
          <Image
            src="/logo.png"
            alt="SMSCloudHub"
            width={260}
            height={130}
            priority
            className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Primary Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/"
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
              pathname === "/" ? "text-[#22D3EE] bg-white/5" : "text-[#8DA0C0] hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
              pathname === "/about" ? "text-[#22D3EE] bg-white/5" : "text-[#8DA0C0] hover:text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/awards"
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
              pathname === "/awards" ? "text-[#22D3EE] bg-white/5" : "text-[#8DA0C0] hover:text-white"
            }`}
          >
            Awards
          </Link>

          {/* Services Desktop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/services"
              className={`px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                isServicePage ? "text-[#22D3EE] bg-white/5" : "text-[#8DA0C0] hover:text-white"
              }`}
            >
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
            </Link>

            {activeDropdown === "services" && (
              <>
                {/* Hover bridge */}
                <div className="absolute top-full left-0 w-full h-3" />
                <div className="absolute top-[calc(100%+8px)] -left-20 w-[840px] max-w-[calc(100vw-32px)] bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl z-50 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-xs text-[#22D3EE] uppercase tracking-widest font-bold">
                      Full Product & Service Suite
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs text-[#8DA0C0] hover:text-[#22D3EE] font-mono font-semibold flex items-center gap-1 transition-colors"
                    >
                      View All Services Overview →
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-5">
                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="space-y-2.5">
                        <h5 className="font-mono text-[11px] tracking-widest text-[#22D3EE] uppercase font-bold">
                          {cat.title}
                        </h5>
                        <ul className="space-y-1 text-xs">
                          {cat.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`block p-1.5 rounded-md transition-colors ${
                                  pathname === item.href
                                    ? "bg-[#22D3EE]/15 text-[#22D3EE] font-bold"
                                    : "text-[#F3F8FF] hover:bg-white/5 hover:text-[#22D3EE]"
                                }`}
                              >
                                <span className="block font-medium">{item.name}</span>
                                <span className="block text-[10px] text-[#8DA0C0] line-clamp-1">{item.desc}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <Link
            href="/why-us"
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
              pathname === "/why-us" ? "text-[#22D3EE] bg-white/5" : "text-[#8DA0C0] hover:text-white"
            }`}
          >
            Why Us
          </Link>
          <Link
            href="/testimonials"
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
              pathname === "/testimonials" ? "text-[#22D3EE] bg-white/5" : "text-[#8DA0C0] hover:text-white"
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
              pathname === "/contact" ? "text-[#22D3EE] bg-white/5" : "text-[#8DA0C0] hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Header Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/sms-compliances"
            onClick={closeMobileMenu}
            className="!hidden lg:!inline-flex btn btn-primary group text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg"
          >
            SMS COMPLIANCES
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden p-2 sm:p-2.5 rounded-xl border border-white/10 bg-[#0F1B2E] text-white hover:border-[#22D3EE] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
              {mobileNavOpen ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Overlay Drawer Navigation */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed top-[72px] sm:top-[78px] inset-x-0 bottom-0 bg-[#070E1B] border-t border-white/10 px-4 sm:px-6 py-6 overflow-y-auto z-[100] animate-in fade-in duration-150">
          <div className="space-y-3 max-w-md mx-auto pb-12">
            
            {/* Featured SMS Compliances CTA in Mobile Drawer */}
            <Link
              href="/sms-compliances"
              onClick={closeMobileMenu}
              className="btn btn-primary w-full py-3.5 px-4 rounded-xl text-base font-bold text-center justify-center flex items-center gap-2 shadow-lg mb-4 group"
            >
              SMS COMPLIANCES
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Primary Main Links */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/" ? "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30" : "text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/about" ? "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30" : "text-white hover:bg-white/5"
              }`}
            >
              About Us
            </Link>

            {/* Expandable Services Accordion Section */}
            <div className="border border-white/10 rounded-xl overflow-hidden bg-[#0F1B2E]">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full py-3.5 px-4 flex items-center justify-between text-base font-semibold text-white hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>Services & Products</span>
                  <span className="text-[10px] font-mono font-bold bg-[#22D3EE]/20 text-[#22D3EE] px-2 py-0.5 rounded-full border border-[#22D3EE]/30">
                    19 Services
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 text-[#22D3EE] transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>

              {/* Collapsible Accordion Drawer */}
              {mobileServicesOpen && (
                <div className="p-4 border-t border-white/10 bg-[#0A1220]/80 space-y-5 animate-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                    className="block p-3 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-sm font-bold text-center hover:bg-[#22D3EE]/20 transition-colors"
                  >
                    View All Services Hub →
                  </Link>

                  {serviceCategories.map((cat) => (
                    <div key={cat.title} className="space-y-2">
                      <div className="font-mono text-xs font-bold text-[#22D3EE] uppercase tracking-wider px-1">
                        {cat.title}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {cat.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={`p-2.5 rounded-lg border text-xs flex flex-col justify-between transition-colors ${
                              pathname === item.href
                                ? "bg-[#22D3EE]/20 border-[#22D3EE] text-[#22D3EE] font-bold"
                                : "bg-white/5 border-white/5 text-[#F3F8FF] hover:border-[#22D3EE]/40 hover:bg-white/10"
                            }`}
                          >
                            <span className="font-semibold text-white">{item.name}</span>
                            <span className="text-[10px] text-[#8DA0C0] mt-0.5 line-clamp-1">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/awards"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/awards" ? "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30" : "text-white hover:bg-white/5"
              }`}
            >
              Awards
            </Link>

            <Link
              href="/why-us"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/why-us" ? "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30" : "text-white hover:bg-white/5"
              }`}
            >
              Why Us
            </Link>

            <Link
              href="/testimonials"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/testimonials" ? "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30" : "text-white hover:bg-white/5"
              }`}
            >
              Testimonials
            </Link>

            <Link
              href="/sms-compliances"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/sms-compliances" ? "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30" : "text-white hover:bg-white/5"
              }`}
            >
              SMS Compliances
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/contact" ? "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30" : "text-white hover:bg-white/5"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

