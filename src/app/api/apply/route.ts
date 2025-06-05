// app/api/apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactFormSchema = z.object({
  name: z.string().min(2),
  designation: z.string().min(2),
  email: z.string().email(),
  linkedin: z.string().min(6),
  contact: z.string().min(10),
  resume: z.string().min(6),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

async function sendJobEmail(formData: ContactFormData) {
  const validatedData = contactFormSchema.parse(formData);

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_EMAIL) {
    throw new Error("Missing SMTP or contact email environment variables");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const companyEmailContent = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Submission: ${validatedData.name}`,
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.contact}</p>
      <p><strong>Designation:</strong> ${validatedData.designation}</p>
      <p><strong>Resume:</strong> ${validatedData.resume}</p>
      <p><strong>LinkedIn:</strong> ${validatedData.linkedin}</p>  
    `,
  };

  const userEmailContent = {
    from: process.env.SMTP_USER,
    to: validatedData.email,
    subject: "Thank you for contacting us",
    html: `
      <h2>Thank You</h2>
      <p>Hi ${validatedData.name},</p>
      <p>We have received your details and will respond soon.</p>
      <p><strong>Your Submission:</strong></p>
      <p>– The Team</p>
    `,
  };

  await transporter.sendMail(companyEmailContent);
  await transporter.sendMail(userEmailContent);

  return {
    success: true,
    message: "Form submitted successfully.",
  };
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const result = await sendJobEmail(data);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
