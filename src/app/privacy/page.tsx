"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      {/* Blurred background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1] blur-md opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('images/blog.png')",
          filter: "blur(18px)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen py-12 px-4 md:px-6">
        <main className="mx-auto max-w-5xl space-y-8">
          <section className="text-center mb-12 mt-6">
            <br/>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we handle your data.
            </p>
          </section>

          {/* Cards for each policy topic */}
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At Vizva Consultancy Services Inc. (“we,” “us,” or “our”), we value your privacy and are committed to
                protecting your personal information. This Privacy Policy outlines the types of information we gather,
                how we use it, and the measures we take to ensure its security when you visit our website. We comply with
                relevant privacy laws, including the GDPR and the CCPA.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We collect personal information that you voluntarily submit via our contact form, including:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>Name:</strong> For proper identification and communication.</li>
                <li><strong>Email Address:</strong> To reply to inquiries and provide updates.</li>
                <li><strong>Phone Number:</strong> For timely responses.</li>
                <li><strong>Message Details:</strong> Any information included in your message.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage of Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Responding to your inquiries.</li>
                <li>Sending updates or newsletters with your consent.</li>
                <li>Improving website functionality and user experience.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Cookies or Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We do not use cookies or tracking technologies. We only collect what you choose to share via the form.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We do not share your data with third parties. No outside services are used for data analysis or
                processing.
              </p>
              <p className="mt-2">Phone numbers provided for SMS purposes are never shared.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Access Control: Only authorized personnel access your data.</li>
                <li>Encryption: Secure data transfer and storage.</li>
                <li>Security Audits: Regular checks to ensure data integrity and protection.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights (GDPR & CCPA)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You have the right to access, correct, or delete your data. Under GDPR and CCPA, you can also object to or
                restrict processing, and opt out of data selling.
              </p>
              <p className="mt-2">
                Contact us at: <strong>careers@vizvaconsulting.com</strong> to exercise your rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We retain data only as long as necessary for the stated purposes or to comply with legal obligations.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you are  located outside the U.S., your data will be transferred and processed in the U.S. in accordance
                with applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consent</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                By using our site and submitting your information, you consent to our Privacy Policy. If you disagree,
                please do not use our site or submit personal data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Children’s Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We do not knowingly collect information from children under 13. If such data is inadvertently collected,
                we will promptly delete it.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>We do not rent or sell your personal information.</li>
                <li>
                  Data may be shared only under legal obligation, to protect rights, or during a business transfer (e.g.,
                  merger).
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SMS Consent</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                SMS opt-ins are recorded and never shared. Consent is required before sending any SMS communication.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Confidentiality and Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Restricted access to personal information.</li>
                <li>Compliance with applicable laws and security practices.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We may update this policy at any time. Changes will be posted on this page with the revised effective
                date.
              </p>
              <p className="mt-2">
                Please check back periodically to stay informed on how we protect your data.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
