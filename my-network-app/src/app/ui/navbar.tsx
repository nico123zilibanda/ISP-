"use client"
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center text-2xl font-bold">
            <Link href="/">MyISP</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/plans" className="hover:text-gray-200">Plans</Link>
            <Link href="/coverage" className="hover:text-gray-200">Coverage</Link>
            <Link href="/support" className="hover:text-gray-200">Support</Link>
            <Link href="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-400">Home</Link>
          <Link href="/plans" className="block px-4 py-2 hover:bg-blue-400">Plans</Link>
          <Link href="/coverage" className="block px-4 py-2 hover:bg-blue-400">Coverage</Link>
          <Link href="/support" className="block px-4 py-2 hover:bg-blue-400">Support</Link>
          <Link href="/login" className="block px-4 py-2 bg-white text-blue-600 hover:bg-gray-100">
            Login
          </Link>
        </div>
      )}
    </nav>

    </div>
  )
}
