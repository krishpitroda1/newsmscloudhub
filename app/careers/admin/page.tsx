import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminJobsClient from "@/components/AdminJobsClient";

export const metadata: Metadata = {
  title: "Careers & Job Profiles Management — SMSCloudHub Admin",
  description: "Internal admin dashboard for managing SMSCloudHub career openings and candidate applications.",
};

export default function CareersAdminPage() {
  return (
    <>
      <Header />
      <main>
        <AdminJobsClient />
      </main>
      <Footer />
    </>
  );
}
