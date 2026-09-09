import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const appsFilePath = path.join(process.cwd(), "data", "job_applications.json");
const tmpAppsFilePath = path.join("/tmp", "job_applications.json");

let memoryAppsStore: any[] | null = null;

// Helper to read applications from memory, /tmp, or cwd
function readApplicationsFromFile() {
  if (memoryAppsStore !== null) {
    return memoryAppsStore;
  }

  try {
    if (fs.existsSync(appsFilePath)) {
      const fileData = fs.readFileSync(appsFilePath, "utf-8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed)) {
        memoryAppsStore = parsed;
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Could not read job_applications.json from process.cwd():", error);
  }

  try {
    if (fs.existsSync(tmpAppsFilePath)) {
      const fileData = fs.readFileSync(tmpAppsFilePath, "utf-8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed)) {
        memoryAppsStore = parsed;
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Could not read job_applications.json from /tmp:", error);
  }

  memoryAppsStore = [];
  return memoryAppsStore;
}

// Helper to save application to disk / tmp / memory
function saveApplicationToFile(appData: any) {
  const apps = readApplicationsFromFile();
  apps.unshift(appData);
  memoryAppsStore = apps;

  let saved = false;
  try {
    const dir = path.dirname(appsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(appsFilePath, JSON.stringify(apps, null, 2), "utf-8");
    saved = true;
  } catch (error) {
    console.warn("Could not write job_applications.json to process.cwd() (expected on serverless):", error);
  }

  if (!saved) {
    try {
      const tmpDir = path.dirname(tmpAppsFilePath);
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
      fs.writeFileSync(tmpAppsFilePath, JSON.stringify(apps, null, 2), "utf-8");
    } catch (tmpErr) {
      console.warn("Could not write job_applications.json to /tmp:", tmpErr);
    }
  }

  return apps;
}

// GET /api/careers/apply (For Admin to view received applications)
export async function GET(req: Request) {
  try {
    const apps = readApplicationsFromFile();
    return NextResponse.json({ success: true, applications: apps });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch applications." },
      { status: 500 }
    );
  }
}

// POST /api/careers/apply (Submit application & send email notification)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      linkedin,
      portfolio,
      experienceYears,
      expectedSalary,
      coverLetter,
      resumeLink,
    } = body;

    if (!fullName || !email || !jobTitle) {
      return NextResponse.json(
        { success: false, error: "Missing required application fields (Full Name, Email, Job Title)." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const applicationId = `app_${Date.now()}`;

    const newApplication = {
      id: applicationId,
      timestamp,
      jobId: jobId || "N/A",
      jobTitle,
      fullName,
      email,
      phone: phone || "N/A",
      linkedin: linkedin || "N/A",
      portfolio: portfolio || "N/A",
      experienceYears: experienceYears || "Not specified",
      expectedSalary: expectedSalary || "Not specified",
      coverLetter: coverLetter || "",
      resumeLink: resumeLink || "N/A",
    };

    // 1. Save to data/job_applications.json audit file
    saveApplicationToFile(newApplication);

    // 2. Configure Email Dispatch
    const receiverEmail =
      process.env.CAREERS_RECEIVER_EMAIL ||
      process.env.CONTACT_RECEIVER_EMAIL ||
      "info@smscloudhub.com";

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const emailSubject = `💼 New Job Application: ${fullName} — Position: ${jobTitle}`;

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #0A1220; color: #F3F8FF; padding: 28px; border-radius: 14px; border: 1px solid #0891B2;">
        <div style="border-bottom: 2px solid #0891B2; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #22D3EE; margin: 0; font-size: 22px;">
            🚀 New Candidate Application Received
          </h2>
          <p style="color: #94A3B8; margin: 6px 0 0 0; font-size: 14px;">
            Position Applied: <strong style="color: #FFFFFF;">${jobTitle}</strong>
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; width: 160px; font-weight: 600;">Candidate Name:</td>
            <td style="padding: 10px 0; color: #FFFFFF; font-weight: 700;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; font-weight: 600;">Email Address:</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${email}" style="color: #22D3EE; text-decoration: underline; font-weight: 600;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; font-weight: 600;">Phone Number:</td>
            <td style="padding: 10px 0; color: #FFFFFF;">${phone || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; font-weight: 600;">Years of Experience:</td>
            <td style="padding: 10px 0; color: #FFFFFF;">${experienceYears || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; font-weight: 600;">Expected Salary:</td>
            <td style="padding: 10px 0; color: #FFFFFF;">${expectedSalary || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; font-weight: 600;">LinkedIn Profile:</td>
            <td style="padding: 10px 0;">
              ${
                linkedin && linkedin !== "N/A"
                  ? `<a href="${linkedin}" target="_blank" style="color: #22D3EE; text-decoration: underline;">${linkedin}</a>`
                  : `<span style="color: #64748B;">Not provided</span>`
              }
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; font-weight: 600;">Portfolio / GitHub:</td>
            <td style="padding: 10px 0;">
              ${
                portfolio && portfolio !== "N/A"
                  ? `<a href="${portfolio}" target="_blank" style="color: #22D3EE; text-decoration: underline;">${portfolio}</a>`
                  : `<span style="color: #64748B;">Not provided</span>`
              }
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; font-weight: 600;">Resume URL:</td>
            <td style="padding: 10px 0;">
              ${
                resumeLink && resumeLink !== "N/A"
                  ? `<a href="${resumeLink}" target="_blank" style="color: #22D3EE; font-weight: bold; text-decoration: underline;">View / Download Resume</a>`
                  : `<span style="color: #64748B;">Not provided</span>`
              }
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94A3B8; font-weight: 600;">Timestamp:</td>
            <td style="padding: 10px 0; color: #64748B; font-size: 12px;">${timestamp}</td>
          </tr>
        </table>

        ${
          coverLetter
            ? `
          <div style="margin-top: 24px; padding: 18px; background-color: #0F1B2E; border-left: 4px solid #0891B2; border-radius: 6px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #22D3EE; font-size: 14px;">Cover Note & Candidate Pitch:</p>
            <p style="margin: 0; color: #E2E8F0; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">${coverLetter}</p>
          </div>
        `
            : ""
        }

        <div style="margin-top: 24px; padding-top: 16px; border-t: 1px solid #1E293B; text-align: center; color: #64748B; font-size: 12px;">
          SMSCloudHub Careers Portal Auto-Notification
        </div>
      </div>
    `;

    // 3. Dispatch Email via Nodemailer if SMTP configured
    let emailSent = false;
    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"${fullName} via SMSCloudHub Careers" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
        });
        emailSent = true;
      } catch (mailError) {
        console.error("Nodemailer dispatch error for job application:", mailError);
      }
    }

    // 4. Free FormSubmit relay fallback if SMTP details are missing
    if (!emailSent) {
      try {
        await fetch(`https://formsubmit.co/ajax/${receiverEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            _subject: emailSubject,
            _replyto: email,
            "Job Title": jobTitle,
            "Applicant Name": fullName,
            "Applicant Email": email,
            Phone: phone || "N/A",
            Experience: experienceYears || "N/A",
            "Expected Salary": expectedSalary || "N/A",
            LinkedIn: linkedin || "N/A",
            Portfolio: portfolio || "N/A",
            Resume: resumeLink || "N/A",
            "Cover Note": coverLetter || "",
          }),
        });
      } catch (fallbackErr) {
        console.error("Free FormSubmit relay fallback error for careers:", fallbackErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our talent team will review your application.",
      applicationId,
    });
  } catch (error: any) {
    console.error("Job Application API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process job application." },
      { status: 500 }
    );
  }
}
