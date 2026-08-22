import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmscFirewallClientSection from "@/components/SmscFirewallClientSection";

export const metadata: Metadata = {
  title: "SMSC Firewall & Operator Callback | SMSCloudHub",
  description: "Protect your SMSC from unauthorized access, grey routes, and security threats. Request a dedicated callback from SMSCloudHub telecom engineers.",
};

export default function SmscFirewallPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <SmscFirewallClientSection />
      </main>
      <Footer />
    </>
  );
}
