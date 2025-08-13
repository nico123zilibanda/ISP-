"use client";

import { useState } from "react";

export default function SupportPage() {
  const [faqs] = useState([
    {
      question: "How do I connect to the Wi-Fi?",
      answer:
        "Once you purchase a package, select your network from the Wi-Fi list, enter the provided password, and you’re connected!",
    },
    {
      question: "What should I do if my internet is slow?",
      answer:
        "Check your device connection first. If the problem persists, restart your router or contact our support team.",
    },
    {
      question: "How do I check my balance?",
      answer:
        "Log in to your account and navigate to 'My Account' → 'Balance & Usage'.",
    },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Support & How-To</h1>
        <p className="text-gray-600 text-center mb-8">
          Find answers to common questions and follow our guides to get the most
          from your internet service.
        </p>

        {/* How-To Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Guides</h2>
          <ul className="space-y-3">
            <li className="bg-blue-50 border border-blue-200 rounded p-4 hover:bg-blue-100 cursor-pointer">
              How to connect your device to PasuaNet Wi-Fi
            </li>
            <li className="bg-blue-50 border border-blue-200 rounded p-4 hover:bg-blue-100 cursor-pointer">
              How to recharge your internet package
            </li>
            <li className="bg-blue-50 border border-blue-200 rounded p-4 hover:bg-blue-100 cursor-pointer">
              How to troubleshoot connection issues
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded p-4">
                <h3 className="font-medium text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-700">Still need help?</p>
          <a
            href="/contact"
            className="mt-3 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
