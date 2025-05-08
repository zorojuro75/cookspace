import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const jobTitle = formData.get("jobTitle") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const referenceNumber = formData.get("id") as string;
    const resumeFile = formData.get("resume") as File;
    const coverLetterFile = formData.get("cover_letter") as File;

    // Read files into buffers
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
    const coverLetterBuffer = Buffer.from(await coverLetterFile.arrayBuffer());

    // Send confirmation to applicant
    const employerMailOptions = {
      from: `"Cookspace Careers" <hello@demomailtrap.co>`,
      to: "anikbanna6@gmail.com",
      subject: `New Application for ${jobTitle} - ${name}`,
      html: `
        <h1 style="color: #1a365d; font-size: 24px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
          New Job Application Received
        </h1>
        
        <div style="margin-top: 24px;">
          <h2 style="color: #2d3748; font-size: 18px; margin-bottom: 12px;">Application Details:</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #e2e8f0; width: 30%;"><strong>Position:</strong></td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${jobTitle}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Applicant Name:</strong></td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Email:</strong></td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Application ID:</strong></td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${referenceNumber}</td>
            </tr>
          </table>
        </div>

        <p style="margin-top: 24px; color: #4a5568;">
          Documents attached:
          <ul style="margin-top: 8px; color: #4a5568;">
            <li>Resume: ${resumeFile.name}</li>
            <li>Cover Letter: ${coverLetterFile.name}</li>
          </ul>
        </p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeBuffer,
        },
        {
          filename: coverLetterFile.name,
          content: coverLetterBuffer,
        },
      ],
    };
    await transporter.sendMail(employerMailOptions);

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        referenceNumber,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      {
        error: "Failed to submit application",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
