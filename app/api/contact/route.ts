import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, volume, channel, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@smscloudhub.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Formatted email content
    const emailSubject = `📥 New Inquiry from ${name} (${company || "Individual"}) — SMSCloudHub Contact Form`;
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0A1220; color: #F3F8FF; padding: 24px; border-radius: 12px; border: 1px solid #22D3EE;">
        <h2 style="color: #22D3EE; border-bottom: 2px solid #22D3EE; padding-bottom: 10px; margin-top: 0;">
          SMSCloudHub Lead Submission
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; color: #8DA0C0; width: 140px; font-weight: bold;">Full Name:</td>
            <td style="padding: 8px 0; color: #FFFFFF;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8DA0C0; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px 0; color: #22D3EE;"><a href="mailto:${email}" style="color: #22D3EE; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8DA0C0; font-weight: bold;">Company:</td>
            <td style="padding: 8px 0; color: #FFFFFF;">${company || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8DA0C0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0; color: #FFFFFF;">${phone || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8DA0C0; font-weight: bold;">Est. Monthly Volume:</td>
            <td style="padding: 8px 0; color: #FFFFFF;">${volume || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8DA0C0; font-weight: bold;">Preferred Channel:</td>
            <td style="padding: 8px 0; color: #FFFFFF;">${channel || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8DA0C0; font-weight: bold;">Timestamp:</td>
            <td style="padding: 8px 0; color: #8DA0C0; font-size: 12px;">${timestamp}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background-color: #0F1B2E; border-left: 4px solid #22D3EE; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #22D3EE;">Message / Traffic Details:</p>
          <p style="margin: 0; color: #E2E8F0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      </div>
    `;

    // 1. Always save a local copy as backup log to prevent lost submissions
    try {
      const submissionsPath = path.join(process.cwd(), "data", "submissions.json");
      const dirPath = path.dirname(submissionsPath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      let submissions = [];
      if (fs.existsSync(submissionsPath)) {
        const fileData = fs.readFileSync(submissionsPath, "utf-8");
        try {
          submissions = JSON.parse(fileData);
        } catch {
          submissions = [];
        }
      }

      submissions.push({
        id: `sub_${Date.now()}`,
        timestamp,
        name,
        company,
        email,
        phone,
        volume,
        channel,
        message,
      });

      fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));
    } catch (saveErr) {
      console.error("Local backup submission save error:", saveErr);
    }

    // 2. Send Email if SMTP details exist in environment
    if (smtpHost && smtpUser && smtpPass) {
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
        from: `"${name} via SMSCloudHub Contact" <${smtpUser}>`,
        to: receiverEmail,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
      });
    }

    // 3. Optional Webhook dispatch (e.g. Slack / Telegram / Discord / Zapier)
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `📥 *New SMSCloudHub Inquiry*\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company}\n*Volume:* ${volume}\n*Message:* ${message}`,
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook dispatch error:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: any) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process form submission." },
      { status: 500 }
    );
  }
}
