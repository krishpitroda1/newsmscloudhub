"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceCategories = [
  {
    title: "Enterprise Messaging",
    badge: "Enterprise",
    items: [
      { name: "A2P SMS & OTP", href: "/services/a2p-sms", desc: "Sub-2s latency global routes" },
      { name: "WhatsApp Business", href: "/services/whatsapp-business", desc: "Verified BSP API & Chatbots" },
      { name: "WordPress Plugin", href: "/services/wordpress-plugin", desc: "Automated WordPress SMS & OTP" },
      { name: "CPaaS REST APIs", href: "/services/cpaas-api", desc: "Unified developer REST API" },
      { name: "RCS Messaging", href: "/services/rcs", desc: "Rich interactive messaging" },
    ],
  },
  {
    title: "Business & Voice",
    badge: "Voice & Business",
    items: [
      { name: "Voice & Voice OTP", href: "/services/voice-otp", desc: "TTS & SIP termination" },
      { name: "Digital Marketing", href: "/services/digital-marketing", desc: "Digital Transformation & campaigns" },
      { name: "VN / TFN / DID", href: "/services/virtual-did", desc: "Virtual phone numbers & DIDs" },
      { name: "2-Way SMS", href: "/services/2way-sms", desc: "Inbound & outbound 2-way" },
      { name: "Missed Call", href: "/services/missed-call", desc: "Instant missed-call alerts" },
    ],
  },
  {
    title: "Carrier & Interconnect",
    badge: "Carrier",
    items: [
      { name: "A2P SMS Hubbing", href: "/services/a2p-hubbing", desc: "Wholesale SMS traffic" },
      { name: "SIP Trunk Voice", href: "/services/sip-trunk-voice", desc: "Global voice termination" },
      { name: "Number Lookup", href: "/services/number-lookup", desc: "Network validation API" },
      { name: "0Hop Connectivity", href: "/services/0hop-connectivity", desc: "Direct SS7 & SMPP peering" },
    ],
  },
  {
    title: "MNO & Security",
    badge: "MNO & MVNO",
    items: [
      { name: "SMSC Firewall", href: "/services/smsc-firewall", desc: "Grey route & fraud protection" },
      { name: "Managed Services", href: "/services/managed-services", desc: "Turnkey messaging ops" },
      { name: "Carrier Grade Platform", href: "/services/cpaas-platform", desc: "High-throughput node" },
      { name: "HLR Lookup", href: "/services/hlr", desc: "Real-time subscriber check" },
      { name: "VAS Solutions", href: "/services/vas-solutions", desc: "Value-added telecom tech" },
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

  const handleHomeClick = (e: React.MouseEvent) => {
    closeMobileMenu();
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isServicePage = pathname.startsWith("/services");

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-slate-200 transition-colors bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[68px] sm:h-[78px] flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo Header */}
          <Link href="/" onClick={handleHomeClick} className="flex items-center group shrink-0 cursor-pointer">
            <Image
              src="/logo.png"
              alt="SMSCloudHub"
              width={260}
              height={130}
              priority
              className="h-10 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Primary Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-[#0891B2] bg-slate-100" : "text-slate-700 hover:text-[#0891B2]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                pathname === "/about" ? "text-[#0891B2] bg-slate-100" : "text-slate-700 hover:text-[#0891B2]"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/awards"
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                pathname === "/awards" ? "text-[#0891B2] bg-slate-100" : "text-slate-700 hover:text-[#0891B2]"
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
                  isServicePage ? "text-[#0891B2] bg-slate-100" : "text-slate-700 hover:text-[#0891B2]"
                }`}
              >
                Services
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-[#0891B2]" : ""
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
                  <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[1040px] max-w-[calc(100vw-32px)] bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl z-50 space-y-4 font-sans">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="font-mono text-xs text-[#0891B2] uppercase tracking-widest font-bold">
                        Full Product & Service Suite
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs text-slate-500 hover:text-[#0891B2] font-mono font-semibold flex items-center gap-1 transition-colors"
                      >
                        View All Services Overview →
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-6">
                      {serviceCategories.map((cat) => (
                        <div key={cat.title} className="space-y-2.5">
                          <h5 className="font-mono text-xs tracking-widest text-[#0891B2] uppercase font-bold">
                            {cat.title}
                          </h5>
                          <ul className="space-y-1 text-sm">
                            {cat.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`block p-2 rounded-md transition-colors ${
                                    pathname === item.href
                                      ? "bg-cyan-50 text-[#0891B2] font-bold"
                                      : "text-slate-700 hover:bg-slate-50 hover:text-[#0891B2]"
                                  }`}
                                >
                                  <span className="block font-semibold">{item.name}</span>
                                  <span className="block text-xs text-slate-500 line-clamp-1">{item.desc}</span>
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
                pathname === "/why-us" ? "text-[#0891B2] bg-slate-100" : "text-slate-700 hover:text-[#0891B2]"
              }`}
            >
              Why Us
            </Link>
            <Link
              href="/testimonials"
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                pathname === "/testimonials" ? "text-[#0891B2] bg-slate-100" : "text-slate-700 hover:text-[#0891B2]"
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="/careers"
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                pathname === "/careers" ? "text-[#0891B2] bg-slate-100" : "text-slate-700 hover:text-[#0891B2]"
              }`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                pathname === "/contact" ? "text-[#0891B2] bg-slate-100" : "text-slate-700 hover:text-[#0891B2]"
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
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-800 hover:border-[#0891B2] transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
                <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Solid Mobile Drawer Navigation Overlay */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-white text-slate-800 flex flex-col h-full w-full overflow-hidden">
          {/* Mobile Overlay Top Header Bar */}
          <div className="h-[68px] sm:h-[78px] px-4 sm:px-6 flex items-center justify-between border-b border-slate-200 bg-white shrink-0">
            <Link href="/" onClick={handleHomeClick} className="flex items-center">
              <Image
                src="/logo.png"
                alt="SMSCloudHub"
                width={260}
                height={130}
                priority
                className="h-10 sm:h-14 w-auto object-contain"
              />
            </Link>

            <button
              onClick={closeMobileMenu}
              className="p-2 sm:p-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-800 hover:border-[#0891B2] transition-colors focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Scrollable Mobile Drawer Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 bg-white">
            <div className="space-y-3 max-w-md mx-auto pb-16">
              
              {/* Featured SMS Compliances CTA */}
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
                  pathname === "/" ? "bg-cyan-50 text-[#0891B2] border border-cyan-200" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/about" ? "bg-cyan-50 text-[#0891B2] border border-cyan-200" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                About Us
              </Link>

              {/* Expandable Services Accordion Section */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full py-3.5 px-4 flex items-center justify-between text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span>Services & Products</span>
                    <span className="text-xs font-mono font-bold bg-cyan-100 text-[#0891B2] px-2 py-0.5 rounded-full border border-cyan-200">
                      17 Services
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-[#0891B2] transition-transform duration-200 ${
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
                  <div className="p-4 border-t border-slate-200 bg-white space-y-5">
                    <Link
                      href="/services"
                      onClick={closeMobileMenu}
                      className="block p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-[#0891B2] text-sm font-bold text-center hover:bg-cyan-100 transition-colors"
                    >
                      View All Services Hub →
                    </Link>

                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="space-y-2">
                        <div className="font-mono text-xs font-bold text-[#0891B2] uppercase tracking-wider px-1">
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
                                  ? "bg-cyan-100 border-[#0891B2] text-[#0891B2] font-bold"
                                  : "bg-slate-50 border-slate-200 text-slate-800 hover:border-[#0891B2]/40 hover:bg-slate-100"
                              }`}
                            >
                              <span className="font-semibold text-slate-900">{item.name}</span>
                              <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.desc}</span>
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
                  pathname === "/awards" ? "bg-cyan-50 text-[#0891B2] border border-cyan-200" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                Awards
              </Link>

              <Link
                href="/why-us"
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/why-us" ? "bg-cyan-50 text-[#0891B2] border border-cyan-200" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                Why Us
              </Link>

              <Link
                href="/testimonials"
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/testimonials" ? "bg-cyan-50 text-[#0891B2] border border-cyan-200" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                Testimonials
              </Link>

              <Link
                href="/careers"
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/careers" ? "bg-cyan-50 text-[#0891B2] border border-cyan-200" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                Careers
              </Link>

              <Link
                href="/sms-compliances"
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/sms-compliances" ? "bg-cyan-50 text-[#0891B2] border border-cyan-200" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                SMS Compliances
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/contact" ? "bg-cyan-50 text-[#0891B2] border border-cyan-200" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
