import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#22D3EE]" />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-12 border-b border-gray-200">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="SMSCloudHub"
                width={280}
                height={140}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 max-w-[32ch] leading-relaxed">
              Messaging is our business. Direct-route communication infrastructure for carriers, operators, telcos, and enterprises — across SMS, WhatsApp, Voice, and CPaaS.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://m.facebook.com/smscloudhub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#22D3EE] hover:border-[#22D3EE] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 5.5H8.8c-.4 0-.8.4-.8 1V8h2l-.3 2H8v5H6V10H4.5V8H6V6.2C6 4.6 7.1 3.3 8.7 3.3H10v2.2z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/hub_sms"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#22D3EE] hover:border-[#22D3EE] transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2.5 2.5l11 11M13.5 2.5l-11 11"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/smscloudhub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#22D3EE] hover:border-[#22D3EE] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <rect x="2.5" y="2.5" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="11.4" cy="4.6" r="0.6" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/smscloudhub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#22D3EE] hover:border-[#22D3EE] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <rect x="2.5" y="2.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="5.4" cy="5.6" r="0.9" fill="currentColor" />
                  <path d="M5.4 7.6v4M8.2 11.6V9.1c0-1 .6-1.6 1.5-1.6s1.4.6 1.4 1.6v2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-[#22D3EE] mb-4">
              Services
            </h5>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link href="#services" className="hover:text-black transition-colors">Enterprise Messaging</Link>
              </li>
              <li>
                <Link href="#route" className="hover:text-black transition-colors">Operator 0Hop</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-black transition-colors">Carrier Interconnect</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-black transition-colors">CPaaS & Voice APIs</Link>
              </li>
              <li>
                <Link href="#reliability" className="hover:text-black transition-colors">SMSC Firewall</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-[#22D3EE] mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link href="#top" className="hover:text-black transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-black transition-colors">Awards</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-black transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-black transition-colors">Contact Sales</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office */}
          <div>
            <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-[#22D3EE] mb-4">
              Head Office
            </h5>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#22D3EE] shrink-0 mt-1" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 1.5c-2.5 0-4.5 2-4.5 4.5 0 3.4 4.5 7.5 4.5 7.5s4.5-4.1 4.5-7.5c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="7.5" cy="6" r="1.4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span>B-614, World Trade Tower, Off S G Highway, Makarba, Ahmedabad – 380051, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#22D3EE] shrink-0" viewBox="0 0 15 15" fill="none">
                  <path d="M3 2.5h2.2l1 3-1.5 1a9 9 0 004.8 4.8l1-1.5 3 1V13c0 .6-.5 1-1 .9C7 13.4 1.6 8 1.1 2.5 1 2 1.5 1.5 2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <a href="tel:+919924494266" className="hover:text-black font-mono transition-colors">(+91) 99244 94266</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#22D3EE] shrink-0" viewBox="0 0 15 15" fill="none">
                  <rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M2 4l5.5 4L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <a href="mailto:info@smscloudhub.com" className="hover:text-black font-mono transition-colors">info@smscloudhub.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} SMSCloud Hub. All Rights Reserved.</div>
          <div className="font-mono">
            193+ countries · 495+ telcos & enterprises · 98.87% DLR accuracy
          </div>
        </div>
      </div>
    </footer>
  );
}
