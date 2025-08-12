"use client";
import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">iVodaNet</h2>
          <p className="text-sm">
            Fast and reliable internet for homes, businesses, and campuses. Stay connected wherever you are.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/plans" className="hover:underline">Plans</Link></li>
            <li><Link href="/coverage" className="hover:underline">Coverage</Link></li>
            <li><Link href="/support" className="hover:underline">Support</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
                {/* Meet us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Meet us</h3>
          <p className="text-sm">
            iVoda Network Limited <br />
            1st floor,122 miti mirefu <br />
            Inyonga Mlele - Katavi <br />
            Tanzania
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Email: <a href="mailto:support@pasuanet.com" className="underline">support@ivodanet.com</a></p>
          <p>Phone: <a href="tel:+255741482286" className="underline">+255 741 482 286</a></p>
          <div className="flex space-x-4 mt-3">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H8v-2.88h2.4V9.41c0-2.38 1.42-3.69 3.6-3.69 1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78H16.8l-.38 2.88h-2.42v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.49 8.49 0 0 1-2.71 1.04 4.27 4.27 0 0 0-7.28 3.89A12.1 12.1 0 0 1 3.15 4.6a4.27 4.27 0 0 0 1.32 5.7 4.26 4.26 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.42 4.18 4.29 4.29 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.57 8.57 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.66 8.66 0 0 0 22.46 6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500">
      © {new Date().getFullYear()} iVodaNet wireless. All rights reserved.
      </div>
    </footer>
  );
}
