import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersClient, { Job } from "@/components/CareersClient";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Careers & Open Positions — Join SMSCloudHub Global Team",
  description:
    "Explore career opportunities at SMSCloudHub. Architect carrier-grade SMPP gateways, WhatsApp BSP solutions, and AI firewall infrastructure with our global remote & hybrid team.",
};

function getInitialJobs(): Job[] {
  try {
    const filePath = path.join(process.cwd(), "data", "jobs.json");
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(data);
      return parsed.filter((j: any) => j.status === "Active" || !j.status);
    }
  } catch (err) {
    console.error("Failed to read initial jobs in page.tsx:", err);
  }
  return [];
}

export default function CareersPage() {
  const initialJobs = getInitialJobs();

  return (
    <>
      <Header />
      <main>
        <CareersClient initialJobs={initialJobs} />
      </main>
      <Footer />
    </>
  );
}
