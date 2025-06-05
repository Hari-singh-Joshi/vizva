import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  department: z.enum(["management", "technical"]),
  contactMethod: z.enum(["phone", "email"]),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

async function sendContactEmail(formData: ContactFormData) {
  const validatedData = contactFormSchema.parse(formData);

  const department =
    validatedData.department === "management" ? "Management" : "Technical";
  const contactMethod =
    validatedData.contactMethod === "email" ? "Email" : "Phone";

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_EMAIL) {
    throw new Error("Missing email credentials. Cannot send email.");
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
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      <p><strong>Department:</strong> ${department}</p>
      <p><strong>Preferred Contact:</strong> ${contactMethod}</p>
      <p><strong>Message:</strong></p>
      <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
    `,
  };

  const userEmailContent = {
    from: process.env.SMTP_USER,
    to: validatedData.email,
    subject: "Thank you for contacting us",
    html: `
      <h2>Thank You</h2>
      <p>Hi ${validatedData.name},</p>
      <p>We’ve received your message and will respond soon.</p>
      <p><strong>Your Submission:</strong></p>
      <ul>
        <li><strong>Department:</strong> ${department}</li>
        <li><strong>Contact Method:</strong> ${contactMethod}</li>
      </ul>
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
    const result = await sendContactEmail(data);
    return NextResponse.json(result);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
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
