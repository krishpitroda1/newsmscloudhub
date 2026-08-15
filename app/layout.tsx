import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMSCloudHub — Direct-Route Global Messaging, CPaaS & SMS Firewall",
  description:
    "SMSCloudHub links enterprises, carriers, and mobile network operators over direct 0Hop connections for A2P SMS, WhatsApp Business API, Voice Termination, and CPaaS.",
  keywords: [
    "A2P SMS",
    "CPaaS",
    "WhatsApp Business",
    "Voice Termination",
    "0Hop SMS",
    "SMS Firewall",
    "SMSCloudHub",
    "Monty Mobile competitor",
    "Qoolize competitor",
    "GMS competitor",
    "Sama Telecom",
    "Macropyre",
  ],
  authors: [{ name: "SMSCloudHub" }],
  openGraph: {
    title: "SMSCloudHub — The Direct Route for Global Messaging",
    description:
      "Carrier-grade messaging network connecting 495+ telcos across 185+ countries with 98.87% DLR accuracy.",
    url: "https://www.smscloudhub.com",
    siteName: "SMSCloudHub",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#0A1220] text-[#F3F8FF] antialiased selection:bg-[#22D3EE] selection:text-[#04141A]">
        {children}
      </body>
    </html>
  );
}
