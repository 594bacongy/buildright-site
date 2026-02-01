import Link from 'next/link'
import { Hammer, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Hammer className="w-6 h-6 text-primary-foreground" />
              </div>
              <span>BuildRight</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional construction services since 1999. Building your dreams with quality and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Renovations & Remodeling</li>
              <li>Custom Carpentry</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:info@buildrightconstruction.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@buildrightconstruction.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  123 Builder Lane<br />
                  Construction City, ST 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} BuildRight Construction. All rights reserved.</p>
          <p className="mt-2">Licensed, Bonded & Insured | License #123456</p>
        </div>
      </div>
    </footer>
  )
}
