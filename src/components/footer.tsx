"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-10">
          {/* 1. Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-24 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Vizva Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <ul className="space-y-3 text-muted-foreground text-sm">
  <li>
    <Link href="mailto:info@vizvainc.com" className="flex items-start gap-2 hover:text-foreground transition-colors">
      <Mail className="w-4 h-4 mt-1" />
      <span>info@vizvainc.com</span>
    </Link>
  </li>

  <li>
    <Link href="tel:+919109009456" className="flex items-start gap-2 hover:text-foreground transition-colors">
      <Phone className="w-4 h-4 mt-1" />
      <span>+91 9109009456</span>
    </Link>
  </li>

  <li>
    <a
      href="https://maps.google.com/?q=3050+Post+Oak+Blvd+Houston+TX+77056"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-2 hover:text-foreground transition-colors"
    >
      <MapPin className="w-4 h-4 mt-1" />
      <span>
        USA: 3050 Post Oak Blvd<br />
        Houston, TX 77056
      </span>
    </a>
  </li>

  <li>
    <a
      href="https://maps.google.com/?q=Westage+Business+Bay+Ahmedabad+Gujarat+380051"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-2 hover:text-foreground transition-colors"
    >
      <MapPin className="w-4 h-4 mt-1" />
      <span>
        India: 16th floor, Wing A,<br />
        Westage Business Bay, Maharashtra,<br />
        Ahmedabad, Gujarat 380051
      </span>
    </a>
  </li>
</ul>


            <br/>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* 2. Company */}
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/about">Staffing</Link></li>
              <li><Link href="/services">Software Development & IT Consultation</Link></li>
              <li><Link href="/careers">Compliance Services</Link></li>
              <li><Link href="/contact">Accounting and Book Keeping</Link></li>
            </ul>
          </div>

          {/* 3. Resources */}
          <div>
            <h3 className="font-medium text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/blog">Information Technology</Link></li>
              <li><Link href="/faq">Bockchain</Link></li>
              <li><Link href="/terms">Banking</Link></li>
              <li><Link href="/privacy">Healthcare</Link></li>
              <li><Link href="/privacy">Logistics</Link></li>
            </ul>
          </div>

          {/* 4. Services */}
          <div>
            <h3 className="font-medium text-lg mb-4">Info</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/it-staffing">About Us</Link></li>
              <li><Link href="/product-dev">Careers</Link></li>
              <li><Link href="/consulting">Privacy Policy</Link></li>
           
            </ul>
          </div>

          {/* 5. Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Appointments</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Vizva Consultancy Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
