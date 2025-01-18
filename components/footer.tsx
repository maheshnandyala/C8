import Link from "next/link"
import { Instagram, LinkedinIcon as LinkedIn } from 'lucide-react'
import { XLogo } from "./x-logo"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative w-12 h-12">
              <Image
                src="/Logo white_.png"
                alt="Collbr8 Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400">
              Creating authentic connections between brands and diverse creators.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/our-services">Services</Link></li>
              <li><Link href="/our-talent">Talent</Link></li>
              <li><Link href="/news">News</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@collabr8.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/collabr8agency/"
                  className="hover:text-gray-300"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://x.com/collabr8agency"
                  className="hover:text-gray-300"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XLogo />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/collabr8agency"
                  className="hover:text-gray-300"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn className="h-6 w-6" />
                </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} COLLABR8. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
